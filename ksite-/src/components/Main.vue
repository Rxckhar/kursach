<script setup>

import axios from "axios"
import { ref } from "vue"

const pc_cards = ref({})

function show() {
    axios({
        method: 'get',
        url: 'http://localhost:8000/api/cards/add',
        headers: {
            'Content-Type': 'application/json',
            
        },
    })
        .then(res => {
          pc_cards.value = res.data
            console.log(res.data)
        })
        .catch(error => alert("Что то не так"));
}
show();

</script>

<template>
  
<div class="bg-blue-900 relative">
  <img src="/src/assets/bg.png" alt="" class="xl:w-full md:w-full xl:h-full md:h-full sm:h-full sm:w-full absolute  ">
  <div class="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl
      xl:px-5 lg:flex-row">
    <div class="flex flex-col items-center  w-full pt-5 pr-10 pb-20 pl-10 lg:pt-20 lg:flex-row">
      <div class="w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12">
        <div class="flex flex-col items-center justify-center w-full h-full relative lg:pr-10">
          <img src="/src/assets/pc-1.png" class="btn-"/>
        </div>
      </div>
      <div class="w-full mt-20 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12">
        <div class="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white/25 shadow-2xl rounded-sm relative z-10">
            <div class="text-white font-extrabold text-4xl mb-10">СОБЕРИ СВОЙ ПК</div>
        <div class="text-white font-thin text-lg mb-10">Конструирование собственного ПК - это увлекательный и захватывающий процесс, но иногда может быть непростым для новичков. Наш веб-сайт сделает этот процесс простым и легким для любого пользователя, независимо от его опыта в области компьютеров. </div>
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-1 focus:ring-blue-500 font-medium rounded-md mx-auto xl:w-auto lg:w-auto sm:w-full text-sm px-8 py-3 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><router-link to="/config">Конфигуратор</router-link></button>
        </div>
      </div>
    </div>
  </div>
  
</div>
<div class="flex flex-col items-center justify-center w-full h-20 mx-auto">
  <div class="mt-10  font-extrabold text-3xl text-white ">СПЕЦИАЛЬНО ДЛЯ ВАС</div>
</div>
<div class="grid grid-cols-1 gap-8 xl:gap-12 sm:grid-cols-2 xl:grid-cols-3 mx-auto w-2/3">
  <div  v-for="pc_card in pc_cards" :key="pc_card.id" class="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bgr dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
    <img class="h-auto w-full object-cover object-center" src="/src/assets/pc-1.png" alt="Product Image" />
    <div class="p-4">
        <h2 class="mb-2 text-2xl font-extrabold dark:text-white text-white">{{ pc_card.title }}</h2>
        <p class="mb-2 text-base dark:text-gray-300 text-white">{{ pc_card.GPU }}</p>
        <p class="mb-2 text-base dark:text-gray-300 text-white">{{ pc_card.CPU }}</p>
        <p class="mb-2 text-base dark:text-gray-300 text-white">{{ pc_card.Motherboard }}</p>
        <p class="mb-2 text-base dark:text-gray-300 text-white">{{ pc_card.RAM }}</p>
        <p class="mb-2 text-base dark:text-gray-300 text-white">{{ pc_card.HDD }}</p>
        <p class="mb-2 text-base dark:text-gray-300 text-white">{{ pc_card.Case }}</p>
        <div class="flex items-center">
        <p class="mr-2 text-lg font-semibold text-red-600 dark:text-red-600">{{pc_card.Cost}} Р.</p>
        <button type="button" class=" focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">В корзину</button>
        </div>
    </div>
    </div>
  
</div>

</template>

<style scoped>
  .bgr{
    background-color: #010D37;
}
</style>
