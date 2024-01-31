# DaoAuthenticationProvider

`DaoAuthenticationProvider` 是一个 `AuthenticationProvider` 实现，它利用用户详情服务 `UserDetailsService` 和密码编码器`PasswordEncoder`来验证用户名和密码。

让我们来看看 `DaoAuthenticationProvider` 在 Spring Security 中是如何工作的。下图详细解释了读取用户名和密码中的 `AuthenticationManager` 是如何工作的。

![avatar](./img/daoauthenticationprovider.png)

1. 读取用户名和密码的身份验证 `Filter` 会将 `UsernamePasswordAuthenticationToken` 传递给由 `ProviderManager` 实现的 `AuthenticationManager`。
2. `ProviderManager` 被配置为使用 `DaoAuthenticationProvider` 类型的 `AuthenticationProvider`。
3. `DaoAuthenticationProvider` 会从 `UserDetailsService` 中查找 `UserDetails`。
4. 然后，`DaoAuthenticationProvider` 使用密码编码器 `PasswordEncoder` 对上一步返回的用户详情 `UserDetails` 进行密码验证。
5. 身份验证成功后，返回的`Authentication`类型为用户名密码身份验证令牌`UsernamePasswordAuthenticationToken`，委托人为已配置的 `UserDetailsService` 返回的 `UserDetails`。
   最终，返回的`UsernamePasswordAuthenticationToken`将由身份验证过滤器设置在 `SecurityContextHolder` 上。