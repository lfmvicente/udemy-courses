function getUsers(){
    return new Promise((resolve, reject) => {
        resolve([
            {
                name: 'Luis',
                email: 'luis@mail.com' 
            },
            {
                name: 'Felipe',
                email: 'felipe@mail.com'
            }
        ])
    })
}

async function printUsers(){
    //await blocks execution until get the result
    let users = await getUsers();
    console.log(users)
}

printUsers()