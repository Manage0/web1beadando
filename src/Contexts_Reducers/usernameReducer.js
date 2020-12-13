export function usernameReducer(username, action) {
  switch (action.type) {
    case 'capitalize':
      return {username: username.username.toUpperCase()};
    case 'delete':
      localStorage.removeItem(username.username)
      window.location.href = window.location.href+'q';
      return {username: username.username}
    default:
      throw new Error();
  }
}