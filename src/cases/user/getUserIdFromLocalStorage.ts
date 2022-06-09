export const getUserIdFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    let user;
    const localUser = window.localStorage.getItem('@domBarber:user');
    if (localUser !== null) {
      user = JSON.parse(localUser);
      const { uid } = user;
      return uid;
    }
  }
  return undefined;
};
