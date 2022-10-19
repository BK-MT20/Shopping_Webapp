const expressLoader = require('./express')
const mongooseLoader = require('./mongoose')
const db = require('../data')

module.exports = async (app) => {
  await mongooseLoader(db);
  console.log('MongoDB Initialized');

  await expressLoader(app);
  console.log('Express Initialized');

  
  // more loaders here
}
