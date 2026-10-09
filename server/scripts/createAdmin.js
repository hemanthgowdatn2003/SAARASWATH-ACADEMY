require('dotenv').config();
const bcrypt = require('bcryptjs');
const Admin = require('../models/Admin');
const logger = require('../utils/logger');

const createAdmin = async () => {
  const email = process.env.ADMIN_EMAIL || 'admin@saaraswath.com';
  const password = process.env.ADMIN_PASSWORD || 'Admin@123';
  const name = 'Dr. Vasanth Kumar N';

  try {
    const existing = await Admin.findOne({ email });
    if (existing) {
      logger.info(`Admin user already exists for ${email}`);
      return;
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    await Admin.create({
      name,
      email,
      passwordHash,
      role: 'superadmin'
    });

    logger.info(`Successfully created admin user: ${email}`);
  } catch (err) {
    logger.error('Failed to create admin user:', err.message);
  }
};

if (require.main === module) {
  createAdmin().then(() => process.exit(0));
}

module.exports = createAdmin;
