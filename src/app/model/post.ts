export interface Post {
    id: number;
    userId: number;
    threadId: number;
    votes: number;
    content: string;
    title: string;
    creationDate: Date;
    creationTime: Date;
}