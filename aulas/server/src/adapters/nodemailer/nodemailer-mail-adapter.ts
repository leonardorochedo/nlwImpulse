import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "92b97c78e9f9f0",
      pass: "d122b5adaa52af"
    }
});

export class NodeMailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Leonardo Rochedo <learnir@outlook.com.br>',
            subject,
            html: body,
        });
    };
}