<template>
    <div>
        <h1>This is a Vuex demo page</h1>
        <p>
            <button @click="increment()">add</button>
                {{count}}
            <button @click="minus()">minus</button>
        </p>
        <!-- <p>{{message}}</p> -->
        <router-link to="/about">goto About Page</router-link>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        increment(){
           this.$store.dispatch("increment") 
        },
        minus() {
            this.$store.dispatch("minus")
        }
    },
    computed: {
        count() {
            console.log(this.$store)
            return this.$store.state.count;
        },
        message() {
            return this.$store.getters.message;
        }
    }
}
</script>
