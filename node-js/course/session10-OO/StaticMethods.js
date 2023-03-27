class Calculator
{
    static sum (a, b){
        console.log(a + b)
    }

    static sub (a, b)
    {
        console.log(a - b)
    }
}

Calculator.sum(10, 10)
Calculator.sub(20, 10)

//With static functions, we can call class functions without create a new class instance