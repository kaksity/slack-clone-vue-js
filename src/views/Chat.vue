<template>
  <div class="chat">
    <div class="chat__header">
      <div class="chat__header__left">
        <h4 class="chat__channel">
          <strong># General</strong>
          <v-icon class="chat__channel__icon">mdi-star-outline</v-icon>
        </h4>
      </div>
      <div class="chat__header__right">
        <p>
          <v-icon class="chat__info__icon">mdi-information-outline</v-icon> Details
        </p>
      </div>
    </div>
    <div class="chat__body">
      <Message message="Hello World" :timestamp="Date()" user="Dauda Pona" :userImage="require('@/assets/logo.png')"/>
      <Message message="Hello World" :timestamp="Date()" user="Dauda Pona" :userImage="require('@/assets/logo.png')"/>
      <Message message="Hello World" :timestamp="Date()" user="Dauda Pona" :userImage="require('@/assets/logo.png')"/>
      <Message message="Hello World" :timestamp="Date()" user="Dauda Pona" :userImage="require('@/assets/logo.png')"/>
      <chat-input/>
    </div>
  </div>
</template>
<style scoped>
  .chat{
    flex: 0.7;
    flex-grow: 1;
    overflow-y: scroll;
    padding-bottom: 150px;
  }
  .chat__header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid lightgray;
  }
  .chat__info__icon{
    margin-right: 5px !important;
    font-size: 16px;
  }
  .chat__header__right > p{
    display: flex;
    align-items: center;
    font-size: 14px;
  }
  .chat__channel{
    display: flex;
  }
  .chat__channel > strong{
    text-transform: lowercase;
  }
  .chat__channel__icon{
    margin-left: 10px !important;
    font-size: 18px;
  }
</style>
<script lang="ts">
import { defineComponent } from 'vue'
import Message from '@/components/Message.vue'
import ChatInput from '@/components/ChatInput.vue'

export default defineComponent({
  name: 'Home',
  data () {
    return {
      routeParameter: ''
    }
  },
  components: {
    Message,
    ChatInput
  },
  created () {
     this.routeParameter = this.$route.params.roomName as string
  }
})
</script>
