-- CREATE DATABASE task_app;
-- USE task_app;

-- CREATE TABLE users(
--     id integer PRIMARY KEY AUTO_INCREMENT,
--     uname VARCHAR(20) NOT NULL,
--     password VARCHAR(20) NOT NULL,
--     created TIMESTAMP NOT NULL DEFAULT NOW()
-- );

-- INSERT INTO users(uname,password) VALUES('admin','123456');

-- Database
CREATE DATABASE IF NOT EXISTS task_management_db;

-- Switch to db
USE task_management_db;

-- Create the users table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY, email VARCHAR(100) NOT NULL UNIQUE, password VARCHAR(255) NOT NULL
);

-- Create the tasks table
CREATE TABLE IF NOT EXISTS tasks (
    id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(100) NOT NULL, description TEXT, user_id INT, FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
);