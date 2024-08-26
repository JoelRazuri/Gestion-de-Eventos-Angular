export interface Event {
    id: number;
    organizer: string;
    title: string;
    description: string;
    image?: string;
    date: Date;
    capacity: number;
}