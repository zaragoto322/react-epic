import React from "react";
import { useStores } from '../stores';
import { observer } from 'mobx-react';

const Home = observer(() => {
    const { UserStore } = useStores();
    return (
        <> <h1>{
            UserStore.currentUser ? <>
                Hello {UserStore.currentUser.attributes.username}
            </> : "用户尚未登录"
        }</h1>
        </>
    );
})

export default Home;
