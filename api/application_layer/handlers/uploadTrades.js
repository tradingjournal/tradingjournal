const resolveAfter3Seconds = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('world');
    }, 3000);
  })
}

const uploadTrades = async () => {
  try {
    const data = await resolveAfter3Seconds();
    
    console.log('hello, ', data);

  } catch (e) {
    throw new Error(e);
  }
}

module.exports = uploadTrades;