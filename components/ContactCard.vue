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
          @submit.prevent="submitForm"
          ref="form">
          <v-text-field
              label="Name"
              v-model="name"
              :rules="[required]"
              clearable
              prepend-icon="mdi-account"
          ></v-text-field>
          <v-text-field
              label="Email"
              v-model="email"
              :rules="[required]"
              clearable
              prepend-icon="mdi-email"
          ></v-text-field>
          <v-text-field
              label="Subject"
              v-model="subject"
              :rules="[required]"
              clearable
              prepend-icon="mdi-information-outline"
          ></v-text-field>
          <v-textarea
              label="Message"
              v-model="message"
              :rules="[required]"
              clearable
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
import { ref } from "vue";
import {storeToRefs} from "pinia";
import {useDataStore} from "~/store/data_store";
const data_store = useDataStore();
const { name, email, subject, message, submit_dialog } = storeToRefs(data_store);
const form = ref(null);
async function reset() {
  //@ts-ignore
  form.value.reset()
}
function required (v: any) {
  return !!v || 'Field is required'
}
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

  reset();

}

</script>

<style scoped>

</style>