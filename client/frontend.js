import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js';

Vue.component('loader', {
    template: `
        <div style="display: flex; justify-content: center; align-items: center">
               <div class="spinner-border text-warning" role="status">
        <span class="sr-only">Loading...</span>
             </div>
        </div>
 
    `
})
new Vue ({
    el: '#app',
    data(){
        return {
            loading: false,
            form: {
                name: '',
                value: ''
            },
            contacts: []
        }
    },
    computed: {
        canCreate() {
            return this.form.value.trim() && this.form.name.trim()
        }
    },
    methods: {
        async createContact() {
            let {...contact} = this.form;
            let addContact = await req('/api/contacts', 'POST', contact)
            console.log(contact)
            this.contacts.push(addContact)
            this.form.name = this.form.value = ''
        },
        markContact(id) {
            const contact = this.contacts.find(c => c.id === id)
            contact.marked = true;
        },
        removeContact(id) {
            this.contacts = this.contacts.filter(c => c.id !== id)

        }
    },
    async mounted() {
        this.loading = true
        this.contacts = await req('/api/contacts')
        this.loading = false


    }
})

async function req(url, method='GET', data = null) {
    try {
        const headers = {}
        let body
        if (data) {
            headers['Content-Type'] = 'application/json'
            body = JSON.stringify(data)
        }
        const res = await fetch(url, {
            method,
            headers,
            body
        })
        return await res.json()
    } catch (e) {
        console.warn("Error", e.message)
    }

}
