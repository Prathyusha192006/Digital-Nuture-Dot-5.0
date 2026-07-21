using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using WebApi3.Models;
using WebApi3.Filters;
using System;
using Microsoft.AspNetCore.Authorization;

namespace WebApi3.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [CustomAuthFilter]
    [ServiceFilter(typeof(CustomExceptionFilter))] // Register via DI in Startup or use directly
    public class EmployeeController : ControllerBase
    {
        // Private method to return Standard Employee List
        private List<Employee> GetStandardEmployeeList()
        {
            return new List<Employee>
            {
                new Employee
                {
                    Id = 1,
                    Name = "John Doe",
                    Salary = 50000,
                    Permanent = true,
                    Department = new Department { Id = 101, Name = "Engineering" },
                    Skills = new List<Skill> { new Skill { Id = 1, Name = "C#" } },
                    DateOfBirth = new DateTime(1990, 1, 1)
                }
            };
        }

        // GET: api/<EmployeeController>
        [HttpGet]
        [AllowAnonymous] // Use AllowAnonymous attribute as requested
        [ProducesResponseType(typeof(List<Employee>), 200)]
        [ProducesResponseType(500)]
        public ActionResult<List<Employee>> GetStandrad()
        {
            // Requirement: Throw an exception in GET action method to test CustomExceptionFilter
            bool forceException = true;
            if (forceException)
            {
                throw new Exception("Custom exception thrown from Employee GET method for testing.");
            }

            // Return List of Employee class object
            var employees = GetStandardEmployeeList();
            return Ok(employees);
        }

        // POST api/<EmployeeController>
        [HttpPost]
        public void Post([FromBody] Employee employee) // Explain usage of FromBody attribute
        {
            // Reads the model object from request body instead of query string
        }

        // PUT api/<EmployeeController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Employee employee)
        {
        }
    }
}
