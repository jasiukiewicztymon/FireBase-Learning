# Read data from FireBase

For the example used here we will use the dataset below:

![image](https://user-images.githubusercontent.com/73474137/167245351-4f59d006-c8df-4ecd-89e2-537f1dd4cc81.png)

### Read data

To read data we need first initialize the database and get the collection, we want to log data. Finally, we use the `getDocs()` function to get data inside the doc.
To do this you can use the code below:

To do this you can use the code below:

```js
import { initializeApp } from "firebase/app";
import { collection, getFirestore, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  // ...
};

// initialisation of the firebase
initializeApp(firebaseConfig);

// getting a reference to the database
const database = getFirestore();

// getting a reference to the collection
const colRef = collection(database, 'books');

// getting the datas
getDocs(colRef)
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.data());
    })
  })
```

The logged data should look like this:

![image](https://user-images.githubusercontent.com/73474137/167245397-cb4fd3e6-1389-416c-b834-5ef893506026.png)

### Writing data into the HTML DOM

To write data to the HTML DOM first we need is to query select the target, and append the content like in the example below:

```js
import { initializeApp } from "firebase/app";
import { collection, getFirestore, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  // ...
};

// initialisation of the firebase
initializeApp(firebaseConfig);

// getting a reference to the database
const database = getFirestore();

// getting a reference to the collection
const colRef = collection(database, 'books');

// getting the datas
getDocs(colRef)
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      // getting the target we want append content

      document.querySelector("body").innerHTML += `<i>${doc.id}</i>, is named <b>"${doc.data().title}"</b> wrote by <b>${doc.data().author}</b>`;
    })
  })
```

The result is just below:

![image](https://user-images.githubusercontent.com/73474137/167245708-3068cd38-7877-4273-9a4d-1fe863b1888a.png)

### Read data with live updates

This function can be intresting in case of message application for example. To do this we'll use the `OnSnapshot` function. You can use the code below to test it:

```js
import { initializeApp } from "firebase/app";
import { getFirestore, doc, onSnapshot } from 'firebase/firestore';

const firebaseConfig = {
  //...
};

// initialisation of the firebase
initializeApp(firebaseConfig);

// getting a reference to the database
const database = getFirestore();

// getting the datas
const unsub = onSnapshot(doc(database, "books", "gntH3Qy38oovJZ75EQZu"), (doc) => {
  console.log("Current data: ", doc.data());
});
```

The result before change:

![image](https://user-images.githubusercontent.com/73474137/167271172-22f84baa-6109-456e-bbee-f217c2b03fe1.png)

The result after a change in the database:

![image](https://user-images.githubusercontent.com/73474137/167271203-bb43f658-d4b6-4d2d-a303-8c6d7786f5ec.png)

### Query multiples datas with live updates

To use it you can try the code below:

```js
import { initializeApp } from "firebase/app";
import { getFirestore, doc, onSnapshot, query, collection } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAzqyy9hzUnCA1BU_pp2XPSYkCXHoMkHg0",
  authDomain: "fblearning-4842a.firebaseapp.com",
  projectId: "fblearning-4842a",
  storageBucket: "fblearning-4842a.appspot.com",
  messagingSenderId: "33327718981",
  appId: "1:33327718981:web:a29099f90cf2b85f6f792c"
};

// initialisation of the firebase
initializeApp(firebaseConfig);

// getting a reference to the database
const database = getFirestore();

// getting the datas
const q = query(collection(database, "books"))

const unsubscribe = onSnapshot(q, (querySnapshot) => {
  const authors = [];
  querySnapshot.forEach((doc) => {
      authors.push(doc.data().author);
  });
  console.log("Authors: ", authors.join(", "));
});
```

The result before modification:

![image](https://user-images.githubusercontent.com/73474137/167271816-3d30a7f6-226e-4db8-94a8-02a5ef81ad44.png)

The result after modification:

![image](https://user-images.githubusercontent.com/73474137/167271831-0819b173-297a-4d16-aa43-4e3df0ac362c.png)
