const restify = require('restify');
const builder = require('botbuilder');
const request = require('request');
const cheerio = require('cheerio');
const querystring = require('querystring');
const parseString = require('xml2js').parseString;

// Setup Restify Server
let server = restify.createServer({});
server.listen(process.env.port || process.env.PORT || 3978, function () {
    console.log('%s listening to %s', server.name, server.url);
});

// Create chat bot
let connector = new builder.ChatConnector({
    appId: process.env.APP_ID,
    appPassword: process.env.APP_PASSWORD
});

