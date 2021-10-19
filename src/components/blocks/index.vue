<script setup lang="ts">
import { IBlock } from '../../types/index.interface'
import { reactive } from 'vue'


defineProps<{ list: Array<IBlock> }>()

const emit = defineEmits(['select'])

interface IColor {
  [key: number]: string
}

const tip = reactive({
  left: '',
  top: '',
  show: false,
  title: ''
})

const colorFilter = (type: number) => {
  const colors: IColor = {
    0: '#F2F6FC',  // 默认
    1: '#F56C6C',  // 浪费
    2: '#E6A23C',  // 强制工作
    3: '#F8F16D',  // 高效工作
    4: '#409EFF',  // 玩耍
    5: '#67C23A',  // 休息
    6: '#909399',  // 睡眠
  }
  return colors[type]
}

const handleOver = (e: MouseEvent, item: IBlock) => {
  tip.left = `${e.clientX - 30}px`
  tip.top = `${e.clientY - 30}px`
  tip.title = item.name
  tip.show = true
}
const handleLeave = (e: MouseEvent, item: IBlock) => {
  tip.show = false
}
const handleClick = (item: IBlock) => {
  emit('select', item)
}
</script>

<template>
  <div>
    <div
      v-for="item in list"
      :key="item.id"
      @mouseover="(e) => { handleOver(e, item) }"
      @mouseleave="(e) => { handleLeave(e, item) }"
      @click="handleClick(item)"
      class="block"
      :style="{ backgroundColor: colorFilter(item.type) }"
    ></div>
    <div class="tip" :style="{ top: tip.top, left: tip.left }" v-show="tip.show">{{ tip.title }}</div>
  </div>
</template>

<style scoped>
.block {
  width: 30px;
  height: 30px;
  display: inline-block;
  margin: 10px;
  border: 1px solid #ebeef5;
  cursor: pointer;
}
.tip {
  position: absolute;
  background-color: #c0c4cc;
  line-height: 30px;
  width: 130px;
  border-radius: 10px;
  color: #ffffff;
  opacity: 0.7;
}
</style>
