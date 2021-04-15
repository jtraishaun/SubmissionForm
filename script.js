var app = new Vue({
  el: "#app",
  data: {
    name: "",
    email: "",
    nameError: "",
    emailError: "",
    submit: "",
    max: 250
  },

  methods: {
    check: function () {
      if (this.nameError == null && this.emailError == null) {
        this.submit = "Submitted!";
      } else {
        this.submit = "Please fill out all fields.";
      }
    }
  },

  watch: {
    name: function (name) {
      if (this.name.length < 2) {
        this.nameError = "Name must be greater than 2 characters.";
      } else if ((this.name.length = 0 || this.name.length >= 2)) {
        this.nameError = null;
      }
    },

    email: function (email) {
      var special = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!special.test(email)) {
        this.emailError = "Invalid E-Mail Address.";
      } else if (special.test(email)) {
        this.emailError = null;
      }
    }
  }
});

Vue.component("codenames", {
  data: function () {
    return {
      show: false
    };
  },
  props: ["name", "code"],
  template: `<div v-on:click="toggleName"><p v-bind:class="{hide:show}"> {{name}}</p> <p v-bind:class="{hide:!show}">{{code}}</p></div>`,
  methods: {
    toggleName: function () {
      this.show = !this.show;
    }
  }
});

var app = new Vue({
  el: "#spies",
  data: {
    codenames: [
      { name: "Protagonist", codename: "Joker" },
      { name: "Anne", codename: "Panther" },
      { name: "Ryuji", codename: "Skull" }
    ]
  }
});