import pkg from 'pg';
const { Pool } = pkg;

// Configuración de la base de datos
const pool = new Pool({
  user: 'postgres',
  host: '34.170.91.186',
  database: 'SIAE',
  password: 'postgres',
  port: '5432',
  ssl: {
    rejectUnauthorized: false,
  },
  connectionConfig: {
    charset: 'UTF8'
  },
  //host: 'localhost',
  //database: 'SIAEFINAL',
  //password: '24042002',
  //port: 5432,
  //connectionConfig:{
  //  charset:'UTF8'
  //}
});

export { pool };
