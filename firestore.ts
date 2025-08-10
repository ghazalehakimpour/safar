// firebase.ts
import { Firestore } from '@google-cloud/firestore';
import serviceAccount from './firebase-key.json';

export const firestore = new Firestore({
  projectId: serviceAccount.project_id,
  credentials: {
    client_email: serviceAccount.client_email,
    private_key: serviceAccount.private_key,
  },
});
