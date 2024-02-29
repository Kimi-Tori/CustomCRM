<template>
  <v-app>
    <sidebar />
    <v-main :style="{ 'margin-left': sidebarWidth }">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from "@/components/sidebar/sidebar.vue";
import { sidebarWidth } from "@/store/state.js";

export default {
  name: "App",
  components: { Sidebar },
  setup() {
    return { sidebarWidth };
  },

  data: () => ({}),
};
</script>
