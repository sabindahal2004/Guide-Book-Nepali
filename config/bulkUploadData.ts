import chapterData from '@/src/data/chapterData';
import {collection, doc, setDoc} from 'firebase/firestore';
import {db} from './firebaseConfig';
import {Alert} from 'react-native';

const chapterDetailsData = chapterData;

const bulkUploadData = async () => {
  try {
    for (let i = 0; i < chapterDetailsData.length; i++) {
      const chapterDetails = chapterDetailsData[i];
      const docRef = doc(
        collection(db, 'chapterDetails'),
        `chapterDetails_${i + 1}`,
      );
      await setDoc(docRef, chapterDetails);
      Alert.alert('Success', `Uploaded chapterDetails_${i + 1} successfully`);
    }
  } catch (error) {
    console.error('Bulk upload failed:', error);
  }
};

export default bulkUploadData;