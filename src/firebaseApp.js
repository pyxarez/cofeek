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

// const data = {
//   coffee: {
//     africa: {
//       14: {
//         category: 'coffee',
//         cost: 780,
//         description: 'A Sightglass exclusive, a tremendous fully washed coffee from Shakisso in southern Ethiopia. This coffee comes from an estate well regarded in its region as sun-drying experts, winning various awards for their excellent profiles of naturally processed coffees.',
//         id: '14',
//         name: 'Yetatebe Shakisso',
//         subcategory: 'africa',
//         url: 'https://firebasestorage.googleapis.com/v0/b/cofeek-d29a2.appspot.com/o/africa%2F1.png?alt=media&token=66390abf-c64b-4690-ac97-971cab3a86cf',
//       },
//       2: {
//         category: 'coffee',
//         cost: 720,
//         description: 'Sightglass is proud to be roasting coffee from Kageyo Coop for the third year in a row. Many of the members who deliver cherry to the station are also part owners and all share the responsibilities of running the station. Kageyo is situated a bit higher in elevation, nestled in the mountains of the Ngororero District, where this subtle change in elevation from farm to washing station yields a coffee with much more sweetness and complexity than its lower elevation neighbors.',
//         id: '2',
//         name: 'Kageyo Station, Ngororero',
//         subcategory: 'africa',
//         url: 'https://firebasestorage.googleapis.com/v0/b/cofeek-d29a2.appspot.com/o/africa%2F2.png?alt=media&token=9c90fb4f-8f07-487d-81ab-21d1e677387a',
//       },
//       3: {
//         category: 'coffee',
//         cost: 720,
//         description: 'Simbi is a privately owned washing station operated by Abdul Rudahunga, who was inspired to get into coffee by his grandmother, a farmer and one of the few rural Rwandans that traditionally roasted and drank coffee. The washing station was established in 2013, equipped with both a processing facility and depulper, focusing on wet fermentation and density sorting via grading channels and water. In Simbi’s first year of operation it placed 9th in the Rwanda Cup of Excellence competition, and has since focused on maintaining quality while increasing production.',
//         id: '3',
//         name: 'Simbi Station, Huye',
//         subcategory: 'africa',
//         url: 'https://firebasestorage.googleapis.com/v0/b/cofeek-d29a2.appspot.com/o/africa%2F3.png?alt=media&token=3d07e0a8-6b4e-4c39-ab74-d830b95f7166',
//       },
//       4: {
//         category: 'coffee',
//         cost: 870,
//         description: 'A Sightglass favorite, this custom decaffeinated lot of our Ethiopian Yetatebe was processed by our friends at Swiss Water. Their team have made amazing industry advancements with a 100% natural and proprietary process for decaffeinating coffees. During the Swiss Water Process, only caffeine is extracted, and all of the good stuff remains intact so that the coffee retains its unique origin characteristics. The end result yields a beautifully expressive coffee that is 99.9% caffeine-free, and none the less flavorful than its caffeinated brethren.',
//         id: '4',
//         name: 'Decaf Yetatebe, Shakisso SWP',
//         subcategory: 'africa',
//         url: 'https://firebasestorage.googleapis.com/v0/b/cofeek-d29a2.appspot.com/o/africa%2F4.png?alt=media&token=a1eb4b3c-89ec-4b88-8c8c-63650836224f',
//       },
//       5: {
//         category: 'coffee',
//         cost: 780,
//         description: 'Established in 1966, Kangunu is one of Eastern Kenya\'s most well loved stations within the specialty coffee industry. The factory was built upon the slopes of sprawling Mt. Kenya, with roughly 2,600 farmers contributing cherry from surrounding villages. Meticulous and quality driven processing practices ensure that any coffee leaving this cooperative is of the highest quality possible. All cherry is carefully pre-sorted before processing, then undergoes the traditional Kenyan double fermentation method, contributing to the complex flavors and classically acdc profile we love about Kenyan coffee.',
//         id: '5',
//         name: 'Kangunu AA',
//         subcategory: 'africa',
//         url: 'https://firebasestorage.googleapis.com/v0/b/cofeek-d29a2.appspot.com/o/africa%2F5.png?alt=media&token=6a22cb19-df6f-4f9b-aa61-9034db2d4fe9',
//       },
//       6: {
//         category: 'coffee',
//         cost: 780,
//         description: 'The Mpanda washing station was first built and operated in 2015 by two orphaned brothers, Eric and Clement. Using any support they could get, they managed to attend school and both graduated from college. While both engage in coffee trading, after graduation, Eric decdd to settle for a job with a consistent source of income, while Clement chose to manage the washing station. Mpanda processed a half container in their first season, but were able to double that volume this season.',
//         id: '6',
//         name: 'Mpanda Station, Ruhango',
//         subcategory: 'africa',
//         url: 'https://firebasestorage.googleapis.com/v0/b/cofeek-d29a2.appspot.com/o/africa%2F6.png?alt=media&token=062c3cf9-c025-4c65-a51f-6f5adaf3162b',
//       },
//     },
//     blends: {
//       1: {
//         category: 'coffee',
//         cost: 960,
//         description: 'Rip City. Stumptown. We bear the nicknames of our shining city and couldn\'t be prouder of it. Our production floor is hung with Blazers banners, and our trucks fly Blazers flags on game day. Blazermania is part of the Stumptown DNA and we\'re thrilled to collaborate with our hometown team on this blend roasted just for them.',
//         id: '1',
//         name: 'Blazers Blend',
//         subcategory: 'blends',
//         url: 'https://firebasestorage.googleapis.com/v0/b/cofeek-d29a2.appspot.com/o/blends%2Fmedia.nl?alt=media&token=d3217df5-cb4d-438b-9ca2-9ff8d1e1c4b6',
//       },
//       15: {
//         category: 'coffee',
//         cost: 900,
//         description: 'Named for a long-shuttered beauty parlor that housed the first Stumptown location, Hair Bender was the very first blend that Stumptown-founder Duane Sorenson introduced to the world. In fact, we still have the Hair Bender sign in our headquarters, watching over us as we roast each batch.It’s our most popular coffee with good reason. A cup of Hair Bender has clarity and complexity; Indonesia’s rich textures are balanced by the classic flavors of Latin America and Africa. We use it at our cafes for espresso, but it’s great for all brew methods.',
//         id: '15',
//         name: 'Hair Bender',
//         subcategory: 'blends',
//         url: 'https://firebasestorage.googleapis.com/v0/b/cofeek-d29a2.appspot.com/o/blends%2Fmedia(1).nl?alt=media&token=a45e03fd-5b03-4d64-931d-4c919172ee28',
//       },
//       16: {
//         category: 'coffee',
//         cost: 960,
//         description: 'We begin with meticulously sourced beans, choosing only those whose flavors and profiles can stand up to decaffeination. We make that process as gentle as possible with the Swiss Water Decaf process. Pioneered in the 1930s, this is the only certifiably organic way to remove caffeine. This process instead relies on hot water, osmosis, and an activated charcoal filter. The result is a decaffeinated bean that still carries its own flavors and aromas; our blend brings a lightly sweet but full-bodied experience, and makes an outstanding espresso or cup of drip.',
//         id: '16',
//         name: 'Trapper Creek Decaf',
//         subcategory: 'blends',
//         url: 'https://firebasestorage.googleapis.com/v0/b/cofeek-d29a2.appspot.com/o/blends%2Fmedia(2).nl?alt=media&token=0984c3b2-83c4-46d4-b261-ac5fc9749625',
//       },
//       17: {
//         category: 'coffee',
//         cost: 960,
//         description: 'From all over the world, the beans come to us. A cup of Holler Mountain combines chocolatey Latin American textures with the brightness of fine east African beans. It’s an incredible versatile blend. Although the coffee comes from all over, each of our producers has something in common: the cherry are picked at the height of ripeness and carefully processed. Clear flavors of blackberry, citrus and toffee shine through in a creamy, full body.',
//         id: '17',
//         name: 'Holler Mountain',
//         subcategory: 'blends',
//         url: 'https://firebasestorage.googleapis.com/v0/b/cofeek-d29a2.appspot.com/o/blends%2Fmedia(3).nl?alt=media&token=81be71fa-2860-4a37-83dd-59fc6b5fc073',
//       },
//       18: {
//         category: 'coffee',
//         cost: 900,
//         description: 'Constructed with some of the world’s finest Latin American and East African coffees, this blend’s components rotate so we can always bring it to you at peak flavor. These flavors are indeed big. You’ll taste chocolate, fruit, florals and even toasty nuts in this welcoming blend. The coffee is fully-washed, which allows layers of flavor and nuance within a balanced, sweet cup.',
//         id: '18',
//         name: 'House Blend',
//         subcategory: 'blends',
//         url: 'https://firebasestorage.googleapis.com/v0/b/cofeek-d29a2.appspot.com/o/blends%2Fmedia(5).nl?alt=media&token=92938530-61a0-4e02-8784-1d90cea0926e',
//       },
//     },
//     indonesia: {
//       13: {
//         category: 'coffee',
//         cost: 1080,
//         description: 'Unmistakable Indonesian earthiness but with distinct clarity and dried fruit sweetness. If you like a complex, big-bodied cup, this one’s for you. \n Ibu Rahmah is the Chairwoman for Ketiara which prs itself upon remaining a female led cooperative that redefines what Indonesian coffee can be – it produces some of the cleanest, sweetest Indonesian coffee around.',
//         id: '13',
//         name: 'Indonesia Bies Penantan',
//         subcategory: 'indonesia',
//         url: 'https://firebasestorage.googleapis.com/v0/b/cofeek-d29a2.appspot.com/o/indonesia%2Fmedia%20(1).png?alt=media&token=9e265809-5378-4ccc-988c-28fdeb99ba1e',
//       },
//     },
//     'latin-america': { 
//       12: {
//         category: 'coffee',
//         cost: 810,
//         description: 'Finca Alaska is located in the Buena Vista River basin at the base of Chirripó Mountain, just west of the Panamanian border. This lot is a traditional semi-washed or “honey” processed coffee, which can impart a large depth of sweetness and texture to compliment the unique flavors from this particular farm.',
//         id: '12',
//         name: 'Finca Alaska Honey, Chirripó',
//         subcategory: 'latin-america',
//         url: 'https://firebasestorage.googleapis.com/v0/b/cofeek-d29a2.appspot.com/o/latinAmerica%2F1.png?alt=media&token=b3a58409-ec44-4aed-9626-881185ee0de8',
//       },
//       7: {
//         category: 'coffee',
//         cost: 735,
//         description: 'ASOCEAS, Asociación de Productores de Café Especial del Alto Saldana, is a group of about 50 small producers in the growing region of Tolima, Colombia. They produce upwards of 1,500 bags of coffee annually and consistently fetch good cup scores and prices for their coffees. Throughout the year this coffee dances around clean and round flavors of stonefruits, grapes, and sugary caramel notes. Since this region is close enough to the equator and diverse enough in it’s microclimates, there is a continual harvest happening almost year round guaranteeing fresh flavors and character any time you take a sip.',
//         id: '7',
//         name: 'El Merano, Tolima Espresso',
//         subcategory: 'latin-america',
//         url: 'https://firebasestorage.googleapis.com/v0/b/cofeek-d29a2.appspot.com/o/latinAmerica%2F2.png?alt=media&token=2d849496-d9e7-4824-8d39-ed234dd12cf2s',
//       },
//       8: {
//         category: 'coffee',
//         cost: 885,
//         description: 'Eladio and his wife Clemencia are the proud owners of La Guadalupe, a 4-hectare farm that sits high above the remote town of Nambacola in Loja. La Guadalupe is one of the only remaining coffee farms in the region due to the rust outbreak that hit the area in 2012. At 2100 meters above sea level, they produce a very dense mix of both yellow and red Typica, Caturra and Bourbon throughout their land. They started producing washed coffees for the first time in 2015, and placed in the top 10 of the national coffee competition, Taza Dorada.',
//         id: '8',
//         name: 'La Guadalupe, Eladio Chamba',
//         subcategory: 'latin-america',
//         url: 'https://firebasestorage.googleapis.com/v0/b/cofeek-d29a2.appspot.com/o/latinAmerica%2F3.png?alt=media&token=2c88de56-f27b-4dce-bd18-0cb38acc98d6',
//       },
//       9: {
//         category: 'coffee',
//         cost: 870,
//         description: 'Finca Alcatraz and the fine gentleman who owns and operates it, Wilfredo Ule Vargas, are near and dear to our hearts. Our relationship with Wilfredo is our oldest and strongest. In a real way, we have grown our businesses and lives together. On his farm, Wilfredo exceptionally produces Caturra, Typica and Bourbon. With each visit, Wilfredo is proud to share with us the strs he is making toward progressive and new developments in processing. Above his house he has constructed a covered drying patio complete with thermometer, moisture reader, and variable airflow mechanisms. Over the years, Wilfredo has managed to rebuild his entire house with the money he has received for his coffees, increasing the quality of life for his family immensely. Wilfredo’s passion for improvement and endless curiosity have proven to be his greatest assets as a coffee professional. We hope you enjoy the fruits of Wilfredo’s efforts as much as we do.',
//         id: '9',
//         name: 'Finca Alcatraz, Wilfredo Ule Vargas',
//         subcategory: 'latin-america',
//         url: 'https://firebasestorage.googleapis.com/v0/b/cofeek-d29a2.appspot.com/o/latinAmerica%2F4.png?alt=media&token=b2af092b-9867-4d72-84c6-a4e4c36c421b',
//       },
//       10: {
//         category: 'coffee',
//         cost: 885,
//         description: 'This is the first time we\'ve worked with producer Eucls Rodriguez. His farm, Buena Vista, is located in Rio Blanco, just one village away from Maximino Gutierrez of Florestales. Tolima is one of our favorite coffee-producing regions of Colombia, due to its diverse microclimate which allows farmers to harvest almost year round. This coffee is a 100% Caturra microlot, and one we are excited to have on our shelves.',
//         id: '10',
//         name: 'Buena Vista, Eucls Rodriguez',
//         subcategory: 'latin-america',
//         url: 'https://firebasestorage.googleapis.com/v0/b/cofeek-d29a2.appspot.com/o/latinAmerica%2F5.png?alt=media&token=f4dfd018-dea8-449b-98db-62cfe481917a',
//       },
//       11: {
//         category: 'coffee',
//         cost: 795,
//         description: 'Owned and operated by Tirso Pacheco, El Progreso is located in Acevedo Huila, a region that has sent many coffees to the Cup of Excellence. Coffee grown here benefits from a unique microclimate, where humweather from the Amazon basin to the east meets cool winds blowing in from the plateaus of the west and bone-dry weather from the north. Tirso ferments his coffee for 24 hours, then dries it for 10-15 days.',
//         id: '11',
//         name: 'El Progreso, Tirso Pacheco',
//         subcategory: 'latin-america',
//         url: 'https://firebasestorage.googleapis.com/v0/b/cofeek-d29a2.appspot.com/o/latinAmerica%2F6.png?alt=media&token=3caf9499-1ae7-462d-b127-a0dcabd15627',
//       },
//     },
//   },
//   tea: {
//     all: {
//       19: {
//         category: 'tea',
//         cost: 720,
//         description: 'Meadow is a blend of golden Egyptian chamomile flowers and mildly stimulating, fragrant hyssop joined with smooth Cape rooibos, rose petals and linden flowers. Rooibos has a tea-like flavor without the astringency of black tea.',
//         id: '19',
//         name: 'Meadow',
//         subcategory: 'all',
//         url: 'https://firebasestorage.googleapis.com/v0/b/cofeek-d29a2.appspot.com/o/tea%2Fmedia.nl?alt=media&token=8c9db5f2-5dbe-4ac9-883e-ade59e8b7a04',
//       },
//       20: {
//         category: 'tea',
//         cost: 720,
//         description: 'These delicate, shade-dried leaves from China\'s Fujian Province are naturally high in antioxidants. Egyptian chamomile petals and Chinese osmanthus flowers add a fragrant, toasty, creamy and slightly sweet bloom of flavor.',
//         id: '20',
//         name: 'White Petal',
//         subcategory: 'all',
//         url: 'https://firebasestorage.googleapis.com/v0/b/cofeek-d29a2.appspot.com/o/tea%2Fmedia(1).nl?alt=media&token=bc6b6534-0f5e-4295-a15e-9592bb040a8b',
//       },
//       21: {
//         category: 'tea',
//         cost: 720,
//         description: 'In India, chai is a sweetly spiced tea served with foamed milk. Bright and coppery in the cup, the second flush Indian Assam teas are the famous foundation of many breakfast blends.',
//         id: '21',
//         name: 'Masala Chai',
//         subcategory: 'all',
//         url: 'https://firebasestorage.googleapis.com/v0/b/cofeek-d29a2.appspot.com/o/tea%2Fmedia(2).nl?alt=media&token=4e69418d-c5e2-4aea-93a4-1ec055364a01',
//       },
//       22: {
//         category: 'tea',
//         cost: 720,
//         description: 'The world’s most flavorful peppermint comes from Pacific Northwest, where the summers are hot and dry. These are harvested just before it begins to flower, when the oil content is highest. After cutting, the plant is allowed to field dry. Then the stems are removed and the mint is sorted into uniform leaf sizes.',
//         id: '22',
//         name: 'Peppermint Leaves',
//         subcategory: 'all',
//         url: 'https://firebasestorage.googleapis.com/v0/b/cofeek-d29a2.appspot.com/o/tea%2Fmedia(3).nl?alt=media&token=05a4b245-94dc-4cf0-b2ea-263b963f0ce2',
//       },
//       23: {
//         category: 'tea',
//         cost: 720,
//         description: 'Carefully picked at high elevation, the long, slender jade leaves of Mao Feng brew to a color of pale green and impart a pleasing vegetative fragrance with creamy notes and a lingering sweetness.',
//         id: '23',
//         name: 'Mao Feng Shui',
//         subcategory: 'all',
//         url: 'https://firebasestorage.googleapis.com/v0/b/cofeek-d29a2.appspot.com/o/tea%2Fmedia(4).nl?alt=media&token=e982bd96-adbd-417c-aee8-17ce010dce2d',
//       },
//       24: {
//         category: 'tea',
//         cost: 720,
//         description: 'Teas from Dimbulla are often called “Westerns” in the tea trade. They have a reddish amber color in the cup, with a medium to full body, slightly fruity flavor and mineral notes. Situated 3500 feet above sea level on the island of Sri Lanka, the Uva region produces teas of distinctly different character from their Ceylonese siblings. They are astringent, intensely floral and slightly sharp in flavor with a golden cup color.',
//         id: '24',
//         name: 'Lord Bergamot',
//         subcategory: 'all',
//         url: 'https://firebasestorage.googleapis.com/v0/b/cofeek-d29a2.appspot.com/o/tea%2Fmedia(5).nl?alt=media&token=dea23f89-5395-417d-81af-50ae8e9c9b49',
//       },
//       25: {
//         category: 'tea',
//         cost: 720,
//         description: 'The Cabernet of Hibiscus teas. Hibiscus flower, or jamaica, as it is known in Central America, is cultivated specifically as an herb for tea in China, Thailand and the Sudan, where it is smuggled into Egypt and sold as Egyptian Hibiscus.',
//         id: '25',
//         name: 'Big Hibiscus',
//         subcategory: 'all',
//         url: 'https://firebasestorage.googleapis.com/v0/b/cofeek-d29a2.appspot.com/o/tea%2Fmedia(6).nl?alt=media&token=9b1c99ab-0045-4e70-b05e-06964a54691c',
//       },
//       26: {
//         category: 'tea',
//         cost: 720,
//         description: 'Nestled in the foothills of the Himalayas in northern India, Darjeeling, once a British hill station, is known for producing some of the world’s most prized and expensive teas. First flush begins in late March and lasts about 30 days. During the second flush, which begins in early May, the top two leaves and bud of each tea bush are plucked every seven days. Teas produced during this period have fuller flavor than teas from the first flush.',
//         id: '26',
//         name: 'Bungalow',
//         subcategory: 'all',
//         url: 'https://firebasestorage.googleapis.com/v0/b/cofeek-d29a2.appspot.com/o/tea%2Fmedia(7).nl?alt=media&token=5ef9e715-6a2f-4479-b2fe-75c997bec2fd',
//       },
//       27: {
//         category: 'tea',
//         cost: 720,
//         description: 'When jasmine flowers begin to bloom, the green tea is placed on alternating bamboo trays with unopened jasmine buds, which slowly unfurl and share their divine fragrance.',
//         id: '27',
//         name: 'Jasmine Silver Tip',
//         subcategory: 'all',
//         url: 'https://firebasestorage.googleapis.com/v0/b/cofeek-d29a2.appspot.com/o/tea%2Fmedia(8).nl?alt=media&token=c433e266-adbe-4ea5-ae4d-5b9baefd8aea',
//       },
//     }
//   },
//   gear: {
//     'brew-kits': {
//       28: {
//         category: 'gear',
//         cost: 11100,
//         description: 'We created this kit largely based on our own dream travel set-up. Required qualifications? Functionality, quality, and good looks. Whether you wake up near rocky mountain, desert dust, hotel minibar, train car or skyscraper, coordinates matter not. The Rambler kit includes everything we would take on a road trip, bike tour, or weekend getaway.',
//         id: '28',
//         name: 'Rambler',
//         subcategory: 'brew-kits',
//         url: 'https://firebasestorage.googleapis.com/v0/b/cofeek-d29a2.appspot.com/o/gear%2Fbrew-kits%2Fmedia.nl?alt=media&token=79ef4976-0639-48e0-bf40-137f60a80c18',
//       },
//       29: {
//         category: 'gear',
//         cost: 14400,
//         description: 'The Copper kit is everything you need for a delightful morning ritual. With Hario\'s classic form and function and its stunning copper design, you’ll get precise control and perfect extraction, and look good while doing it.',
//         id: '29',
//         name: 'Copper',
//         subcategory: 'brew-kits',
//         url: 'https://firebasestorage.googleapis.com/v0/b/cofeek-d29a2.appspot.com/o/gear%2Fbrew-kits%2Fmedia(1).nl?alt=media&token=b4f39690-4b85-49c8-bb74-d3733179249e',
//       },
//       30: {
//         category: 'gear',
//         cost: 13500,
//         description: 'The Chemex is undergoing a renaissance thanks to its elegant design and sweet and balanced cup character. This kit will get you up to speed with all the essentials to brew one of our favorite methods.  The Chemist contains every piece of equipment you need to get from beans to brew. With the Encore grinder and the Gooseneck Kettle, you’re well on your way to pour over pro.',
//         id: '30',
//         name: 'Chemist',
//         subcategory: 'brew-kits',
//         url: 'https://firebasestorage.googleapis.com/v0/b/cofeek-d29a2.appspot.com/o/gear%2Fbrew-kits%2Fmedia(2).nl?alt=media&token=3cbebf33-6d5a-4c07-a56d-66c41f1d3a78',
//       },
//     },
//     brewers: {
//       31: {
//         category: 'gear',
//         cost: 2400,
//         description: 'With its stainless steel and wavy contours, the Kalita Wave wins over coffee and design enthusiasts alike.The flat-bottom filter helps with even extraction while brewing an exceptional cup. The key to mastering this brewer is the slow spiral pour – a gooseneck kettle will help you master this method.',
//         id: '31',
//         name: 'Kalita Wave',
//         subcategory: 'brewers',
//         url: 'https://firebasestorage.googleapis.com/v0/b/cofeek-d29a2.appspot.com/o/gear%2Fbrewers%2Fmedia(13).nl?alt=media&token=afcd3d1b-a54f-4d88-8adc-55008a075ad2',
//       },
//       32: {
//         category: 'gear',
//         cost: 2940,
//         description: 'With its classic design and copper body made to conduct heat evenly, the V60 Copper brewer is perfect for making an exquisite cup of coffee. With the V60’s classic form and function and its stunning copper design, you’ll get precise extraction from your coffee and look good doing it.',
//         id: '32',
//         name: 'Hario V60 Copper Dripper',
//         subcategory: 'brewers',
//         url: 'https://firebasestorage.googleapis.com/v0/b/cofeek-d29a2.appspot.com/o/gear%2Fbrewers%2Fmedia(14).nl?alt=media&token=9d5df1bf-5c7f-4b72-916d-6f01abf2eeb9',
//       },
//       33: {
//         category: 'gear',
//         cost: 3000,
//         description: 'If you’re boldly going for it, this is your new best friend. You get the most of everything here–big flavor, body, and mouthfeel. Easy to brew and super consistent, the French Press is really reliable, brewing a textural and heavy-bodied cup in 4 minutes. Its classic and well-engineered design hasn’t changed much since its invention in the ‘50s.',
//         id: '33',
//         name: 'Large Bodum French Press Brewer',
//         subcategory: 'brewers',
//         url: 'https://firebasestorage.googleapis.com/v0/b/cofeek-d29a2.appspot.com/o/gear%2Fbrewers%2Fmedia(2).nl?alt=media&token=e78f88d3-c8ab-4c7e-bcc7-7efe54571f3e',
//       },
//     },
//     filters: {
//       34: {
//         category: 'gear',
//         cost: 780,
//         description: 'The flat-bottom paper filter helps with a clean and even extraction. Brews a single 10 oz cup. Pack of 100 paper filters. Size #185. Made in Japan.',
//         id: '34',
//         name: 'Kalita Wave Filters',
//         subcategory: 'filters',
//         url: 'https://firebasestorage.googleapis.com/v0/b/cofeek-d29a2.appspot.com/o/gear%2Ffilters%2Fmedia(3).nl?alt=media&token=7cf88f08-ffd5-4954-9297-bacb055a46ea',
//       },
//       35: {
//         category: 'gear',
//         cost: 540,
//         description: 'The heavy Chemex filter is designed to catch much of the coffee fines and oils, which accounts for that clean cup we’re so sweet on. Thick paper filters designed to use with the Chemex brewer, these pre-folded circle filters are designed for durability–they won’t break when it’s time to clean up.',
//         id: '35',
//         name: 'Chemex Filters',
//         subcategory: 'filters', 
//         url: 'https://firebasestorage.googleapis.com/v0/b/cofeek-d29a2.appspot.com/o/gear%2Ffilters%2Fmedia(4).nl?alt=media&token=3dc3a966-76ca-450a-b4b1-cade59e9ee96',
//       },
//       36: {
//         category: 'gear',
//         cost: 300,
//         description: 'These paper filters were invented by German mum Melitta Bentz in 1908 using her son’s blotting paper, forever changing brewing coffee as we know it. Fits Bee House, Bonavita Thermal Carafe, Snow Peak dripper, and most cone-shaped pour over brewers. Chlorine-free paper filters 100 per box',
//         id: '36',
//         name: 'Melitta Filters',
//         subcategory: 'filters',
//         url: 'https://firebasestorage.googleapis.com/v0/b/cofeek-d29a2.appspot.com/o/gear%2Ffilters%2Fmedia(5).nl?alt=media&token=634f3a52-7d06-4764-adac-bdee308d6e48',
//       },
//     },
//     grinders: {
//       37: {
//         category: 'gear',
//         cost: 8700,
//         description: 'The super solid, entry-level conical burr grinder that deserves a seat at the table. The Encore is ideal for all types of manual and drip brewing. We love Baratza grinders because of their quality, consistency and customer support track record–these grinders are repairable and meant to last. The burr speed control reduces heat, noise and static.',
//         id: '37',
//         name: 'Baratza Encore Burr Grinder',
//         subcategory: 'grinders',
//         url: 'https://firebasestorage.googleapis.com/v0/b/cofeek-d29a2.appspot.com/o/gear%2Fgrinders%2Fmedia.nl?alt=media&token=8cfc1542-3e2b-4956-afdd-99e8d1be1170',
//       },
//       38: {
//         category: 'gear',
//         cost: 4800,
//         description: 'A sleek and lightweight little powerhouse. The Porlex mini is a favorite around here to pack in our camp coffee kits. We love this grinder on-the-go with easy adjust grind - and with its recent upgrade, it\'s better than ever. Hand grinders do take a little elbow grease, but burr is better! (It will take about two minutes to grind coffee when full.)',
//         id: '38',
//         name: 'Porlex Mini Grinder',
//         subcategory: 'grinders',
//         url: 'https://firebasestorage.googleapis.com/v0/b/cofeek-d29a2.appspot.com/o/gear%2Fgrinders%2Fmedia(1).nl?alt=media&token=4df9e7d3-ee5f-4201-8676-8b6c1b0e02e7',
//       },
//       39: {
//         category: 'gear',
//         cost: 13500,
//         description: 'A step up from the Encore, the sleek Virtuoso is fast, efficient and versatile. Will last for years of everyday use. We love Baratza grinders because of their quality, consistency and customer support track record–these grinders are repairable and meant to last. The pulse button allows you to grind into an espresso basket, and the 60 second timers allows for easily repeatable grind times.',
//         id: '39',
//         name: 'Baratza Virtuoso Burr Grinder',
//         subcategory: 'grinders',
//         url: 'https://firebasestorage.googleapis.com/v0/b/cofeek-d29a2.appspot.com/o/gear%2Fgrinders%2Fmedia(2).nl?alt=media&token=514b8eb0-3406-4c08-ae66-18bfc5cb0645',
//       },
//     },
//     mugs: {
//       40: {
//         category: 'gear',
//         cost: 720,
//         description: 'Enjoy a transcendent cup of coffee in a mug designed by renowned Portland-based tattoo artist. These heavy-weight ceramic mugs are the same style we use in our cafes. Designed for heavy drinking.',
//         id: '40',
//         name: 'Wolf Mug',
//         subcategory: 'mugs',
//         url: 'https://firebasestorage.googleapis.com/v0/b/cofeek-d29a2.appspot.com/o/gear%2Fgrinders%2Fmedia(5).nl?alt=media&token=0d5cd0f5-b80b-41da-a7bf-9ee567f87bff',
//       },
//       41: {
//         category: 'gear',
//         cost: 2160,
//         description: 'There are over 1,200 different species of bats, but only one Stumptown Bat Camp Cup. Keep your coffee hot in this stylish, limited-edition mug, designed by Portland-based tattoo artist. This sturdy, double-walled, stainless steel mug is built to keep your coffee hot and your hands cool. Includes press-on lid to prevent spills.',
//         id: '41',
//         name: 'Bat Camp Cup',
//         subcategory: 'mugs',
//         url: 'https://firebasestorage.googleapis.com/v0/b/cofeek-d29a2.appspot.com/o/gear%2Fgrinders%2Fmedia(1).nl?alt=media&token=4df9e7d3-ee5f-4201-8676-8b6c1b0e02e7',
//       },
//       42: {
//         category: 'gear',
//         cost: 2520,
//         description: 'We worked together with Mazama to create a glaze that reminds us of the unparalleled glory that is hot coffee on a foggy morning. A collaboration with the very talented potters and designers behind Portland-based Mazama Wares. Impeccable design. Stumptown exclusive. Seems like coffee just tastes better out of this beauty.',
//         id: '42',
//         name: 'Mazama X Stumptown Mug',
//         subcategory: 'mugs',
//         url: 'https://firebasestorage.googleapis.com/v0/b/cofeek-d29a2.appspot.com/o/gear%2Fgrinders%2Fmedia(2).nl?alt=media&token=514b8eb0-3406-4c08-ae66-18bfc5cb0645',
//       },
//     }
//   },
// }

// const productsRef = database.ref('products');
// const globRef = database.ref()

// const updateCart = ref => {
//   const uid = "MoCHcd5p26bfHSarTQvKANqc9Q93";
//   const newUser = {
//     uid,
//     cart: {}
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

// productsRef.set(data);

