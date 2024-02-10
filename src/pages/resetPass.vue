<template>
    <div class="flex items-center mt-8 justify-center">
        <div class="flex flex-col  w-1/2 px-32 items-start">
            <span class="text-3xl text-[#1E1E4B]">Forgot Password</span>
            <span class="text-sm my-5  text-[#686868]">Enter your email and well send you a mail on how to reset your 
password.</span>

          
            <div class="mb-10 mt-7 w-full space-y-4">
                <AppInput label="Email" />
                <div class="flex mb-10 justify-end">
                    
                </div>
                <div class="flex flex-col mt-10 space-y-1 items-center">
                    <button @click="$router.push({name: 'sendMail'})" class="w-full rounded shadow-md bg-[#532f82] text-white py-3">Send Email</button>           
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'another'
})
</script>