# Java 配置
Spring Framework 在 Spring 3.1 中添加了对 Java 配置的一般支持。
自 Spring Security 3.2 以来，Spring Security Java 配置支持使用户无需使用任何 XML 即可轻松配置 Spring Security。

如果您熟悉安全命名空间配置，就会发现它与安全 Java 配置支持之间有很多相似之处。

## 网络安全 Java 配置

第一步是创建 Spring Security Java 配置。
该配置创建了一个名为 `springSecurityFilterChain` 的 Servlet 过滤器，它负责应用程序内的所有安全性（保护应用程序 URL、验证提交的用户名和密码、重定向到登录表单等）。
下面是 Spring Security Java 配置的最基本示例：

```java
@EnableWebSecurity
public class WebSecurityConfig {

	@Bean
	public UserDetailsService userDetailsService() {
		InMemoryUserDetailsManager manager = new InMemoryUserDetailsManager();
		manager.createUser(User.withDefaultPasswordEncoder().username("user").password("password").roles("USER").build());
		return manager;
	}
}
```

该配置的功能其实并不多，但却非常强大。您可以在下面找到功能摘要：
- 要求对应用程序中的每个 URL 进行身份验证
- 为您生成登录表单
- 允许使用用户名用户和密码密码的用户通过基于表单的身份验证进行身份验证
- 允许用户注销
- 防止 CSRF 攻击
- 会话固定保护    
- 安全头集成
    - 用于安全请求的 HTTP 严格传输安全
    - X-Content-Type-Options 集成
    - 缓存控制（可由应用程序稍后覆盖，以允许缓存静态资源）
    - X-XSS 保护集成
    - X-Frame-Options 集成，有助于防止点击劫持
- 与以下 Servlet API 方法集成
    - HttpServletRequest#getRemoteUser() 
    - HttpServletRequest#getUserPrincipal()
    - HttpServletRequest#isUserInRole(java.lang.String)
    - HttpServletRequest#login(java.lang.String, java.lang.String)
    - HttpServletRequest#logout()

### AbstractSecurityWebApplicationInitializer

下一步是在 war 中注册 `springSecurityFilterChain`。
这可以在 Servlet 3.0+ 环境中使用 Spring 的 `WebApplicationInitializer` 支持在 Java 配置中完成。
毫不奇怪，Spring Security 提供了一个基类 `AbstractSecurityWebApplicationInitializer`，
它将确保 `springSecurityFilterChain` 为你注册。我们使用 `AbstractSecurityWebApplicationInitializer` 的方式有所不同，
这取决于我们是否已经使用了 Spring，或者 Spring Security 是否是应用程序中唯一的 Spring 组件。

- 不使用 Spring 的 `AbstractSecurityWebApplicationInitializer` 
- 使用 Spring MVC 的 `AbstractSecurityWebApplicationInitializer` 

### 不使用 Spring 的 AbstractSecurityWebApplicationInitializer

如果您没有使用 Spring 或 Spring MVC，则需要将 `WebSecurityConfig` 传递到超类中，以确保配置被接收。下面是一个示例：

```java
public class SecurityWebApplicationInitializer
	extends AbstractSecurityWebApplicationInitializer {

	public SecurityWebApplicationInitializer() {
		super(WebSecurityConfig.class);
	}
}
```

`SecurityWebApplicationInitializer` 将执行以下操作：
- 为应用程序中的每个 URL 自动注册 `springSecurityFilterChain` 过滤器
- 添加一个 `ContextLoaderListener`，用于加载 `WebSecurityConfig`。

### 使用 Spring MVC 的 AbstractSecurityWebApplicationInitializer

如果我们在应用程序的其他地方使用了 Spring，那么我们可能已经有一个 `WebApplicationInitializer` 正在加载我们的 Spring 配置。
如果我们使用以前的配置，就会出错。相反，我们应该使用现有的 `ApplicationContext` 注册 Spring Security。
例如，如果我们使用的是 Spring MVC，那么我们的 `SecurityWebApplicationInitializer` 将如下所示：

```java
public class SecurityWebApplicationInitializer
	extends AbstractSecurityWebApplicationInitializer {

}
```

这样，只需为应用程序中的每个 URL 注册 `springSecurityFilterChain` 过滤器即可。
之后，我们将确保在现有的 `ApplicationInitializer` 中加载 `WebSecurityConfig`。
例如，如果我们使用的是 Spring MVC，就会在 `getRootConfigClasses()` 中添加 `WebSecurityConfig`。

```java
public class MvcWebApplicationInitializer extends
		AbstractAnnotationConfigDispatcherServletInitializer {

	@Override
	protected Class<?>[] getRootConfigClasses() {
		return new Class[] { WebSecurityConfig.class };
	}

	// ... other overrides ...
}
```

## HttpSecurity

到目前为止，我们的 WebSecurityConfig 只包含如何验证用户的信息。
Spring Security 如何知道我们希望要求所有用户都通过身份验证？
Spring Security 如何知道我们要支持基于表单的身份验证？
实际上，我们在幕后调用了一个名为 `SecurityFilterChain` 的 Bean。它的默认实现如下：

```java
@Bean
public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
	http
		.authorizeRequests(authorize -> authorize
			.anyRequest().authenticated()
		)
		.formLogin(withDefaults())
		.httpBasic(withDefaults());
	return http.build();
}
```

