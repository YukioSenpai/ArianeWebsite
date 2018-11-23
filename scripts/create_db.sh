DROP DATABASE IF EXISTS magenta_showcase;
CREATE DATABASE magenta_showcase;
CREATE USER 'magenta'@'localhost' IDENTIFIED BY 'secret';
GRANT ALL PRIVILEGES ON magenta_showcase . * TO 'magenta'@'localhost';
FLUSH PRIVILEGES;
