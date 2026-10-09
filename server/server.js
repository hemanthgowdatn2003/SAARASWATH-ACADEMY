require('dotenv').config();
const app = require('./app');
const connectDB = require('./config/db');
const logger = require('./utils/logger');

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  // Initialize Database connection (graceful fallback)
  await connectDB();

  app.listen(PORT, '0.0.0.0', () => {
    logger.info(`===================================================`);
    logger.info(`🏛️  Saaraswath IAS/KAS Academy Backend API Server`);
    logger.info(`🚀  Running at: http://localhost:${PORT}`);
    logger.info(`🩺  Health Check: http://localhost:${PORT}/api/health`);
    logger.info(`===================================================`);
  });
};

startServer();
