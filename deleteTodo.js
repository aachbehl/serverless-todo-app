// deleteTodo.js
const { Client } = require('pg');

module.exports.deleteTodo = async (event) => {
  const { id } = JSON.parse(event.body);

  const client = new Client({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: 5432,
    ssl: { rejectUnauthorized: false },
  });

  try {
    await client.connect();

    await client.query('DELETE FROM todos WHERE id = $1', [id]);

    await client.end();

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Todo deleted successfully' }),
    };
  } catch (error) {
    console.error('Delete error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal server error' }),
    };
  }
};

