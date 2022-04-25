# Add FireBase to your project

Here you have some examples how to add the FireBase to your project. [Google Docs](https://firebase.google.com/docs/web/setup)

## Web 

1. Install FireBase with npm

```nodejs
npm install firebase
```

2. Install WebPack with npm

```nodejs
npm install webpack webpack-cli -D
```

3. App initialization

```js
import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
};

const app = initializeApp(firebaseConfig);
```

4. Setup the WebPack

- create a dist folder
- create a src folder
- add ```index.js``` in the src folder
- create the ```webpack.config.js``` in the root of the project

And write the next content to the ```webpack.config.js```:

```js
const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  watch: true
}
```

Finally in the ```package.json``` add this in scripts:

```
[...]
"scripts": {
  "build": "webpack"
  [...]
},
[...]
```

To test your code you can write an example easy code like an ```console.log()``` and run the ```npm run build``` command to create the ```bundle.js``` file in dist which you can include in an HTML file and just watch the console.

### First steps 👟

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
