// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDocs, getFirestore, collection } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export async function getServicios() {
  const response = await getDocs(collection(db, "servicios"));
  const listaServices=[];
  response.forEach((doc) => {
    listaServices.push({id: doc.id, ...doc.data()});
  });
  return listaServices;
 
}

export async function getServicio(id) {
  const response = await getDocs(collection(db, "servicios"));
  const listaServices=[];
  response.forEach((doc) => {
    listaServices.push({id: doc.id, ...doc.data()});
  });
  return listaServices.find((service) => service.id === id);
 
}


export async function getCategory(id) {
  const response = await getDocs(collection(db, "servicios"));
  const listaServices=[];
  response.forEach((doc) => {
    listaServices.push({id: doc.id, ...doc.data()});
  });
  return listaServices.filter((service) => service.category === id);
 
}

export async function getSingleCategory(category, id) {
  const response = await getDocs(collection(db, "servicios"));
  const listaServices=[];
  response.forEach((doc) => {
    listaServices.push({id: doc.id, ...doc.data()});
  });
  const categoryServices = listaServices.filter((service) => service.category === category);
  return categoryServices.find((service) => service.id === id);
 
 
}

