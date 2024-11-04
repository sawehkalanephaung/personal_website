<template>
  <button class="my-button" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'MyButton',
  methods: {
    handleClick() {
      this.$emit('click');
    }
  }
}
</script>

<style scoped>
.my-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
