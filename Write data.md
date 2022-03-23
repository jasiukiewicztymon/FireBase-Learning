# Write data 

With the FireBase you have some methods to write data to the database but finally you do the same think, just you name it differently 

> coming soon still work in progress

### With the collection's reference

Here we write the San Fransisco data to the *"SF"* document in the *"cities"* collection in the reference of the database

```js
import { initializeApp } from 'firebase/app'
import { getAnalytics } from "firebase/analytics";
import { collection, doc, setDoc, getFirestore } from "firebase/firestore"; 

// configs

const firebaseConfig = {
  // ...
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// initialisation of the database

const db = getFirestore(app);

// getting the reference to the collection

const citiesRef = collection(db, "cities");

// adding a doc named SF to the reference

setDoc(doc(citiesRef, "SF"), {
  name: "San Francisco", 
  state: "CA", 
  country: "USA",
  capital: false, 
  population: 860000,
  regions: ["west_coast", "norcal"] 
});
```

### Writing data with document only reference

Here I use as demo the example that you can find in the first article, and we write the dailyData to the *'dailySpecial/2022-03-16'* (collection/document)

```
import { initializeApp } from 'firebase/app'
import { getAnalytics } from "firebase/analytics";
import { getFirestore, doc, setDoc } from 'firebase/firestore'

// configs

const firebaseConfig = {
  //...
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore()

// adding ref to a document

const specialOfTheDay = doc(firestore, 'dailySpecial/2022-03-16')

// setting the datas

const dailyData = {
    description: 'The day I have started learning FireBase',
    date: Date(),
    localtion: 'Switzerland'
}

// writting the data to the database

setDoc(specialOfTheDay, dailyData)
```
