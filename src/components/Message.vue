<template>
    <div class="message">
        <img :src="userImage" alt="">
        <div class="message__info">
            <h4>{{ user }}  <span class="message__timestamp">{{ timestamp }}</span></h4>
            <p>{{ message }}</p>
        </div>
    </div>
</template>
<style scoped>
    .message{
        display: flex;
        align-items: center;
        padding: 20px;
    }
    .message > img {
        height: 50px;
        width: 50px;
        object-fit: contain;
    }
    .message__info{
        margin-left: 10px;
    }
    .message__timestamp{
        color: gray;
        font-weight: 300;
        font-size: 13px;

    }
</style>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        message: String,
        timestamp: String,
        user: String,
        userImage: String
    }
})
</script>
