<template>
  <ion-app>
    <ion-header>
      <ion-toolbar>
        <ion-title>Header</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content padding>
      <h1>Main Content</h1>
      <img alt="Vue logo" src="./assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>

      <!-- Default Checkbox -->
      <ion-checkbox></ion-checkbox>

      <!-- Disabled Checkbox -->
      <ion-checkbox disabled></ion-checkbox>

      <!-- Checked Checkbox -->
      <ion-checkbox checked></ion-checkbox>

      <!-- Checkbox Colors -->
      <ion-checkbox color="primary"></ion-checkbox>
      <ion-checkbox color="secondary"></ion-checkbox>
      <ion-checkbox color="danger"></ion-checkbox>
      <ion-checkbox color="light"></ion-checkbox>
      <ion-checkbox color="dark"></ion-checkbox>

      <!-- Checkboxes in a List -->
      <ion-list>
        <ion-item>
          <ion-label>Pepperoni</ion-label>
          <ion-checkbox slot="end" value="pepperoni" checked></ion-checkbox>
        </ion-item>

        <ion-item>
          <ion-label>Sausage</ion-label>
          <ion-checkbox slot="end" value="sausage" disabled></ion-checkbox>
        </ion-item>

        <ion-item>
          <ion-label>Mushrooms</ion-label>
          <ion-checkbox slot="end" value="mushrooms"></ion-checkbox>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld
  }
};
</script>
