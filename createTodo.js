const { Client } = require('pg');

module.exports.createTodo = async (event) => {
  const client = new Client({
    host: 'todo-db.cmhuk6qq6f7c.us-east-1.rds.amazonaws.com',
    user: 'admin_1234',
    password: 'admin_1234',
    database: 'postgres',
    port: 5432,
     ssl: {
    rejectUnauthorized: false // Accept self-signed certs
  }
  });

  try {
    await client.connect();

    const { title, description } = JSON.parse(event.body);

    await client.query(
      'INSERT INTO todos (title, description) VALUES ($1, $2)',
      [title, description]
    );

    await client.end();

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Todo created successfully' }),
    };
  } catch (error) {
    console.error('Database error:', error.stack);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal server error' }),
    };
  }
};


