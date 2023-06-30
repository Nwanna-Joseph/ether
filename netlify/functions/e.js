import fetch from "node-fetch";
exports.handler = async function (event, context) {
    // your server-side functionality
    const info = await fetch(`${process.env.URL}/.netlify/functions/emails/welcome`, {
        headers: {
            "netlify-emails-secret": process.env.NETLIFY_EMAILS_SECRET,
        },
        method: "POST",
        body: JSON.stringify({
            from: "gidejo3210@devswp.com",
            to: "gidejo3210@devswp.com",
            subject: "You've been subscribed",
            parameters: {
                name: "Andrechukwu",
            },
        }),
    });
    const res = await info.json()
    return {
        statusCode: 200,
        body: JSON.stringify(res),
    };
};