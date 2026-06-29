CREATE DATABASE IF NOT EXISTS CognizantSQL;
USE CognizantSQL;
CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY,
    EmployeeName VARCHAR(50),
    Department VARCHAR(50),
    Salary INT
);
INSERT INTO Employees VALUES
(1,'Sai','IT',50000),
(2,'Prathyusha','IT',60000),
(3,'Nandhu','HR',45000),
(4,'Joe','HR',55000),
(5,'Sam','Finance',70000);
SELECT
    EmployeeID,
    EmployeeName,
    Department,
    Salary,
    RANK() OVER (ORDER BY Salary DESC) AS SalaryRank,
    DENSE_RANK() OVER (ORDER BY Salary DESC) AS DenseRank,
    ROW_NUMBER() OVER (ORDER BY Salary DESC) AS RowNum
FROM Employees;
