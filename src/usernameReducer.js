export function usernameReducer(username, action) {
  switch (action.type) {
    case 'capitalize':
      return {username: username.toUpperCase()};
    case 'delete':
      return {username:""};
    default:
      throw new Error();
  }
}