const app = require('./app');

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server listening in ${process.env.NODE_ENV} mode at http://localhost:${PORT}`);
});