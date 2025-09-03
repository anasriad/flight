import pino from "pino";

const log = pino({
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true, // adds colors
      translateTime: "SYS:standard", // readable timestamp
      singleLine: true
    }
  }
});

export default log;
