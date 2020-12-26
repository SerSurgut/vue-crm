import Vue from "vue";
import Validate from "vuelidate";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import dateFilter from "@/filters/date.filter";
import messagePlugin from "./utils/message.plugin";
import "materialize-css/dist/js/materialize.min";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

Vue.config.productionTip = false;
Vue.filter("date", dateFilter);
Vue.use(Validate);
Vue.use(messagePlugin);

const firebaseConfig = {
  apiKey: "AIzaSyBEP76gWHiY14fZnGtLa7RnNoatkje8yKM",
  authDomain: "test-359be.firebaseapp.com",
  databaseURL: "https://test-359be-default-rtdb.firebaseio.com",
  projectId: "test-359be",
  storageBucket: "test-359be.appspot.com",
  messagingSenderId: "462032010980",
  appId: "1:462032010980:web:417c2c1977288702b4f6f1"
};
firebase.initializeApp(firebaseConfig);
let app;
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
