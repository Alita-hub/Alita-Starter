# 针对 Servlet 环境的跨站请求伪造 (CSRF)

## 使用 Spring Security CSRF 保护

使用 Spring Security 的 CSRF 保护的步骤如下：
- 使用正确的 HTTP 动词
- 配置 CSRF 保护
- 包含 CSRF 标记

### 使用正确的 HTTP 动词

防范 CSRF 攻击的第一步是确保网站使用正确的 HTTP 动词。Safe Methods Must be Idempotent》一文对此有详细介绍。

### 配置 CSRF 保护

下一步是在应用程序中配置 Spring Security 的 CSRF 保护。
Spring Security 的 CSRF 保护默认已启用，但你可能需要自定义配置。以下是几种常见的自定义配置。

#### 自定义 CsrfTokenRepository

默认情况下，Spring Security 使用 `HttpSessionCsrfTokenRepository` 将预期 CSRF 令牌存储在 `HttpSession` 中。
在某些情况下，用户可能希望配置自定义的 `CsrfTokenRepository`。例如，可能需要将 `CsrfToken` 持久保存在 cookie 中，
以支持基于 JavaScript 的应用程序。

默认情况下，`CookieCsrfTokenRepository` 会写入名为 `XSRF-TOKEN` 的 cookie，并从名为 `X-XSRF-TOKEN` 的头或 HTTP 参数 `_csrf` 中读取。
这些默认值来自 AngularJS

你可以使用下面的 XML 配置 `CookieCsrfTokenRepository`：

```xml
<http>
	<!-- ... -->
	<csrf token-repository-ref="tokenRepository"/>
</http>
<b:bean id="tokenRepository"
	class="org.springframework.security.web.csrf.CookieCsrfTokenRepository"
	p:cookieHttpOnly="false"/>
```

> 示例明确设置了 cookieHttpOnly=false。这是允许 JavaScript（即 AngularJS）读取 cookie 的必要条件。如果不需要直接用 JavaScript 读取 cookie，建议省略 cookieHttpOnly=false，以提高安全性。

您可以在 Java 配置中使用 `CookieCsrfTokenRepository` 进行配置：

```java
@EnableWebSecurity
public class WebSecurityConfig {

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http
			.csrf(csrf -> csrf
				.csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
			);
		return http.build();
	}
}
```

> 示例明确设置了 `cookieHttpOnly=false`。这是允许 JavaScript（即 AngularJS）读取 cookie 的必要条件。如果不需要直接用 JavaScript 读取 cookie，建议省略 `cookieHttpOnly=false`（使用 `new CookieCsrfTokenRepository()` 代替），以提高安全性。

#### 禁用 CSRF 保护

CSRF 保护默认已启用。不过，如果对您的应用程序有意义，禁用 CSRF 保护也很简单。

下面的 XML 配置将禁用 CSRF 保护。

```xml
<http>
	<!-- ... -->
	<csrf disabled="true"/>
</http>
```

下面的 Java 配置将禁用 CSRF 保护。

```java
@Configuration
@EnableWebSecurity
public class WebSecurityConfig {

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http
			.csrf(csrf -> csrf.disable());
		return http.build();
	}
}
```

### 包含 CSRF 令牌

为了使同步器令牌模式能够抵御 CSRF 攻击，我们必须在 HTTP 请求中包含实际的 CSRF 令牌。
这必须包含在请求的某个部分（如表单参数、HTTP 标头等）中，而不是由浏览器自动包含在 HTTP 请求中。

Spring Security 的 CsrfFilter 将 CsrfToken 作为名为 _csrf 的 HttpServletRequest 属性公开。
这意味着任何视图技术都可以访问 CsrfToken，以表单或元标记的形式公开预期标记。
幸运的是，下面列出的集成可以让表单和 ajax 请求中包含令牌变得更加容易。

#### 表格 URL 编码

要发布 HTML 表单，CSRF 标记必须作为隐藏输入包含在表单中。例如，渲染后的 HTML 可能如下所示

```html
<input type="hidden"
	name="_csrf"
	value="4bfd1575-3ad1-4d21-96c7-4ef2d9f86721"/>
```

