.headers on

DROP TABLE IF EXISTS User;
DROP TABLE IF EXISTS Restaurant;

CREATE TABLE IF NOT EXISTS User(
name varchar(50) not null,
username varchar(20) PRIMARY KEY,
age number(2) not null,
email varchar(50) not null,
password varchar(20) not null);

CREATE TABLE IF NOT EXISTS Restaurant(
name varchar(50)PRIMARY KEY,
rating number(1),
imgSrc varchar(50)
);

INSERT INTO Restaurant(name,rating,imgSrc) VALUES('BestBuy',3,'oi');
INSERT INTO Restaurant(name,rating,imgSrc) VALUES('It43',3,'oi');