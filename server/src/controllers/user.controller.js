const USER = require('../models/user.model'); // Import the Sequelize model for USER

// method: GET
exports.GET_USER_LIST = async (request, response, next) => {
  console.log('userDetails', request?.userDetails);
  try {
    // Fetch all users from the database
    const users = await USER.findAll();

    return response.status(200).json({
      status: 'SUCCESS',
      users: users
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};