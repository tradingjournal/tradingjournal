const Parser = require('../../middleware/Parser.js');


const uploadTrades = async (csvFile) => {
  try {
    const data = await Parser.parseCSV(csvFile);
    console.log('CSV data: ', data);
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = uploadTrades;
