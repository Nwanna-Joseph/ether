import fetch from "node-fetch";
exports.handler = async function (event, context) {
    // your server-side functionality
     fetch(`https://api.postmarkapp.com/email`, {
        headers: {
            "Accept": "application/json",
            "Content-Type":"application/json",
            "X-Postmark-Server-Token":"fad8a96f-4097-4a86-a57c-39c39d7bc582"
        },
        method: "POST",
        body: JSON.stringify({
            "From": "gidejo3210@devswp.com",
            "To": "gidejo3210@devswp.com",
            "Subject": "Hello from Postmark",
            "HtmlBody": "<strong>Hello</strong> dear Postmark user.",
            "MessageStream": "broadcast"
        }),
    });
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Hello World" }),
    };
};