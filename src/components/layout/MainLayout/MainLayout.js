import React from 'react';
import styles from './MainLayout.module.scss';
import PageNav from '../PageNav/PageNav';

class MainLayout extends React.Component {

  render() {

    return (
      <div className={styles.component}>
        <PageNav />
      </div>
    );
  }
}

export default MainLayout;
