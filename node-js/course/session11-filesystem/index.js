const fs = require("fs");

fs.writeFile('./Profile.txt', "Country: Brazil, City: Sao Paulo",(error) => {
    if (error) {
        console.log("Could not write requested file")
    }
})

fs.readFile('./Profile.txt', {encoding: 'utf-8'}, (error, data) => {
    if (error) {
        console.log("Could not read requested file")
    } else {
        console.log(data)
    }
});

fs.readFile('./user.json', {encoding: 'utf-8'}, (error, data) => {
    if (error) {
        console.log("Could not read requested file")
    } else {
        let userData = JSON.parse(data) //unserialize the file
        userData.name = "Luis Felipe"
        userData.email = "luis@mail.com"
        userData.age = 28
        
        fs.writeFile('./user.json', JSON.stringify(userData), (error) => { //serialize file after edit
            if (error) {
                console.log("Could not write requested file")
            }
        })
        console.log(userData)
    }
})