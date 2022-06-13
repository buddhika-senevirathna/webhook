const Webhook = require("../model/webhook");
const axios = require("axios");

/**
 * Save new webhook record in the database. 
 * @param {*} req : client url and token.
 * @param {*} res : newly saved client url and token.
 */
const createWebhook = async(req, res) => {
    try {
        const newWebhook = new Webhook(req.body);
        const savedWebHook = await newWebhook.save();
        res.status(200).json(savedWebHook);
    } catch (error) {
        res.status(500).json(error);
    }
}

/**
 * Testing function to implement all the webhooks.
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const testWebhook = async(req, res) => {
    try{
        const webhooks = await Webhook.find();
        webhooks.forEach(webhook => {
            const body = {"payload":[{"id": webhook._id, "token": webhook.token, "message":"This is a webhook test"}]};
            const headers = {
                'Content-Type': "application/json",
            }
            const clientWebhookUrl = webhook.url;
            axios.post(clientWebhookUrl, body, {headers}).then(response =>
                {
                    console.log("Successfully connect with:"+clientWebhookUrl);
                }).catch(error =>{
                    console.log("Error connecting:"+clientWebhookUrl+" , Error "+error);
            });
        });
        res.status(200).json({"message":"Successfully called all the registered webhooks, Please check your log to see errors."});
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

module.exports = {createWebhook, testWebhook};