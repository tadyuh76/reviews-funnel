import { getFirestore } from '@firebase/firestore'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyC9vvVAdlGNV9b5epQJx1JXB0d7zyB7roM',
  authDomain: 'reviews-funnel.firebaseapp.com',
  projectId: 'reviews-funnel',
  storageBucket: 'reviews-funnel.appspot.com',
  messagingSenderId: '535071936213',
  appId: '1:535071936213:web:332a8cfb060da1e9791c5c',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
