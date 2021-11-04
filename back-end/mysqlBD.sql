CREATE DATABASE IF NOT EXISTS `heroku_5eb1b5a5878e473`;

DROP TABLE IF EXISTS `heroku_5eb1b5a5878e473`.`Climates`;
DROP TABLE IF EXISTS `heroku_5eb1b5a5878e473`.`Dates`;
DROP TABLE IF EXISTS `heroku_5eb1b5a5878e473`.`Districts`;

CREATE TABLE IF NOT EXISTS heroku_5eb1b5a5878e473.Districts (
  district_id INT PRIMARY KEY AUTO_INCREMENT,
  district_name VARCHAR(50) NOT NULL,
  state VARCHAR(2) NOT NULL
);

INSERT INTO heroku_5eb1b5a5878e473.Districts(district_name, state) VALUES
  ('Copacabana', 'RJ'),
  ('Leblon', 'RJ'),
  ('Ipanema', 'RJ'),
  ('Barra da Tijuca', 'RJ');

CREATE TABLE IF NOT EXISTS heroku_5eb1b5a5878e473.Dates (
  date_id INT PRIMARY KEY AUTO_INCREMENT,
  date_name VARCHAR(5) NOT NULL,
  district_id INT NOT NULL,
  FOREIGN KEY (district_id) REFERENCES Districts(district_id)
);

INSERT INTO heroku_5eb1b5a5878e473.Dates(date_name, district_id) VALUES
  ('25/11',
  (SELECT district_id FROM heroku_5eb1b5a5878e473.Districts WHERE district_name = 'Copacabana')),
  ('26/11',
  (SELECT district_id FROM heroku_5eb1b5a5878e473.Districts WHERE district_name = 'Leblon')),
  ('27/11',
  (SELECT district_id FROM heroku_5eb1b5a5878e473.Districts WHERE district_name = 'Ipanema')),
  ('20/11',
  (SELECT district_id FROM heroku_5eb1b5a5878e473.Districts WHERE district_name = 'Barra da Tijuca')),
  ('21/11',
  (SELECT district_id FROM heroku_5eb1b5a5878e473.Districts WHERE district_name = 'Copacabana')),
  ('22/11',
  (SELECT district_id FROM heroku_5eb1b5a5878e473.Districts WHERE district_name = 'Leblon')),
  ('23/11',
  (SELECT district_id FROM heroku_5eb1b5a5878e473.Districts WHERE district_name = 'Ipanema')),
  ('24/11',
  (SELECT district_id FROM heroku_5eb1b5a5878e473.Districts WHERE district_name = 'Barra da Tijuca'));

CREATE TABLE IF NOT EXISTS heroku_5eb1b5a5878e473.Climates (
  climate_id INT PRIMARY KEY AUTO_INCREMENT,
  climate_hour INT NOT NULL,
  climate_rain FLOAT NOT NULL,
  date_id INT NOT NULL,
  FOREIGN KEY (date_id) REFERENCES Dates(date_id)
);

