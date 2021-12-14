const app = Vue.createApp({
    data() {
        return {
            input: ''
        }
    },
    methods: {
        alertText() {
            alert('Help me!');
        },
        setInput(event) {
            this.input = event.target.value;
        }
    }
});

app.mount('#assignment');
