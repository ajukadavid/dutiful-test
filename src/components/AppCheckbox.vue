<template>
    <label class="checkbox-container">
      <input type="checkbox" v-model="isChecked" @change="$emit('change', isChecked)">
      <span class="checkmark"></span>
      <slot></slot>
    </label>
  </template>
  
  <script setup>
  
  const props = defineProps({
    checked: Boolean,
  });
  
  let isChecked = props.checked || false;
  </script>
  
  <style scoped>
  .checkbox-container {
    display: inline-block;
    position: relative;
    padding-left: 2rem;
    cursor: pointer;
    user-select: none;
  }
  
  .checkbox-container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
  
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 1.2rem;
    width: 1.2rem;
    background-color: transparent;
    border: 2px solid #A16AE8; /* Border color */
    border-radius: 0.25rem;
  }
  
  .checkbox-container:hover input ~ .checkmark {
    background-color: #f3f3f3;
  }
  
  .checkbox-container input:checked ~ .checkmark {
    background-color: #A16AE8;
  }
  
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }
  
  .checkbox-container input:checked ~ .checkmark:after {
    display: block;
  }
  
  .checkbox-container .checkmark:after {
    left: 0.4rem;
    top: 0.1rem;
    width: 0.3rem;
    height: 0.6rem;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
  </style>
  