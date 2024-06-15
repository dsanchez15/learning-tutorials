import brevo from "@getbrevo/brevo";

const apiInstance = new brevo.TransactionalEmailsApi();

apiInstance.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.API_KEY
);

async function main() {
  //db query
  const user = {
    name: "Duvan 2",
    email: "duvan.sanchez.developer@gmail.com",
  };

  try {
    const sendSmtpEmail = new brevo.SendSmtpEmail();

    sendSmtpEmail.subject = "Hello world from brevo and Nodejs";
    sendSmtpEmail.to = [
      { email: user.email, name: user.name },
      //{ email: "duvan.sanchez.developer+1@gmail.com", name: "Duvan+1" },
    ];
    sendSmtpEmail.htmlContent = `<html><body><h1>Hola ${user.name}</h1><p>This is a test email</p><button>Click me</button><a href='https://www.faztweb.com'>Go to my website</a></body></html>`;
    sendSmtpEmail.sender = {
      name: "Duvan",
      email: "tdsanchezr15@gmail.com",
    };

    const result = await apiInstance.sendTransacEmail(sendSmtpEmail);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

main();
