<template>
    <div class="input-container">
      <label class="text-[#603F8B] font-semibold text-sm" :for="id">{{ label }}</label>
      <div class="flex items-center px-3 border-[#E7EAF1] border rounded-lg">
        <input
          :type="type"
          :id="id"
          v-bind="$attrs"
          v-model="inputValue"
          @input="emitInput"
          :placeholder="placeholder"
        />
        <span>
            <slot name="icon"></slot>
        </span>
      </div>
    </div>
  </template>
  
  <script setup>
  import { v4 as uuidv4 } from 'uuid';
  
  const props = defineProps({
    label: { type: String, required: true },
    type: { type: String, default: 'text' },
    placeholder: { type: String, default: '' },
  });
  
  const id = `input-${uuidv4()}`;
  
  let inputValue = '';
  
  const emitInput = (event) => {
    inputValue = event.target.value;
    emit('update:modelValue', inputValue);
  };
  </script>
  
  <style scoped>
  .input-container {
    margin-bottom: 1rem;
  }
  
  .input-wrapper {
    position: relative;
  }
  
  input {
    padding: 0.5rem;
    border: 0;
   outline: none;
    width: 100%;
  }
  
  .slot-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0.5rem;
  }
  </style>
  