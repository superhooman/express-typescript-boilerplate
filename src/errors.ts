interface dictType {
    [key: string]: string
}

const errors: dictType = {
  INVALID_REGISTER_DATA: "Your data doesn't meet requirments",
  USER_EXISTS: 'User with this login already exists',
  INVALID_LOGIN_DATA: 'There are errors in your data',
  LOGIN_ERROR: 'Invalid login/password combination',
  NO_SESSION: 'Invalid session',
};

export default errors;
