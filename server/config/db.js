const logger = require('../utils/logger');

const connectDB = async () => {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    logger.warn('No MONGODB_URI provided. Running in high-performance local in-memory/JSON store mode.');
    return { isConnected: false, mode: 'local' };
  }

  try {
    // Attempt dynamic mongoose connection if installed
    let mongoose;
    try {
      mongoose = require('mongoose');
    } catch {
      logger.info('Mongoose not present in environment; utilizing fast embedded data store.');
      return { isConnected: false, mode: 'local' };
    }

    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 2000,
    });
    logger.info('MongoDB connected successfully.');
    return { isConnected: true, mode: 'mongo' };
  } catch (err) {
    logger.warn(`MongoDB connection failed (${err.message}). Falling back to local datastore mode.`);
    return { isConnected: false, mode: 'local' };
  }
};

module.exports = connectDB;
