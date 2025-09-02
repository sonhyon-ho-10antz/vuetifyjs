<template>
  <v-container>
    <v-card>
      <div class="title font-weight-bold mb-2">基本形</div>
      <v-autocomplete
        label="ラベル"
        :items="['アイテム1', 'アイテム2', 'アイテム3', 'アイテム4', 'アイテム5']"
      ></v-autocomplete>
    </v-card>
    <v-divider class="my-2"></v-divider>
    <v-card>
      <div class="title font-weight-bold mb-2">複数選択</div>
      <v-autocomplete
        label="ラベル"
        multiple
        :items="['アイテム1', 'アイテム2', 'アイテム3', 'アイテム4', 'アイテム5']"
      ></v-autocomplete>
    </v-card>
  </v-container>
</template>


<script>
</script>

