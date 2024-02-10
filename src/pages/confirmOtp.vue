<template>
    <div class="flex items-center mt-8 justify-center">
        <div class="flex flex-col  w-1/2 px-28 items-center justify-center">
            <div class="flex space-x-4">
                <div v-for="x in 4" class="border border-[#B6B6E5] rounded-md bg-[#F3F3F3] h-14 w-14">
                <input class="w-full border-0 outline-none bg-transparent h-full" />
                </div>
            </div>

            <span class="text-sm my-5  text-[#686868]">Enter OTP code that was sent to your email, segunsolaru@gmail.com.</span>


            <div class="mb-10 w-full space-y-4">
                <div class="flex flex-col mt-10 space-y-1 items-center">
                    <button @click="$router.push('/resetPassword')" class="w-full rounded mb-5 shadow-md bg-[#532f82] text-white py-3">Confirm OTP</button>
                    <span class="text-sm cursor-pointer mt-4 text-[#A3B1BF]">Didn't get a code? <span class="text-[#603F8B] font-semibold">Resend</span></span>

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