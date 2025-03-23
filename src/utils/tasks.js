import { db } from "../firebase";
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";

// Create a task
export const addTask = async (task) => {
  await addDoc(collection(db, "tasks"), task);
};

// Get tasks
export const getTasks = async () => {
  const snapshot = await getDocs(collection(db, "tasks"));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Update a task
export const updateTask = async (id, updates) => {
  await updateDoc(doc(db, "tasks", id), updates);
};

// Delete a task
export const deleteTask = async (id) => {
  await deleteDoc(doc(db, "tasks", id));
};
