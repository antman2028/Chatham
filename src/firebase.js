import { initializeApp } from 'firebase/app';
import {getDocs, getFirestore, collection, onSnapshot} from 'firebase/firestore'

const firebaseApp = initializeApp({
    apiKey: "AIzaSyA_Hc_Dvxvaq7EJk3Z7Z3eGOEHr9I41m9Y",
    authDomain: "testbase-b4a3f.firebaseapp.com",
    projectId: "testbase-b4a3f",
    storageBucket: "testbase-b4a3f.appspot.com",
    messagingSenderId: "2165555351",
    appId: "1:2165555351:web:cccc6144c30b65b69f29d2"
  });

const db = getFirestore(firebaseApp);
const lst1 = collection(db, 'Users');
let final = []

async function main() {
    const data = await getDocs(lst1);
    data.forEach(doc => (final.push({...doc.data, id: doc.id})))
}

main();

export default final