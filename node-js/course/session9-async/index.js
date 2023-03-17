function getId(){
    return new Promise((resolve, reject) => {
        resolve(10)
    })
}

function searchEmail(id){
    return new Promise((resolve, reject) => {
        resolve('luis@mail.com')
    })
}

function send(content, email, error){
    return new Promise((resolve, reject) => {
        if (!error) {
            resolve('Email sent')
        }
        
        reject('Email not sent')
    })
}

//Promise Hell
/*console.log('Start')
getId().then((id) => {
    searchEmail(id).then((email) => {
        send('Hello', email).then((content) => {
            console.log(`${content} to ${email} with id ${id}`)
        }).catch(error => {
            console.log(error);
        })
   })
})
console.log("End")*/

//Promise Hell refactor with async/await
async function sendEmail(){
    let userId = await getId()
    let userEmail = await searchEmail(userId)

    try {
        await send('Hello', userEmail, true)
    } catch(error) {
        console.log(error)
    }
}

sendEmail()