import { Booking } from '../../types';
import styles from './index.module.css';

type BookingListProps = {
  bookings: Booking[];
};

const BookingList = ({ bookings }: BookingListProps) => {
  return (
    <ul>
      {bookings.map((booking) => (
        <li className={styles.booking} key={booking.id}>
          <div>
            <h2>{booking.title}</h2>
            <h3>{booking.price}</h3>
          </div>
          <p className={styles.date}>{booking.time.toString()}</p>
        </li>
      ))}
    </ul>
  )
};

export default BookingList;
