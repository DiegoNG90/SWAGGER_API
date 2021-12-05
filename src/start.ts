import app from './app';
import { createConnection } from './db';

createConnection();
console.log('db.json created!');

app.set('port', process.env.PORT || 3000);
const PORT = app.get('port');

app.listen(PORT, () => {
  console.log('Server listening on port', PORT);
});
