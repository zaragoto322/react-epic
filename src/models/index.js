import AV, { User } from 'leancloud-storage';

AV.init({
    appId: "GEplez98iNCMoSRo0hH1oiXg-gzGzoHsz",
    appKey: "29NxUT37LIrjiP9zj3D1CbC5",
    serverURL: "https://leancloud.zaragoto.top"
  });
  console.log('start...')


const Auth = {
    register(username, password) {
        let user = new User();
        user.setUsername(username);
        user.setPassword(password);
        return new Promise((resolve, reject) => {
            user.signUp().then(loginedUser => resolve(loginedUser), error => reject(error))
        });
    },

    login(username, password) {
        return new Promise((resolve, reject) => {
            User.logIn(username, password).then(loginedUser => resolve(loginedUser,), error => reject(error))
        });
    },

    logout() {
        User.logOut();
    },

    getCurrentUser() {
        return User.current();
    }
}


  export default Auth;