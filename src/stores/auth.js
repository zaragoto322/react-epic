import { observable, action, makeAutoObservable } from 'mobx';
import {Auth} from '../models';
import UserStore from './user';

class AuthStore {
    // @observable isLogin = false;
    // @observable isLoading = false;
    @observable values = {
        username: '',
        password: ''
    };

    constructor() {
        makeAutoObservable(this);
    };

    @action setIsLogin(isLogin) {
        this.value.isLogin = isLogin;
    }

    @action setUsername(username) {
        this.values.username = username;
    }

    @action setPassword(password) {
        this.values.password = password;
    }

    @action login() {
        return new Promise((resolve, reject) => {
            Auth.login(this.values.username, this.values.password)
            .then(user => {
                UserStore.pullUser();
                resolve(user);
            })
            .catch(error => {
                UserStore.resetUser();
                reject(error);
            })
        })

    }

    @action register() {
        return new Promise((resolve, reject) => {
            Auth.register(this.values.username, this.values.password)
            .then(user => {
                UserStore.pullUser();
                resolve(user);
            })
            .catch(error => {
                UserStore.resetUser();
                reject(error);
            })
        })
    }

    @action logout() {
        Auth.logout();
        UserStore.resetUser();
    }

}

export default new AuthStore();
