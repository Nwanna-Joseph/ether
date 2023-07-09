import fetch from "node-fetch";

exports.handler = async function (event, context) {
    let reference = "4g16recolt"
    const info = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
            headers: {
                "Authorization": `Bearer ${process.env.PAYSTACK_SECRET}`,
                "Content-Type": "application/json"
            },
            method: "GET"
        })
    ;
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

//
// {
//     "status": true,
//     "message": "Verification successful",
//     "data": {
//     "id": 2922381190,
//         "domain": "test",
//         "status": "success",
//         "reference": "hyytrndue7",
//         "receipt_number": null,
//         "amount": 2200,
//         "message": null,
//         "gateway_response": "Successful",
//         "paid_at": "2023-07-01T22:48:19.000Z",
//         "created_at": "2023-07-01T22:48:05.000Z",
//         "channel": "card",
//         "currency": "NGN",
//         "ip_address": "102.89.34.101",
//         "metadata": "",
//         "log": {
//         "start_time": 1688251695,
//             "time_spent": 4,
//             "attempts": 1,
//             "errors": 0,
//             "success": true,
//             "mobile": false,
//             "input": [],
//             "history": [
//             {
//                 "type": "action",
//                 "message": "Attempted to pay with card",
//                 "time": 3
//             },
//             {
//                 "type": "success",
//                 "message": "Successfully paid with card",
//                 "time": 4
//             }
//         ]
//     },
//     "fees": 33,
//         "fees_split": null,
//         "authorization": {
//         "authorization_code": "AUTH_1afkz4zi8n",
//             "bin": "408408",
//             "last4": "4081",
//             "exp_month": "12",
//             "exp_year": "2030",
//             "channel": "card",
//             "card_type": "visa ",
//             "bank": "TEST BANK",
//             "country_code": "NG",
//             "brand": "visa",
//             "reusable": true,
//             "signature": "SIG_sV4NbMS92tEjhlxbVIcx",
//             "account_name": null
//     },
//     "customer": {
//         "id": 128967920,
//             "first_name": null,
//             "last_name": null,
//             "email": "nknjk@ddrdf.com",
//             "customer_code": "CUS_6qtq5rutl8prpcz",
//             "phone": null,
//             "metadata": null,
//             "risk_action": "default",
//             "international_format_phone": null
//     },
//     "plan": null,
//         "split": {},
//     "order_id": null,
//         "paidAt": "2023-07-01T22:48:19.000Z",
//         "createdAt": "2023-07-01T22:48:05.000Z",
//         "requested_amount": 2200,
//         "pos_transaction_data": null,
//         "source": null,
//         "fees_breakdown": null,
//         "transaction_date": "2023-07-01T22:48:05.000Z",
//         "plan_object": {},
//     "subaccount": {}
// }
// }