<template>
  <v-container>
    <v-card>
      <v-card-text>
        <div class="title font-weight-bold mb-2">activator slot使用</div>
        <v-dialog v-model="dialog1" max-width="500">
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" text="Open Dialog 1"></v-btn>
          </template>
          <template v-slot:default>
            <v-card title="activator slot">
              <v-card-text>
                ボタンを中心に開かれる動きを見せます。
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text="閉じる" @click="dialog1 = false"></v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </v-card-text>
      <v-divider class="my-2"></v-divider>
      <v-card-text>
        <div class="title font-weight-bold mb-2">v-model使用</div>
        <v-btn @click="dialog2 = true" text="Open Dialog 2"></v-btn>
        <v-dialog v-model="dialog2" width="auto">
          <v-card title="activator slot">
              <v-card-text>
                画面の中心から開かれる動きを見せます。
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text="閉じる" @click="dialog2 = false"></v-btn>
              </v-card-actions>
            </v-card>
        </v-dialog>
      </v-card-text>
      <v-divider class="my-2"></v-divider>
      <v-card-text>
        <div class="title font-weight-bold mb-2">Persistent</div>
        <v-dialog v-model="dialog3" max-width="500" persistent>
          <template v-slot:activator="{ props: activatorProps }">
            <v-btn v-bind="activatorProps" text="Open Dialog 3"></v-btn>
          </template>
          <v-card title="Persistent">
            <v-card-text>
              ボタンをクリークしない限り閉じれません。
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text="閉じる" @click="dialog3 = false"></v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
  import { ref } from 'vue';

  const dialog1 = ref(false);
  const dialog2 = ref(false);
  const dialog3 = ref(false);
</script>