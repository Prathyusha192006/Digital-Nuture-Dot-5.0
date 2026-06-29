USE CognizantSQL;
INSERT INTO Customers VALUES
(1,'Prathyusha','Hyderabad'),
(2,'Ben','Chennai'),
(3,'John','Mumbai'),
(4,'Emily','Delhi');
CREATE INDEX idx_customername
ON Customers(CustomerName);

SELECT *
FROM Customers
WHERE CustomerName='Prathyusha';
