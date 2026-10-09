const path = require('path');
const fs = require('fs');

const uploadService = {
  getBrochurePath: () => {
    return path.resolve(__dirname, '../../client/public/brochures/academy-brochure.pdf');
  },

  brochureExists: () => {
    const p = uploadService.getBrochurePath();
    return fs.existsSync(p);
  }
};

module.exports = uploadService;
