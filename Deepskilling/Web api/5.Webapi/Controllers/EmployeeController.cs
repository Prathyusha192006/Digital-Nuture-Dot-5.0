using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using WebApi5.Models;
using Microsoft.AspNetCore.Authorization;

namespace WebApi5.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    // Include the role 'Admin' along with 'POC' in the Authorize attribute
    [Authorize(Roles = "Admin, POC")]
    public class EmployeeController : ControllerBase
    {
        private static List<Employee> Employees = new List<Employee>
        {
            new Employee { Id = 1, Name = "John Doe", Salary = 50000, Permanent = true }
        };

        [HttpGet]
        public ActionResult<IEnumerable<Employee>> Get()
        {
            return Ok(Employees);
        }
    }
}
