import instance from './instance';

export const postLogin = (user) => {
    const url = "/login";
    return instance.post(url, user);
}
