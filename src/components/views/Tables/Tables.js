import React from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Tables extends React.Component {

  render() {


    return (
      <div className={styles.component}>
        <h2> Tables view </h2>

        <Link to={`${process.env.PUBLIC_URL}/tables/booking/:id`}>BookingID</Link>
        <br />
        <Link to={`${process.env.PUBLIC_URL}/tables/bookings/new`}>BookingNew</Link>
        <br />
        <Link to={`${process.env.PUBLIC_URL}/tables/event/:id`}>Event ID</Link>
        <br />
        <Link to={`${process.env.PUBLIC_URL}/tables/events/new`}>BookingEvent</Link>


      </div>

    );
  }
}

Tables.propTypes = {
  id: PropTypes.string,
};


export default Tables;
