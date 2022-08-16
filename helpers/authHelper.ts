import jwt_decode from "jwt-decode";

export const bearerToken = () => {
    return JSON.parse(localStorage.getItem('logged_in_info')) ? JSON.parse(localStorage.getItem('logged_in_info')).accessToken : null;
}

export const login = (data) => {
    localStorage.setItem('logged_in_info', JSON.stringify(data));
};

export const setUserType = (data) => {
    localStorage.setItem('user_type', data);
};

export const getUserType = (data) => {
    localStorage.getItem('user_type', data);
};

export const logout = () => {
    localStorage.removeItem('logged_in_info');
};
export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('logged_in_info')) ? JSON.parse(localStorage.getItem('logged_in_info')).user : null

};
export const getCurrentUserId = () => {
    const user = getCurrentUser();

    if (!user) return null;

    return user.id;
}
export const getCurrentUserIdentifier = () => {
    const user = getCurrentUser();

    if (!user) return null;

    return user.identifier;
}
export const isLoggedIn = () => {
    const logged_in_info = JSON.parse(localStorage.getItem('logged_in_info'));
    if (logged_in_info) {
        return true;
    } else {
        return false;
    }
};
export const isValidSession = () => {
    const logged_in_info = JSON.parse(localStorage.getItem('logged_in_info'));
    if (logged_in_info) {
        const decodedJwt = jwt_decode(logged_in_info.accessToken);
        if (decodedJwt.exp * 1000 < Date.now()) {
            return false;
        } else {
            return true;
        }
    }
};
