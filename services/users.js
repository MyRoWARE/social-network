import { collection, addDoc, doc, deleteDoc, onSnapshot } from 'firebase/firestore';
import { db } from './firebase';

// collection ref
const usersColRef = collection(db, 'users');

// get collection data
export const getUsers = async () => {
  try {
    onSnapshot(usersColRef, (snapshot) => {
      const users = snapshot.docs.map((snapshotDoc) => snapshotDoc.data());
      console.log(users);
      //   return cityList;
    });
  } catch (error) {
    console.log(error);
  }
};

// get collection data
export const addUser = async (newUser) => {
  try {
    const addedUser = await addDoc(usersColRef, newUser);
    console.log(addedUser);
    return addedUser;
  } catch (error) {
    console.log(error);
    return {};
  }
};

// get collection data
export const deleteUser = async (userID) => {
  const docRef = doc(db, 'users', userID.value);
  try {
    const deletedUser = await deleteDoc(docRef);
    console.log(deletedUser);
    //   return deletedPost;
  } catch (error) {
    console.log(error);
  }
};
