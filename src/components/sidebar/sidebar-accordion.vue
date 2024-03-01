<template>
  <div class="sidebar-accordion">
    <button
      class="sidebar-accordion__button d-flex justify-space-between align-center pa-2 mb-2"
      @click="toggleAccordion"
    >
      <div>
        <i class="icon mr-2 mr-sm-3" :class="icon" />
        {{ title }}
      </div>
      <i class="fas fa-angle-down" />
    </button>
    <div class="sidebar-accordion__content" v-show="isOpen">
      <sidebar-link
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        :icon="link.icon"
      >
        {{ link.text }}
      </sidebar-link>
    </div>
  </div>
</template>

<script>
import SidebarLink from "@/components/sidebar/sidebar-link.vue";

export default {
  name: "sidebar-accordion",
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: Array,
      required: true,
    },
    links: {
      type: Array,
      required: true,
    },
  },
  components: { SidebarLink },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleAccordion() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style lang="scss">
.sidebar-accordion {
  &__button {
    width: 100% !important;
  }
}
</style>
