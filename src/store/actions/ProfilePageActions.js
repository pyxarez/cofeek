import {
  USER_DATA_RECEIVED
} from '../constants/ProfilePage.js';
import { database } from '../../firebaseApp';

const userDataReceived = data => ({
  type: USER_DATA_RECEIVED,
  payload: { ...data },
});

export const listenToProfileData = (userId) =>
  async dispatch => {
    try {
      const ref = database.ref(`users/${userId}/profile`);
      const snapshot = await ref.once('value');
      const data = snapshot.val();
      
      if (data !== null) {
        dispatch( userDataReceived(data) );
      } else {
        dispatch( userDataReceived({}) );
      }
    } catch(error) {
      throw Error(error);
    }
  }