# UserDetails

`UserDetails` 服务会返回 `UserDetailsService`。
`DaoAuthenticationProvider` 会验证 `UserDetails`，然后返回一个 `Authentication` ，
该身份验证的委托人就是配置的 `UserDetailsService` 返回的 `UserDetails`。