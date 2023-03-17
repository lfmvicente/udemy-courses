var customerName = 'Luis' //Global Scope

function showName()
{
    let customerLastname = 'Vicente' //Local Scope
    console.log("Hi, " + customerName + ' ' + customerLastname);
}

function showNameAgain()
{
    console.log("Hello, " + customerName + ' ' + customerLastname);
}

if (customerName) {
    let a = 10; //Block Scope
    //console.log(a);
}

////////////////////////////////////////////////////////////

//Optional Params - declared after mandatory params

    function sum(a, b = 50){
        console.log(a + b)
    }

    function sub(a, b = 1){
        console.log(a - b)
    }

/////////////////////////////////////////////////////////////

//Short JSON

    var firstname = 'Luis Felipe'
    let age = '31'

    let company = {
        companyName: 'Company Inc',
        city: 'Sao Paulo',
        website: 'www.company.com',
        email: 'company@company.com'
    }

    // don't need the key of field if you have variables (let, var or const)
    let user = {
        firstname,
        age,
        company
    }

//console.log(user);

//Spread Operator
    let userWithSpread = {
        firstname,
        age,
        ...company
    }

//console.log(userWithSpread);

//destructuring assignment
    let article = {
        title: 'Titlee',
        content: 'asoaosdhasdahsdas'
    }

    let {title, content} = article;
    console.log(title);

////////////////////////////////////////////////////

function myFunction()
{
    console.log('function')
}

let varFunction = function()
{
    console.log('var function')
}

//Arrow Function
    let multiply = (a, b) => {
        console.log(a * b)
    }

    //with single parameter don't need to use ()
    let printName = name => {
        console.log(name)
    }

    //with 1 line of execution
    let printNameAgain = name => console.log(name);

    //without use of "return"
    let printAnotherName = anotherName => 'anotherName';
    let result = printAnotherName();
    console.log(result)

//////////////////////////////////////////////////////////////////////

//Array Find

    let user1 = {
        name: "One",
        company: 'Company One',
        sector: 'IT'
    }

    let user2 = {
        name: "Two",
        company: 'Company Two',
        sector: 'IT'
    }

    let user3 = {
        name: "Three",
        company: 'Company Three',
        sector: 'Human Resources'
    }

    let users = [user1, user2, user3]

    let searchResult = users.find(user => user.sector === 'IT');
    console.log(searchResult)

///////////////////////////////////////////////

//Template Literals `${variable}`

    let brand = 'Ferrari'
    let model = 'F450'

    let sentence = `Hi, my name is Luis and my car is a ${brand} ${model}`

    console.log(sentence);
