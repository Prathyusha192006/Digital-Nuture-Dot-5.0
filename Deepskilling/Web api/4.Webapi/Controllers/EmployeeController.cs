using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using WebApi4.Models;
using System.Linq;
using System;

namespace WebApi4.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        // 2. Static/hardcoded list of Employees
        private static List<Employee> Employees = new List<Employee>
        {
            new Employee { Id = 1, Name = "John Doe", Salary = 50000, Permanent = true },
            new Employee { Id = 2, Name = "Jane Smith", Salary = 65000, Permanent = true },
            new Employee { Id = 3, Name = "Bob Johnson", Salary = 45000, Permanent = false }
        };

        [HttpGet]
        public ActionResult<IEnumerable<Employee>> Get()
        {
            return Ok(Employees);
        }

        // PUT api/<EmployeeController>/5
        [HttpPut("{id}")]
        public ActionResult<Employee> Put(int id, [FromBody] Employee input)
        {
            // Requirement: Check if the id value is lesser than or equal to 0
            if (id <= 0)
            {
                return BadRequest("Invalid employee id");
            }

            // Requirement: If the value is greater than 0 but not available in the list
            var existingEmployee = Employees.FirstOrDefault(e => e.Id == id);
            if (existingEmployee == null)
            {
                return BadRequest("Invalid employee id");
            }

            // Requirement: If the id value is valid, use the JSON data from the input body and update the hardcoded list
            existingEmployee.Name = input.Name ?? existingEmployee.Name;
            existingEmployee.Salary = input.Salary != 0 ? input.Salary : existingEmployee.Salary;
            existingEmployee.Permanent = input.Permanent;
            if (input.Department != null) existingEmployee.Department = input.Department;
            if (input.Skills != null) existingEmployee.Skills = input.Skills;
            if (input.DateOfBirth != default) existingEmployee.DateOfBirth = input.DateOfBirth;

            // Requirement: Filter the employee list data for the input id and return that as the output
            var updatedEmployee = Employees.FirstOrDefault(e => e.Id == id);
            
            return Ok(updatedEmployee);
        }
    }
}
