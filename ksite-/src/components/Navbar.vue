<script>

</script>
<template>
<nav class="bg-black border-gray-200 dark:bg-gray-900">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <div class="flex items-center">
            <ul class="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                <li>
                    <a href="#" class="text-lg  text-gray-300 dark:text-white hover:text-white" aria-current="page"><router-link to="/">Главная</router-link></a>
                </li>
                <li>
                    <a href="#" class="text-lg text-gray-300 dark:text-white hover:text-white"><router-link to="/dilivery">Доставка</router-link></a>
                </li>
                <li>
                    <a href="#" class="text-lg text-gray-300 dark:text-white hover:text-white"><router-link to="/contacts">Контакты</router-link></a>
                </li>
                <li>
                    <a href="#" class="text-lg text-gray-300 dark:text-white hover:text-white"><router-link to="/about-us">О нас</router-link></a>
                </li>
            </ul>
        </div>
        <div class="flex items-center">
            <a href="#" class="mr-6 text-sm  text-gray-500 dark:text-white hover:fill-white">
<router-link to="/basket"><svg width="28" height="28" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path  class="svg-hov" d="M16.1677 1.76632L10.227 11.6667H24.773L18.83 1.76632L20.8367 0.566986L27.4937 11.6667H33.3597C34.265 11.6667 35 12.4017 35 13.307V14.3313C35.0001 21.2001 33.4007 27.9745 30.3287 34.118C30.196 34.3831 29.9922 34.6061 29.74 34.7619C29.4877 34.9176 29.1971 35.0001 28.9007 35H6.09933C5.80269 34.9996 5.512 34.9167 5.2598 34.7605C5.00761 34.6043 4.80385 34.3811 4.67133 34.1157C1.59928 27.9722 -5.47673e-05 21.1977 1.4066e-09 14.329L1.40661e-09 13.307C1.40661e-09 12.4017 0.735 11.6667 1.64033 11.6667H7.50633L14.1633 0.566986L16.1677 1.76632Z" fill="#AEAEAE"/>
</svg></router-link>             
</a>
            <a  href="#" class="transition w-8 h-8 rounded-3xl bg-gray-300 hover:rounded-xl hover:bg-white"></a>
        </div>
    </div>
</nav>
</template>

<style scoped>
.transition{
    transition: 0.1s;
}
.svg-hov{
  transition: 0.1s;
}
.svg-hov:hover{
  fill: white;
}
</style>
