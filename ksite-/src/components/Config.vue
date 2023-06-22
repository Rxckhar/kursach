<script>
export default {
  
  data() {
    return {
      selectedGPU: null,
      selectedCPU: null,
      selectedMotherboard: null,
      selectedRAM: null,
      selectedHDD: null,
      selectedCase: null,
      gpus: [
        { name: 'NVIDIA GeForce RTX 3080', value: 150000 },
        { name: 'AMD Radeon RX 6800 XT', value: 120000 },
        { name: 'NVIDIA GeForce RTX 3070', value: 100000 },
        { name: 'AMD Radeon RX 6700 XT', value: 80000 },
        { name: 'NVIDIA GeForce GTX 1660 Super', value: 50000 },
        { name: 'AMD Radeon RX 5500 XT', value: 40000 }
      ],
      cpus: [
        { name: 'Intel Core i9-10900K', value: 60000 },
        { name: 'AMD Ryzen 9 5900X', value: 70000 },
        { name: 'Intel Core i7-10700K', value: 40000 },
        { name: 'AMD Ryzen 7 5800X', value: 50000 },
        { name: 'Intel Core i5-10600K', value: 30000 },
        { name: 'AMD Ryzen 5 5600X', value: 20000 }
      ],
      motherboards: [
        { name: 'ASUS ROG Strix Z590-E Gaming', value: 30000 },
        { name: 'GIGABYTE B550 AORUS Elite', value: 20000 },
        { name: 'MSI MAG B560M MORTAR', value: 15000 },
        { name: 'ASRock B450M Pro4', value: 10000 },
        { name: 'ASUS Prime H410M-A', value: 8000 },
        { name: 'GIGABYTE H310M S2H', value: 6000 }
      ],
      rams: [
        { name: 'Corsair Vengeance RGB Pro 16GB', value: 15000 },
        { name: 'G.SKILL Trident Z Neo 32GB', value: 25000 },
        { name: 'Kingston HyperX Fury 8GB', value: 8000 },
        { name: 'Crucial Ballistix 16GB', value: 12000 },
        { name: 'ADATA XPG Spectrix D60G 32GB', value: 20000 },
        { name: 'Team T-Force Vulcan Z 16GB', value: 10000 }
      ],
      hdds: [
        { name: 'Seagate Barracuda 2TB', value: 8000 },
        { name: 'Western Digital Blue 1TB', value: 6000 },
        { name: 'Toshiba P300 3TB', value: 10000 },
        { name: 'Samsung 870 QVO 2TB', value: 20000 },
        { name: 'Crucial MX500 500GB', value: 7000 },
        { name: 'ADATA SU800 1TB', value: 9000 }
      ],
      cases: [
        { name: 'NZXT H710i', value: 20000 },
        { name: 'Corsair iCUE 4000X RGB', value: 15000 },
        { name: 'Phanteks Eclipse P400A', value: 10000 },
        { name: 'Fractal Design Meshify C', value: 8000 },
        { name: 'Cooler Master MasterBox MB520', value: 7000 },
        { name: 'Thermaltake Versa H18', value: 5000 }
      ],
      cards: []
    };
  },
  
  methods: {
    
    getCardComponents(card) {
    const selectedGPU = this.getComponentName(card.selectedGPU, this.gpus);
    const selectedCPU = this.getComponentName(card.selectedCPU, this.cpus);
    const selectedMotherboard = this.getComponentName(card.selectedMotherboard, this.motherboards);
    const selectedRAM = this.getComponentName(card.selectedRAM, this.rams);
    const selectedHDD = this.getComponentName(card.selectedHDD, this.hdds);
    const selectedCase = this.getComponentName(card.selectedCase, this.cases);

    return `${selectedGPU}, ${selectedCPU}, ${selectedMotherboard}, ${selectedRAM}, ${selectedHDD}, ${selectedCase}`;
    },

    getComponentName(value, components) {
      const selectedComponent = components.find(c => c.value === value);
      return selectedComponent ? selectedComponent.name : '';
    },
    getTotalPrice() {
      const gpuPrice = this.getComponentPrice(this.selectedGPU, this.gpus);
      const cpuPrice = this.getComponentPrice(this.selectedCPU, this.cpus);
      const motherboardPrice = this.getComponentPrice(this.selectedMotherboard, this.motherboards);
      const ramPrice = this.getComponentPrice(this.selectedRAM, this.rams);
      const hddPrice = this.getComponentPrice(this.selectedHDD, this.hdds);
      const casePrice = this.getComponentPrice(this.selectedCase, this.cases);

      const totalPrice = gpuPrice + cpuPrice + motherboardPrice + ramPrice + hddPrice + casePrice;
      return totalPrice;
    },
    getComponentPrice(value, components) {
      const selectedComponent = components.find(c => c.value === value);
      return selectedComponent ? selectedComponent.value : 0;
    },
    createCard() {
      const newCard = {
        selectedGPU: this.getComponentName(this.selectedGPU, this.gpus),
        selectedCPU: this.getComponentName(this.selectedCPU, this.cpus),
        selectedMotherboard: this.getComponentName(this.selectedMotherboard, this.motherboards),
        selectedRAM: this.getComponentName(this.selectedRAM, this.rams),
        selectedHDD: this.getComponentName(this.selectedHDD, this.hdds),
        selectedCase: this.getComponentName(this.selectedCase, this.cases),
        totalPrice: this.getTotalPrice(),
      };
     
      const storedCards = localStorage.getItem('cards');
      const parsedCards = storedCards ? JSON.parse(storedCards) : [];
      parsedCards.push(newCard);
      localStorage.setItem('cards', JSON.stringify(parsedCards));

      this.cards.push(newCard);

      this.selectedGPU = null;
      this.selectedCPU = null;
      this.selectedMotherboard = null;
      this.selectedRAM = null;
      this.selectedHDD = null;
      this.selectedCase = null;
    }
  }
};
</script>
<template >
   <div class="flex ">
    <div class="w-2/6 mx-auto bg-blue-500/40 pt-5 pb-5 mt-10">
        <ul class=" w-4/5 mx-auto">
      <li class="text-white font-bold">Видеокарта:</li> <select class="selstyle w-full border border-blue-800 text-white text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block   p-2" v-model="selectedGPU">
      <option v-for="gpu in gpus" :value="gpu.value">{{ gpu.name }}</option>
    </select>
      <li class="text-white font-bold">Процессор:</li><select class="selstyle w-full border border-blue-800 text-white text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block   p-2" v-model="selectedCPU">
      <option v-for="cpu in cpus" :value="cpu.value">{{ cpu.name }}</option>
    </select>
      <li class="text-white font-bold">Материнская плата:</li><select class="selstyle w-full border border-blue-800 text-white text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block   p-2" v-model="selectedMotherboard">
      <option v-for="motherboard in motherboards" :value="motherboard.value">{{ motherboard.name }}</option>
    </select>
      <li class="text-white font-bold">Оперативная память:</li><select class="selstyle w-full border border-blue-800 text-white text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block   p-2" v-model="selectedRAM">
      <option v-for="ram in rams" :value="ram.value">{{ ram.name }}</option>
    </select>
      <li class="text-white font-bold">HDD:</li><select class="selstyle w-full border border-blue-800 text-white text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block  p-2" v-model="selectedHDD">
      <option v-for="hdd in hdds" :value="hdd.value">{{ hdd.name }}</option>
    </select>
      <li class="text-white font-bold">Системный блок:</li><select class="selstyle w-full border border-blue-800 text-white text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block p-2" v-model="selectedCase">
      <option v-for="caseItem in cases" :value="caseItem.value">{{ caseItem.name }}</option>
    </select>
        <li class="text-red-600 font-bold text-md mt-5">Общая стоимость: {{ getTotalPrice() }}</li>
        <button class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" @click="createCard">Добавить в корзину</button>
    </ul>
    </div>
  </div>
</template>
<style>
    .selstyle{
        background-color: #021041;
    }
</style>