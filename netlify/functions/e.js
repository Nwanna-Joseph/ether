import fetch from "node-fetch";
exports.handler = async function (event, context) {

    const info = await fetch(`https://api.paystack.co/transaction/initialize`, {
        headers: {
            `Authorization: Bearer ${process.env.PAYSTACK_SECRET}`,
            "Content-Type: application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "email": "demouser@email.com",
            "amount": "10000", //kobo, 100 naira == 100 * 100 kobo
            "metadata": {
                "custom_fields": [
                    {
                        "value": "makurdi",
                        "display_name": "Donation for",
                        "variable_name": "donation_for"
                    }
                ]
            }
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