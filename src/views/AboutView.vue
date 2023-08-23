<template>
  <div class="about">
    <h1>This is an about page</h1>
    <v-card>
      <v-tabs v-model="tab" bg-color="primary">
        <v-tab value="one">Item One</v-tab>
        <v-tab value="two">Item Two</v-tab>
        <v-tab value="three">Item Three</v-tab>
      </v-tabs>

      <v-card-text>
        <v-window v-model="tab">
          <v-window-item value="one"> One </v-window-item>

          <v-window-item value="two"> Two </v-window-item>

          <v-window-item value="three"> Three </v-window-item>
        </v-window>
      </v-card-text>
    </v-card>
  </div>
</template>
<style lang="scss" scoped>
h1 {
  @include font(700, 2.5rem, var(--light_red_clr));
  text-transform: capitalize;
}
</style>

<script>
export default {
  data: () => ({
    tab: null,
  }),
}
</script>
