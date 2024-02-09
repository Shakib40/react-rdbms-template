const Joi = require('joi');

// Define validation schema for user creation
const userCreationSchema = Joi.object({
    fullName: Joi.string().required().min(3).max(50)
      .messages({
        'string.base': 'Full name must be a string',
        'string.empty': 'Full name is required',
        'string.min': 'Full name must have at least {#limit} characters',
        'string.max': 'Full name must have at most {#limit} characters',
        'any.required': 'Full name is required',
      }),
    email: Joi.string().email().required()
      .messages({
        'string.base': 'Email must be a valid email address',
        'string.empty': 'Email is required',
        'string.email': 'Email must be a valid email address',
        'any.required': 'Email is required',
      }),
    password: Joi.string().required().min(6)
      .messages({
        'string.base': 'Password must be a string',
        'string.empty': 'Password is required',
        'string.min': 'Password must have at least {#limit} characters',
        'any.required': 'Password is required',
      }),
    role: Joi.string().valid('ADMIN', 'USER').required()
      .messages({
        'string.base': 'Role must be a string',
        'string.empty': 'Role is required',
        'any.only': 'Role must be either ADMIN or USER',
        'any.required': 'Role is required',
      }),
  }).options({ stripUnknown: true }); // Ignore unknown fields

// Validate user creation data
function ValidateUser(data) {
  return userCreationSchema.validate(data, { abortEarly: false });
}

module.exports = {
  ValidateUser,
};
