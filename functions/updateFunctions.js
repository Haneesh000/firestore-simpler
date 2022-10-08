const firestore = require("firebase/firestore");

async function updateDoc(db, path, dataObject, docId) {
    const docRef = firestore.doc(db, path, docId);
    await firestore.updateDoc(docRef, dataObject);
}

exports.updateDoc = updateDoc;
