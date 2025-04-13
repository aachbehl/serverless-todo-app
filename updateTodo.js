// updateTodo.js
const { Client } = require('pg');

module.exports.updateTodo = async (event) => {
  const { id, title, description } = JSON.parse(event.body);

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

    await client.query(
      'UPDATE todos SET title = $1, description = $2 WHERE id = $3',
      [title, description, id]
    );

    await client.end();

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Todo updated successfully' }),
    };
  } catch (error) {
    console.error('Update error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal server error' }),
    };
  }
};

