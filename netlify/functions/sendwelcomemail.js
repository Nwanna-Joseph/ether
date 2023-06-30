import { Handler } from "@netlify/functions";
import fetch from "node-fetch";

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
    await fetch(`https://cosmic-torte-fa1094.netlify.app/.netlify/functions/emails/welcome`, {
        headers: {
            "netlify-emails-secret": "",
        },
        method: "POST",
        body: JSON.stringify({
            from: "gidejo3210@devswp.com",
            to: "gidejo3210@devswp.com",
            subject: "You've been subscribed",
            parameters: {
                name: "gidejo3210@devswp.com",
                email: "gidejo3210@devswp.com",
            },
        }),
    });

    return {
        statusCode: 200,
        body: JSON.stringify("Subscribe email sent!"),
    };
};

export { handler };