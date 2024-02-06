import { defineStore } from 'pinia'

export const useDataStore = defineStore('data_store', {
    state: () => ({
        tab: null,
        drawer: false,
        name: '',
        email: '',
        subject: '',
        message: '',
        submit_dialog: false,
    }),
    getters: {
    },
    actions: {
    },
})