 DROP DATABASE IF EXISTS yelp;
 
 CREATE DATABASE yelp;
 use yelp;
  
  CREATE TABLE restaurant (
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      minCapacity INT NOT NULL,
      maxCapacity INT NOT NULL
  );
  CREATE TABLE customer (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(20) NOT NULL,
    lastName VARCHAR(20) NOT NULL,
    email VARCHAR(30) NOT NULL,
    contactNo INT(10) NOT NULL,
    note VARCHAR(100) 
);

  CREATE TABLE reservation (
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      date DATETIME NOT NULL,
      restaurantId INT, 
      customerName VARCHAR(30),
          foreign key (restaurantId) references restaurant(id),
  );

