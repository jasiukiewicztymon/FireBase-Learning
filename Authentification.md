# Authentification FireBase

With the firebase authentification you are able to let the user connect him with his GitHub, Google, Apple or Yahoo account to your application ⭐ And just down below you have a small list with all the connexion method list possibilities

![image](https://user-images.githubusercontent.com/73474137/158693280-82c6e806-f7a9-4c22-a7d4-9a27b8473f70.png)

## Add the FireBase Authenfication

a. CDN 

```html
<script src="https://www.gstatic.com/firebasejs/ui/6.0.1/firebase-ui-auth.js"></script>
<link type="text/css" rel="stylesheet" href="https://www.gstatic.com/firebasejs/ui/6.0.1/firebase-ui-auth.css" />
```

b. NPM

```shell
npm install firebaseui --save
```

```js
var firebase = require('firebase');
var firebaseui = require('firebaseui');
```

## Initialisation of FireBaseUI

After the installation add the FireBaseUI

```js
// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
```

## Configuration 

You need to do a small configuration before the utilisation

### E-mail + Password

1. Go to the ***console FireBase***, open the authenfication section and activate the e-mail and password authenfication
2. Add the ID of the e-mail provider to the FireBaseUI list in the ```signInOptions```

```js
ui.start('#firebaseui-auth-container', {
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  // Other config options...
});
```
