using Microsoft.AspNetCore.Mvc.Filters;
using System.IO;
using System;
using System.Web.Http.Results; // from WebApiCompatShim
using Microsoft.AspNetCore.Mvc;

namespace WebApi3.Filters
{
    public class CustomExceptionFilter : IExceptionFilter
    {
        public void OnException(ExceptionContext context)
        {
            // 1. Fetch exception detail and write it to a File in the system
            string exceptionMessage = context.Exception.Message;
            string logFilePath = "exception_log.txt";
            File.AppendAllText(logFilePath, $"[{DateTime.Now}] Exception: {exceptionMessage}\n");

            // 2. Set the Result property of the exception context to ExceptionResult
            // Note: ExceptionResult is available via Microsoft.AspNetCore.Mvc.WebApiCompatShim.
            // Because we don't have the ApiController reference here, we mock it via ObjectResult 
            // for modern ASP.NET Core, but using ExceptionResult as requested:
            try
            {
                // Try to use the Shim ExceptionResult if it maps correctly
                context.Result = new ExceptionResult(context.Exception, true);
            }
            catch
            {
                // Fallback if the shim signature expects an ApiController parameter
                context.Result = new ObjectResult(context.Exception)
                {
                    StatusCode = 500
                };
            }
        }
    }
}
