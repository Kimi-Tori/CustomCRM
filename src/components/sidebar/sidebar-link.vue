<template>
  <div class="sidebar-link">
    <router-link
      :to="to"
      class="sidebar-link__item d-flex align-center ml-8 mb-2 pa-2"
      :class="{ active: isActive }"
    >
      <transition name="fade">
        <span v-if="!collapsed">
          <slot />
        </span>
      </transition>
    </router-link>
  </div>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { collapsed } from "@/store/state.js";

export default {
  name: "sidebar-link",
  props: {
    to: { type: String, required: true },
    icon: { type: String, required: true },
  },
  setup(props) {
    const route = useRoute();
    const isActive = computed(() => route.path === props.to);
    return { isActive, collapsed };
  },
};
</script>

<style lang="scss">
.sidebar-link {
  & .fade-enter-active,
  & .fade-leave-active {
    transition: opacity 0.1s;
  }

  & .fade-enter,
  & .fade-leave-to {
    opacity: 0;
  }

  &__item {
    cursor: pointer;
    position: relative;
    font-weight: 400;
    user-select: none;

    border-radius: 5px;
    color: $white;
    text-decoration: none;

    &:hover {
      background-color: $green-hover;
    }

    &.active {
      background-color: $green-active;
    }

    & .icon {
      flex-shrink: 0;
      width: 25px;
    }
  }
}
</style>
