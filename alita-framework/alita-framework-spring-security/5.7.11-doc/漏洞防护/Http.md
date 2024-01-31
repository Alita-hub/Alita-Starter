# Http

所有基于 HTTP 的通信都应使用 TLS 进行保护。

以下是帮助使用 HTTPS 的 Servlet 特定功能的详细信息。

## 重定向到 HTTPS

如果客户端使用 HTTP 而非 HTTPS 发出请求，可将 Spring Security 配置为重定向到 HTTPS。

例如，以下 Java 配置将把任何 HTTP 请求重定向到 HTTPS：

```java
@Configuration
@EnableWebSecurity
public class WebSecurityConfig {

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http
			// ...
			.requiresChannel(channel -> channel
				.anyRequest().requiresSecure()
			);
		return http.build();
	}
}
```

以下 XML 配置将把所有 HTTP 请求重定向到 HTTPS

```xml
<http>
	<intercept-url pattern="/**" access="ROLE_USER" requires-channel="https"/>
...
</http>
```