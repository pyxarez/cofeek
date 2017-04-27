import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAnyXvDWzy2qN2EyfH3Huu22uDKdFt0ZM4",
  authDomain: "cofeek-d29a2.firebaseapp.com",
  databaseURL: "https://cofeek-d29a2.firebaseio.com",
  projectId: "cofeek-d29a2",
  storageBucket: "cofeek-d29a2.appspot.com",
  messagingSenderId: "656103314123"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const database = firebase.database();

// const ref = database.ref('products/coffee');
// const generateProducts = () => {
//   const dataToPost = {}
//   const coffeeNames = [
//     "Cappuccino",
//     "Cappuccino-cups",
//     "Cappuccino",
//     "Carajillo",
//     "Cortado",
//     "Cuban espresso",
//     "Espresso",
//     "Eiskaffee",
//     "The Flat White",
//     "Frappuccino",
//     "Galao"
//   ];

//   coffeeNames.forEach(name => {
//     const key = ref.push().key;
//     dataToPost[key] = {
//       id: key,
//       name,
//       cost: Math.floor(Math.random() * 3000),
//       url: "https://firebasestorage.googleapis.com/v0/b/cofeek-d29a2.appspot.com/o/SG_Coffee_SFMOMA.png?alt=media&token=2b8a242b-d0ce-4b1d-8cdf-b75f113253f0"
//     }
//   });

//   return dataToPost;
// }

// ref.set(generateProducts());

