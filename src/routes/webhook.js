const router = require("express").Router();

const { createWebhook, testWebhook } = require('../controller/webhook');

/**
 * /api/webhook/
 * creating new webhook. 
 */
router.post("/", createWebhook);

/**
 * /api/webhook/test/.
 */
router.post("/test", testWebhook);

module.exports = router;