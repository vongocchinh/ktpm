import Axios from "axios";
import { browserHistory } from 'react-router';
import { login_fail,login_success } from './../../constant/login';
export const login=(username,password)=>{
    return function (dispatch) {
        return Axios.post(`localhost:3001/auth/login`, { username, password })
          .then((response) => {
            localStorage.setItem('token', response.data.token);
            browserHistory.push('/');
            dispatch(loginSuccess());
          })
          .catch(() => {
            dispatch(loginFail("fail"));
          });
      };
}

export const loginSuccess=()=>{
    return{
        type:login_success
    }
}

export const loginLoading=()=>{
    return{

    }
}


export const loginFail=(message)=>{
    return{
        type:login_fail,
        // message
    }
}