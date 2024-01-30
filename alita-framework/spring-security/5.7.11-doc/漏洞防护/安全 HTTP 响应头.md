# 安全 HTTP 响应头

安全 HTTP 响应头可用于提高网络应用程序的安全性。本节专门介绍基于 servlet 的安全 HTTP 响应头支持。

## 默认安全标头

Spring Security 提供了一组默认的安全 HTTP 响应头，以提供安全默认值。
虽然这些标头中的每一个都被认为是最佳实践，但需要注意的是，并非所有客户端都会使用这些标头，因此我们鼓励进行额外的测试。

您可以自定义特定的标头。例如，假设您需要默认值，但希望为 X-Frame-Options 指定 `SAMEORIGIN`。

您可以通过以下配置轻松做到这一点：

```java
@EnableWebSecurity
public class WebSecurityConfig {

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http
			// ...
			.headers(headers -> headers
				.frameOptions(frameOptions -> frameOptions
					.sameOrigin()
				)
			);
		return http.build();
	}
}
```

如果不想添加默认设置，并希望明确控制应使用的内容，可以禁用默认设置。下面提供了一个示例：

如果您使用的是 Spring Security 的配置，以下内容将只添加缓存控制。

```java
@EnableWebSecurity
public class WebSecurityConfig {

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http
			// ...
			.headers(headers -> headers
				// do not use any default headers unless explicitly listed
				.defaultsDisabled()
				.cacheControl(withDefaults())
			);
		return http.build();
	}
}
```

如有必要，可以通过以下配置禁用所有 HTTP 安全响应标头：

```java
@EnableWebSecurity
public class WebSecurityConfig {

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http
			// ...
			.headers(headers -> headers.disable());
		return http.build();
	}
}
```

## 缓存控制

Spring Security 默认包含缓存控制头。

不过，如果您确实想要缓存特定的响应，您的应用程序可以选择性地调用 HttpServletResponse.setHeader(String,String) 来覆盖 Spring Security 设置的标头。这对于确保正确缓存 CSS、JavaScript 和图片等内容非常有用。

使用 Spring Web MVC 时，这通常是在配置中完成的。有关操作方法的详细信息，请参阅 Spring Reference 文档中的静态资源部分。

如有必要，还可以禁用 Spring Security 的 HTTP 响应头缓存控制。

```java
@Configuration
@EnableWebSecurity
public class WebSecurityConfig {

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http
			// ...
			.headers(headers -> headers
				.cacheControl(cache -> cache.disable())
			);
		return http.build();
	}
}
```

## 内容类型选项

Spring Security 默认包含 Content-Type 标头。不过，你可以使用

```java
@Configuration
@EnableWebSecurity
public class WebSecurityConfig {

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http
			// ...
			.headers(headers -> headers
				.contentTypeOptions(contentTypeOptions -> contentTypeOptions.disable())
			);
		return http.build();
	}
}
```

## HTTP 严格传输安全（HSTS）

Spring Security 默认提供严格传输安全标头。不过，您可以显式地自定义结果。
例如，下面就是一个显式提供 HSTS 的示例：

```java
@EnableWebSecurity
public class WebSecurityConfig {

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http
			// ...
			.headers(headers -> headers
				.httpStrictTransportSecurity(hsts -> hsts
					.includeSubDomains(true)
					.preload(true)
					.maxAgeInSeconds(31536000)
				)
			);
		return http.build();
	}
}
```

## HTTP 公钥引脚 (HPKP)

出于被动性原因，Spring Security 为 HTTP 公钥销号提供了 servlet 支持，但不再推荐使用。

你可以通过以下配置启用 HPKP 标头：

```java
@EnableWebSecurity
public class WebSecurityConfig {

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http
			// ...
			.headers(headers -> headers
				.httpPublicKeyPinning(hpkp -> hpkp
					.includeSubDomains(true)
					.reportUri("https://example.net/pkp-report")
					.addSha256Pins("d6qzRu9zOECb90Uez27xWltNsj0e1Md7GkYYkVoZWmM=", "E9CZ9INDbd+2eRQozYqqbQ2yXLVKB9+xcprMF+44U1g=")
				)
			);
		return http.build();
	}
}
```

## X-Frame-Options

默认情况下，Spring Security 会使用 X-Frame-Options 禁用 iframe 内的呈现。

你可以使用以下方法自定义框架选项，以便在配置中使用相同的原点：

```java
@EnableWebSecurity
public class WebSecurityConfig {

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http
			// ...
			.headers(headers -> headers
				.frameOptions(frameOptions -> frameOptions
					.sameOrigin()
				)
			);
		return http.build();
	}
}
```

## X-XSS 保护

默认情况下，Spring Security 会指示浏览器使用 <<headers-xss-protection,X-XSS-Protection 标头> 阻止反射 XSS 攻击。不过，你可以更改这一默认值。
例如，以下配置指定 Spring Security 不再指示浏览器阻止内容：

```java
@EnableWebSecurity
public class WebSecurityConfig {

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http
			// ...
			.headers(headers -> headers
				.xssProtection(xss -> xss
					.block(false)
				)
			);
		return http.build();
	}
}
```

## 内容安全政策 (CSP)

Spring Security 默认不添加内容安全策略，因为在没有应用程序上下文的情况下，无法知道合理的默认值。
网络应用程序作者必须声明要对受保护资源执行和/或监控的安全策略。

例如，给出以下安全策略：

```http request
Content-Security-Policy: script-src 'self' https://trustedscripts.example.com; object-src https://trustedplugins.example.com; report-uri /csp-report-endpoint/
```

您可以启用 CSP 标头，如下图所示：

