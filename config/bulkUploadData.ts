import essayData from '@/src/data/essayData';
import {doc, setDoc} from 'firebase/firestore';
import {Alert} from 'react-native';
import {db} from './firebaseConfig';

const essayDetailsData = essayData;

const bulkUploadData = async () => {
  try {
    for (let i = 0; i < essayDetailsData.length; i++) {
      const essayDetails = essayDetailsData[i];
      const docRef = doc(db, 'essayDetails', String(essayDetails.id));
      await setDoc(docRef, essayDetails);
      Alert.alert('Success', `Uploaded essayDetails_${i + 1} successfully`);
    }
  } catch (error) {
    console.error('Bulk upload failed:', error);
  }
};

export default bulkUploadData;
