const firestore = require("firebase/firestore");

async function deleteDoc(db, path, docId) {
    const docRef = firestore.doc(db, path, docId);
    await firestore.deleteDoc(docRef);
}

exports.deleteDoc = deleteDoc;
