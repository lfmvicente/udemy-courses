class Dice{
    constructor(facesQty)
    {
        this.facesQty = facesQty
    }

    roll()
    {
        console.log("Rolling...")
        setTimeout(() => {
            console.log(
                Math.floor(Math.random() * this.facesQty) + 1
            )}, 2000
        )
    }
}

firstDice = new Dice(6)
secondDice = new Dice(20)

firstDice.roll()
secondDice.roll()