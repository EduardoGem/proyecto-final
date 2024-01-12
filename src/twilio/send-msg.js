import { } from 'dotenv/config'
import { default as twilio } from 'twilio';


const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = twilio(accountSid, authToken);

 async function sendMessage() {

    const mensaje = await client.messages.create({
        to: 'whatsapp:+59171598857',
        from: 'whatsapp:+14155238886',
        body: 'Hola Eduardo otra vez soy io'

    })
    console.log(mensaje.sid);
}
sendMessage();