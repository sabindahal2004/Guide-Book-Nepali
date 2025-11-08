import chapterData from '@/src/data/chapterData';
import {doc, setDoc} from 'firebase/firestore';
import {Alert} from 'react-native';
import {db} from './firebaseConfig';

const chapterDetailsData = chapterData;

const bulkUploadData = async () => {
  try {
    for (let i = 0; i < chapterDetailsData.length; i++) {
      const chapterDetails = chapterDetailsData[i];
      const docRef = doc(db, 'chapterDetails', String(chapterDetails.id));
      await setDoc(docRef, chapterDetails);
      Alert.alert('Success', `Uploaded chapterDetails_${i + 1} successfully`);
    }
  } catch (error) {
    console.error('Bulk upload failed:', error);
  }
};

export default bulkUploadData;
