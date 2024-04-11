-- Database
CREATE DATABASE IF NOT EXISTS task_management_db;

-- Switch to db
USE task_management_db;

-- Create the users table

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY, email VARCHAR(100) NOT NULL UNIQUE, username VARCHAR(50) NOT NULL UNIQUE, password VARCHAR(255) NOT NULL
);

-- Create the tasks table
CREATE TABLE IF NOT EXISTS tasks (
    id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(100) NOT NULL, description TEXT, user_id INT, FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
);