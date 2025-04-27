export const requestTime = (req, res, next) => {
  req.requestTime = new Date().toLocaleString();
  next();
};
export const myLogger = (req, res, next) => {
  console.log("middleware: LOGGED");
  console.log(`----Fecha, hora: ${req.requestTime}----`);
  console.table({
    "Request URL": req.url,
    "Request method": req.method,
    "Request body": JSON.stringify(req.body),
  });
  next();
};
