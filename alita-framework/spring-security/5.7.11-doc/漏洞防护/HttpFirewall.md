# HttpFirewall

重要的是，在根据您定义的模式进行测试时，要了解机制是什么，使用的 URL 值是什么。

Servlet 规范为 `HttpServletRequest` 定义了几个属性，这些属性可以通过 getter 方法访问，我们可能需要与这些属性进行匹配。
它们是 `contextPath`、`servletPath`、`pathInfo` 和 `queryString`。
Spring Security 只对确保应用程序内的路径安全感兴趣，因此`contextPath` 会被忽略。
遗憾的是，Servlet 规范并没有明确定义 `servletPath` 和 `pathInfo` 的值将包含特定请求 URI 的哪些内容。
例如，URL 的每个路径段都可能包含 RFC 2396 中定义的参数。规范》没有明确说明这些参数是否应包含在 `servletPath` 和 `pathInfo` 值中，而且不同的 servlet 容器的行为也各不相同。
当应用程序部署在不从这些值中剥离路径参数的容器中时，攻击者可能会将这些参数添加到请求的 URL 中，从而导致模式匹配意外成功或失败。
输入 URL 中还可能存在其他变化。例如，它可能包含路径遍历序列（如`/.../`）或多个正斜线（`//`），这也可能导致模式匹配失败。
有些容器会在执行 servlet 映射之前将这些内容归一化，但有些容器不会。为了防止出现类似问题，`FilterChainProxy` 使用 `HttpFirewall` 策略来检查和封装请求。
默认情况下，未规范化的请求会被自动拒绝，路径参数和重复的斜杠也会被移除，以便进行匹配。
因此，必须使用 `FilterChainProxy` 来管理安全过滤链。
请注意，`servletPath` 和 `pathInfo` 的值是由容器解码的，因此您的应用程序中不应有任何包含分号的有效路径，因为这些部分会因匹配目的而被移除。

如上所述，默认策略是使用 Ant 风格路径进行匹配，这可能是大多数用户的最佳选择。
该策略在 `AntPathRequestMatcher` 类中实现，该类使用 Spring 的 `AntPathMatcher` 对模式与 `servletPath` 和 `pathInfo` 的串联执行不区分大小写的匹配，而忽略 `queryString`。

如果出于某种原因需要更强大的匹配策略，可以使用正则表达式。该策略的实现就是 `RegexRequestMatcher`。

在实践中，我们建议您在服务层使用方法安全性来控制对应用程序的访问，而不要完全依赖于使用在网络应用程序层定义的安全性约束。
URL 会发生变化，很难考虑到应用程序可能支持的所有 URL 以及请求可能被操纵的方式。
你应该尽量限制自己使用一些简单易懂的蚂蚁路径。始终尝试使用 "默认拒绝 "方法，即最后定义一个万能通配符（/ 或），拒绝访问。

在服务层定义的安全性更强大，也更难被绕过，所以你应该始终利用 Spring Security 的方法安全选项。

`HttpFirewall` 还能通过拒绝 HTTP 响应头中的新行字符来防止 HTTP 响应分割。

默认情况下使用 `StrictHttpFirewall`。该实现会拒绝看似恶意的请求。如果它过于严格，无法满足你的需求，那么你可以自定义拒绝哪些类型的请求。不过，重要的是您要知道，这样做可能会使您的应用程序受到攻击。例如，如果您想利用 Spring MVC 的矩阵变量，可以使用以下配置：

```java
@Bean
public StrictHttpFirewall httpFirewall() {
    StrictHttpFirewall firewall = new StrictHttpFirewall();
    firewall.setAllowSemicolon(true);
    return firewall;
}
```

`StrictHttpFirewall` 提供了允许使用的有效 HTTP 方法列表，以防止跨站跟踪（XST）和 HTTP 协议篡改。
默认的有效方法包括 "DELETE"、"GET"、"HEAD"、"OPTIONS"、"PATCH"、"POST "和 "PUT"。
如果您的应用程序需要修改有效方法，可以配置自定义的 `StrictHttpFirewall` Bean。
例如，以下代码只允许使用 HTTP "GET "和 "POST "方法：

```java
@Bean
public StrictHttpFirewall httpFirewall() {
    StrictHttpFirewall firewall = new StrictHttpFirewall();
    firewall.setAllowedHttpMethods(Arrays.asList("GET", "POST"));
    return firewall;
}
```

> 如果使用 `new MockHttpServletRequest()`，目前创建的 HTTP 方法是空字符串""。这是一个无效的 HTTP 方法，会被 Spring Security 拒绝。你可以用 `new MockHttpServletRequest("GET", "")` 代替它来解决这个问题。请参见 SPR_16851，了解请求改进的问题。

如果必须允许任何 HTTP 方法（不推荐），可以使用 `StrictHttpFirewall.setUnsafeAllowAnyHttpMethod(true)`。这将完全禁用 HTTP 方法验证。

`StrictHttpFirewall` 还会检查头名称和值以及参数名称。它要求每个字符都有一个定义的码位，而且不能是控制字符。

可根据需要采用以下方法放宽或调整这一要求：
- `StrictHttpFirewall#setAllowedHeaderNames(Predicate)`
- `StrictHttpFirewall#setAllowedHeaderValues(Predicate)`
- `StrictHttpFirewall#setAllowedParameterNames(Predicate)`

> 此外，还可以使用 setAllowedParameterValues(Predicate) 控制参数值。

例如，要关闭这种检查，可以在 `StrictHttpFirewall` 中加入总是返回 true 的谓词，就像这样：

```java
@Bean
public StrictHttpFirewall httpFirewall() {
    StrictHttpFirewall firewall = new StrictHttpFirewall();
    firewall.setAllowedHeaderNames((header) -> true);
    firewall.setAllowedHeaderValues((header) -> true);
    firewall.setAllowedParameterNames((parameter) -> true);
    return firewall;
}
```

或者，您可能需要允许一个特定的值。

例如，iPhone Xʀ 使用的 `User-Agent` 包含一个不在 ISO-8859-1 字符集中的字符。因此，某些应用程序服务器会将该值解析为两个独立的字符，后者是一个未定义的字符。

您可以使用 `setAllowedHeaderValues` 方法来解决这个问题，如下所示：

```java
@Bean
public StrictHttpFirewall httpFirewall() {
    StrictHttpFirewall firewall = new StrictHttpFirewall();
    Pattern allowed = Pattern.compile("[\\p{IsAssigned}&&[^\\p{IsControl}]]*");
    Pattern userAgent = ...;
    firewall.setAllowedHeaderValues((header) -> allowed.matcher(header).matches() || userAgent.matcher(header).matches());
    return firewall;
}
```

对于标头值，可以考虑在验证时将其解析为 UTF-8 格式，如图所示：

```java
firewall.setAllowedHeaderValues((header) -> {
    String parsed = new String(header.getBytes(ISO_8859_1), UTF_8);
    return allowed.matcher(parsed).matches();
});
```

1. 当浏览器不支持 cookie 时，你可能会看到 jsessionid 参数被添加到 URL 的分号后。不过，RFC 允许在 URL 的任何路径段中出现这些参数。
2. 一旦请求离开 FilterChainProxy，原始值就会返回，因此应用程序仍然可以使用。
3. 例如，原始请求路径 /secure;hack=1/somefile.html;hack=2，将返回为 /secure/somefile.html。











