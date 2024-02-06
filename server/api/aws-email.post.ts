// server/api/send-email.post.ts
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses"; // ES Modules import
const REGION = "us-east-2";

export default defineEventHandler(async (event) => {
    const formData = await readFormData(event)
    const name = formData.get("name")
    const email = formData.get("email")
    const subject = formData.get("subject")
    const message = formData.get("message")

    const client = new SESClient({ region: REGION });
    const input = { // SendEmailRequest
        Source: "colpitt.jack@gmail.com", // required
        Destination: { // Destination
            ToAddresses: [ // AddressList
                "colpitt.jack@gmail.com",
            ],
        },
        Message: { // Message
            Subject: { // Content
                Data: "Message from jackcolpitt.com", // required
            },
            Body: { // Body
                // Text: {
                //     Data: "Body Text -- Hello World", // required
                // },
                Html: {
                    // HTML Email Template
                    Data: `
<html lang="en">
<head>
    <style>
         body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333;
            padding: 20px;
        }
        .container {
            background-color: white;
            border: 1px solid #ddd;
            padding: 20px;
            margin-top: 20px;
        }
        .header {
            background-color: #007bff;
            color: white;
            padding: 10px;
            text-align: center;
        }
        .field {
            margin-top: 10px;
            padding: 10px;
            border: 1px solid #ddd;
        }
        .field-label {
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">New Message Received</div>
        <div class="field"><div class="field-label">Name:</div>${name}</div>
        <div class="field"><div class="field-label">Email:</div>${email}</div>
        <div class="field"><div class="field-label">Subject:</div>${subject}</div>
        <div class="field"><div class="field-label">Message:</div>${message}</div>
    </div>
</body>
</html>
`, // required
                },
            },
        },
    };
    const command = new SendEmailCommand(input);
    const response = await client.send(command);
    return {'message': response}
})