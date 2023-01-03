interface IUsers {
    id: number
    name: string,
    avatar: string,
    followers: number,
    following: number,
}

export const Users: IUsers[] = [
    {
        id: 0,
        name: 'Tokio',
        avatar: 'https://picsum.photos/200/300/?random=1',
        followers: 33,
        following: 21
    },
    {
        id: 1,
        name: 'Lauren',
        avatar: 'https://picsum.photos/200/300/?random=2',
        followers: 36,
        following: 20
    },
    {
        id: 2,
        name: 'Jordan',
        avatar: 'https://picsum.photos/200/300/?random=3',
        followers: 45,
        following: 98
    },
    {
        id: 3,
        name: 'Bill',
        avatar: 'https://picsum.photos/200/300/?random=4',
        followers: 67,
        following: 55
    },
    {
        id: 4,
        name: 'Joanne',
        avatar: 'https://picsum.photos/200/300/?random=6',
        followers: 76,
        following: 99
    },
]