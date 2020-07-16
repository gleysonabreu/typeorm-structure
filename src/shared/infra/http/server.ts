import app from './app';
import 'reflect-metadata';
import '@shared/infra/typeorm';

app.listen(3000, () => {
  console.log('🚀 Running Server');
});
