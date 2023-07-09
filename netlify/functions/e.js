import fetch from "node-fetch";
exports.handler = async function (event, context) {
    // your server-side functionality
    console.log(event, "_____",console)
    // const data = JSON.parse(event.body);
    // console.log(event.body)
    // console.log(event.body.m)
    const info = await fetch(`${process.env.URL}/.netlify/functions/emails/welcome`, {
        headers: {
            "netlify-emails-secret": process.env.NETLIFY_EMAILS_SECRET,
        },
        method: "POST",
        body: JSON.stringify({
            from: "supportteam@flatmates.com",
            to: event.body.m ,
            subject: "Welcome to flatmates.ng",
            parameters: {
                name:"bhhkkhkhk",
            },
        }),
    });
    const res = await info.json()

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