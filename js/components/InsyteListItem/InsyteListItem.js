import React from 'react';
import Relay from 'react-relay';

import 'babel/polyfill';
import styles from './InsyteListItem.css';

class InsyteListItem extends React.Component {
  render() {
    return (
      <div className={styles.insyte}>
        <div className={styles.insyte__heading}>
          <div className={styles['insyte__heading--name']}><a href={`/#/insyte/${this.props.insyte.rails_id}`}>{this.props.insyte.title}</a></div>
          <div className={styles['insyte__heading--date']}>by Marc-Andre Giroux</div>
        </div>
        <div className={styles.insyte__body}>
          <p>{this.props.insyte.description}</p>
        </div>
        <div className={styles.insyte__footer}>
          <div className={styles.insyte__footer__topic}><a href="#">Earth and Geography</a></div>
          <div className={styles.insyte__footer__rating}>4.5/5</div>
        </div>
      </div>
    );
  }
}

export default Relay.createContainer(InsyteListItem, {
  fragments: {
    insyte: () => Relay.QL`
      fragment on Insyte {
        rails_id
        title
        description
      }
    `
  }
});