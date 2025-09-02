<template>
  <v-container>
    <v-card>
      <div class="title font-weight-bold mb-2">基本形</div>
      <v-tabs
        v-model="tab"
        bg-color="primary"
      >
        <v-tab value="tap01">タブ01</v-tab>
        <v-tab value="tap02">タブ02</v-tab>
        <v-tab value="tap03">タブ03</v-tab>
      </v-tabs>
      <v-card-text>
        <v-window v-model="tab">
          <v-window-item value="tap01">
            Vuetify2はv-tabs-windowとv-tabs-window-itemを
          </v-window-item>
          <v-window-item value="tap02">
            Vuetify3はv-windowとv-window-itemを
          </v-window-item>
          <v-window-item value="tap03">
            使います
          </v-window-item>
        </v-window>
      </v-card-text>
    </v-card>
    <v-divider class="my-2"></v-divider>
    <v-card>
      <div class="title font-weight-bold mb-2">center</div>
      <v-tabs
        v-model="tab"
        align-tabs="center"
        bg-color="primary"
      >
        <v-tab value="tap01">タブ01</v-tab>
        <v-tab value="tap02">タブ02</v-tab>
        <v-tab value="tap03">タブ03</v-tab>
      </v-tabs>
    </v-card>
    <v-divider class="my-2"></v-divider>
    <v-card>
      <div class="title font-weight-bold mb-2">end</div>
      <v-tabs
        v-model="tab"
        align-tabs="end"
        bg-color="primary"
      >
        <v-tab value="tap01">タブ01</v-tab>
        <v-tab value="tap02">タブ02</v-tab>
        <v-tab value="tap03">タブ03</v-tab>
      </v-tabs>
    </v-card>
    <v-divider class="my-2"></v-divider>
    <v-card>
      <div class="title font-weight-bold mb-2">center-active</div>
      <v-tabs
        v-model="tab"
        align-tabs="end"
        center-active
        bg-color="primary"
      >
        <v-tab value="tap01">タブ01</v-tab>
        <v-tab value="tap02">タブ02</v-tab>
        <v-tab value="tap03">タブ03</v-tab>
        <v-tab value="tap04">タブ04</v-tab>
        <v-tab value="tap05">タブ05</v-tab>
        <v-tab value="tap06">タブ06</v-tab>
        <v-tab value="tap07">タブ07</v-tab>
        <v-tab value="tap08">タブ08</v-tab>
        <v-tab value="tap09">タブ09</v-tab>
        <v-tab value="tap10">タブ10</v-tab>
        <v-tab value="tap11">タブ11</v-tab>
        <v-tab value="tap12">タブ12</v-tab>
        <v-tab value="tap13">タブ13</v-tab>
      </v-tabs>
    </v-card>
  </v-container>
</template>


<script>
  export default {
    data: () => ({
      tab: null,
    }),
  }
</script>

