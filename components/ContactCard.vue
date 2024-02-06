<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div class="text-3xl flex justify-center">
          Contact Form
        </div>
        <hr class="my-4 border-gray-400">
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-form
          @submit.prevent="submitForm">
          <v-text-field
              label="Name"
              v-model="name"
              :rules="[required]"
              clearable: boolean=""
              prepend-icon="mdi-account"
          ></v-text-field>
          <v-text-field
              label="Email"
              v-model="email"
              :rules="[required]"
              clearable: boolean=""
              prepend-icon="mdi-email"
          ></v-text-field>
          <v-text-field
              label="Subject"
              v-model="subject"
              :rules="[required]"
              clearable: boolean=""
              prepend-icon="mdi-information-outline"
          ></v-text-field>
          <v-textarea
              label="Message"
              v-model="message"
              :rules="[required]"
              clearable: boolean=""
              prepend-icon="mdi-message"
          ></v-textarea>
          <div class="flex justify-end">
            <v-btn
                color="primary"
                variant="elevated"
                type="submit"
                text="SUBMIT"
            ></v-btn>
          </div>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import {storeToRefs} from "pinia";
import {useDataStore} from "~/store/data_store";
const data_store = useDataStore();
import { useTheme } from 'vuetify'
const theme = useTheme()
const { name, email, subject, message, submit_dialog } = storeToRefs(data_store);
async function submitForm() {
  alert("Thank you for your message! I will get back to you as soon as possible.");
  submit_dialog.value = false;
  let formData = new FormData();

  formData.append('name', name.value);
  formData.append('email', email.value);
  formData.append('subject', subject.value);
  formData.append('message', message.value);

  await $fetch('/api/aws-email', {
    method: 'POST',
    body: formData,
  });
}
function required (v: any) {
  return !!v || 'Field is required'
}
</script>

<style scoped>

</style>