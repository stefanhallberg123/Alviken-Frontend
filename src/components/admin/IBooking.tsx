export default interface IBooking {
    comment: string;
    date: string;
    timeslot: string;
    qty: string;
    user: {
        name: string;
        email: string;
        phone: string;
    }
}