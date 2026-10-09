const logger = {
  info: (...args) => console.log(`[INFO ${new Date().toISOString().slice(11, 19)}]`, ...args),
  warn: (...args) => console.warn(`[WARN ${new Date().toISOString().slice(11, 19)}]`, ...args),
  error: (...args) => console.error(`[ERROR ${new Date().toISOString().slice(11, 19)}]`, ...args),
  debug: (...args) => {
    if (process.env.NODE_ENV !== 'production') {
      console.log(`[DEBUG ${new Date().toISOString().slice(11, 19)}]`, ...args);
    }
  }
};

module.exports = logger;
