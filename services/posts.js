import {
	collection,
	addDoc,
	doc,
	deleteDoc,
	onSnapshot,
} from "firebase/firestore";
import { storage, db } from "./firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

// collection ref
const postsColRef = collection(db, "posts");

// get collection data
export const getPosts = async () => {
	try {
		onSnapshot(postsColRef, snapshot => {
			const postsList = snapshot.docs.map(doc => doc.data());
			console.log(postsList);
			//   return cityList;
		});
	} catch (error) {
		console.log(error);
	}
};

// get collection data
export const addPost = async (newPost, image) => {
	const imageRef = ref(
		storage,
		`images/${image.name + new Date().toISOString()}`
	);
	try {
		await uploadBytes(imageRef, image);
		const imageDownloadPath = await getDownloadURL(imageRef);
		const imagesPath = [imageDownloadPath];
		newPost.images = imagesPath;
		const addedPost = await addDoc(postsColRef, newPost);
		return addedPost;
	} catch (error) {
		console.log(error);
	}
};

// get collection data
export const deletePost = async postID => {
	const docRef = doc(db, "posts", postID.value);
	try {
		const deletedPost = await deleteDoc(docRef);
		console.log(deletedPost);
		//   return deletedPost;
	} catch (error) {
		console.log(error);
	}
};
