<template>
  <div class="modal-form">
    <v-container>
      <v-select label="Type" :items="typeItems" variant="underlined"></v-select>

      <div class="d-sm-flex">
        <v-select
          label="Status"
          :items="statusItems"
          variant="underlined"
          class="mr-sm-2"
        ></v-select>
        <v-select
          label="KYC Status"
          :items="kycStatusItems"
          variant="underlined"
          class="ml-sm-2"
        ></v-select>
      </div>

      <v-select
        label="Assigned Manager"
        :items="assignedManagerItems"
        variant="underlined"
      ></v-select>
      <v-select
        label="Approved By"
        :items="approvedByItems"
        variant="underlined"
      ></v-select>

      <div class="d-sm-flex">
        <v-file-input
          label="Approval Date"
          variant="underlined"
          class="mr-sm-2"
        ></v-file-input>
        <v-file-input
          label="Termination Date"
          variant="underlined"
          class="ml-sm-2"
        ></v-file-input>
      </div>

      <v-text-field label="Lead Source" variant="underlined"></v-text-field>
      <v-text-field label="Lead Campaign" variant="underlined"></v-text-field>
      <v-text-field label="Introducer" variant="underlined"></v-text-field>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "modal-form",
  data() {
    return {
      fomData: {
        type: "",
        status: "",
        kycStatus: "",
        assignedManager: "",
        approvedBy: "",
        approvalDate: "",
        terminationDate: "",
        leadSource: "",
        leadCampaign: "",
        introducer: "",
      },

      typeItems: [
        "California",
        "Colorado",
        "Florida",
        "Georgia",
        "Texas",
        "Wyoming",
      ],
      statusItems: [
        "California",
        "Colorado",
        "Florida",
        "Georgia",
        "Texas",
        "Wyoming",
      ],
      kycStatusItems: [
        "California",
        "Colorado",
        "Florida",
        "Georgia",
        "Texas",
        "Wyoming",
      ],
      assignedManagerItems: [
        "California",
        "Colorado",
        "Florida",
        "Georgia",
        "Texas",
        "Wyoming",
      ],
      approvedByItems: [
        "California",
        "Colorado",
        "Florida",
        "Georgia",
        "Texas",
        "Wyoming",
      ],
    };
  },
};
</script>

<style lang="scss">
.modal-form {
}
</style>
