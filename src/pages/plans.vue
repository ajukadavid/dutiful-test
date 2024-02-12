<template>
    <div>
        <div class="flex mt-10 px-60 flex-col w-full items-center justify-center">
            <span class="text-4xl mb-3">Plans to Suit Your Business Budget</span>
            <span class="text-[#656565]">Our fully organized plans deliver valuable content that showcases your services and
                skills, drives </span>
                <span class="text-[#656565]">Lead, covers all features, and gives customers a clear idea to be able to choose your
                services.</span>
        </div>
        <div class="bg-[#FCFAFF]">
            <div class="flex  pt-20 justify-center mt-40 space-x-20">
                <div class="flex bg-white pb-32 pt-10  px-8 space-y-6 flex-col">
                    <span class="font-bold">Basic</span>
                    <span class="font-bold text-4xl font-recoleta">Free</span>
                    <button class="w-full rounded shadow-md bg-[#532f82] text-white py-3">Get started</button>
                    <div class="flex items-center space-x-4 my-2 text-sm" v-for="item in free">
                        <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 1.5L6 12.5L1 7.5" stroke="black" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                        <span>{{ item }}</span>
                    </div>
                </div>
                <div class="flex bg-white pb-32 pt-10  px-8 space-y-6 flex-col">
                    <span class="font-bold">Standard</span>
                    <div class="flex">
                        <span>NGN</span>
                        <span class="text-4xl">20,000</span>
                        <span class="self-end">/year</span>
                    </div>
                    <button class="w-full rounded shadow-md bg-[#532f82] text-white py-3">Get started</button>
                    <div class="flex items-center text-sm space-x-4" v-for="item in standard">
                        <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 1.5L6 12.5L1 7.5" stroke="black" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                        <span>{{ item }}</span>
                    </div>
                </div>
                <div class="flex bg-white pb-32 pt-10  px-8 space-y-6 flex-col">
                    <span class="font-bold">Premium</span>
                    <div class="flex">
                        <span>NGN</span>
                        <span class="text-4xl">30,000</span>
                        <span class="self-end">/year</span>
                    </div> <button class="w-full rounded shadow-md bg-[#532f82] text-white py-3">Get started</button>
                    <div class="flex text-sm space-x-4" v-for="item in premium">
                        <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 1.5L6 12.5L1 7.5" stroke="black" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                        <span>{{ item }}</span>
                    </div>
                </div>


            </div>

            <div class="px-20">
                <span class="font-bold text-2xl">Features Overview</span>
                <div class="w-full bg-[#FCFAFF] flex space-x-6">
                    <div class="w-full  flex ">
                        <span></span>
                        <span class="self-end text-xl">Features & Services</span>
                    </div>
                    <div class="w-full flex  space-y-5 flex-col">
                        <span class="font-bold">Basic</span>
                        <button class="w-full rounded shadow-md bg-[#532f82] text-white py-3">Get started</button>
                    </div>
                    <div class="w-full flex space-y-5 flex-col">
                        <span class="font-bold">Standard</span>
                        <button class="w-full rounded shadow-md bg-[#532f82] text-white py-3">Get started</button>
                    </div>
                    <div class="w-full flex space-y-5 flex-col">
                        <span class="font-bold ">Premium</span>
                        <button class="w-full rounded shadow-md bg-[#532f82] text-white py-3">Get started</button>
                    </div>
                </div>
                <div class="flex items-start justify-between">
                    <div class="flex flex-col">
                        <span :class="{
                            'bg-white': i % 2 === 0
                        }" class="py-2" v-for="(item, i) in titles"> {{ item }}</span>
                    </div>
                    <div class="flex  flex-col">
                        <svg class="mt-5" width="24" height="18" viewBox="0 0 24 18" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.6667 2L8.00004 16.6667L1.33337 10" stroke="#AC64CE" stroke-width="2.66667"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span class="mt-2">2 businesses</span>
                        <span class="mt-3">2</span>

                        <span class="mt-2">2</span>
                            
                        <svg v-for="x in 11" class="mt-5" width="24" height="18" viewBox="0 0 24 18" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.6667 2L8.00004 16.6667L1.33337 10" stroke="#AC64CE" stroke-width="2.66667"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <svg v-for="x in 5" class="mt-4" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6L6 18" stroke="#9E9E9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 6L18 18" stroke="#9E9E9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>



                    </div>
                    <div class="flex  flex-col">
                        <svg class="mt-4" width="24" height="18" viewBox="0 0 24 18" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.6667 2L8.00004 16.6667L1.33337 10" stroke="#AC64CE" stroke-width="2.66667"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span class="mt-2">6 businesses</span>
                        <span class="mt-3">6</span>

                        <span class="mt-4">4</span>
                        <svg v-for="x in 12" class="mt-5" width="24" height="18" viewBox="0 0 24 18" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.6667 2L8.00004 16.6667L1.33337 10" stroke="#AC64CE" stroke-width="2.66667"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span class="mt-6">Purple</span>
                        <svg v-for="x in 2" class="mt-5" width="24" height="18" viewBox="0 0 24 18" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.6667 2L8.00004 16.6667L1.33337 10" stroke="#AC64CE" stroke-width="2.66667"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <svg  class="mt-4" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6L6 18" stroke="#9E9E9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 6L18 18" stroke="#9E9E9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    </div>
                    <div class="flex pr-10  flex-col">
                        <svg class="my-4" width="24" height="18" viewBox="0 0 24 18" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.6667 2L8.00004 16.6667L1.33337 10" stroke="#AC64CE" stroke-width="2.66667"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span class="mt-2">10 businesses</span>
                        <span class="mt-2">10</span>

                        <span class="mt-2">6</span>
                        <svg v-for="x in 12" class="mt-5" width="24" height="18" viewBox="0 0 24 18" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.6667 2L8.00004 16.6667L1.33337 10" stroke="#AC64CE" stroke-width="2.66667"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span class="mt-6">Gold</span>
                        <svg v-for="x in 3" class="mt-5" width="24" height="18" viewBox="0 0 24 18" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.6667 2L8.00004 16.6667L1.33337 10" stroke="#AC64CE" stroke-width="2.66667"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                     
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>
<script lang="ts" setup>
definePageMeta({
    layout: 'another'
})

const free = [
    'Access to dashboard',
    'Add up to 2 businesses',
    'Add up to 2 products/services',
    'Add up to 2 Images',
    'Unlimited keywords',
    'Display service hours and prices',
    'Display address, contact and email',
    'Instant chat',
    'Reviews and ratings',
    'Profile visibility',
    'Instant notifications',
    'Display website and social network',
    'Quotes',
    'Bookmarks'
]

const standard = [
    ...free,
    'Number of  profile views',
    'Verified badge (purple)',
    'Accept & Sell appointment',
    'Latest offers'
]

const premium = [
    ...standard,
    '24/7 service and support'
]
const titles = [
    'Access to dashboard',
    'No. of business listings',
    'No. of products/services',
    'No. of Images',
    'Keywords',
    'Display service hours & prices',
    'Display address, email & contact',
    'Instant chat',
    'Reviews & ratings',
    'Profile visibility',
    'Instant notifications',
    'Display website & social network',
    'Quotes',
    'Bookmarks',
    'Profile views',
    'Verified badge',
    'Latest offers',
    'Accept & sell appointment',
    '24/7  support'
]
</script>