```java
@EnableWebSecurity
public class WebSecurityConfig {

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http
			// ...
			.headers(headers -> headers
				.contentSecurityPolicy(csp -> csp
					.policyDirectives("script-src 'self' https://trustedscripts.example.com; object-src https://trustedplugins.example.com; report-uri /csp-report-endpoint/")
				)
			);
		return http.build();
	}
}
```

要启用 CSP 仅报告标头，请提供以下配置：

```java
@EnableWebSecurity
public class WebSecurityConfig {

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http
			// ...
			.headers(headers -> headers
				.contentSecurityPolicy(csp -> csp
					.policyDirectives("script-src 'self' https://trustedscripts.example.com; object-src https://trustedplugins.example.com; report-uri /csp-report-endpoint/")
					.reportOnly()
				)
			);
		return http.build();
	}
}
```

## Referrer 政策

Spring Security 默认不添加 Referrer 策略标头。您可以使用下图所示的配置启用 Referrer 策略标头：

```java
@EnableWebSecurity
public class WebSecurityConfig {

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http
			// ...
			.headers(headers -> headers
				.referrerPolicy(referrer -> referrer
					.policy(ReferrerPolicy.SAME_ORIGIN)
				)
			);
		return http.build();
	}
}
```

## 特色政策

Spring Security 默认不添加特性策略标头。以下是特性策略标头：

```text
Feature-Policy: geolocation 'self'
```

可以使用下图所示的配置启用功能策略标头：

```java
@EnableWebSecurity
public class WebSecurityConfig {

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http
			// ...
			.headers(headers -> headers
				.featurePolicy("geolocation 'self'")
			);
		return http.build();
	}
}
```

## 权限政策

Spring Security 默认不添加权限策略标头。以下是 `Permissions-Policy` 头信息：

```text
Permissions-Policy: geolocation=(self)
```

可以使用下图所示的配置启用权限策略标头：

```java
@EnableWebSecurity
public class WebSecurityConfig {

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http
			// ...
			.headers(headers -> headers
				.permissionsPolicy(permissions -> permissions
					.policy("geolocation=(self)")
				)
			);
		return http.build();
	}
}
```

## 清除网站数据

Spring Security 默认不添加 Clear-Site-Data 头信息。以下是 Clear-Site-Data 头信息：

```text
Clear-Site-Data: "cache", "cookies"
```

可以通过以下配置在注销时发送：

```java
@EnableWebSecurity
public class WebSecurityConfig {

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http
			// ...
			.logout((logout) -> logout
                .addLogoutHandler(new HeaderWriterLogoutHandler(new ClearSiteDataHeaderWriter(CACHE, COOKIES)))
			);
		return http.build();
	}
}
```

## Cross-Origin 政策

Spring Security 提供内置支持，可添加一些跨源策略标头，这些标头是

```text
Cross-Origin-Opener-Policy
Cross-Origin-Embedder-Policy
Cross-Origin-Resource-Policy
```

Spring Security 默认不添加跨源策略标头。可以通过以下配置添加标头：

```java
@EnableWebSecurity
public class WebSecurityConfig {

    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http) {
        http.headers((headers) -> headers
                .crossOriginOpenerPolicy(CrossOriginOpenerPolicy.SAME_ORIGIN)
                .crossOriginEmbedderPolicy(CrossOriginEmbedderPolicy.REQUIRE_CORP)
                .crossOriginResourcePolicy(CrossOriginResourcePolicy.SAME_ORIGIN)));
        return http.build();
    }
}
```

该配置将使用所提供的值写入标头：

```text
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
Cross-Origin-Resource-Policy: same-origin
```

## 定制 Headers

Spring Security 拥有多种机制，可以方便地将更常见的安全标头添加到应用程序中。不过，它也提供了钩子来添加自定义头信息。

### 静态 Headers

有时，您可能希望在应用程序中注入不支持开箱即用的自定义安全标头。例如，给出以下自定义安全标头：

```text
X-Custom-Security-Header: header-value
```

可以使用以下配置将标头添加到响应中：

```java
@EnableWebSecurity
public class WebSecurityConfig {

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http
			// ...
			.headers(headers -> headers
				.addHeaderWriter(new StaticHeadersWriter("X-Custom-Security-Header","header-value"))
			);
		return http.build();
	}
}
```

### Headers 撰写器

当命名空间或 Java 配置不支持您想要的头时，您可以创建一个自定义 HeadersWriter 实例，甚至提供一个 HeadersWriter 的自定义实现。

让我们来看一个使用 XFrameOptionsHeaderWriter 自定义实例的示例。如果要显式配置 X-Frame-Options，可以使用以下配置：

```java
@EnableWebSecurity
public class WebSecurityConfig {

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http
			// ...
			.headers(headers -> headers
				.addHeaderWriter(new XFrameOptionsHeaderWriter(XFrameOptionsMode.SAMEORIGIN))
			);
		return http.build();
	}
}
```

### DelegatingRequestMatcherHeaderWriter

有时，您可能只想为某些请求写一个标头。例如，您可能只想保护登录页面不被诬陷。
为此，您可以使用 `DelegatingRequestMatcherHeaderWriter`。

下面是在 Java 配置中使用 `DelegatingRequestMatcherHeaderWriter` 的示例：

```java
@EnableWebSecurity
public class WebSecurityConfig {

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		RequestMatcher matcher = new AntPathRequestMatcher("/login");
		DelegatingRequestMatcherHeaderWriter headerWriter =
			new DelegatingRequestMatcherHeaderWriter(matcher,new XFrameOptionsHeaderWriter());
		http
			// ...
			.headers(headers -> headers
				.frameOptions(frameOptions -> frameOptions.disable())
				.addHeaderWriter(headerWriter)
			);
		return http.build();
	}
}
```

































