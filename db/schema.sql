CREATE DATABASE tokyo_draft; IF NOT EXISTS tokyo_draft;

USE tokyo_draft

DROP TABLE IF EXISTS tokyo_draft;

CREATE TABLE tokyo_draft
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured boolean DEFAULT 0,
	bdate DATETIME DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);