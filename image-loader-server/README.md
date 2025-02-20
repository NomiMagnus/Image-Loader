# Image Loader Server

## 🚀 Overview
This Node.js server project serves as an image loader that returns an image URL to the client. It provides a simple API endpoint to fetch image URLs.

## 💻 Technologies Used
- **Backend:** NodeJS
- **Frontend:** Angular 19

## 🔧 Configuration
The `.env` file contains environment settings for the application.
You can customize them to your own needs.
All what you need to do is:

1. **Editing the .env File:** Find the `.env` file  which located in the main project directory and open it using a text editor of your choice.
2. **Environment Variables:** Find the specific key that you want to edit, and customize it's value and just change the value.
3. **Saving Changes:** Save the changes you made to the `.env` file after modifying the variables.

## ⬇️ Installation
Please run this commands to install and configure the project on your local machine:
1. Clone this repository to your local machine.
2. To install the dependencies run:
    ```
    npm install
    ```
3. Set up the required environment variables in a .env file if needed.
4. Run the server using
    ```
    npm start
    ```
    or
    ```
    node server.js
    ```

## 📂 Folder Structure
In the server project structure you'll find this files:
- server.js: This file starts the a `NodeJS` server using `Express` on the specified host and port which configured in the `.env` file and configures CORS to allow communication with specified origins.
- router.js: This file contains the routes definitions for the API endpoints.

## 🌐 API Endpoints
- GET /images/image: Returns an image URL.

## 📚 Learning Resources
To learn more about the technologies used in this project, you can refer to the following resources:
- Node.js Documentation: https://nodejs.org/docs/latest/api/
- Express.js Documentation: https://expressjs.com/en/4x/api.html

## Author
Nomi Magnus
