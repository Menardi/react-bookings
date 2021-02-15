import React from 'react';

import styles from './App.module.css';
import BookingList from './components/BookingList';
import { BOOKINGS } from './constants';

function App() {
  return (
    <div className={styles.app}>
      <h1>Your Bookings</h1>
      <label>
        <input type="checkbox" />
        Hide completed bookings
      </label>
      <BookingList bookings={BOOKINGS} />
    </div>
  );
}

export default App;
