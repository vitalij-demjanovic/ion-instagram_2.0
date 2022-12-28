interface ITrendingPosts {
    id: number,
    user: string,
    avatar: string,
    picture: string,
    likes: number,
    content: string

}

export const TrendingPosts: ITrendingPosts[] = [
    {
        id: 0,
        user: 'Tokio',
        avatar: 'https://picsum.photos/200/300/?random=1',
        picture: 'https://picsum.photos/200/300/?random=13',
        likes: 20,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet luctus pellentesque. Vivamus quis sapien euismod, gravida diam non, porttitor odio. Pellentesque nec lorem leo. Praesent at nibh eget magna commodo tempus congue eget ligula. '
    },
    {
        id: 1,
        user: 'Lauren',
        avatar: 'https://picsum.photos/200/300/?random=2',
        picture: 'https://picsum.photos/200/300/?random=14',
        likes: 30,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet luctus pellentesque. Vivamus quis sapien euismod, gravida diam non, porttitor odio. Pellentesque nec lorem leo. Praesent at nibh eget magna commodo tempus congue eget ligula. '
    },
    {
        id: 2,
        user: 'Jordan',
        avatar: 'https://picsum.photos/200/300/?random=3',
        picture: 'https://picsum.photos/200/300/?random=15',
        likes: 40,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet luctus pellentesque. Vivamus quis sapien euismod, gravida diam non, porttitor odio. Pellentesque nec lorem leo. Praesent at nibh eget magna commodo tempus congue eget ligula. '
    },
    {
        id: 3,
        user: 'Bill',
        avatar: 'https://picsum.photos/200/300/?random=4',
        picture: 'https://picsum.photos/200/300/?random=16',
        likes: 50,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet luctus pellentesque. Vivamus quis sapien euismod, gravida diam non, porttitor odio. Pellentesque nec lorem leo. Praesent at nibh eget magna commodo tempus congue eget ligula. '
    },
    {
        id: 4,
        user: 'Joanne',
        avatar: 'https://picsum.photos/200/300/?random=6',
        picture: 'https://picsum.photos/200/300/?random=18',
        likes: 25,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet luctus pellentesque. Vivamus quis sapien euismod, gravida diam non, porttitor odio. Pellentesque nec lorem leo. Praesent at nibh eget magna commodo tempus congue eget ligula. '
    },
]