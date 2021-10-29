import React from 'react';

import { Route, Redirect } from 'react-router-dom';

export default function PrivateRouter({children,...rest}) {
    var auth=localStorage.getItem("auth");
    return (
        <>
           <Route    {...rest}  render={props=> auth ? children : <Redirect to="/login" />   } />
        </>
    )
}
