import firebase from "firebase/app";
export default {
  actions: {
    async login({ dispatch, commit }, { email, password }) {
      try {
        console.log(dispatch, commit);
        await firebase.auth().signInWithEmailAndPassword(email, password);
      } catch (error) {
        throw console.log(error.message);
      }
    }
  }
};
