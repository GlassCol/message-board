export interface Comment {
    id: number;
    userId: number;
    postId: number;
    votes: number;
    content: string;
    creationDate: Date;
    creationTime: Date;
}