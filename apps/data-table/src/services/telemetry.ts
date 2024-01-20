import { ErrorInfo } from 'react';

// Do something with the error, e.g. log to an external API
const errorLogger = (error: Error, info: ErrorInfo) => {
  console.error(error);
};

export { errorLogger };
