CREATE TABLE Users (
    id UUID PRIMARY KEY,
    name VARCHAR(25) NOT NULL,
    lname VARCHAR(25) NOT NULL,
    email VARCHAR(60) UNIQUE NOT NULL,
    phone VARCHAR(25) UNIQUE
);

CREATE TABLE Posts (
    id UUID PRIMARY KEY,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    user_id UUID REFERENCES Users(id)
);