# Update data

The data updating is a very imporatnt thing while creating an application. For example we can do a button to update a post just with a document reference, what made it very easy.

## updateDoc function

To update data, we can easly use the updateDoc function like here, in the example below

```js
import { initializeApp } from 'firebase/app'
import { getAnalytics } from "firebase/analytics";
import { doc, updateDoc, getFirestore } from "firebase/firestore"; 

// configs

const firebaseConfig = {
    // ...
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// initialisation of the database

const db = getFirestore(app);

// getting the reference to the data

const SFRef = doc(db, "cities", "SF");

// update the population of SF 

updateDoc(SFRef, {
  population: 870000
});
```

![image](https://user-images.githubusercontent.com/73474137/162174962-5698640c-8071-48fb-b90f-3d4ff91409a7.png)
