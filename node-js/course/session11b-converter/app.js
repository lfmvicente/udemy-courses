const Reader = require('./Reader')
const Processor = require('./Processor')
const Table = require('./Table')
let htmlParser = require('./HtmlParser')
const Writer = require('./Writer')
const PdfWriter = require('./PdfWriter')

let reader = new Reader()
let writer = new Writer()

async function main(){
    let data = await reader.read('./cars.csv')
    var processedData = Processor.process(data)
    var cars = new Table(processedData)

    let html = await htmlParser.Parse(cars)
    writer.write(Date.now() + '.html', html)
    PdfWriter.WritePdf(Date.now() +  '.pdf', html)
}

main()