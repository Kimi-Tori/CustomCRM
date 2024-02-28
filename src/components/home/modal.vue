<template>
  <v-container class="modal">
    <v-dialog max-width="1600">
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn
          v-bind="activatorProps"
          color="surface-variant"
          text="Open Dialog"
          variant="flat"
        ></v-btn>
      </template>

      <template v-slot:default="{ isActive }">
        <v-card title="Dialog">
          <v-card-text>
            <v-card flat>
              <v-tabs v-model="tab" align-tabs="center">
                <v-tab :value="1">Landscape</v-tab>
                <v-tab :value="2">City</v-tab>
                <v-tab :value="3">Abstract</v-tab>
              </v-tabs>
              <v-window v-model="tab">
                <v-window-item v-for="n in 3" :key="n" :value="n">
                  <save-form />
                </v-window-item>
              </v-window>
            </v-card>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn text="Close Dialog" @click="isActive.value = false"></v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
  </v-container>
</template>

<script>
import SaveForm from "@/components/save-form.vue";

export default {
  name: "modal",
  components: { SaveForm },
  data: () => ({
    tab: null,
  }),
};
</script>

<style lang="scss">
.modal {
  &__v-card {
    box-shadow: none !important;
  }
}
</style>
