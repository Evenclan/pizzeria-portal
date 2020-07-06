import React from 'react';
import PropTypes from 'prop-types';
// import styles from './MainLayout.module.scss';
import PageNav from '../PageNav/PageNav';


const MainLayout = ({ children }) => {
  return (
    <div>
      <PageNav />
      {children}
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.object,
};

export default MainLayout;
