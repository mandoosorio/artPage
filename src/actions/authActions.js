import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import {
    GET_ERRORS,
    SET_CURRENT_USER,
    USER_LOADING,
    USERS_LOGOUT
} from "./types";
// import { userConstants } from "./types";
// Register user
export const registerUser = (userDate, history) => dispatch => {
    axios
    .post("/api/users/register", userDate)
    .setAuthToken(res => history.oush("/login"))
    .catch(err =>
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    );
};

// Login - get user token
export const loginUser = userData => dispatch => {
    axios
    .post("/api/users/login", userData)
    .then(res => {
        const { token }=res.data;
        localStorage.setItem("jwtToken", token);
        setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(setCurrentUser(decoded));
    })
    .catch(err => 
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    );
};

export const setCurrentUser = decoded => {
    return{
        type: SET_CURRENT_USER,
        payload: decoded
    };
};

export const setUserLoading = () => {
    return {
        type: USER_LOADING
    };
};

export const logoutUser = (dispatch) => {
    // Remove token from local storage
    localStorage.removeItem("jwtToken");
    // remove auth header for furture requests
    setAuthToken(false);
    // Set current user to empty object {} which whill set isAuthenticated to false
    dispatch(setCurrentUser({}));
    return {
        type: USERS_LOGOUT
    };
};

// export default connect(
//     mapStateToProps,
//     { logoutUser }
// )(Logout);

// export default logoutUser;

