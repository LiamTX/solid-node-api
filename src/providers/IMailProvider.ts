interface IAdress {
    email: string;
    name: string;
}

export interface IMailMessage {
    to: IAdress;
    from: IAdress;
    subject: string;
    body: string
}

export interface IMailProvider {
    sendMail(message: IMailMessage): Promise<void>
}