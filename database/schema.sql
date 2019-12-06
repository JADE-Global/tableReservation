 DROP DATABASE IF EXISTS yelp;
 
 CREATE DATABASE yelp;
 use yelp;
  
  
  CREATE TABLE customer (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(20) NOT NULL,
    lastName VARCHAR(20) NOT NULL,
    email VARCHAR(30) NOT NULL,
    contactNo INT(10) NOT NULL,
    note VARCHAR(100) 
);
CREATE TABLE restaurant
(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  minCapacity INT NOT NULL,
  maxCapacity INT NOT NULL,
  PRIMARY KEY (id)
);

ALTER TABLE restaurant ADD openHr TIME;
ALTER TABLE restaurant ADD closingHr TIME;

CREATE TABLE reservation
(
  id INT NOT NULL AUTO_INCREMENT,
  customerName VARCHAR(50) NOT NULL,
  date_time DATETIME NOT NULL,
  restaurantId INT(11) NOT NULL,
  PRIMARY KEY (id)
);

time-windows
- time-window_id
- fk_table_id
- starttime
- endtime
CREATE TABLE time_slot
(
  id INT NOT NULL AUTO_INCREMENT,
 
 start_time  DATETIME NOT NULL,
  restaurantId INT(11) NOT NULL,
  PRIMARY KEY (id)
);