// @ts-ignore
import { firestore } from 'firebase';
import FirestoreDocument from '../model/FirestoreDocument';

export const extractDataWithDocumentId = <T extends FirestoreDocument>(
  document: firestore.DocumentSnapshot<firestore.DocumentData>,
): T => {
  const data = document.data();
  return {
    ...data,
    id: document.id,
  } as T;
};
