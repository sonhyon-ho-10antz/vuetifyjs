<template>
  <v-container>
    <v-card>
      <v-card-text>
        <div class="title font-weight-bold mb-2">リスト１</div>
        <v-list
          :items="items"
        ></v-list>
      </v-card-text>
      <v-divider class="my-2"></v-divider>
      <v-card-text>
        <div class="title font-weight-bold mb-2">リスト２</div>
        <v-list
          :items="items2"
            item-title="name"
            item-value="id"
        ></v-list>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
  const items = [
    { type: 'subheader', title: 'グループ01' },
    {
      title: 'title',
      value: 1,
    },
    {
      title: 'value',
      value: 2,
    },
    {
      title: 'type',
      value: 3,
    },
    { type: 'divider' },
    { type: 'subheader', title: 'グループ01' },
    {
      title: 'props',
      value: 4,
    },
    {
      title: 'はVuetifyのv-listコンポーネントが',
      value: 5,
    },
    {
      title: 'これらのプロパティをデフォルト値として使用するためです',
      value: 6,
    },
  ]
  const items2 = [
    {
      name: '違う場合は',
      id: 1,
    },
    {
      name: 'item-title="name"みたいに',
      id: 2,
    },
    {
      name: '指定する必要があります。',
      id: 3,
    },
  ]
</script>