import React from 'react'
import { Switch } from 'react-router-dom'
import PublicRouter from './../Router/PublicRouter';
import Login from './../../pages/Login/Login';
import Register from './../../pages/Register/Register';
import PrivateRouter from '../Router/PrivateRouter';
import Router from '../Router';

export default function routerLogin() {
    return (
        <Switch>
            <PublicRouter exact={true} path={"/login"} Component={Login} />
            <PublicRouter exact={false} path={"/register"} Component={Register} />
            <PrivateRouter exact={false}  >
                <Router />
            </PrivateRouter>
        </Switch>
    )
}
