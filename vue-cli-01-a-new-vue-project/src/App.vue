<template>
    <section>
        <h2>My Friends</h2>
    <ul>
        <friend-contact></friend-contact>
        <friend-contact></friend-contact>
    </ul>
    </section>
</template>

<script>
import FriendContact from './components/FriendContact.vue'
export default {
  components: { FriendContact },
    data() {
        return {
            friends: [
                {
                    id: 'manuel',
                    name: 'Manuel',
                    phone: '12342344234',
                    email: 'something@aol.com'
                },
                 {
                    id: 'julie',
                    name: 'Julie',
                    phone: '43453453454',
                    email: 'something2@aol.com'
                }
            ]
        }
    },
}
</script>

<style>

</style>