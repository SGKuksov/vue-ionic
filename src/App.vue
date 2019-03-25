<template>
  <ion-app>

    <ion-tabs>
      <ion-tab tab="flash" icon="flash" label="flash">
        <ion-header>
          <ion-toolbar>
            <ion-title>Header Flash</ion-title>
          </ion-toolbar>
        </ion-header>

        <router-view/>
      </ion-tab>
      <ion-tab tab="apps" icon="apps" label="apps">
        <ion-header>
          <ion-toolbar>
            <ion-title>Header Apps</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-icon name="flash"></ion-icon>
      </ion-tab>
      <ion-tab tab="send" icon="send" label="send">
        <ion-header>
          <ion-toolbar>
            <ion-title>Header Send</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-icon name="flash"></ion-icon>
      </ion-tab>

      <!-- <ion-tab-bar slot="bottom">
        <ion-tab-button tab="flash">
          <ion-icon name="flash" layout="icon-hide"></ion-icon>
          <ion-label>Tab One</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="apps">
          <ion-icon name="apps"></ion-icon>
          <ion-label>Tab Two</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="send">
          <ion-icon name="send"></ion-icon>
          <ion-label>Tab Three</ion-label>
        </ion-tab-button>
      </ion-tab-bar> -->
    </ion-tabs>
  </ion-app>
</template>

<style src="@ionic/core/css/ionic.bundle.css"></style>
<style src="@/assets/css/variables.css"></style>
