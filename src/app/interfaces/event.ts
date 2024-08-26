export interface IEvent {
    id: number;
    organizer: string;
    tilte: string;
    description: string;
    image?: string;
    date: Date;
    capacity: number;
}