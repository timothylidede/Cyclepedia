const mailgun = require("mailgun-js");

const sendEmail = (options) => {

const mg = mailgun({
	apiKey: process.env.MAILGUN_KEY,
	domain: process.env.DOMAIN,
});

const data = {
	from: process.env.EMAIL_FROM,
	to: options.to,
	subject: options.subject,
	html: options.text
};
mg.messages().send(data, function (error, body) {
    if(error){
        console.log(error)
    }else{
	console.log(body);
    }
});

}


module.exports = sendEmail;