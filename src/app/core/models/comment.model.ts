export interface Comment{
    _id: string,
    ownerId: string,
    postId: string,
    content: string,
    created_at: Date,
    updated_at: Date
}