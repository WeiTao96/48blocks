<script setup lang="ts">
import Day from '../day/index.vue'
import MiniBlocks from '../blocks/mini.vue'
import { ref, reactive, onMounted } from 'vue'
import { generateADay } from "../../utils/generateADay"
import { IDate } from '../../types/index.interface'
import path from 'path'
import fs from 'fs'
import { dirExists } from '../../utils/file'

const saveFolder = path.join(process.cwd(), '/days')

const mydays: Array<IDate> = []

let days = ref(mydays)

const total = reactive({
  waste: 0,
  forcibly: 0,
  sleep: 0,
  rest: 0,
  play: 0,
  efficient: 0,
})

const selectDay = ref()

const getAllDays = async () => {
  try {
    const fileNames = fs.readdirSync(saveFolder)
    fileNames.forEach(fileName => {
      const file = fs.readFileSync(`${saveFolder}\\${fileName}`)
      let day = JSON.parse(file.toString())
      days.value.push(day)
      countAll()
    })
  } catch (error) {
    dirExists(saveFolder)
  }
}


const countAll = () => {
  total.waste = 0
  total.forcibly = 0
  total.efficient = 0
  total.play = 0
  total.rest = 0
  total.sleep = 0
  for (const iterator of days.value) {
    iterator.blocks.forEach(item => {
      switch (item.type) {
        case 1:
          total.waste++
          break;
        case 2:
          total.forcibly++
          break;
        case 3:
          total.efficient++
          break;
        case 4:
          total.play++
          break;
        case 5:
          total.rest++
          break;
        case 6:
          total.sleep++
          break;
        default:
          break;
      }
    })
  }
}

const handleSelectDay = (day: IDate) => {
  selectDay.value = day
}

const handleANewDay = () => {
  let day = generateADay()
  const index = days.value.findIndex(item=>item.name===day.name)
  if(index === -1){
    days.value.push(day)
  }
}

onMounted(() => {
  getAllDays()
})

</script>

<template>
  <div class="content">
    <div>
      <button @click="handleANewDay">生成一天</button>
    </div>
    <Day v-if="selectDay" :day="selectDay"></Day>
    <div v-for="day in days" :key="day.name" class="mini-block" @click="handleSelectDay(day)">
      <p>{{day.name}}</p>
      <MiniBlocks :list="day.blocks"></MiniBlocks>
    </div>
    <div>
      <p>{{ days.length }}天</p>
      <span>浪费{{ total.waste / 2 }}小时</span>&nbsp
      <span>强制工作{{ total.forcibly / 2 }}小时</span>&nbsp
      <span>高效工作{{ total.efficient / 2 }}小时</span>&nbsp
      <span>玩耍{{ total.play / 2 }}小时</span>&nbsp
      <span>休息{{ total.rest / 2 }}小时</span>&nbsp
      <span>睡眠{{ total.sleep / 2 }}小时</span>
    </div>
  </div>
</template>

<style scoped>
.content {
  text-align: center;
}

.mini-block {
  height: 100px;
  width: 150px;
  display: inline-block;
  margin: 10px;
}
</style>
