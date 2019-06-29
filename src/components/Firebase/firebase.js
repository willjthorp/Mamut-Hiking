import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import config from 'config';

const firebaseConfig = {
  apiKey: config.FIREBASE_KEY,
  authDomain: 'mamut-app.firebaseapp.com',
  databaseURL: 'https://mamut-app.firebaseio.com',
  projectId: 'mamut-app',
  storageBucket: 'mamut-app.appspot.com',
  messagingSenderId: '68461145091',
  appId: '1:68461145091:web:2d215114baed6ae9',
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);

    this.auth = app.auth();
    this.db = app.firestore();
    this.googleProvider = new app.auth.GoogleAuthProvider();
    this.facebookProvider = new app.auth.FacebookAuthProvider();
    this.emailAuthProvider = app.auth.EmailAuthProvider;
  }

  // *** AUTH API ***

  createUserWithEmailAndPassword(email, password) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  signInWithEmailAndPassword(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  signInWithGoogle() {
    return this.auth.signInWithPopup(this.googleProvider);
  }

  signInWithFacebook() {
    return this.auth.signInWithPopup(this.facebookProvider);
  }

  signOut() {
    return this.auth.signOut().then(
      function() {
        console.log('Signed Out');
      },
      function(error) {
        console.error('Sign Out Error', error);
      },
    );
  }

  resetPassword(email) {
    return this.auth.sendPasswordResetEmail(email);
  }

  updatePassword(password) {
    this.auth.currentUser.updatePassword(password);
  }

  // *** Merge Auth and DB User API *** //

  onAuthUserListener(next, fallback) {
    return this.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        this.user(authUser.uid)
          .get()
          .then(doc => {
            const dbUser = doc.data();

            if (!dbUser.roles) {
              dbUser.roles = [];
            }

            const user = {
              uid: authUser.uid,
              email: authUser.email,
              ...dbUser,
            };

            next(user);
          });
      } else {
        fallback();
      }
    });
  }

  // *** USERS API ***

  user(uid) {
    this.db.collection('users').doc(uid);
  }
  users() {
    this.db.collection('users');
  }

  // *** TRIPS API ***

  trips() {
    this.db.collection('trips');
  }
}

export default Firebase;
