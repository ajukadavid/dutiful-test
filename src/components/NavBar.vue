<template>
    <div class="justify-between cursor-pointer flex px-5 items-center pt-2">
        <img src="/logo.svg" />
        <div class="flex text-[#686868] items-center space-x-10 ml-52">
            <span>Business Directory</span>
            <span>Features</span>
            <span>Pricing</span>
            <span>Blog</span>
        </div>
        <div class="flex items-center space-x-14">
            <span @click="$router.push('/login')" class="text-[#1E1E4B] font-semibold">Login</span>
            <div class="border-[#603F8B] text-[#603F8B] rounded-lg font-semibold px-5 py-2 border-2">
                <span>Sign up</span>
            </div>
        </div>
    </div>
</template>
