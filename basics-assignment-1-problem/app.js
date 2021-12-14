const app = Vue.createApp({
    data() {
        return {
            name: 'Pasquale',
            age: '30',
            newAge: '35'
        }
    },
    methods: {
      outputNumber() {
          const randomNumber = Math.random();
          return randomNumber;
      }
    }





});

app.mount('#assignment');