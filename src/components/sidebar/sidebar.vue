<template>
  <div class="sidebar d-flex flex-column" :style="{ width: sidebarWidth }">
    <sidebar-link to="/" icon="fas fa-home">Home</sidebar-link>
    <sidebar-link to="/test" icon="fas fa-columns">Test</sidebar-link>

    <span
      class="sidebar__icon"
      @click="toggleSidebar"
      :class="{ 'rotate-180': collapsed }"
    >
      <i class="fas fa-angle-double-left" />
    </span>
  </div>
</template>

<script>
import { collapsed, toggleSidebar, sidebarWidth } from "@/store/state";
import SidebarLink from "@/components/sidebar/sidebar-link.vue";

export default {
  name: "sidebar",
  props: {},
  components: { SidebarLink },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth };
  },
};
</script>

<style lang="scss">
:root {
  --sidebar-bg-color: #2f855a;
  --sidebar-item-hover: #38a169;
  --sidebar-item-active: #276749;
}

.sidebar {
  color: $white;
  background-color: $green;

  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;

  transition: 0.3s ease;

  &__icon {
    position: absolute;
    bottom: 0;
    padding: 0.75em;

    color: $white-alpha-70;

    transition: 0.2s linear;
  }
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>
