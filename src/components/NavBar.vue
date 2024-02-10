<template>
    <div class="justify-between flex px-10 items-center pt-2">
        <img src="/logo.svg" class="w-24" />
        <div class="flex text-[#686868] items-center space-x-10 ml-52">
            <span @click="$router.push('/directory')" class="cursor-pointer ">Business Directory</span>
            <span class="cursor-pointer ">Features</span>
            <span class="cursor-pointer ">Pricing</span>
            <span class="cursor-pointer ">Blog</span>
        </div>
        <div class="flex items-center space-x-14">
            <span @click="$router.push('/login')" class="text-[#1E1E4B] cursor-pointer  font-semibold">Login</span>
            <div @click="$router.push('/signUp')" class="border-[#603F8B] text-[#603F8B] rounded-lg cursor-pointer  font-semibold px-5 py-2 border-2">
                <span>Sign up</span>
            </div>
        </div>
    </div>
</template>
