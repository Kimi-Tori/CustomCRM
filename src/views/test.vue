<template>
  <v-container class="test d-flex justify-center">
    <h1>
      Это тестовая страница нужна для проверки бокового меню. Все работает,
      поздравляю! =)
    </h1>
  </v-container>
</template>

<script>
import { collapsed, toggleSidebar } from "@/store/state.js";

export default {
  name: "test",
  setup() {
    return { collapsed, toggleSidebar };
  },
};
</script>

<style lang="scss">
.test {
  & h1 {
    max-width: 500px;
  }
}
</style>
