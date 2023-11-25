const { esPar } = require("./numeros");
const Logger = require("logplease");
const logger = Logger.create("utils");

function ErrorOrInfo(a) {
  if (a === true) {
    logger.info(a);
  } else {
    logger.error(a);
  }
}

ErrorOrInfo(esPar(2));
ErrorOrInfo(esPar(3));
ErrorOrInfo(esPar(101));
ErrorOrInfo(esPar(201));
ErrorOrInfo(esPar(202));
ErrorOrInfo(esPar(100));
