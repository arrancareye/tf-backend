import { DataSource, DataSourceOptions } from 'typeorm';
import { getDatabaseConfig } from './typeorm';


const dataSource = new DataSource(getDatabaseConfig() as DataSourceOptions);

console.log('Database Name:', dataSource.options.database);

export default dataSource;