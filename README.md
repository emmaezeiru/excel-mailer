# ExcelMailer

## Overview
**ExcelMailer** is a lightweight service built with Express.js that converts an array of data into an Excel file and sends it as an email attachment. The service ensures proper cleanup by deleting the file after it has been emailed.

---

## Features
- Accepts JSON data as input via a POST request.
- Dynamically generates an Excel file with headers and data rows.
- Sends the Excel file as an email attachment.
- Deletes the generated file after it is sent to ensure efficient resource management.

---

## Technologies Used
- **Node.js**
- **Express.js**: For creating the HTTP server.
- **ExcelJS**: For generating Excel files.
- **Nodemailer**: For sending emails with attachments.
- **fs-extra**: For file system operations like cleanup.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/excel-mailer.git
   ```

2. Navigate to the project directory:
   ```bash
   cd excel-mailer
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file for email credentials:
   ```env
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_email_password / app passkey
   PORT=8009
   ```

---

## Usage

1. Start the server:
   ```bash
   npm start
   ```

2. The server will generate an Excel file, email it to the specified recipient, and delete the file after successful email delivery.


## File Cleanup
The service ensures all temporary files are deleted immediately after sending the email, maintaining efficient resource usage and avoiding unnecessary storage overhead.

---

## Future Enhancements
- Add authentication for secure API access.
- Implement rate limiting to prevent abuse.
- Support additional file formats (e.g., CSV, PDF).
- Provide customizable Excel file templates.

---

## Contributing
Contributions are welcome! Please open an issue or submit a pull request to discuss potential changes.
