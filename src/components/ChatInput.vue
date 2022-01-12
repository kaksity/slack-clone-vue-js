<template>
    <div class="ChatInput">
        <form @submit.prevent="SubmitChat">
            <input type="text" v-model="input" placeholder="Enter your message...">
            <button type="submit">SEND</button>
        </form>
    </div>
</template>
<style>
    .ChatInput {
        border-radius: 20px;
    }
    .ChatInput > form {
        position: relative;
        display: flex;
        justify-content: center;
    }
    .ChatInput > form > input {
        position: fixed;
        bottom: 30px;
        width: 60%;
        border: 1px solid gray;
        border-radius: 3px;
        padding: 20px;
    }
    .ChatInput > form > button {
        background-color: var(--slack-color);
        padding: 20px 40px;
        color: white;
        border: none;
        border-radius: 5px;
        position: fixed;
        bottom: 30px;
        right: 10px;
    }
</style>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
    data () {
        return {
            input: ''
        }
    },
    methods: {
        SubmitChat () {
            console.log(this.input)
        }
    }
})
</script>
