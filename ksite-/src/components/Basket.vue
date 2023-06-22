<script >





export default {
  components: {
    
  },
  data() {
    return {
      cards: [],
    };
  },
  methods: {
    deleteCard() {
      localStorage.clear();
      this.cards = [];
    },
  },
  created() {
    const storedCards = localStorage.getItem('cards');
    if (storedCards) {
      this.cards = JSON.parse(storedCards);
    }
  },
};
</script>

<template>
     
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4 mb-5" v-if="cards.length > 0">
     
      <div v-for="(card, index) in cards" :key="index" class="card block w-1/3 mx-auto mt-10 max-w-sm p-6 bg-blue-900/40 border border-blue-700 rounded-lg shadow hover:bg-blue-900">
        <p class="text-white">Выбранная видеокарта: {{ card.selectedGPU }}</p>
        <p class="text-white">Выбранный процессор: {{ card.selectedCPU }}</p>
        <p class="text-white">Выбранная материнская плата: {{ card.selectedMotherboard }}</p>
        <p class="text-white">Выбранная оперативная память: {{ card.selectedRAM }}</p>
        <p class="text-white">Выбранный HDD: {{ card.selectedHDD }}</p>
        <p class="text-white">Выбранный системный блок: {{ card.selectedCase }}</p>
        <p class="text-white">Общая стоимость: {{ card.totalPrice }}</p>
        
      </div>
      
      
    </div>
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4 mb-5 font-extrabold text-white text-xl2 " v-if="cards.length <= 0">Добавьте товары в корзину</div>
    <div class="flex flex-wrap  items-center mx-auto max-w-screen-xl p-4" v-if="cards.length > 0">
        <button class="p-1/2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" @click="deleteCard">Заказать</button>

    </div>
    
   
</template>
<style scoped></style>