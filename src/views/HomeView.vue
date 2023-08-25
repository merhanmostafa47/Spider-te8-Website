<template>
  <main>
    <div class="home">
      <h1>This is an {{$t('homePage')}}</h1>
    </div>
  </main>
</template>

<style lang="scss" scoped>
h1 {
  @include font(700, 2.5rem,$mid_green_clr);
  text-transform: uppercase;
}
</style>
