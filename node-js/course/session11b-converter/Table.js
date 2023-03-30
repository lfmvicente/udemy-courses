class Table
{
    constructor(processedData)
    {
        this.header = processedData[0]
        processedData.shift() //remove first array element
        this.rows = processedData
    }    
}   

module.exports = Table