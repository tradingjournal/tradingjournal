const fs = require('fs');
const Parse = require('papaparse');

class Parser {

  constructor() {
    this.readCSV = this.readCSV.bind(this);
    this.parseCSV = this.parseCSV.bind(this);
  }

  // we won't need this function or the fs module later since we'll be getting the csv file through a network request
  readCSV(csvFilePath) {
    return new Promise((resolve, reject) => {
      fs.readFile(csvFilePath, (err, data) => {
        if (err) {
          console.log('Unable to read the csv file with error: ', err);
          reject(data);
        } else {
          resolve(data);
        }
      })
    });
  }

  async parseCSV(csvFilePath = '../handlers/upload_csv/test_data/IB.csv') {
    const data = await this.readCSV(csvFilePath);
    const parsedCSV = Parse.parse(data);
    console.log('Parsed csv data: ', parsedCSV);
  }
}

module.exports = new Parser();