interface IMessages {
    id: number,
    avatar: string,
    user: string,
    messageBody: string
}

export const Messages: IMessages[] = [
    {
        id: 0,
        user: 'Tokio',
        avatar: 'https://picsum.photos/200/300/?random=1',
        messageBody: 'Sewas....tak ako ti ide Ionic'
    },
    {
        id: 1,
        user: 'Lauren',
        avatar: 'https://picsum.photos/200/300/?random=2',
        messageBody: 'Zmeníš niečo v mojej appke??'
    },

]