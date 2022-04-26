# Setting up FireBase

First of all, you have to connect yourself to the FireBase and go to the console. One time in the console you have to click the ```New project``` button.

![image](https://user-images.githubusercontent.com/73474137/165373967-7075c4e9-fe7a-4fe1-b7c3-e8523e6c11f1.png)

Next, choose a name for your project, choose if you want the analytics, and once time this is done, you have created your first FireBase project. Now you should be on a screen
which should be something like that.

![image](https://user-images.githubusercontent.com/73474137/165374441-17bfba6e-157e-4de7-8e19-6bafae9b2b4e.png)

This is the center of your application from there you can manage a FireStore, Realtime Database, Storage, etc... In this note, we'll focus on the FireStore in a web application.
To start click on the web button at the center of the page.

Now you should be on a page that asks you to input the project name and set up the hosting if you want to (in our case we **don't check** the hosting parameters). 

Before the end, you can copy the config for the ```npm``` version and copy it to the ```index.js``` file.

Finally, after the web application setup, you can start the FireBase setup. Click the ```Create a database``` button and select the **test** mode. Else you will have to change the security rules later. And done, congratulations you have set up a FireStore database.
