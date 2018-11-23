# Magenta Showcase

This project is a Magenta instance configured to demonstrate Magenta's abilities and straightforward style.
Basic modules are enabled : 
        
        -ORM
        -Authentication
        -WebServer
        -WS Authentication
        -WS API
        -WS File Upload
        -WebSocket Server

## Start the showcase

To start this project you need NodeJS >= v10.13.0 & a running, up-to-date mysql/mariaDB

- Clone this repo
- Clone Magenta directly in this directory
- Export minimal env variable (NODE_ENV=prod) or create a .env file
- Create the database ```sudo sh script/create_db.sh```
- Start with ```node index.js database.hydrate```

Magenta has started ! You can now check out localhost:3000 to admire the result of that magic !