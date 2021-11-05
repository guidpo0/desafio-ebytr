module.exports = {
  INVALID_EMAIL_ERROR: {
    err: {
      code: 'invalid_email',
      message: 'Email already in use',
    },
  },
  USER_NOT_ADMIN_ERROR: {
    err: {
      code: 'user_not_admin',
      message: 'User logged is not a admin',
    },
  },
  EMAIL_NOT_FOUND_ERROR: {
    err: {
      code: 'email_not_found',
      message: 'Email not found',
    },
  },
  INTERNAL_SERVER_ERROR: {
    err: {
      code: 'internal_error',
      message: 'Internal server error',
    },
  },
  INCORRECT_PASSWORD_ERROR: {
    err: {
      code: 'password_incorrect',
      message: 'Password incorrect',
    },
  },
  USER_NOT_FOUND_ERROR: {
    err: {
      code: 'user_not_found',
      message: 'User not found',
    },
  },
  INVALID_TOKEN_ERROR: {
    err: {
      code: 'invalid_token',
      message: 'Invalid token or no token provided',
    },
  },
};
