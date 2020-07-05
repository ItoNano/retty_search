<template>
  <div class="search-form">
    <TextField width="300px" v-model="word"/>
    <TextField width="300px" v-model="word"/>
  </div>
</template>
<script>
import TextField from '@/components/atoms/TextField.vue';

export default {
  components: {
    TextField,
  },
  props: {
    text: {
      type: String,
      default: '',
    },
  },  
  data() {
    return {  
      word: ''
    }
  },
  methods: {
    execSearch() {
      this.$emit('execSearch', this.word)
      this.$store.commit('search/setSearchWord', this.word)
    }
  }
};
</script>
<style scoped lang="scss">
.search-form {
  display: flex;
  align-items: center;
  min-width: 368px;
  button {
    margin-left: 24px;
  }
}
</style>
