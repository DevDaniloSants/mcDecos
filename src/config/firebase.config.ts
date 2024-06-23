import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyCXZRPaoRew-joRgsL01wh5wiyteyob9IA',
    authDomain: 'mcdecos-55b63.firebaseapp.com',
    projectId: 'mcdecos-55b63',
    storageBucket: 'mcdecos-55b63.appspot.com',
    messagingSenderId: '183845019422',
    appId: '1:183845019422:web:154d826e198e9aa7edf30f',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
