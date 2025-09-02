<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.value"
          :to="item.to"
          link
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>{{ $route.meta.title || 'Application' }}</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup>
  import { ref } from 'vue'

  const drawer = ref(false)

  const items = [
    {
      title: 'Home',
      value: 'home',
      to: '/',
      icon: 'mdi-home',
    },
    {
      title: 'Navigation',
      value: 'page01',
      to: '/page01',
      icon: 'mdi-numeric-1-box',
    },
    {
      title: 'Button',
      value: 'page02',
      to: '/page02',
      icon: 'mdi-numeric-2-box',
    },
    {
      title: 'Dialogs',
      value: 'page03',
      to: '/page03',
      icon: 'mdi-numeric-3-box',
    },
    {
      title: 'Expansion panels',
      value: 'page04',
      to: '/page04',
      icon: 'mdi-numeric-4-box',
    },
    {
      title: 'List',
      value: 'page05',
      to: '/page05',
      icon: 'mdi-numeric-5-box',
    },
    {
      title: 'Pagination',
      value: 'page06',
      to: '/page06',
      icon: 'mdi-numeric-6-box',
    },
    {
      title: 'Tabs',
      value: 'page07',
      to: '/page07',
      icon: 'mdi-numeric-7-box',
    },
    {
      title: 'Autocompletes',
      value: 'page08',
      to: '/page08',
      icon: 'mdi-numeric-8-box',
    },
  ]
</script>