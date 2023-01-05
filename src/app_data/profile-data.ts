interface IProfilePosts {
    id: number,
    picture: string,
    likes: number,
    content: string

}

interface ITagUser extends IProfilePosts {
    secondAvatar: string,
    secondName: string
}



export const ProfilePosts: IProfilePosts[] = [
    {
        id: 0,
        picture: 'https://picsum.photos/200/300/?random=13',
        likes: 20,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet luctus pellentesque. Vivamus quis sapien euismod, gravida diam non, porttitor odio. Pellentesque nec lorem leo. Praesent at nibh eget magna commodo tempus congue eget ligula. '
    },
    {
        id: 1,
        picture: 'https://picsum.photos/200/300/?random=14',
        likes: 30,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet luctus pellentesque. Vivamus quis sapien euismod, gravida diam non, porttitor odio. Pellentesque nec lorem leo. Praesent at nibh eget magna commodo tempus congue eget ligula. '
    },
    {
        id: 2,
        picture: 'https://picsum.photos/200/300/?random=15',
        likes: 40,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet luctus pellentesque. Vivamus quis sapien euismod, gravida diam non, porttitor odio. Pellentesque nec lorem leo. Praesent at nibh eget magna commodo tempus congue eget ligula. '
    },
    {
        id: 3,
        picture: 'https://picsum.photos/200/300/?random=16',
        likes: 50,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet luctus pellentesque. Vivamus quis sapien euismod, gravida diam non, porttitor odio. Pellentesque nec lorem leo. Praesent at nibh eget magna commodo tempus congue eget ligula. '
    },
    {
        id: 4,
        picture: 'https://picsum.photos/200/300/?random=18',
        likes: 25,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet luctus pellentesque. Vivamus quis sapien euismod, gravida diam non, porttitor odio. Pellentesque nec lorem leo. Praesent at nibh eget magna commodo tempus congue eget ligula. '
    },
]

export const TagsPosts: ITagUser[] = [
    {
        id: 0,
        secondName: 'Tokio',
        secondAvatar: 'https://picsum.photos/200/300/?random=1',
        picture: 'https://picsum.photos/200/300/?random=13',
        likes: 20,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet luctus pellentesque. Vivamus quis sapien euismod, gravida diam non, porttitor odio. Pellentesque nec lorem leo. Praesent at nibh eget magna commodo tempus congue eget ligula. '
    },
    {
        id: 1,
        secondName: 'Lauren',
        secondAvatar: 'https://picsum.photos/200/300/?random=2',
        picture: 'https://picsum.photos/200/300/?random=14',
        likes: 30,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet luctus pellentesque. Vivamus quis sapien euismod, gravida diam non, porttitor odio. Pellentesque nec lorem leo. Praesent at nibh eget magna commodo tempus congue eget ligula. '
    },
    {
        id: 2,
        secondName: 'Jordan',
        secondAvatar: 'https://picsum.photos/200/300/?random=3',
        picture: 'https://picsum.photos/200/300/?random=15',
        likes: 40,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet luctus pellentesque. Vivamus quis sapien euismod, gravida diam non, porttitor odio. Pellentesque nec lorem leo. Praesent at nibh eget magna commodo tempus congue eget ligula. '
    },
    {
        id: 3,
        secondName: 'Bill',
        secondAvatar: 'https://picsum.photos/200/300/?random=4',
        picture: 'https://picsum.photos/200/300/?random=16',
        likes: 50,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet luctus pellentesque. Vivamus quis sapien euismod, gravida diam non, porttitor odio. Pellentesque nec lorem leo. Praesent at nibh eget magna commodo tempus congue eget ligula. '
    },
    {
        id: 4,
        secondName: 'Joanne',
        secondAvatar: 'https://picsum.photos/200/300/?random=5`',
        picture: 'https://picsum.photos/200/300/?random=18',
        likes: 25,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet luctus pellentesque. Vivamus quis sapien euismod, gravida diam non, porttitor odio. Pellentesque nec lorem leo. Praesent at nibh eget magna commodo tempus congue eget ligula. '
    },
]