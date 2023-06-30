import { Handler } from "@netlify/functions";
import fetch from "node-fetch";
import postmark from "postmark"

const handler = async function(event) {
    if (event.body === null) {
        return {
            statusCode: 400,
            body: JSON.stringify("Payload required"),
        };
    }

    // const requestBody = JSON.parse(event.body) as {
    //     subscriberName: string;
    //     subscriberEmail: string;
    //     inviteeEmail: string;
    // };

    //automatically generated snippet from the email preview
    //sends a request to an email handler for a subscribed email
    // await fetch(`https://cosmic-torte-fa1094.netlify.app/.netlify/functions/emails/welcome`, {
    //     headers: {
    //         "netlify-emails-secret": "",
    //     },
    //     method: "POST",
    //     body: JSON.stringify({
    //         from: "gidejo3210@devswp.com",
    //         to: "gidejo3210@devswp.com",
    //         subject: "You've been subscribed",
    //         parameters: {
    //             name: "gidejo3210@devswp.com",
    //             email: "gidejo3210@devswp.com",
    //         },
    //     }),
    // });

    // let client = new postmark.ServerClient("fad8a96f-4097-4a86-a57c-39c39d7bc582");
    //
    // client.sendEmail({
    //     "From": "gidejo3210@devswp.com",
    //     "To": "gidejo3210@devswp.com",
    //     "Subject": "Hello from Postmark",
    //     "HtmlBody": "<strong>Hello</strong> dear Postmark user.",
    //     "TextBody": "Hello from Postmark!",
    //     "MessageStream": "broadcast"
    // });

    await fetch(`https://api.postmarkapp.com/email`, {
        headers: {
            "Accept": "application/json",
            "Content-Type":"application/json"
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
        body: JSON.stringify("Subscribe email sent!"),
    };
};

export { handler };