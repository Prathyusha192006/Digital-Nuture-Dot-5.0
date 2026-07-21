# Question 2: Secure an API Endpoint Using JWT

## Scenario: 
You want to restrict access to a sensitive endpoint using JWT authentication. 

## Steps: 
1. Add `[Authorize]` to a controller. 
2. Test access with and without a valid token. 

## Solution Code: 

### SecureController.cs: 
```csharp
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

[ApiController] 
[Route("api/[controller]")] 
public class SecureController : ControllerBase 
{ 
    [HttpGet("data")]     
    [Authorize] 
    public IActionResult GetSecureData() 
    { 
        return Ok("This is protected data."); 
    } 
} 
```
