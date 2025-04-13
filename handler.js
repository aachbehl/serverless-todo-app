module.exports.createTodo = async (event) => {
  const body = JSON.parse(event.body);

  // You’ll connect this to RDS later — for now, we just log
  console.log("Received todo:", body);

  return {
    statusCode: 201,
    body: JSON.stringify({
      message: 'Todo created successfully!',
      todo: body,
    }),
  };
};

