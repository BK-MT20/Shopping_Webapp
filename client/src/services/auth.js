import instance from "../axios";

export const handleSignIn = (data) => {
    return instance.post('signin', data)
}

export const handleSignup = (data) => {
    return instance.post('signup', data)
}