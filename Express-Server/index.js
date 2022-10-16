const express = require( 'express' )
const app     = express()
const port    = process.env.PORT || 3000

const Client = require('@veryfi/veryfi-sdk');
const client_id = 'vrfuA9F2MsPoz2OvR4arAdcVJDDWrTHzC7L0F9R';
const client_secret = 'K5I7xOSFI8cIp4hd57x376L911Y9YctHKeY0gGTAH48YKUz6jDuVDs8bWhHTWErGVl3LVEk9evS0jXEoOZwgG0JudNMZTc8dxHXeJGFyfWBg8vg740Uuev5YDtkoLO1M';
const username = 'masakayan';
const api_key = 'd3cb58908264ab2ee916fa292216ac9c';

const categories = ['Grocery', 'Utilities', 'Travel'];
const file_path = "reciept.png";

const clientFunction = (url) => {
    return new Promise((resolve, reject) => {
        let veryfi_client = new Client(client_id, client_secret, username, api_key);
        let response = veryfi_client.process_document_url(String(url));
        resolve(response);
    });
}

async function callingFunction(url){
    return await(clientFunction(url));
}

function parseImageURL(url){
    let urlArray = url.split('_');
    let fileName = "https://i.ibb.co/" + urlArray[0] + "/" + urlArray[1] +".png";
    console.log(fileName);
    return fileName;
}

function parseResponseJson(json){

    let response = {
        "subtotal": json["subtotal"],
        "tax": json["tax"],
        "total": json["total"],
        "products": []
    }

    response["products"] = json["line_items"].map((item) => {
        return {
            "name": item["description"],
            "price": item["total"],
            "quantity": item["quantity"]
        }
    });    
    return response;
}


app.get( '/' ,(req, res) => {
res.type( 'text/plain' )
res.send( 'Server Expresso ☕' )
})

app.get( '/:imgURL', ( req, res ) => {
    res.type( 'application/json' )
    let parsedImageURL = parseImageURL(req.params.imgURL);
    callingFunction(parsedImageURL).then((response) => {
        res.send(parseResponseJson(response));
        console.log(parseResponseJson(response));
    });
})

app.use( ( req, res ) => {
res.type( 'text/plain' )
res.status( 404 )
res.send('404 Not found ☕_☕')
})
app.listen( port ,
() => console.log(`Expresso ☕ is on Port ${ port } Ctrl + C to Stop `) )