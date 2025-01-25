const express = require('express');
const fs = require('fs/promises');
const xlsx = require('xlsx');
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config();

const dataFile = require('./dataFile.json');

const app = express()
const PORT = process.env.PORT


app.use(express.json())




const worksheet = xlsx.utils.json_to_sheet(dataFile);

const workbook = xlsx.utils.book_new();
xlsx.utils.book_append_sheet(workbook, worksheet, "Sheet1");


try {
    xlsx.writeFile(workbook, "employers.xlsx");
    console.log("File created successfully")
} catch (err) {
    console.log(err);
}

// some test codes don't worry about it
//var Data = dataFile.map(data => {
//    return [dataFile.name+'\t'+dataFile.dept+'\t'+dataFile.tech+'\t'+dataFile.stipend+'\n'].join(" ")
//})
//console.log(Data)

//var data = '';
//
//for (var d = 0; d < dataFile.length; d++) {
//    data=data+dataFile[d].name+'\t'+dataFile[d].dept+'\t'+dataFile[d].tech+'\t'+dataFile[d].stipend+'\n';
//}



const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 456,
    secure: true,
    auth: {
        user: process.env.EM_USER,
        pass: process.env.EM_PASS,
    },
});

async function main() {
    try {
        const info = await transporter.sendMail({
            from: ' "Chukwubuikem Emma" <ezeiruemma5t@gmail.com>',
            to: ["ezeiruemmac@gmail.com", "emmaezeiru@gmail.com"],
            subject: "Express task",
            text: "This is the excel file converted from an array",
            html: "<b>This is the excel file converted from an array<b>",
            attachments: [
                {
                    filename: "employers.xlsx",
                    path: "./employers.xlsx"
                }
            ]
        
        });
        console.log("Message Sent: %s", info.messageId);

        // Delete file
        await fs.rm("./employers.xlsx");
        console.log("Email sent and deleted successfully");
    } catch (err) {
        console.log(err.message)
    }
}

main().catch(console.error);






app.use('/', (req, res) => {
    return res.status(200).json(dataFile);
})

app.listen(PORT, () => {
    console.log("express is listening on 8009");
})