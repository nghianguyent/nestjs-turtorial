import { TypeOrmModule } from '@nestjs/typeorm';

const ormConfig: Mys = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  database: 'test',
  password: '123456',
};

export default ormConfig;