接下来，我们将讨论在表单中将 CSRF 标记作为隐藏输入的各种方法。

##### 自动包含 CSRF 令牌

Spring Security 的 CSRF 支持通过 `CsrfRequestDataValueProcessor` 与 Spring 的 `RequestDataValueProcessor` 集成。
这意味着，如果您使用 Spring 的表单标记库、Thymeleaf 或其他与 `RequestDataValueProcessor` 集成的视图技术，
那么具有不安全 HTTP 方法（即 post）的表单将自动包含实际的 CSRF 标记。

##### csrfInput 标签

如果使用的是 JSP，则可以使用 Spring 的表单标记库。不过，如果不能这样做，也可以使用 csrfInput 标签轻松包含标记。

##### CsrfToken 请求属性

如果在请求中包含实际 CSRF 令牌的其他选项不起作用，可以利用 CsrfToken 作为名为 _csrf 的 HttpServletRequest 属性这一事实。

下面是一个通过 JSP 实现这一功能的示例：

```xml
<c:url var="logoutUrl" value="/logout"/>
<form action="${logoutUrl}"
	method="post">
<input type="submit"
	value="Log out" />
<input type="hidden"
	name="${_csrf.parameterName}"
	value="${_csrf.token}"/>
</form>
```

#### Ajax 和 JSON 请求

如果使用的是 JSON，则无法在 HTTP 参数中提交 CSRF 标记。相反，您可以在 HTTP 标头中提交令牌。

下面我们将讨论在基于 JavaScript 的应用程序中将 CSRF 标记作为 HTTP 请求标头的各种方法。

##### 自动纳入

Spring Security 可以轻松配置，将预期 CSRF 标记存储在 Cookie 中。通过在 Cookie 中存储预期 CSRF，AngularJS 等 JavaScript 框架会自动在 HTTP 请求头中包含实际的 CSRF 标记。

##### 元标记

在 cookie 中暴露 CSRF 的另一种模式是在元标记中包含 CSRF 标记。HTML 可以如下所示

```html
<html>
<head>
	<meta name="_csrf" content="4bfd1575-3ad1-4d21-96c7-4ef2d9f86721"/>
	<meta name="_csrf_header" content="X-CSRF-TOKEN"/>
	<!-- ... -->
</head>
<!-- ... -->
```

一旦元标记包含 CSRF 标记，JavaScript 代码就会读取元标记，并将 CSRF 标记作为页眉包含在内。如果使用的是 jQuery，可以通过以下方式实现：

```javascript
$(function () {
	var token = $("meta[name='_csrf']").attr("content");
	var header = $("meta[name='_csrf_header']").attr("content");
	$(document).ajaxSend(function(e, xhr, options) {
		xhr.setRequestHeader(header, token);
	});
});
```

###### csrfMeta 标签

如果您使用的是 JSP，将 CSRF 标记写入元标记的简单方法是利用 csrfMeta 标记。

###### CsrfToken 请求属性

如果在请求中包含实际 CSRF 标记的其他选项不起作用，可以利用 CsrfToken 作为名为 _csrf 的 HttpServletRequest 属性这一事实。
下面是一个通过 JSP 实现这一功能的示例：

```html
<html>
<head>
	<meta name="_csrf" content="${_csrf.token}"/>
	<!-- default header name is X-CSRF-TOKEN -->
	<meta name="_csrf_header" content="${_csrf.headerName}"/>
	<!-- ... -->
</head>
<!-- ... -->
```

## CSRF 注意事项

在实施 CSRF 攻击防护时，需要考虑一些特殊因素。本节将讨论与 servlet 环境有关的注意事项。有关更一般性的讨论，请参阅 CSRF 注意事项。

### 登录

必须要求登录请求使用 CSRF，以防止伪造登录尝试。Spring Security 的 servlet 支持开箱即用。

### 注销

为防止伪造注销尝试，注销请求必须使用 CSRF。如果启用了 CSRF 保护（默认），Spring Security 的注销过滤器将只处理 HTTP POST。
这将确保注销需要 CSRF 令牌，恶意用户无法强行注销用户。

最简单的方法是使用表单注销。如果你真的需要一个链接，可以使用 JavaScript 让链接执行 POST（即可能在隐藏表单上）。
对于禁用 JavaScript 的浏览器，可以选择让链接将用户带入一个注销确认页面，该页面将执行 POST。

