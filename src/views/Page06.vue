<template>
  <v-container>
    <v-card>
      <v-card-text>
        <div class="title font-weight-bold mb-2">基本形</div>
        <v-pagination
          v-model="page"
          :length="15"
        ></v-pagination>
      </v-card-text>
      <v-divider class="my-2"></v-divider>
      <v-card-text>
        <div class="title font-weight-bold mb-2">colsで制限</div>
        <v-row justify="center">
          <v-col cols="7">
            <v-container class="max-width">
              <v-pagination
                v-model="page"
                :length="15"
              ></v-pagination>
            </v-container>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>


<script setup>
  import { ref } from 'vue'

  const page = ref(1)
</script>