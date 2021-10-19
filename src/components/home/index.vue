<script setup lang="ts">
import Day from '../day/index.vue'
import { ref, reactive } from 'vue'
import { generateADay } from "../../utils/generateADay"
import { IDate } from '../../types/index.interface'

const mydays: Array<IDate> = []

let days = ref(mydays)

let reader = new FileReader();

const total = reactive({
  waste: 0,
  forcibly: 0,
  sleep: 0,
  rest: 0,
  play: 0,
  efficient: 0,
})

const handleChange = async () => {
  let file = document.getElementById("files") as HTMLInputElement
  if (file.files && file.files?.length > 0) {

    reader.readAsText(file.files[0])
  }
}

reader.onload = (result) => {
  if (result.target) {
    let day = JSON.parse(result.target.result as string)
    days.value.push(day)
  }
  countAll()
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

const handleANewDay = () => {
  let day = generateADay()
  days.value.push(day)
}

</script>

<template>
  <div class="content">
    <div>
      <input type="file" id="files" @change="handleChange" />
      <button @click="handleANewDay">生成一天</button>
    </div>
    <Day v-for="day in days" :day="day" :key="day.name"></Day>
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
</style>
