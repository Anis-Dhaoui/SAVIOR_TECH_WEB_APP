export class REVIEW {
    id!: string;
    message!: string;
    rating!: number;
    createdAt!: Date;
    updatedAt!: Date;
    User!: {
        id: string;
        fullName: string;
        avatar: string;
    }
}