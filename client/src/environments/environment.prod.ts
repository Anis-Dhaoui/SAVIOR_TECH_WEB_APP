let accessUser = localStorage.getItem('userData');
let user = accessUser ? JSON.parse(accessUser) : null;
let token = localStorage.getItem('token');

export const environment = {
  production: true,
  checkAuth: {
    isAuthenticated: token ? true : false,
    token: token ? token : null,
    user: user ? user : null,
    isAdmin: user ? user.admin : null,
    isStatus: user ? user.status : null
  },
  url: "/api/",
};
