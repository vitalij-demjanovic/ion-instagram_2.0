interface ILoginUser {
    name: string;
    avatar: string
    posts: number
    followers: number;
    following: number;
}

export const LoginUser: ILoginUser = {
    name: 'vitalij',
    avatar: '',
    posts: 0,
    followers: 150,
    following: 8,
}