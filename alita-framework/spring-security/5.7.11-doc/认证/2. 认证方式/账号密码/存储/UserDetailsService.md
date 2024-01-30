# UserDetailsService

`DaoAuthenticationProvider` 使用 `UserDetailsService` 来检索用户名、密码和其他属性，
以便使用用户名和密码进行身份验证。Spring Security提供了`UserDetailsService`的In-memory和JDBC实现。

您可以通过将自定义 `UserDetailsService` 作为 Bean 公开来定义自定义身份验证。
例如，假设 `CustomUserDetailsService` 实现了 `UserDetailsService`，下面的代码将自定义身份验证：

```java
@Bean
CustomUserDetailsService customUserDetailsService() {
	return new CustomUserDetailsService();
}
```