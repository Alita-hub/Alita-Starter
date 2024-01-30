# In-Memory Authentication

Spring Security 的 `InMemoryUserDetailsManager` 实现了 `UserDetailsService`，为存储在内存中的基于用户名/密码的身份验证提供支持。
`InMemoryUserDetailsManager` 通过实现 `UserDetailsManager` 接口来管理 `UserDetails`。
Spring Security 在配置为接受用户名/密码进行身份验证时，会使用基于 `UserDetails` 的身份验证。

在本示例中，我们使用 Spring Boot CLI 对密码进行编码，得到的编码密码为 {bcrypt}$2a$10$GRLdNijSQMUvl/au9ofL.eDwmoohzzS7.rmNSJZ.0FxO/BTk76klW。

```java
@Bean
public UserDetailsService users() {
	UserDetails user = User.builder()
		.username("user")
		.password("{bcrypt}$2a$10$GRLdNijSQMUvl/au9ofL.eDwmoohzzS7.rmNSJZ.0FxO/BTk76klW")
		.roles("USER")
		.build();
	UserDetails admin = User.builder()
		.username("admin")
		.password("{bcrypt}$2a$10$GRLdNijSQMUvl/au9ofL.eDwmoohzzS7.rmNSJZ.0FxO/BTk76klW")
		.roles("USER", "ADMIN")
		.build();
	return new InMemoryUserDetailsManager(user, admin);
}
```

上述样本以安全格式存储密码，但在上手体验方面还有很多不足。

在下面的示例中，我们利用 User.withDefaultPasswordEncoder 来确保存储在内存中的密码受到保护。
但是，这并不能防止通过反编译源代码获取密码。因此，`User.withDefaultPasswordEncoder` 只能用于 "入门"，不能用于生产。

```java
@Bean
public UserDetailsService users() {
	// The builder will ensure the passwords are encoded before saving in memory
	UserBuilder users = User.withDefaultPasswordEncoder();
	UserDetails user = users
		.username("user")
		.password("password")
		.roles("USER")
		.build();
	UserDetails admin = users
		.username("admin")
		.password("password")
		.roles("USER", "ADMIN")
		.build();
	return new InMemoryUserDetailsManager(user, admin);
}
```

在基于 XML 的配置中，没有使用 `User.withDefaultPasswordEncoder` 的简单方法。对于演示或刚入门的用户，可以选择在密码前加上 {noop} 以表示不使用编码。

```xml
<user-service>
	<user name="user"
		password="{noop}password"
		authorities="ROLE_USER" />
	<user name="admin"
		password="{noop}password"
		authorities="ROLE_USER,ROLE_ADMIN" />
</user-service>
```