INSERT INTO heroku_5eb1b5a5878e473.Climates(climate_hour, climate_rain, date_id) VALUES
  (0, 0.1, (SELECT date_id FROM heroku_5eb1b5a5878e473.Dates WHERE date_name = '25/11')),
  (3, 5.2, (SELECT date_id FROM heroku_5eb1b5a5878e473.Dates WHERE date_name = '25/11')),
  (6, 7.8, (SELECT date_id FROM heroku_5eb1b5a5878e473.Dates WHERE date_name = '25/11')),
  (9, 12.9, (SELECT date_id FROM heroku_5eb1b5a5878e473.Dates WHERE date_name = '25/11')),
  (12, 18.7, (SELECT date_id FROM heroku_5eb1b5a5878e473.Dates WHERE date_name = '25/11')),
  (15, 38.1, (SELECT date_id FROM heroku_5eb1b5a5878e473.Dates WHERE date_name = '25/11')),
  (18, 2.3, (SELECT date_id FROM heroku_5eb1b5a5878e473.Dates WHERE date_name = '25/11')),
  (21, 1, (SELECT date_id FROM heroku_5eb1b5a5878e473.Dates WHERE date_name = '25/11')),
	(0, 0.1,(SELECT date_id FROM heroku_5eb1b5a5878e473.Dates WHERE date_name = '26/11')),
  (3, 5.2,(SELECT date_id FROM heroku_5eb1b5a5878e473.Dates WHERE date_name = '26/11')),
  (6, 7.8,(SELECT date_id FROM heroku_5eb1b5a5878e473.Dates WHERE date_name = '26/11')),
  (9, 12.9,(SELECT date_id FROM heroku_5eb1b5a5878e473.Dates WHERE date_name = '26/11')),
  (12, 18.7,(SELECT date_id FROM heroku_5eb1b5a5878e473.Dates WHERE date_name = '26/11')),
  (15, 38.1,(SELECT date_id FROM heroku_5eb1b5a5878e473.Dates WHERE date_name = '26/11')),
  (18,2.3,(SELECT date_id FROM heroku_5eb1b5a5878e473.Dates WHERE date_name = '26/11')),
  (21, 1,(SELECT date_id FROM heroku_5eb1b5a5878e473.Dates WHERE date_name = '26/11')),
  (0, 0.1,(SELECT date_id FROM heroku_5eb1b5a5878e473.Dates WHERE date_name = '27/11')),
  (3, 5.2,(SELECT date_id FROM heroku_5eb1b5a5878e473.Dates WHERE date_name = '27/11')),
  (6, 7.8,(SELECT date_id FROM heroku_5eb1b5a5878e473.Dates WHERE date_name = '27/11')),
  (9, 12.9,(SELECT date_id FROM heroku_5eb1b5a5878e473.Dates WHERE date_name = '27/11')),
  (12, 18.7,(SELECT date_id FROM heroku_5eb1b5a5878e473.Dates WHERE date_name = '27/11')),
  (15,38.1,(SELECT date_id FROM heroku_5eb1b5a5878e473.Dates WHERE date_name = '27/11')),
  (18, 2.3,(SELECT date_id FROM heroku_5eb1b5a5878e473.Dates WHERE date_name = '27/11')),
  (21, 1,(SELECT date_id FROM heroku_5eb1b5a5878e473.Dates WHERE date_name = '27/11')),
	(0, 0.1,(SELECT date_id FROM heroku_5eb1b5a5878e473.Dates WHERE date_name = '20/11')),
  (3, 5.2,(SELECT date_id FROM heroku_5eb1b5a5878e473.Dates WHERE date_name = '20/11')),
  (6, 7.8,(SELECT date_id FROM heroku_5eb1b5a5878e473.Dates WHERE date_name = '20/11')),
  (9, 12.9,(SELECT date_id FROM heroku_5eb1b5a5878e473.Dates WHERE date_name = '20/11')),
  (12, 18.7,(SELECT date_id FROM heroku_5eb1b5a5878e473.Dates WHERE date_name = '20/11')),
  (15, 38.1,(SELECT date_id FROM heroku_5eb1b5a5878e473.Dates WHERE date_name = '20/11')),
  (18, 2.3,(SELECT date_id FROM heroku_5eb1b5a5878e473.Dates WHERE date_name = '20/11')),
  (21, 1,(SELECT date_id FROM heroku_5eb1b5a5878e473.Dates WHERE date_name = '20/11')),
  (0, 0.1, (SELECT date_id FROM heroku_5eb1b5a5878e473.Dates WHERE date_name = '21/11')),
  (3, 5.2, (SELECT date_id FROM heroku_5eb1b5a5878e473.Dates WHERE date_name = '21/11')),
  (6, 7.8, (SELECT date_id FROM heroku_5eb1b5a5878e473.Dates WHERE date_name = '21/11')),
  (9, 12.9, (SELECT date_id FROM heroku_5eb1b5a5878e473.Dates WHERE date_name = '21/11')),
  (12, 18.7, (SELECT date_id FROM heroku_5eb1b5a5878e473.Dates WHERE date_name = '21/11')),
  (15, 38.1, (SELECT date_id FROM heroku_5eb1b5a5878e473.Dates WHERE date_name = '21/11')),
  (18, 2.3, (SELECT date_id FROM heroku_5eb1b5a5878e473.Dates WHERE date_name = '21/11')),
  (21, 1, (SELECT date_id FROM heroku_5eb1b5a5878e473.Dates WHERE date_name = '21/11')),
  (0, 0.1, (SELECT date_id FROM heroku_5eb1b5a5878e473.Dates WHERE date_name = '22/11')),
  (3, 5.2, (SELECT date_id FROM heroku_5eb1b5a5878e473.Dates WHERE date_name = '22/11')),
  (6, 7.8, (SELECT date_id FROM heroku_5eb1b5a5878e473.Dates WHERE date_name = '22/11')),
  (9, 12.9, (SELECT date_id FROM heroku_5eb1b5a5878e473.Dates WHERE date_name = '22/11')),
  (12, 18.7, (SELECT date_id FROM heroku_5eb1b5a5878e473.Dates WHERE date_name = '22/11')),
  (15, 38.1, (SELECT date_id FROM heroku_5eb1b5a5878e473.Dates WHERE date_name = '22/11')),
  (18, 2.3, (SELECT date_id FROM heroku_5eb1b5a5878e473.Dates WHERE date_name = '22/11')),
  (21, 1, (SELECT date_id FROM heroku_5eb1b5a5878e473.Dates WHERE date_name = '22/11')),
  (0, 0.1, (SELECT date_id FROM heroku_5eb1b5a5878e473.Dates WHERE date_name = '23/11')),
  (3, 5.2, (SELECT date_id FROM heroku_5eb1b5a5878e473.Dates WHERE date_name = '23/11')),
  (6, 7.8, (SELECT date_id FROM heroku_5eb1b5a5878e473.Dates WHERE date_name = '23/11')),
  (9, 12.9, (SELECT date_id FROM heroku_5eb1b5a5878e473.Dates WHERE date_name = '23/11')),
  (12, 18.7, (SELECT date_id FROM heroku_5eb1b5a5878e473.Dates WHERE date_name = '23/11')),
  (15, 38.1, (SELECT date_id FROM heroku_5eb1b5a5878e473.Dates WHERE date_name = '23/11')),
  (18, 2.3, (SELECT date_id FROM heroku_5eb1b5a5878e473.Dates WHERE date_name = '23/11')),
  (21, 1, (SELECT date_id FROM heroku_5eb1b5a5878e473.Dates WHERE date_name = '23/11')),
  (0, 0.1, (SELECT date_id FROM heroku_5eb1b5a5878e473.Dates WHERE date_name = '24/11')),
  (3, 5.2, (SELECT date_id FROM heroku_5eb1b5a5878e473.Dates WHERE date_name = '24/11')),
  (6, 7.8, (SELECT date_id FROM heroku_5eb1b5a5878e473.Dates WHERE date_name = '24/11')),
  (9, 12.9, (SELECT date_id FROM heroku_5eb1b5a5878e473.Dates WHERE date_name = '24/11')),
  (12, 18.7, (SELECT date_id FROM heroku_5eb1b5a5878e473.Dates WHERE date_name = '24/11')),
  (15, 38.1, (SELECT date_id FROM heroku_5eb1b5a5878e473.Dates WHERE date_name = '24/11')),
  (18, 2.3, (SELECT date_id FROM heroku_5eb1b5a5878e473.Dates WHERE date_name = '24/11')),
  (21, 1, (SELECT date_id FROM heroku_5eb1b5a5878e473.Dates WHERE date_name = '24/11'));
   