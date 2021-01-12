import FirestoreDocument from '../../shared/model/FirestoreDocument';

export interface BlogPost extends FirestoreDocument {
  contentJson: string;
  userId: string;
  name: string;
  deleted: boolean;
  blogFile: string;
}

export interface Blog {
  contentJson: string;
  userId: string;
  name: string;
  deleted: boolean;
  blogFile: string;
}