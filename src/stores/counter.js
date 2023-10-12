import { ref } from 'vue';
import { defineStore } from 'pinia'

export const Travel_listStore = defineStore('Travel_list', () => {

const travel_list  = ref([
  {name: 'Seasons Change', img:'https://i.pinimg.com/564x/94/3b/53/943b5303f8b5c15e21b28add5aee1600.jpg',
    ip:'api.openweathermap.org/data/2.5/forecast?lat=18.88852127095799&lon=99.01373892653918&appid=66af6261484edc25c7b1b61803d7547c'},

])

return { travel_list }
})