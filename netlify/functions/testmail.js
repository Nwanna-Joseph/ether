import fetch from "node-fetch";

exports.handler = async function (event, context) {

    const info = await fetch(`${process.env.URL}/.netlify/functions/emails/test`, {
        headers: {
            "netlify-emails-secret": process.env.NETLIFY_EMAILS_SECRET,
        },
        method: "POST",
        body: {
            from: "gidejo3210@devswp.com",
            to: process.env.APP_TEST_EMAIL,
            subject: "flatmates.ng >> Email Test",
            parameters: {
                name: "Test Accounts",
            },
        },
    });
    let res = await info.json()

    let HEADERS = {
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Origin',
        'Content-Type': 'application/json', //optional
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Max-Age': '8640'
    }

//This solves the "No ‘Access-Control-Allow-Origin’ header is present on the requested resource."

    HEADERS['Access-Control-Allow-Origin'] = '*'
    HEADERS['Vary'] = 'Origin'

    return {
        statusCode: 200,
        body: JSON.stringify(res),
        HEADERS
    };
};