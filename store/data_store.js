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
        navlink: [
            { title: 'index', icon: 'mdi-home', link: '/' },
            { title: 'contact', icon: 'mdi-email', link: '/contact' },
        ],
    }),
    getters: {
    },
    actions: {
    },
})