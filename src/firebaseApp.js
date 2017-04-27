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

// const productsRef = database.ref('products/coffee');
// const globRef = database.ref()

// const updateCart = ref => {
//   const uid = "MoCHcd5p26bfHSarTQvKANqc9Q93";
//   const newUser = {
//     uid,
//     cart: {
//       "-Kik-5eBXALOGDOVwuFk": {
//         "cost" : 2133,
//         "count" : 1,
//         "id" : "-Kik-5eBXALOGDOVwuFk",
//         "name" : "Colombia El Jordan",
//         "url" : "https://firebasestorage.googleapis.com/v0/b/cofeek-d29a2.appspot.com/o/SG_Coffee_SFMOMA.png?alt=media&token=2b8a242b-d0ce-4b1d-8cdf-b75f113253f0"
//       },
//       "-Kik-5eBXALOGDOVwuFl" : {
//         "cost" : 1435,
//         "count" : 2,
//         "id" : "-Kik-5eBXALOGDOVwuFl",
//         "name" : "Passport Trio",
//         "url" : "https://firebasestorage.googleapis.com/v0/b/cofeek-d29a2.appspot.com/o/SG_Coffee_SFMOMA.png?alt=media&token=2b8a242b-d0ce-4b1d-8cdf-b75f113253f0"
//       },
//       "-Kik-5eBXALOGDOVwuFm" : {
//         "cost" : 988,
//         "count" : 3,
//         "id" : "-Kik-5eBXALOGDOVwuFm",
//         "name" : "Rwanda Huye Mountain",
//         "url" : "https://firebasestorage.googleapis.com/v0/b/cofeek-d29a2.appspot.com/o/SG_Coffee_SFMOMA.png?alt=media&token=2b8a242b-d0ce-4b1d-8cdf-b75f113253f0"
//       }
//     }
//   };
//   const updates = {
//     [`users/${uid}`]: newUser
//   };

//   return ref.update(updates);
// }
// updateCart(globRef);
// auth.signInWithEmailAndPassword('pyxarez@gmail.com', 'Karelin777').catch(error => console.log(error));
// const createUser = ref => {
//   const newKey = ref.push().key;
//   const uid = "MoCHcd5p26bfHSarTQvKANqc9Q93";
//   const newUser = {
//     uid,
//     cart: {
//       "Colombia El Jordan" : {
//         "cost" : 800,
//         "count" : 1,
//         "id" : 1,
//         "name" : "Colombia El Jordan",
//         "url" : "https://firebasestorage.googleapis.com/v0/b/cofeek-d29a2.appspot.com/o/SG_Coffee_SFMOMA.png?alt=media&token=2b8a242b-d0ce-4b1d-8cdf-b75f113253f0"
//       },
//       "Passport Trio" : {
//         "cost" : 1000,
//         "count" : 2,
//         "id" : 2,
//         "name" : "Passport Trio",
//         "url" : "https://firebasestorage.googleapis.com/v0/b/cofeek-d29a2.appspot.com/o/SG_Coffee_SFMOMA.png?alt=media&token=2b8a242b-d0ce-4b1d-8cdf-b75f113253f0"
//       },
//       "Rwanda Huye Mountain" : {
//         "cost" : 900,
//         "count" : 3,
//         "id" : 3,
//         "name" : "Rwanda Huye Mountain",
//         "url" : "https://firebasestorage.googleapis.com/v0/b/cofeek-d29a2.appspot.com/o/SG_Coffee_SFMOMA.png?alt=media&token=2b8a242b-d0ce-4b1d-8cdf-b75f113253f0"
//       }
//     }
//   };

//   const updates = {
//     [`users/${uid}`]: newUser
//   };

//   return ref.update(updates);
// }
// createUser(globRef);

// const generateProducts = ref => {
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

// ref.set(generateProducts(productsRef));

