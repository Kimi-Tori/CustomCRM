<template>
  <div class="sidebar d-flex flex-column" :style="{ width: sidebarWidth }">
    <sidebar-accordion
      title="Overview"
      icon="fas fa-chart-pie"
      :links="[{ to: '/', text: 'Overview' }]"
    ></sidebar-accordion>
    <sidebar-accordion
      title="Clients"
      icon="fas fa-user"
      :links="[{ to: '/clients', text: 'Clients' }]"
    ></sidebar-accordion>
    <sidebar-accordion
      title="Finansial"
      icon="fas fa-coins"
      :links="[{ to: '/finansial', text: 'Finansial' }]"
    ></sidebar-accordion>
    <sidebar-accordion
      title="Ibs"
      icon="fas fa-briefcase"
      :links="[{ to: '/ibs', text: 'Ibs' }]"
    ></sidebar-accordion>
    <sidebar-accordion
      title="Reports"
      icon="fas fa-file"
      :links="[{ to: '/reports', text: 'Reports' }]"
    ></sidebar-accordion>
    <sidebar-accordion
      title="Configuration"
      icon="fas fa-gears"
      :links="[{ to: '/configuration', text: 'Configuration' }]"
    ></sidebar-accordion>

    <span
      class="sidebar__icon"
      @click="toggleSidebar"
      :class="{ 'rotate-180': collapsed }"
    >
      <i class="fas fa-angle-double-left pa-2" />
    </span>
  </div>
</template>

<script>
import { collapsed, toggleSidebar, sidebarWidth } from "@/store/state";
import SidebarAccordion from "@/components/sidebar/sidebar-accordion.vue";

export default {
  name: "sidebar",
  props: {},
  components: { SidebarAccordion },
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
  padding: 10px;

  transition: 0.3s ease;

  &__icon {
    position: absolute;
    bottom: 0;

    color: $white-alpha-70;

    transition: 0.2s linear;
  }
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>
