// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  // here goes the information of your application created in Firebase
  // https://firebase.google.com/
  firebase: {
    apiKey: "yourApiKey",
    authDomain: "yourApplication.firebaseapp.com",
    databaseURL: "https://yourApplication.firebaseio.com",
    projectId: "yourApplication",
    storageBucket: "yourApplication.appspot.com",
    messagingSenderId: "youMessagingSenderId"
  }
};
