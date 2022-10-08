const firestore = require("firebase/firestore");

async function getDoc(db, path, docId) {
    const docRef = firestore.doc(db, path, docId);
    const docSnap = await firestore.getDoc(docRef);
    return docSnap;
}

exports.getDoc = getDoc;

async function getDocData(db, path, docId) {
    const docRef = firestore.doc(db, path, docId);
    const docSnap = await firestore.getDoc(docRef);
    return docSnap.data();
}

exports.getDocData = getDocData;

async function getDocs(db, path, docId) {
    const docRef = firestore.collection(db, path, docId);
    const docSnap = await firestore.getDoc(docRef);
    return docSnap;
}

exports.getDocs = getDocs;