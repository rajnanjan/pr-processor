import app from './app.js'
import {connectDB} from './db/connect.js';
import 'dotenv/config.js';
const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
