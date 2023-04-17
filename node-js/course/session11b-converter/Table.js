class Table
{
    constructor(processedData)
    {
        this.header = processedData[0]
        processedData.shift() //remove first array element
        this.rows = processedData
    }

    //virtual fields
    get RowCount(){
        return this.rows.length
    }
}   

module.exports = Table