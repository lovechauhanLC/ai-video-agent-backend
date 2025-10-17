export function errorHandler(err, req, res, next) {
  console.error("Error:", err);
  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
}