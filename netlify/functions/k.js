import fetch from "node-fetch";
import { initializeApp } from 'firebase-admin/app';

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