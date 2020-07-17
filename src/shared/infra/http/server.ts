import app from './app';
import 'reflect-metadata';
import '@shared/infra/typeorm';

require('dotenv/config');

app.listen(process.env.PORT, () => {
  console.log('🚀 Running Server');
});
