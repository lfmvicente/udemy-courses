//Product
class Product
{
    constructor()
    {
        this.name = ''
        this.sku = ''
        this.weight = 0
        this.category = ''
        this.price = 0
        this.images = []
        this.description = ''
        this.stockQty = 0
    }

    save(Product)
    {
        console.log('Product save')
    }

    search(filter)
    {
        console.log('Search Product')
    }

    delete(Product)
    {
        console.log('Product deleted')
    }
}

/////////////////////////////////////////////////////////////
//Cart

class Cart
{
    constructor()
    {
        this.total = 0
        this.itens = 0
        this.customerData = []
    }

    addProducts([Product])
    {
        console.log('add product')
    }

    removeProducts([Product])
    {
        console.log('remove product')  
    }

    postOrder()
    {
        console.log('buy product')
    }
}

/////////////////////////////////////////////////////////////
//Restaurant Menu

class Food
{
    constructor()
    {
        this.category = ''
        this.name = ''
        this.price = 0
        this.ingredients = []
        this.prepareTime = 0
    }

    save(Food)
    {
        console.log('save food')
    }

    delete(Food)
    {
        console.log('delete food')
    }

    search(filter)
    {
        console.log('find food')
    }
}

/////////////////////////////////////////////////////////////
//RPG character

class Character
{
    constructor()
    {
        this.name = ''
        this.class = ''
        this.attrributes = [
            'power' = 0,
            'life' = 0,
            'strenght' = 0,
            'magic' = 0
        ]
    }

    createChar()
    {
        console.log('char created')
    }

    walk()
    {
        console.log('walking')
    }

    talk()
    {
        console.log('talking')
    }

    fight()
    {
        console.log('fighting')
    }

    heal()
    {
        console.log('healing')
    }
}

/////////////////////////////////////////////////////////////
//Car rent

class Car
{
    constructor()
    {
        this.brand = ''
        this.model = ''
        this.category = ''
        this.attributes = [
            'hp' = 0,
            'transmission' = '',
            'doors' = 0 
        ]
        this.dateRent = '',
        this.dateReturn = ''
    }

    rent()
    {
        console.log('rent a car')
    }

    return()
    {
        console.log('return car')
    }
}

/////////////////////////////////////////////////////////////
//Udemy Course

class Course
{
    constructor()
    {
        this.title = ''
        this.duration = 0
        this.content = ''
        this.instructors = []
        this.category = ''
        this.requirements = ''
    }

    buy()
    {
        console.log('buy this course')
    }

    reproduceClasses(Classes)
    {
        console.log('watching the classes')
    }

    download()
    {
        console.log('watching offline')
    }
}