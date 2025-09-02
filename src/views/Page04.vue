<template>
  <v-container>
    <v-card>
      <v-card-text>
        <div class="title font-weight-bold mb-2">default</div>
        <v-expansion-panels>
          <v-expansion-panel
            v-for="i in 3"
            :key="i"
            text="パネルの間に空きスペースがあります。"
            title="タイトル"
          ></v-expansion-panel>
        </v-expansion-panels>
      </v-card-text>
      <v-divider class="my-2"></v-divider>
      <v-card-text>
        <div class="title font-weight-bold mb-2">Accordion</div>
        <v-expansion-panels variant="accordion">
          <v-expansion-panel
            v-for="i in 3"
            :key="i"
            text="パネルの間に空きスペースがおりません。"
            title="タイトル"
          ></v-expansion-panel>
        </v-expansion-panels>
      </v-card-text>
      <v-divider class="my-2"></v-divider>
      <v-card-text>
        <div class="title font-weight-bold mb-2">inset</div>
        <v-expansion-panels class="my-4" variant="inset">
          <v-expansion-panel
            v-for="i in 3"
            :key="i"
            text="パネルが縮小されて開かれます。"
            title="タイトル"
          ></v-expansion-panel>
        </v-expansion-panels>
      </v-card-text>
      <v-divider class="my-2"></v-divider>
      <v-card-text>
        <div class="title font-weight-bold mb-2">popout</div>
        <v-expansion-panels class="my-4" variant="popout">
          <v-expansion-panel
            v-for="i in 3"
            :key="i"
            text="縮小されたパネルが拡大されて開かれます。"
            title="タイトル"
          ></v-expansion-panel>
        </v-expansion-panels>
      </v-card-text>
      <v-divider class="my-2"></v-divider>
      <v-card-text>
        <div class="title font-weight-bold mb-2">アイコン変更</div>
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-title collapse-icon="mdi-minus" expand-icon="mdi-plus">
              タイトル
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-title disable-icon-rotate>
              タイトル
              <template v-slot:actions>
                <v-icon color="error" icon="mdi-alert-circle">
                </v-icon>
              </template>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card-text>
    </v-card>
  </v-container>


</template>

<script setup>
  import { ref } from 'vue';
</script>