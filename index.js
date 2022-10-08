const firestore = require("firebase/firestore");

const readFunctions = require("./functions/readFunctions");
const createFunctions = require("./functions/createFunctions");
const updateFunctions = require("./functions/updateFunctions");
const deleteFunctions = require("./functions/deleteFunctions");

function init(firebaseAppInstance) {
    return firestore.getFirestore(firebaseAppInstance);
}

// Main functions
exports.init = init;

// Create functions
exports.addDoc = createFunctions.addDoc;
exports.addDocCustomId = createFunctions.addDocCustomId;

// Read functions
exports.getDoc = readFunctions.getDoc;
exports.getDocData = readFunctions.getDocData;
exports.getDocs = readFunctions.getDocs;

// Update functions
exports.updateDoc = updateFunctions.updateDoc;

// Delete functions
exports.deleteDoc = deleteFunctions.deleteDoc;
