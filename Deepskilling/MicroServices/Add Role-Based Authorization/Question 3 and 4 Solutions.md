# Question 3: Add Role-Based Authorization 

## Scenario: 
You want to allow only users with the "Admin" role to access certain endpoints. 

## Steps: 
1. Add roles to JWT claims. 
2. Use `[Authorize(Roles = "Admin")]`. 

## Solution Code: 

### Modify Token Generation (AuthController.cs): 
```csharp
var claims = new[] 
{ 
    new Claim(ClaimTypes.Name, username),
    new Claim(ClaimTypes.Role, "Admin") 
}; 
```

### AdminController.cs: 
```csharp
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

[ApiController] 
[Route("api/[controller]")] 
public class AdminController : ControllerBase 
{ 
    [HttpGet("dashboard")]
    [Authorize(Roles = "Admin")] 
    public IActionResult GetAdminDashboard() 
    { 
        return Ok("Welcome to the admin dashboard."); 
    } 
}
```

---

# Question 4: Validate JWT Token Expiry and Handle Unauthorized Access 

## Scenario: 
You want to handle expired or invalid tokens gracefully. 

## Steps: 
1. Configure JWT bearer events. 
2. Return custom messages for unauthorized access. 

## Solution Code: 

### Program.cs (Add to `AddJwtBearer`): 
```csharp
options.Events = new JwtBearerEvents 
{ 
    OnAuthenticationFailed = context => 
    { 
        if (context.Exception.GetType() == typeof(SecurityTokenExpiredException)) 
        { 
            context.Response.Headers.Add("Token-Expired", "true"); 
        } 
        return Task.CompletedTask; 
    } 
}; 
```
