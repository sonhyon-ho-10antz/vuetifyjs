<template>
  <div>
    <v-container>
      <v-card>
        <v-sheet class="pa-4">
          <div class="title font-weight-bold mb-2">基本ボタン</div>
          <v-row justify="center">
            <v-col cols="1" sm="2">
              <v-btn block>ボタン</v-btn>
            </v-col>
          </v-row>
          <v-divider class="my-4"></v-divider>
          <div class="title font-weight-bold mb-2">variant</div>
          <v-row justify="center">
            <v-col cols="12" sm="3">
              <v-btn block variant="outlined">outlined</v-btn>
            </v-col>
            <v-col cols="12" sm="3">
              <v-btn block variant="tonal">tonal</v-btn>
            </v-col>
            <v-col cols="12" sm="3">
              <v-btn block variant="text">text</v-btn>
            </v-col>
            <v-col cols="12" sm="3">
              <v-btn block variant="plain">plain</v-btn>
            </v-col>
          </v-row>
          <v-divider class="my-4"></v-divider>
          <div class="title font-weight-bold mb-2">アイコン</div>
          <v-row justify="center">
            <v-col cols="12" sm="4">
              <v-btn icon="$vuetify"></v-btn>
            </v-col>
            <v-col cols="12" sm="4">
              <v-btn block prepend-icon="$vuetify">prepend-icon</v-btn>
            </v-col>
            <v-col cols="12" sm="4">
              <v-btn block append-icon="$vuetify">append-icon</v-btn>
            </v-col>
          </v-row>
          <v-divider class="my-4"></v-divider>
          <div class="title font-weight-bold mb-2">密度</div>
          <v-row justify="center">
            <v-col cols="12" sm="4">
              <v-btn block density="compact">compact</v-btn>
            </v-col>
            <v-col cols="12" sm="4">
              <v-btn block density="comfortable">comfortable</v-btn>
            </v-col>
            <v-col cols="12" sm="4">
              <v-btn block density="default">default</v-btn>
            </v-col>
          </v-row>
          <v-divider class="my-4"></v-divider>
          <div class="title font-weight-bold mb-2">size</div>
          <v-row justify="center">
            <v-col cols="12" sm="2">
              <v-btn block size="x-small">x-small</v-btn>
            </v-col>
            <v-col cols="12" sm="2">
              <v-btn block size="small">small</v-btn>
            </v-col>
            <v-col cols="12" sm="2">
              <v-btn block>regular</v-btn>
            </v-col>
            <v-col cols="12" sm="2">
              <v-btn block size="large">large</v-btn>
            </v-col>
            <v-col cols="12" sm="2">
              <v-btn block size="x-large">x-large</v-btn>
            </v-col>
          </v-row>
          <v-divider class="my-4"></v-divider>
          <div class="title font-weight-bold mb-2">block</div>
          <v-row justify="center">
            <v-col cols="1" md="2">
              <v-btn>default</v-btn>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col>
              <v-btn block>block</v-btn>
            </v-col>
          </v-row>
          <v-divider class="my-4"></v-divider>
          <div class="title font-weight-bold mb-2">rounded</div>
          <v-row justify="center">
            <v-col cols="12" md="4" sm="6">
              <v-btn block rounded="0">rounded 0</v-btn>
            </v-col>
            <v-col cols="12" md="4" sm="6">
              <v-btn block rounded="xs">rounded xs</v-btn>
            </v-col>
            <v-col cols="12" md="4" sm="6">
              <v-btn block rounded="sm">rounded sm</v-btn>
            </v-col>
            <v-col cols="12" md="4" sm="6">
              <v-btn block>regular</v-btn>
            </v-col>
            <v-col cols="12" md="4" sm="6">
              <v-btn block rounded="lg">rounded lg</v-btn>
            </v-col>
            <v-col cols="12" md="4" sm="6">
              <v-btn block rounded="xl">rounded xl</v-btn>
            </v-col>
          </v-row>
          <v-divider class="my-4"></v-divider>
          <div class="title font-weight-bold mb-2">elevation</div>
          <v-row justify="center">
            <v-col cols="12" md="3">
              <v-btn block>default(2)</v-btn>
            </v-col>
            <v-col cols="12" sm="3">
              <v-btn block elevation="8">8</v-btn>
            </v-col>
            <v-col cols="12" sm="3">
              <v-btn block elevation="16">16</v-btn>
            </v-col>
            <v-col cols="12" sm="3">
              <v-btn block elevation="24">24</v-btn>
            </v-col>
          </v-row>
          <v-divider class="my-4"></v-divider>
          <div class="title font-weight-bold mb-2">ripple</div>
          <v-row justify="center">
            <v-col cols="2" sm="2">
              <v-btn block>default</v-btn>
            </v-col>
            <v-col cols="2" sm="2">
              <v-btn :ripple="false" block>なし</v-btn>
            </v-col>
          </v-row>
          <v-divider class="my-4"></v-divider>
          <div class="title font-weight-bold mb-2">loader</div>
          <v-row justify="center">
            <v-col cols="2" sm="2">
              <v-btn :loading="loading" @click="load" block>default</v-btn>
            </v-col>
          </v-row>
        </v-sheet>
      </v-card>
    </v-container>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const loading = ref(false)
  function load () {
    loading.value = true
    setTimeout(() => (loading.value = false), 3000)
  }
</script>