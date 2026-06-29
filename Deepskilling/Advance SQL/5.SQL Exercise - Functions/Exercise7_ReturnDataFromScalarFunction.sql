DROP FUNCTION IF EXISTS GetAnnualSalary;

DELIMITER $$

CREATE FUNCTION GetAnnualSalary(
    monthly_salary DECIMAL(10,2)
)
RETURNS DECIMAL(10,2)
DETERMINISTIC
BEGIN
    RETURN monthly_salary * 12;
END $$

DELIMITER ;

SELECT
    EmployeeID,
    EmployeeName,
    Salary,
    GetAnnualSalary(Salary) AS AnnualSalary
FROM EmployeeDetails;
