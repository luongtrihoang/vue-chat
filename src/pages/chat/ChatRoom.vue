<template>
  <chat-bot />
</template>

<script>
import ChatBot from '../../components/ChatBot.vue'

export default {
  name: 'ChatBotView',
  components: {
    ChatBot
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      console.log(1)
    }
  }
}
</script>

<style>

</style>
