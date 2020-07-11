<template>
  <md-list
    class="nav-mobile-menu nav-mobile-section-start"
    v-if="navMobileSectionStart === 'true'"
  >
    <slot>gggggggg</slot>
  </md-list>
</template>

<script>
export default {
  name: "mobile-menu",
  props: {
    navMobileSectionStart: {
      type: String,
      default: "false"
    }
  }
};
</script>
