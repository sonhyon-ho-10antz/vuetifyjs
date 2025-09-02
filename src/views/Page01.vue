<template>
  <div>
    <v-navigation-drawer v-model="drawers.left" location="left" temporary />
    <v-navigation-drawer v-model="drawers.right" location="right" temporary />
    <v-navigation-drawer v-model="drawers.top" location="top" temporary />
    <v-navigation-drawer v-model="drawers.bottom" location="bottom" temporary />

    <v-app-bar v-if="showAppBar" location="top" density="compact">
      <div class="v-spacer"></div>

      <v-tabs centered stacked>
        <v-tab><v-icon>mdi-home</v-icon><span>Home</span></v-tab>
        <v-tab><v-icon>mdi-heart</v-icon><span>Favorites</span></v-tab>
        <v-tab><v-icon>mdi-map-marker</v-icon><span>Nearby</span></v-tab>
      </v-tabs>
      <div class="v-spacer"></div>
    </v-app-bar>

    <v-navigation-drawer v-if="showSideRailLeft" permanent rail expand-on-hover>
      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-home" title="Home" value="home"></v-list-item>
        <v-list-item prepend-icon="mdi-heart" title="Favorites" value="favorites"></v-list-item>
        <v-list-item prepend-icon="mdi-map-marker" title="Nearby" value="nearby"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-navigation-drawer v-if="showSideRailRight" permanent rail expand-on-hover location="right">
      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-home" title="Home" value="home"></v-list-item>
        <v-list-item prepend-icon="mdi-heart" title="Favorites" value="favorites"></v-list-item>
        <v-list-item prepend-icon="mdi-map-marker" title="Nearby" value="nearby"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-bottom-navigation :active="showBottomNav" color="primary">
      <v-btn><v-icon>mdi-home</v-icon><span>Home</span></v-btn>
      <v-btn><v-icon>mdi-heart</v-icon><span>Favorites</span></v-btn>
      <v-btn><v-icon>mdi-map-marker</v-icon><span>Nearby</span></v-btn>
    </v-bottom-navigation>

    <v-container>
      <v-card>
        <v-sheet class="pa-4">
          <div class="title font-weight-bold mb-2">v-navigation-drawer</div>
          <v-row>
            <v-col cols="12" sm="3"><v-btn block color="teal" @click="drawers.top = !drawers.top">Toggle Top</v-btn></v-col>
            <v-col cols="12" sm="3"><v-btn block color="teal" @click="drawers.left = !drawers.left">Toggle Left</v-btn></v-col>
            <v-col cols="12" sm="3"><v-btn block color="teal" @click="drawers.right = !drawers.right">Toggle Right</v-btn></v-col>
            <v-col cols="12" sm="3"><v-btn block color="teal" @click="drawers.bottom = !drawers.bottom">Toggle Bottom</v-btn></v-col>
          </v-row>
          <v-divider class="my-4"></v-divider>

          <div class="title font-weight-bold mb-2">v-bottom-navigation</div>
          <v-row justify="center">
            <v-col cols="12" sm="4">
              <v-btn block color="indigo" @click="showBottomNav = !showBottomNav">Toggle Bottom Navigation</v-btn>
            </v-col>
          </v-row>
          <v-divider class="my-4"></v-divider>

          <div class="title font-weight-bold mb-2">v-navigation-drawerを利用した対案</div>
          <v-row>
            <v-col cols="12" sm="4">
              <v-btn block color="blue-grey" @click="showAppBar = !showAppBar">
                Toggle Top Bar
              </v-btn>
            </v-col>
            <v-col cols="12" sm="4">
              <v-btn block color="blue-grey" @click="showSideRailLeft = !showSideRailLeft">
                Toggle Left Rail
              </v-btn>
            </v-col>
            <v-col cols="12" sm="4">
              <v-btn block color="blue-grey" @click="showSideRailRight = !showSideRailRight">
                Toggle Right Rail
              </v-btn>
            </v-col>
          </v-row>
        </v-sheet>
      </v-card>
    </v-container>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

const drawers = reactive({ left: false, right: false, top: false, bottom: false });

const showBottomNav = ref(false);
const showAppBar = ref(false);
const showSideRailLeft = ref(false);
const showSideRailRight = ref(false);
</script>

<style>
.v-main {
  transition: padding 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>