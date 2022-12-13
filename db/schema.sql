-- DROP DATABASE
DROP DATABASE IF EXISTS user_db;

-- CREATE DATABASE
CREATE DATABASE user_db;

CREATE TABLE user (
    userID INT NOT NULL AUTO_INCREMENT,
    firstName VARCHAR(50) NULL DEFAULT NULL,
    lastName VARCHAR(50) NULL DEFAULT NULL,
    email VARCHAR(50) NULL DEFAULT NULL,
    userName VARCHAR(50) NULL DEFAULT NULL,
    passwordHash VARCHAR(32) NOT NULL,
    registeredAt DATETIME NOT NULL,
    lastLogin DATETIME NULL DEFAULT NULL,
    intro TEXT NULL DEFAULT NULL,
    strengths TEXT NULL DEFAULT NULL,
    PRIMARY KEY (id),
    
)

CREATE TABLE posts (
    postID INT NOT NULL AUTO_INCREMENT,
    userID INT NOT NULL AUTO_INCREMENT,
    userName VARCHAR(50) NULL DEFAULT NULL,
    postTitle  varchar(128) NOT NULL,
    postContent TEXT NOT NULL,
    createdAt DATETIME NOT NULL,
    PRIMARY KEY (postID),
    KEY userName (userName),
    KEY postTitle (postTitle),
    KEY createdAt (createdAt),
    
)

CREATE TABLE postComments (
    commentID INT NOT NULL AUTO_INCREMENT,
    postID INT NOT NULL AUTO_INCREMENT,
    userName VARCHAR(50) NULL DEFAULT NULL,
    postTitle  varchar(128) NOT NULL,
    commentContent TEXT NOT NULL,
    createdAt DATETIME NOT NULL,
    PRIMARY KEY (commentID),
    KEY postID (postID),
    KEY userName (userName),
    KEY postTitle (postTitle),
    
)