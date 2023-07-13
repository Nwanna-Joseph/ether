import fetch from "node-fetch";
exports.handler = async function (event, context) {
    try {
        console.log(event);
        console.log(event.body);
    }catch (e){
        console.log(e)
    }
    try {
        const object = JSON.parse(event.body);
        console.log(object)
        console.log(object.content)
    }catch (e){
        console.log(e)
    }
    try {
        console.log(content, destination, a, b, c)
    }catch (e){
        console.log(e)
    }

    let HEADERS = {
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Origin',
        'Content-Type': 'application/json', //optional
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Max-Age': '8640',
        'Access-Control-Allow-Origin': '*',
        'Vary':'Origin'
    }

    return {
        statusCode: 200,
        body: JSON.stringify({}),
        HEADERS
    };
};