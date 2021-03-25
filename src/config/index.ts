// Dependencies
import dotenv from 'dotenv';

dotenv.config();

export default {
  appName: process.env.APP_NAME,
  environment: process.env.NODE_ENV,
  isProduction: process.env.NODE_ENV === 'production',
  jwt: {
    secret: process.env.AUTH_JWT_SECRET,
    expires: process.env.AUTH_JWT_EXPIRES,
  },
  newrelic: {
    appName: [process.env.APP_NAME],
    license: process.env.NEWRELIC_LICENSE_KEY,
    logLevel: process.env.NEWRELIC_LOG_LEVEL,
  },
  port: process.env.PORT || 3000,
  sentry: {
    dsn: process.env.SENTRY_DSN,
  },
};
