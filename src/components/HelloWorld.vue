<template>
  <ion-app>
    <ion-header>
      <ion-toolbar>
        <ion-title>Header</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content padding>
      <h1>Main Content</h1>
      <img alt="Vue logo" src="@/assets/logo.png">
      <!-- Default Checkbox -->
      <ion-checkbox></ion-checkbox>

      <!-- Disabled Checkbox -->
      <ion-checkbox disabled="true" mode="ios"></ion-checkbox>

      <ion-checkbox indeterminate="true" mode="ios"></ion-checkbox>
      <!-- Checked Checkbox -->
      <ion-checkbox checked="true" mode="ios"></ion-checkbox>

      <!-- Checkbox Colors -->
      <ion-checkbox color="primary" mode="ios"></ion-checkbox>
      <ion-checkbox color="secondary" mode="ios"></ion-checkbox>
      <ion-checkbox color="danger" mode="ios"></ion-checkbox>
      <ion-checkbox color="light"></ion-checkbox>
      <ion-checkbox color="dark" id="drk" @input="input($event)" :value="drk.isChecked"></ion-checkbox>
      {{ drk }}
      <!-- Checkboxes in a List -->
      <ion-list>
        <ion-item v-for="entry in form" :key="entry.l">
          <ion-label>{{entry.val}}</ion-label>

          <ion-checkbox
            slot="end"
            @input="entry.checked = $event.target.value"
            :value="entry.isChecked"
          ></ion-checkbox>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-app>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      form: [
        { val: "Pepperoni", isChecked: true },
        { val: "Sausage", isChecked: false },
        { val: "Mushroom", isChecked: false }
      ],
      drk: {
        isChecked: false
      }
    };
  },
  methods: {
    input(e) {
      console.log(this.drk.isChecked);

      this.drk.isChecked = e.target.value;
    }
  }
};
</script>
