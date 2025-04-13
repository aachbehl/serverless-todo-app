// getTodos.js
const { Client } = require('pg');

module.exports.getTodos = async () => {
  const client = new Client({
    host: 'todo-db.cmhuk6qq6f7c.us-east-1.rds.amazonaws.com',
    user: 'admin_1234',
    password: 'admin_1234',
    database: 'postgres',
    port: 5432,
    ssl: { rejectUnauthorized: false }
  });

  try {
    await client.connect();

    const result = await client.query('SELECT * FROM todos');
    await client.end();

    return {
      statusCode: 200,
      body: JSON.stringify(result.rows),
    };
  } catch (error) {
    console.error('Database error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal server error' }),
    };
  }
};

