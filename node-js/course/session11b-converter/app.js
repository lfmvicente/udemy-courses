const Reader = require('./Reader')
const Processor = require('./Processor')
const Table = require('./Table')
let reader = new Reader()

async function main(){
    let data = await reader.read('./cars.csv')
    var processedData = Processor.process(data)
    var cars = new Table(processedData)

    console.log(cars.header)
}

main()