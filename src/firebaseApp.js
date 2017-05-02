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

// // const productsRef = database.ref('products');
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
//         "url" : "https://s3-us-west-2.amazonaws.com/sightglass-store/app/public/spree/images/attachments/49/large/SG_Coffee_Owl'sHowl.png?1452545546"
//       },
//       "-Kik-5eBXALOGDOVwuFl" : {
//         "cost" : 1435,
//         "count" : 2,
//         "id" : "-Kik-5eBXALOGDOVwuFl",
//         "name" : "Passport Trio",
//         "url" : "https://s3-us-west-2.amazonaws.com/sightglass-store/app/public/spree/images/attachments/49/large/SG_Coffee_Owl'sHowl.png?1452545546"
//       },
//       "-Kik-5eBXALOGDOVwuFm" : {
//         "cost" : 988,
//         "count" : 3,
//         "id" : "-Kik-5eBXALOGDOVwuFm",
//         "name" : "Rwanda Huye Mountain",
//         "url" : "https://s3-us-west-2.amazonaws.com/sightglass-store/app/public/spree/images/attachments/49/large/SG_Coffee_Owl'sHowl.png?1452545546"
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
//         "url" : "https://s3-us-west-2.amazonaws.com/sightglass-store/app/public/spree/images/attachments/49/large/SG_Coffee_Owl'sHowl.png?1452545546"
//       },
//       "Passport Trio" : {
//         "cost" : 1000,
//         "count" : 2,
//         "id" : 2,
//         "name" : "Passport Trio",
//         "url" : "https://s3-us-west-2.amazonaws.com/sightglass-store/app/public/spree/images/attachments/49/large/SG_Coffee_Owl'sHowl.png?1452545546"
//       },
//       "Rwanda Huye Mountain" : {
//         "cost" : 900,
//         "count" : 3,
//         "id" : 3,
//         "name" : "Rwanda Huye Mountain",
//         "url" : "https://s3-us-west-2.amazonaws.com/sightglass-store/app/public/spree/images/attachments/49/large/SG_Coffee_Owl'sHowl.png?1452545546"
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
//   const dataTree = {
//     coffee: { 
//       'africa': {
//         '-Kik-5eBXALOGDOVwuFk': {
//           cost: 2133,
//           id: '-Kik-5eBXALOGDOVwuFk',
//           name: 'Rwande Huye Mountain',
//           url: "https://s3-us-west-2.amazonaws.com/sightglass-store/app/public/spree/images/attachments/49/large/SG_Coffee_Owl'sHowl.png?1452545546",
//           description: 'We all know Brazil for it’s football, festivalés and music. But where would all this be without their amazing coffee? Ask Péle – could you have been the greatest footballer of all time without your customary morning macchiato? Also, Brazil is the world’s largest coffee producer due to being damn good at it.',
//           category: 'coffee',
//           subcategory: 'africa',
//         },
//         '-Kik-5eBXALOGDOVwuFl': {
//           cost: 1435,
//           id: '-Kik-5eBXALOGDOVwuFl',
//           name: 'Ethiopia Mordecofe',
//           url: "https://s3-us-west-2.amazonaws.com/sightglass-store/app/public/spree/images/attachments/49/large/SG_Coffee_Owl'sHowl.png?1452545546",
//           description: 'We all know Brazil for it’s football, festivalés and music. But where would all this be without their amazing coffee? Ask Péle – could you have been the greatest footballer of all time without your customary morning macchiato? Also, Brazil is the world’s largest coffee producer due to being damn good at it.',
//           category: 'coffee',
//           subcategory: 'africa',
//         },
//         '-Kik-5eBXALOGDOVwuFm': {
//           cost: 988,
//           id: '-Kik-5eBXALOGDOVwuFm',
//           name: 'Passport Trio',
//           url: "https://s3-us-west-2.amazonaws.com/sightglass-store/app/public/spree/images/attachments/49/large/SG_Coffee_Owl'sHowl.png?1452545546",
//           description: 'We all know Brazil for it’s football, festivalés and music. But where would all this be without their amazing coffee? Ask Péle – could you have been the greatest footballer of all time without your customary morning macchiato? Also, Brazil is the world’s largest coffee producer due to being damn good at it.',
//           category: 'coffee',
//           subcategory: 'africa',
//         },
//       },
//       'indonesia': {
//         '-Kik-5eBXALOGDOVwuFn': {
//           cost: 1200,
//           id: '-Kik-5eBXALOGDOVwuFn',
//           name: 'Indonesia Bies Penantan',
//           url: "https://s3-us-west-2.amazonaws.com/sightglass-store/app/public/spree/images/attachments/49/large/SG_Coffee_Owl'sHowl.png?1452545546",
//           description: 'We all know Brazil for it’s football, festivalés and music. But where would all this be without their amazing coffee? Ask Péle – could you have been the greatest footballer of all time without your customary morning macchiato? Also, Brazil is the world’s largest coffee producer due to being damn good at it.',
//           category: 'coffee',
//           subcategory: 'indonesia',
//         },
//         '2': {
//           cost: 998,
//           id: '2',
//           name: 'Holler Mountain',
//           url: "https://s3-us-west-2.amazonaws.com/sightglass-store/app/public/spree/images/attachments/49/large/SG_Coffee_Owl'sHowl.png?1452545546",
//           description: 'We all know Brazil for it’s football, festivalés and music. But where would all this be without their amazing coffee? Ask Péle – could you have been the greatest footballer of all time without your customary morning macchiato? Also, Brazil is the world’s largest coffee producer due to being damn good at it.',
//           category: 'coffee',
//           subcategory: 'indonesia',
//         },
//       },
//       'latin-america': {
//         '-Kik-5eBXALOGDOVwuFo': {
//           cost: 1348,
//           id: '-Kik-5eBXALOGDOVwuFo',
//           name: 'Colombia El Jordan',
//           url: "https://s3-us-west-2.amazonaws.com/sightglass-store/app/public/spree/images/attachments/49/large/SG_Coffee_Owl'sHowl.png?1452545546",
//           description: 'We all know Brazil for it’s football, festivalés and music. But where would all this be without their amazing coffee? Ask Péle – could you have been the greatest footballer of all time without your customary morning macchiato? Also, Brazil is the world’s largest coffee producer due to being damn good at it.',
//           category: 'coffee',
//           subcategory: 'latin-america',
//         },
//         '-Kik-5eBXALOGDOVwuFp': {
//           cost: 1120,
//           id: '-Kik-5eBXALOGDOVwuFp',
//           name: 'Colombia El Nevado',
//           url: "https://s3-us-west-2.amazonaws.com/sightglass-store/app/public/spree/images/attachments/49/large/SG_Coffee_Owl'sHowl.png?1452545546",
//           description: 'We all know Brazil for it’s football, festivalés and music. But where would all this be without their amazing coffee? Ask Péle – could you have been the greatest footballer of all time without your customary morning macchiato? Also, Brazil is the world’s largest coffee producer due to being damn good at it.',
//           category: 'coffee',
//           subcategory: 'latin-america',
//         },
//       },
//       'blends': {
//         '-Kik-5eBXALOGDOVwuFq': {
//           cost: 1000,
//           id: '-Kik-5eBXALOGDOVwuFq',
//           name: 'Blazers Blend',
//           url: "https://s3-us-west-2.amazonaws.com/sightglass-store/app/public/spree/images/attachments/49/large/SG_Coffee_Owl'sHowl.png?1452545546",
//           description: 'We all know Brazil for it’s football, festivalés and music. But where would all this be without their amazing coffee? Ask Péle – could you have been the greatest footballer of all time without your customary morning macchiato? Also, Brazil is the world’s largest coffee producer due to being damn good at it.',
//           category: 'coffee',
//           subcategory: 'blends',
//         },
//         '1': {
//           cost: 987,
//           id: '1',
//           name: 'Hair Bender',
//           url: "https://s3-us-west-2.amazonaws.com/sightglass-store/app/public/spree/images/attachments/49/large/SG_Coffee_Owl'sHowl.png?1452545546",
//           description: 'We all know Brazil for it’s football, festivalés and music. But where would all this be without their amazing coffee? Ask Péle – could you have been the greatest footballer of all time without your customary morning macchiato? Also, Brazil is the world’s largest coffee producer due to being damn good at it.',
//           category: 'coffee',
//           subcategory: 'blends',
//         },
//       }
//     },
//     tea: {
//       black: {
//         '3': {
//           cost: 1239,
//           id: '3',
//           name: 'Some tea',
//           url: "https://s3-us-west-2.amazonaws.com/sightglass-store/app/public/spree/images/attachments/49/large/SG_Coffee_Owl'sHowl.png?1452545546",
//           description: 'We all know Brazil for it’s football, festivalés and music. But where would all this be without their amazing coffee? Ask Péle – could you have been the greatest footballer of all time without your customary morning macchiato? Also, Brazil is the world’s largest coffee producer due to being damn good at it.',
//           category: 'tea',
//           subcategory: 'black',
//         },
//       }
//     },
//     gear: {
//       'brewers': {
//         '4': {
//           cost: 1239,
//           id: '4',
//           name: 'Some brewer',
//           url: "https://s3-us-west-2.amazonaws.com/sightglass-store/app/public/spree/images/attachments/49/large/SG_Coffee_Owl'sHowl.png?1452545546",
//           description: 'We all know Brazil for it’s football, festivalés and music. But where would all this be without their amazing coffee? Ask Péle – could you have been the greatest footballer of all time without your customary morning macchiato? Also, Brazil is the world’s largest coffee producer due to being damn good at it.',
//           category: 'tea',
//           subcategory: 'brewers',
//         }
//       },
//       'brew-kits': {
//         '5': {
//           cost: 3843,
//           id: '5',
//           name: 'Some-kit',
//           url: "https://s3-us-west-2.amazonaws.com/sightglass-store/app/public/spree/images/attachments/49/large/SG_Coffee_Owl'sHowl.png?1452545546",
//           description: 'We all know Brazil for it’s football, festivalés and music. But where would all this be without their amazing coffee? Ask Péle – could you have been the greatest footballer of all time without your customary morning macchiato? Also, Brazil is the world’s largest coffee producer due to being damn good at it.',
//           category: 'tea',
//           subcategory: 'brewers',
//         }
//       },
//       'grinders': {
//         '6': {
//           cost: 2304,
//           id: '6',
//           name: 'Some grinder',
//           url: "https://s3-us-west-2.amazonaws.com/sightglass-store/app/public/spree/images/attachments/49/large/SG_Coffee_Owl'sHowl.png?1452545546",
//           description: 'We all know Brazil for it’s football, festivalés and music. But where would all this be without their amazing coffee? Ask Péle – could you have been the greatest footballer of all time without your customary morning macchiato? Also, Brazil is the world’s largest coffee producer due to being damn good at it.',
//           category: 'tea',
//           subcategory: 'grinders',
//         }
//       },
//       'mugs': {
//         '7': {
//           cost: 2304,
//           id: '7',
//           name: 'Some mug',
//           url: "https://s3-us-west-2.amazonaws.com/sightglass-store/app/public/spree/images/attachments/49/large/SG_Coffee_Owl'sHowl.png?1452545546",
//           description: 'We all know Brazil for it’s football, festivalés and music. But where would all this be without their amazing coffee? Ask Péle – could you have been the greatest footballer of all time without your customary morning macchiato? Also, Brazil is the world’s largest coffee producer due to being damn good at it.',
//           category: 'tea',
//           subcategory: 'mugs',
//         }
//       },
//       'filters': {
//         '8': {
//           cost: 2304,
//           id: '8',
//           name: 'Some filter',
//           url: "https://s3-us-west-2.amazonaws.com/sightglass-store/app/public/spree/images/attachments/49/large/SG_Coffee_Owl'sHowl.png?1452545546",
//           description: 'We all know Brazil for it’s football, festivalés and music. But where would all this be without their amazing coffee? Ask Péle – could you have been the greatest footballer of all time without your customary morning macchiato? Also, Brazil is the world’s largest coffee producer due to being damn good at it.',
//           category: 'tea',
//           subcategory: 'filters',
//         }
//       },
//     }
//   };

//   return dataTree;
// }

// productsRef.set(generateProducts(productsRef));

