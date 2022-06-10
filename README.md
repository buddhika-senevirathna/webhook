# Simple Webhook Server
### Simple Web hook server using node js and express and axios
 This project will dicuss how to create a simple webhook server
    - Register webhooks
    - Send testing payload to the registered clients

## Minimum Requirements
 - Node js
 - MongoDB

## Installation
- Download or clone this project
- run `npm install`

### Create the .env file
- rename the `.env.exmple` file into `.env`
- update the content of the file
  - PORT - The port you need to runyour server, default it will be 9876
  - Update the mongoDb database url

### running the server
- run the with the command `npm run start`

### Heath check
- Open a web browser and go to the `http://localhost:9876/` or `http://localhost:[port]/`
- You will will see the ""Sever running successfully"" message on browser

### Registering webhooks
- Open `Postman` or other API testing tool
- Send a `POST` request to `http://localhost:9876/api/webhook/`
- Please replace port if you have different port or hostname `http://[host]:[port]/api/webhook/`
- Your message body should be a json as below
    ```
    {
        "url": "client\url\",
        "token": "token"
    }
    ```
- You should get newly created webhook deatils as a response.

### Testing
#### Testing with `webhook.site`
- Go to the `https://webhook.site/`
- Copy `Your unique URL` and keep the tab open
- Register `Your unique URL`
- Go to the `Postman` or other API testing tool
- Send a post request to the `http://localhost:9876/api/webhook/test`
- You should get the response message after successfully calling all the webhooks
- Now go to the `https://webhook.site/`
- You will see you payload and token in the left hand side of the browser

#### Testing in locally
- Create new `Node js` project with below steps 
- Create a folder in your machine
- Go to the command line and change the directory to youe newly created directory
- Run `npm init -y`
- Run `npm install nodemon express`
- I have added example `index.js` file the code
- Copy the the `index.js.example` file into your new project
- Rename it to `index.js` and update the port, Make sure you do not use same port
- Run `npm run start`
- Register new client (`http://localhost:6000/webhook-client`)
- Send a post request to the `http://localhost:9876/api/webhook/test`
- You should get the response message after successfully calling all the webhooks
- Check your command line, You should see your payload and token.