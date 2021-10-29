import React from 'react';

import { Route, Redirect } from 'react-router-dom';

export default function PublicRouter({Component,...rest}) {
    var auth=localStorage.getItem("auth");
    return (
        <>
           <Route  {...rest}  render={props=> !auth ? <Component {...props} /> : <Redirect to="/" />   } />
        </>
    )
}
