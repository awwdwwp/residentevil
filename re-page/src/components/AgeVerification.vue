<template>
  <v-dialog v-model="dialog" persistent max-width="400">
    <v-card class="pa-6 text-center" style="background: rgba(0,0,0,0.9); color:white;">
      <v-card-title class="text-h6 mb-2">AGE VERIFICATION</v-card-title>
      <v-card-text class="mb-4">
        Please enter your date of birth to access Resident Evil Portal.
      </v-card-text>

      <v-row class="mb-4" justify="center" dense>
        <v-col cols="4">
          <v-text-field
            v-model="month"
            label="Month"
            type="number"
            min="1"
            max="12"
            dense
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field
            v-model="day"
            label="Day"
            type="number"
            min="1"
            max="31"
            dense
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field
            v-model="year"
            label="Year"
            type="number"
            min="1900"
            max="2025"
            dense
          ></v-text-field>
        </v-col>
      </v-row>

      <v-card-actions class="justify-center">
        <v-btn color="red" class="mx-2" @click="checkAge">
          Submit
        </v-btn>
      </v-card-actions>

      <v-alert type="error" v-if="error" dense class="mt-2">
        You must be at least 18 years old to enter.
      </v-alert>

    </v-card>
  </v-dialog>
</template>
<script lang="ts">
export default {
  name: "AgeVerification",
  data() {
    return {
      dialog: false,
      month: '',
      day: '',
      year: '',
      error: false
    }
  },
  mounted() {
    const verified = localStorage.getItem("ageVerified");
    if (!verified) this.dialog = true;
  },
  methods: {
    checkAge() {
      const birth = new Date(Number(this.year), Number(this.month) - 1, Number(this.day));
      const today = new Date();
      const age = today.getFullYear() - birth.getFullYear();
      const monthDiff = today.getMonth() - birth.getMonth();
      const dayDiff = today.getDate() - birth.getDate();

      
      let actualAge = age;
      if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        actualAge--;
      }

      if (actualAge >= 18) {
        localStorage.setItem("ageVerified", "true");
        this.dialog = false;
      } else {
        this.error = true;
      }
    }
  }
}
</script>

<style scoped>
.v-card {
  border-radius: 8px;
}
</style>

