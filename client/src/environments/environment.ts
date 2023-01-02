let accessUser = localStorage.getItem('userData');
let user = accessUser ? JSON.parse(accessUser) : null;
let token = localStorage.getItem('token');


export const environment = {
  production: false,
  url: "http://localhost:3000/api/",
  imgUrl: "http://localhost:3000/images/upload/",

  checkAuth: {
    isAuthenticated: token ? true : false,
    token: token ? token : null,
    user: user ? user : null,
    isAdmin: user ? user.admin : null,
    isStatus: user ? user.status : null
  }


  //$$$$$$$$$ Block User $$$$$$$$$//


};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
