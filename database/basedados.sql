.headers on

DROP TABLE IF EXISTS User;
DROP TABLE IF EXISTS Restaurant;

CREATE TABLE IF NOT EXISTS User(
name varchar(50) not null,
username varchar(20) PRIMARY KEY,
age number(2) not null,
email varchar(50) not null,
password varchar(255) not null,
imgSrc varchar(100) not null,
favRest number(4),
FOREIGN KEY (favRest) REFERENCES Restaurant(id)
);

CREATE TABLE IF NOT EXISTS Restaurant(
id integer PRIMARY KEY AUTOINCREMENT,
name varchar(50) UNIQUE not null,
location varchar(50) not null,
total number(5) not null,
votes number(5) not null,
description varchar(1000),
openS number(2) not null,
closeS number(2) not null,
openFS number(2) not null,
closeFS number(2) not null,
price number(3) not null,
lat number(10) not null,
lng number(10) not null,
imgSrc varchar(50) not null,
tipo varchar(50) not null,
owner varchar(50) not null,
FOREIGN KEY (owner) REFERENCES User(username) 
);

CREATE TABLE IF NOT EXISTS Vote(
id integer PRIMARY KEY AUTOINCREMENT,
username varchar(50) not null,
restaurant varchar(50) not null,
vote number(1) not null,
FOREIGN KEY (username) REFERENCES User(username),
FOREIGN KEY (restaurant) REFERENCES Restaurant(name) 
);

CREATE TABLE IF NOT EXISTS Comment(
id integer PRIMARY KEY AUTOINCREMENT,
username varchar(50) not null,
restaurant integer not null,
userComment varchar(1000) not null,
FOREIGN KEY (username) REFERENCES User(username),
FOREIGN KEY (restaurant) REFERENCES Restaurant(id)
);

CREATE TABLE IF NOT EXISTS Gallery(
id integer PRIMARY KEY AUTOINCREMENT,
restaurant integer not null,
imgSrc varchar(100) not null,
FOREIGN KEY (restaurant) REFERENCES Restaurant(id)
);

