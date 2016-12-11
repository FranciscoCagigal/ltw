.headers on

DROP TABLE IF EXISTS User;
DROP TABLE IF EXISTS Restaurant;

CREATE TABLE IF NOT EXISTS User(
name varchar(50) not null,
username varchar(20) PRIMARY KEY,
age number(2) not null,
email varchar(50) not null,
password varchar(20) not null,
imgSrc varchar(50) not null,
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
restaurant varchar(50) not null,
FOREIGN KEY (username) REFERENCES User(username),
FOREIGN KEY (restaurant) REFERENCES Restaurant(name) 
);

INSERT INTO User(name,username,age,email,password,imgSrc) VALUES('fui','fui',22,'fui','73405777e7815f65b16bee0d0513d182625d1d8e32207cf8ae15c93e44d843c4','images/usersProfile/none.png');
INSERT INTO Restaurant(name,location,total,votes,description,openS,closeS,openFS,closeFS,price,imgSrc,tipo,owner) VALUES('BestBuy','Porto',3,1,'Adoramos servi-los',12,24,12,24,15,'images/restsLogo/BestBuy.jpg','indiano','fui');
INSERT INTO Restaurant(name,location,total,votes,description,openS,closeS,openFS,closeFS,price,imgSrc,tipo,owner) VALUES('It43','Lisboa',2,1,'Venham comer de graça ou quase',18,4,0,0,10,'images/restsLogo/It43.jpg','brasileiro','fui');