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
  apiKey: "AIzaSyATmmGNlWYq198fUrh9GwftfHm4zr6oGGk",
  authDomain: "vue-cmr-257fc.firebaseapp.com",
  projectId: "vue-cmr-257fc",
  storageBucket: "vue-cmr-257fc.appspot.com",
  messagingSenderId: "206216033003",
  appId: "1:206216033003:web:8bec42fb4eaca0c34244ae"
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
