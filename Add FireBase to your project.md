# Add FireBase to your project

Here you have some examples how to add the FireBase to your project. [Google Docs](https://firebase.google.com/docs/web/setup)

## Web 

1. Install FireBase with npm

```nodejs
npm install firebase
```

2. App initialization

```js
import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
};

const app = initializeApp(firebaseConfig);
```

## Mobile

For the mobil vesions I let you go check it in the Google's doc, because I havn't never used it 🔒

## First steps 👟

A simple small code to introduce you to the Google FireBase

```js
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

#### The result:

![image](https://user-images.githubusercontent.com/73474137/158701513-86f8bd79-4866-4bf5-a639-8a6f423b899d.png)