上述默认配置：
- 确保向我们的应用程序提出的任何请求都需要对用户进行身份验证
- 允许用户使用基于表单的登录方式进行身份验证
- 允许用户通过 HTTP 基本身份验证进行身份验证

您会发现该配置与 XML 命名空间配置非常相似：

```xml
<http>
	<intercept-url pattern="/**" access="authenticated"/>
	<form-login />
	<http-basic />
</http
```

## Multiple HttpSecurity

我们可以配置多个 `HttpSecurity` 实例，就像我们可以配置多个 `<http>` 块一样。
关键是要注册多个 `SecurityFilterChain` `@Bean`。
例如，下面是一个针对以 `/api/` 开头的 URL 进行不同配置的示例。

```java
@EnableWebSecurity
public class MultiHttpSecurityConfig {
    //1
	@Bean                                                             
	public UserDetailsService userDetailsService() throws Exception {
		// ensure the passwords are encoded properly
		UserBuilder users = User.withDefaultPasswordEncoder();
		InMemoryUserDetailsManager manager = new InMemoryUserDetailsManager();
		manager.createUser(users.username("user").password("password").roles("USER").build());
		manager.createUser(users.username("admin").password("password").roles("USER","ADMIN").build());
		return manager;
	}

    //2,3
	@Bean
	@Order(1)                                                        
	public SecurityFilterChain apiFilterChain(HttpSecurity http) throws Exception {
		http
			.antMatcher("/api/**")                                   
			.authorizeHttpRequests(authorize -> authorize
				.anyRequest().hasRole("ADMIN")
			)
			.httpBasic(withDefaults());
		return http.build();
	}
    //4
	@Bean                                                            
	public SecurityFilterChain formLoginFilterChain(HttpSecurity http) throws Exception {
		http
			.authorizeHttpRequests(authorize -> authorize
				.anyRequest().authenticated()
			)
			.formLogin(withDefaults());
		return http.build();
	}
}
```

1. 正常配置身份验证
2. 注册一个包含 `@Order` 的 `SecurityFilterChain` 实例，以指定应首先考虑哪个 `SecurityFilterChain`。
3. `http.antMatcher` 规定，该 `HttpSecurity` 仅适用于以 /api/ 开头的 URL。
4. 注册另一个 `SecurityFilterChain` 实例。如果 URL 不是以 /api/ 开头，则将使用此配置。由于该配置的 `@Order` 值在 1 之后（无 `@Order` 默认为最后一个），因此被视为 `apiFilterChain` 之后的配置。

## 定制 DSL

您可以在 Spring Security 中提供自己的自定义 DSL。例如，你可能会有这样的东西：

```java
public class MyCustomDsl extends AbstractHttpConfigurer<MyCustomDsl, HttpSecurity> {
	private boolean flag;

	@Override
	public void init(HttpSecurity http) throws Exception {
		// any method that adds another configurer
		// must be done in the init method
		http.csrf().disable();
	}

	@Override
	public void configure(HttpSecurity http) throws Exception {
		ApplicationContext context = http.getSharedObject(ApplicationContext.class);

		// here we lookup from the ApplicationContext. You can also just create a new instance.
		MyFilter myFilter = context.getBean(MyFilter.class);
		myFilter.setFlag(flag);
		http.addFilterBefore(myFilter, UsernamePasswordAuthenticationFilter.class);
	}

	public MyCustomDsl flag(boolean value) {
		this.flag = value;
		return this;
	}

	public static MyCustomDsl customDsl() {
		return new MyCustomDsl();
	}
}
```

实际上，HttpSecurity.authorizeRequests() 等方法就是这样实现的。

然后就可以像这样使用自定义 DSL：

```java
@EnableWebSecurity
public class Config {
	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http
			.apply(customDsl())
				.flag(true)
				.and()
			...;
		return http.build();
	}
}
```

代码的调用顺序如下：
- 调用了 `Config`s configure 方法中的代码
- 调用`MyCustomDsl`s init 方法中的代码
- 调用`MyCustomDsl`s configure方法中的代码

如果需要，可以使用 SpringFactories 将 MyCustomDsl 默认添加到 HttpSecurity 中。
例如，你可以在类路径上创建一个名为 META-INF/spring.factories 的资源，内容如下：

```text
org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer = sample.MyCustomDsl
```

希望禁用默认设置的用户可以明确禁用。

```java
@EnableWebSecurity
public class Config {
	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http
			.apply(customDsl()).disable()
			...;
		return http.build();
	}
}
```

## 后处理配置对象

Spring Security 的 Java 配置不会公开其配置的每个对象的每个属性。
这为大多数用户简化了配置。毕竟，如果每个属性都公开，用户就可以使用标准的 bean 配置。

虽然有充分的理由不直接公开每个属性，但用户可能仍然需要更高级的配置选项。
为了解决这个问题，Spring Security 引入了 `ObjectPostProcessor` 概念，它可用于修改或替换 Java 配置创建的许多对象实例。
例如，如果要配置 `FilterSecurityInterceptor` 上的 `filterSecurityPublishAuthorizationSuccess` 属性，可以使用下面的方法：

```java
@Bean
public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
	http
		.authorizeRequests(authorize -> authorize
			.anyRequest().authenticated()
			.withObjectPostProcessor(new ObjectPostProcessor<FilterSecurityInterceptor>() {
				public <O extends FilterSecurityInterceptor> O postProcess(
						O fsi) {
					fsi.setPublishAuthorizationSuccess(true);
					return fsi;
				}
			})
		);
	return http.build();
}
```