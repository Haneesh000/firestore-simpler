const firestore = require("firebase/firestore");

async function addDoc(db, path, dataObject) {
    const docRef = firestore.collection(db, path);
    await firestore.addDoc(docRef, dataObject);
}

exports.addDoc = addDoc;

async function addDocCustomId(db, path, dataObject, docId) {
    const docRef = firestore.doc(db, path, docId);
    await firestore.setDoc(docRef, dataObject);
}

exports.addDocCustomId = addDocCustomId;
