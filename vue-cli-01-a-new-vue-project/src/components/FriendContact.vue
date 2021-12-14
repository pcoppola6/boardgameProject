<template>
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails">Show Details</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
            </ul>
    </li>
  
</template>

<script>
export default {
    data() {
        return {
            detailsAreVisible: false,
            friend: {
                
                    id: 'manuel',
                    name: 'Manuel',
                    phone: '12342344234',
                    email: 'something@aol.com'
                    },
        };

    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
    
};
</script>