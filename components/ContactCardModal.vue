<template>
  <v-col cols="auto">
    <v-dialog
        v-model="submit_dialog"
        transition="dialog-top-transition"
        width="600"
    >
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" color="#dfc8a8" size="large" variant="outlined" class="mt-5">Contact Me</v-btn>
      </template>
      <template v-slot:default="{ isActive }">
        <v-card>
          <v-toolbar
              :class="{ 'bg-stone-800': theme.global.current.value.dark, 'bg-stone-900': !theme.global.current.value.dark }"
          >
            <v-toolbar-title class="grey-lighten-5 text-h4">
              Get In Touch
            </v-toolbar-title>
          </v-toolbar>
          <v-divider></v-divider>

          <v-card-text class="contact-me">
            <v-form>
              <v-text-field
                  label="Name"
                  v-model="name"
                  required
                  prepend-icon="mdi-account"
              ></v-text-field>
              <v-text-field
                  label="Email"
                  v-model="email"
                  required
                  prepend-icon="mdi-email"
              ></v-text-field>
              <v-text-field
                  label="Subject"
                  v-model="subject"
                  required
                  prepend-icon="mdi-information-outline"
              ></v-text-field>
              <v-textarea
                  label="Message"
                  v-model="message"
                  required
                  prepend-icon="mdi-message"
              ></v-textarea>
            </v-form>
          </v-card-text>
          <v-card-actions class="justify-end">
            <v-btn
                variant="elevated"
                @click="isActive.value = false"
                color="grey-darken-1"
            >Close</v-btn>
            <v-btn
                variant="elevated"
                color="#dfc8a8"
                @click="submitForm"
            >Submit</v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
  </v-col>
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

</script>

<style scoped>

</style>