
// ACTION TYPES: AUTHENTICATED AND NOT_AUTHENTICATED

export const AUTHENTICATED = 'AUTHENTICATED'
export const NOT_AUTHENTICATED = 'NOT_AUTHENTICATED' 

// 
// // RETRIEVE LAST LOGIN
// const setToken = (token) => {
//     localStorage.setItem("token", token);
//     localStorage.setItem("lastLoginTime", new Date(Date.now()).getTime());
// };

// // CALCULATE WHETHER TO TIME OUT OR NOT 
// export const getToken = () => {
//     const now = new Date(Date.now()).getTime();
//     const timeAllowed = 1000 * 60 * 30;
//     const timeSinceLastLogin = now - localStorage.getItem("lastLoginTime");
//     if (timeSinceLastLogin < timeAllowed) {
//         return localStorage.getItem("token");
//     }
// };

// // ACTUALLY TIME OUT
// const deleteToken = () => {
//   localStorage.removeItem("token");
//   localStorage.removeItem("lastLoginTime");
// }

// const options = {};


export const signupUser = (credentials) => {

    console.log("User Signed Up", credentials);
    return (dispatch) => {
      dispatch({
        type: AUTHENTICATED,
        payload: JSON.stringify({ user: credentials })
      })
    }
    // return (dispatch) => {
    //     return fetch("http://localhost:3000/signup", {
    //         method: "POST",
    //         headers: {
    //             Accept: "application/json",
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({ user: credentials })
    //     }).then((res) => {
    //         if (res.ok) {
    //             // setToken(res.headers.get("Authorization"));
    //             return res
    //                 .json()
    //                 .then((userJson) =>
    //                     dispatch({ type: AUTHENTICATED, payload: userJson })
    //                 );
    //         } else {
    //             return res.json().then((errors) => {
    //                 dispatch({ type: NOT_AUTHENTICATED });
    //                 return Promise.reject(errors);
    //             });
    //         }
    //     });
    // };
};


export const loginUser = async (credentials) => {
    console.log("User Logged In", credentials);
    // return (dispatch) => {
    //   dispatch({
    //     type: AUTHENTICATED,
    //     payload: JSON.stringify({ user: credentials })
    //   })
    // }

  //   return (dispatch) => {

  //     return fetch("http://localhost:3000/login", {
  //         method: "POST",
  //         headers: {
  //           // Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ user: credentials }),
  //     }).then((res) => {
  //       if (res.ok) {
  //       //   setToken(res.headers.get("Authorization"));
  //         return res
  //           .json()
  //           .then((userJson) => 
  //             // dispatch({ type: AUTHENTICATED, payload: userJson })
  //             {
  //               console.log("User Logged In", credentials);
  //               dispatch({ type: AUTHENTICATED, payload: userJson })
  //             }
  //           );
  //       } else {
  //         return res.json().then((errors) => {
  //           console.log("Error Logging In", credentials);
  //           dispatch({ type: NOT_AUTHENTICATED });
  //           return Promise.reject(errors);
  //         });
  //       }
  //     });
  //  };
};

export const logoutUser = () => {
    console.log("User Logged Out");

    // return (dispatch) => {
    //     return fetch("http://localhost:3000/logout", {
    //         method: "DELETE",
    //         headers: {
    //             Accept: "application/json",
    //             "Content-Type": "application/json",
    //             // Authorization: getToken(),
    //         },
    //     }).then((res) => {
    //         // deleteToken()
    //         if (res.ok) {
    //             return res.json()
    //             .then(() => dispatch({ type: NOT_AUTHENTICATED }))
    //         } else {
    //             return res.json().then((errors) => {
    //                 dispatch({ type: NOT_AUTHENTICATED })
    //                 return Promise.reject(errors)
    //             })
    //         }
    //     })
    // }
}

export const checkAuth = () => {
    console.log("Check Authentication");

  //   return (dispatch) => {
  //     return fetch("http://localhost:3000/current_user", {
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       //   Authorization: getToken()
  //       }
  //     }).then((res) => {
  //       if (res.ok) {
  //         return res
  //         .json()
  //         .then(user => {         
  //         user.data ? dispatch({type: AUTHENTICATED, payload: user}) : dispatch({type: NOT_AUTHENTICATED})})
  //       } else {
  //         return Promise.reject(dispatch({type: NOT_AUTHENTICATED})) 
  //       }
  //    });
  //  };
};