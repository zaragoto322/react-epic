import { createContext, useContext } from 'react';
import AuthStore from './auth';
import UserStore from  './user';

const context = createContext({
    AuthStore,
    UserStore
});

window.stores = {
    AuthStore,
    UserStore
}//用于Header.js查看属性名

export const useStores = () => useContext(context);
 