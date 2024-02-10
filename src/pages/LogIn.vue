<template>
    <div class="flex items-center mt-8 justify-center">
        <div class="flex flex-col  w-1/2 px-32 items-start">
            <span class="text-sm mb-5 text-[#686868]">Jump right back in</span>
            <span class="text-3xl text-[#1E1E4B]">Login</span>

          
            <form class="my-10 w-full space-y-4">
                <AppInput label="Email" />

                <AppInput label="Password" />

                <div class="flex mb-10 justify-end">
                    
                 <span @click="$router.push('/resetPass')" class="text-[#A16AE8]">Forgot password?</span>
                </div>
                <div class="flex flex-col mt-10 space-y-1 items-center">
                    <button class="w-full rounded shadow-md bg-[#532f82] text-white py-3">Login</button>
                <span class="text-sm cursor-pointer text-[#A3B1BF]">Don't have an account? <span class="text-[#A16AE8]">Sign up</span></span>
           
                </div>
                 </form>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'another'
})
const isService = ref(false)
</script>