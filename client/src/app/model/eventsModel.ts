export class EVENTS {
    id!: string;
    event_title!: string;
    event_image!: string;
    event_category!: string;
    event_description!: string;
    event_start_date!: Date;
    event_end_date!: Date;
    event_status!: boolean;
    event_location!: string;
    event_price!: number;
    event_orgoniser!: string;
    event_max_participant!: number;
    createdAt!: Date;
    updatedAt!: Date;
    Users!: [];
    Reviews!: []
}