如果您真的想在注销时使用 HTTP GET，也可以这样做，但请记住，一般不建议这样做。
例如，使用任何 HTTP 方法请求 URL /logout 时，下面的 Java 配置都将执行注销：

```java
@EnableWebSecurity
public class WebSecurityConfig {

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http
			.logout(logout -> logout
				.logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
			);
		return http.build();
	}
}
```

### CSRF 和会话超时

默认情况下，Spring Security 会将 CSRF 令牌存储在 HttpSession 中。这会导致会话过期，这意味着没有预期的 CSRF 令牌来进行验证。

我们已经讨论过会话超时的一般解决方案。本节将讨论 CSRF 超时的具体情况，因为它与 servlet 支持有关。

将预期 CSRF 令牌存储在 cookie 中的方法很简单。有关详情，请参阅自定义 CsrfTokenRepository 部分。

如果令牌过期，您可能希望通过指定自定义 `AccessDeniedHandler` 来定制处理方式。
自定义的 `AccessDeniedHandler` 可以任意处理 `InvalidCsrfTokenException`。
有关如何自定义 `AccessDeniedHandler` 的示例，请参阅所提供的 xml 和 Java 配置链接。

### Multipart (文件上传)

我们已经讨论过保护多部分请求（文件上传）免受 CSRF 攻击如何导致鸡和蛋的问题。
本节将讨论如何在 servlet 应用程序的 body 和 url 中放置 CSRF 标记。

#### 在正文中放置 CSRF 标记

我们已经讨论了在正文中放置 CSRF 标记的利弊。
在本节中，我们将讨论如何配置 Spring Security 从正文中读取 CSRF。

为了从正文中读取 CSRF 标记，需要在 Spring Security 过滤器之前指定 `MultipartFilter`。
在 Spring Security 过滤器之前指定 `MultipartFilter` 意味着调用 `MultipartFilter` 时没有授权，
这意味着任何人都可以在服务器上放置临时文件。不过，只有经过授权的用户才能提交由应用程序处理的文件。
一般来说，这是推荐的方法，因为临时文件上传对大多数服务器的影响可以忽略不计。

为确保 `MultipartFilter` 在使用 java 配置的 Spring Security 过滤器之前指定，用户可以覆盖 `beforeSpringSecurityFilterChain`，如下所示：

```java
public class SecurityApplicationInitializer extends AbstractSecurityWebApplicationInitializer {

	@Override
	protected void beforeSpringSecurityFilterChain(ServletContext servletContext) {
		insertFilters(servletContext, new MultipartFilter());
	}
}
```

为确保在使用 XML 配置的 Spring 安全过滤器之前指定 `MultipartFilter`，用户可以确保在 web.xml 中将 `MultipartFilter` 的 <filter-mapping> 元素放在 `springSecurityFilterChain` 之前，如下所示：

```xml
<filter>
	<filter-name>MultipartFilter</filter-name>
	<filter-class>org.springframework.web.multipart.support.MultipartFilter</filter-class>
</filter>
<filter>
	<filter-name>springSecurityFilterChain</filter-name>
	<filter-class>org.springframework.web.filter.DelegatingFilterProxy</filter-class>
</filter>
<filter-mapping>
	<filter-name>MultipartFilter</filter-name>
	<url-pattern>/*</url-pattern>
</filter-mapping>
<filter-mapping>
	<filter-name>springSecurityFilterChain</filter-name>
	<url-pattern>/*</url-pattern>
</filter-mapping>
```

#### 在 URL 中包含 CSRF 标记

如果不允许未经授权的用户上传临时文件，另一种方法是将 MultipartFilter 放在 Spring Security 过滤器之后，并将 CSRF 作为查询参数包含在表单的 action 属性中。
由于 CsrfToken 是作为 HttpServletRequest 请求属性公开的，因此我们可以使用它来创建一个包含 CSRF 标记的动作。
下面是一个 jsp 示例

```html
<form method="post"
	action="./upload?${_csrf.parameterName}=${_csrf.token}"
	enctype="multipart/form-data">
```



































































