const app = Vue.createApp({
    data() {
     return {

         friends: [
            {
            id: 'manuel', 
            name: 'Manuel Lorenz', 
            phone: '23423423',
            email: 'something@aol.com',
             },
             {
            id: 'Drew', 
            name: 'Drew Lorenz', 
            phone: '654654654',
            email: 'somethingelse@aol.com',
            },
        ],
    };
    },
    
});

app.component('friend-contact', {
    template: `
    <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
  `,
    data() {
         return { detailsAreVisible: false,
         friend: {
            id: 'manuel', 
            name: 'Manuel Lorenz', 
            phone: '23423423',
            email: 'something@aol.com',
         },
        };
},
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});

app.mount('#app');