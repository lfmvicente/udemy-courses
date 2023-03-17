function sendMail(receiver, content, error){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!error) {
                resolve(receiver) //accept 1 parameter or json parameters {param1: param, param2: param2}
            } else {
                reject("Ocurred an exception")
            }
        }, 2000)
    })
}

//.then() is only executed when resolve() is returned
sendMail('luis@mail.com', 'lorem ipsum', true).then((receiver) => {
    console.log(`Email sent to: ${receiver}`)
}).catch((exception) => {
    console.log('Email not sent, ' + exception)
})

//Avoid to use a promise inside another - Promise Hell