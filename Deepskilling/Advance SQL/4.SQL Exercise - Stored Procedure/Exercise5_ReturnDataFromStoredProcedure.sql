DROP PROCEDURE IF EXISTS GetEmployeeById;

DELIMITER $$

CREATE PROCEDURE GetEmployeeById(
    IN emp_id INT
)
BEGIN
    SELECT *
    FROM EmployeeDetails
    WHERE EmployeeID = emp_id;
END $$

DELIMITER ;

CALL GetEmployeeById(1);
