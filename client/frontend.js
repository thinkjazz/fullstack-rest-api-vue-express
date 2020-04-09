import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js';


new Vue ({
    el: '#app',
    data(){
        return {
            form: {
                name: '',
                value: ''
            },
            contacts: [
                {id: 1, name: 'sudo', value: '+7 958-555-54-21', marked: false}
            ]
        }
    },
    computed: {
        canCreate() {
            return this.form.value.trim() && this.form.name.trim()
        }
    },
    methods: {
        createContact() {
            let {...contact} = this.form;
            console.log(contact)
            this.contacts.push({...contact, id: +Date.now().toFixed(8), marked: false })
            this.form.name = this.form.value = ''
        },
        markContact(id) {
            const contact = this.contacts.find(c => c.id === id)
            contact.marked = true;
        },
        removeContact(id) {
            this.contacts = this.contacts.filter(c => c.id !== id)

        }
    }
})
