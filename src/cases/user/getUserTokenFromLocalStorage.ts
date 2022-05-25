export const getUserTokenFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    let token;
    const localToken = window.localStorage.getItem('@domBarber:token');
    if (localToken !== null) {
      token = JSON.parse(localToken);
      return token;
    }
  }
  return undefined;
};
