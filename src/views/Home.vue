<template>
  <ion-content padding class="home">
    <ion-text>
      <h1>Main Content</h1>
    </ion-text>

    <ion-img alt="Vue logo" :src="require('@/assets/logo.png')"></ion-img>

    <ion-list>
      <ion-item v-for="(entry, index) in form" :key="index">
        <ion-icon name="add"></ion-icon>
        <ion-label>{{entry.val}}</ion-label>

        <ion-checkbox
          slot="end"
          @input="entry.checked = $event.target.value"
          :value="entry.isChecked"
        ></ion-checkbox>
      </ion-item>
    </ion-list>
    <hello-world></hello-world>
  </ion-content>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  props: {
    msg: String
  },
  components: {
    HelloWorld
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
