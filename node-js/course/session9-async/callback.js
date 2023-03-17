function sendMail(content, receiver, error, callback)
{
    setTimeout(() => {
        if (error) {
            callback(receiver, "Email error")
        } else {
            console.log(
                `
                To: ${receiver}
                ---------------------
                ${content}
                `
            )
            callback(receiver)
        }
    }, 8000);
}

sendMail("Hello, welcome to my async first test", "luis@mail.com", true, (receiver, error) => {
    if (!error) {
        console.log(`Email Sent to ${receiver} with success`);
    } else {
        console.log(`Email not Sent to ${receiver}`);
    }
})
console.log('Start Execution');