import pkg from 'pg';
const { Pool } = pkg;

// Configuración de la base de datos
const pool = new Pool({
  user: 'postgres',
  password: '24042002',
  host: 'localhost',
  port: 5432,
  database: 'SIAEFINAL',
  connectionConfig: {
    charset: 'UTF8'
  },
});

export { pool };
