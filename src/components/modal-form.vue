<template>
  <div class="modal-form">
    <v-container>
      <v-select
        label="Type"
        :items="[
          'California',
          'Colorado',
          'Florida',
          'Georgia',
          'Texas',
          'Wyoming',
        ]"
        variant="underlined"
      ></v-select>

      <div class="d-sm-flex">
        <v-select
          label="Status"
          :items="[
            'California',
            'Colorado',
            'Florida',
            'Georgia',
            'Texas',
            'Wyoming',
          ]"
          variant="underlined"
        ></v-select>
        <v-select
          label="KYC Status"
          :items="[
            'California',
            'Colorado',
            'Florida',
            'Georgia',
            'Texas',
            'Wyoming',
          ]"
          variant="underlined"
        ></v-select>
      </div>

      <v-select
        label="Assigned Manager"
        :items="[
          'California',
          'Colorado',
          'Florida',
          'Georgia',
          'Texas',
          'Wyoming',
        ]"
        variant="underlined"
      ></v-select>
      <v-select
        label="Approved By"
        :items="[
          'California',
          'Colorado',
          'Florida',
          'Georgia',
          'Texas',
          'Wyoming',
        ]"
        variant="underlined"
      ></v-select>
      <v-file-input label="Approval Date" variant="underlined"></v-file-input>
      <v-file-input
        label="Termination Date"
        variant="underlined"
      ></v-file-input>
      <v-text-field label="Lead Source" variant="underlined"></v-text-field>
      <v-text-field label="Lead Campaign" variant="underlined"></v-text-field>
      <v-text-field label="Introducer" variant="underlined"></v-text-field>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "modal-form",
};
</script>

<style lang="scss">
.modal-form {
}
</style>
