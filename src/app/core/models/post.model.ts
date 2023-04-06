export interface Post{
    _id: string|'',
    ownerId: string|'',
    content: string,
    created_at: Date,
    updated_at: Date
}