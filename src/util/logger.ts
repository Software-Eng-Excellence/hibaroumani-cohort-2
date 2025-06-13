import config from "../config";
import winston from "winston";

const { logDir, isDev } = config;

const logFileFormat = winston.format.combine(
    winston.format.timestamp(),
    winston.format.json(),
    winston.format.splat(),//allows the usage of %s/%o/%d to specify the type of the value of the variable in the log message
    winston.format.errors({ stack: true }),//include stack trace for errors
    winston.format.printf(({ timestamp, level, message, stack }) => {
        return `[${timestamp}] ${level.toUpperCase()}: ${message} ${stack || ""}`; // a function that formats the log message in the file
    })
)

const logConsoleFormat = winston.format.combine(
    winston.format.colorize(),//colorize log messages in the console  
    winston.format.timestamp({ format: "HH:mm:ss" }),
    winston.format.errors({ stack: true }),
    winston.format.splat(),
    winston.format.printf(({ timestamp, level, message, stack }) => {
        return `[${timestamp}] ${level}: ${message} ${stack || ""}  `;// a function that formats the log message in the console
    }),
)

const logger = winston.createLogger({
    level: "info",
    transports: [//transports are used to log messages to different destinations
        new winston.transports.File({
            filename: "/error.log",//save errors to file logs/error.log
            dirname: logDir,
            level: "error",
            format: logFileFormat
        }),
        new winston.transports.File({ filename: "/all.log", dirname: logDir, format: logFileFormat })//all logs in one file 
    ],
    exceptionHandlers: [new winston.transports.File({
        filename: "/exceptions.log",//save exceptions to file 
        dirname: logDir,
    })],

})

if (isDev) {
    logger.add(new winston.transports.Console({
        format: logConsoleFormat
    }));
    logger.level = "debug";//log all messages in the console
}
export default logger;