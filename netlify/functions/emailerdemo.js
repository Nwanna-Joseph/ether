import fetch from "node-fetch";
exports.handler = async function (event, context) {

    const {target} = JSON.parse(event.body);
    console.log("Target:",target)

    const info = await fetch(`${process.env.URL}/.netlify/functions/emails/welcome`, {
        headers: {
            "netlify-emails-secret": process.env.NETLIFY_EMAILS_SECRET,
        },
        method: "POST",
        body: JSON.stringify({
            from: `gidejo3210@devswp.com`,
            to: `gidejo3210@devswp.com` ,
            subject: `Welcome ${target}`,
            parameters: {
                name:`${target}`,
            },
        }),
    });

    const res = await info.json()

    let HEADERS = {
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Origin',
        'Content-Type': 'application/json', //optional
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Max-Age': '8640'
        'Access-Control-Allow-Origin': "*",
        'Vary': "Origin"
    }

    return {
        statusCode: 200,
        body: JSON.stringify(res),
        HEADERS
    };
};