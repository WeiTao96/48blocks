<script setup lang="ts">
import Blocks from '../blocks/index.vue'
import { IBlock, IDate } from '../../types/index.interface';
import { toRefs, ref, reactive } from '@vue/reactivity';
import path from 'path'
import fs from 'fs'
import { dirExists } from '../../utils/file'

const props = defineProps<{ day: IDate }>()

const { day } = toRefs(props)

const tip = reactive({
  left: '',
  top: '',
  show: false,
  title: ''
})

let selectBlockIds: Array<number> = []
let selectType = ref(0)

let remark = ref('')

const handleSelect = (item: IBlock) => {
  if (selectType.value === 0) {
    if (item.remarkid) {
      for (const word of day.value.remarks) {
        if (word.id === item.remarkid) {

          remark.value = word.remark
        }
      }
    }
  } else {
    let id = item.id
    let index = selectBlockIds.findIndex(item => item === id)
    if (index !== -1) {
      item.type = 0
      selectBlockIds.splice(index, 1)
    } else {
      selectBlockIds.push(item.id)
    }
    handleSmear()
  }
}

const handleSmear = () => {
  day.value.blocks.map(item => {
    if (selectBlockIds.includes(item.id)) {
      item.type = selectType.value
    }
  })
}

const handleColorSelect = (type: number) => {
  selectType.value = type
}

const handleSave = () => {
  let id = day.value.remarks.length + 1
  day.value.remarks.push({
    remark: remark.value,
    id: id
  })
  day.value.blocks.map(item => {
    if (selectBlockIds.includes(item.id)) {
      item.remarkid = id
    }
  })

  selectType.value = 0
  selectBlockIds = []
  remark.value = ''
}

const downloadJson = (content: IDate) => {
  const saveFolder = path.join(process.env.DIST as string,'/days')
  dirExists(saveFolder)
  let data = JSON.stringify(content)
  fs.writeFile(path.join(saveFolder,`${content.name}.json`),data,(err)=>{
    if(err){
      alert(err)
    }else{
      alert('保存成功')
    }
  })

}

const handleOver = (e: MouseEvent, info: string) => {
  tip.left = `${e.clientX - 30}px`
  tip.top = `${e.clientY - 30}px`
  tip.title = info
  tip.show = true
}
const handleLeave = (e: MouseEvent) => {
  tip.show = false
}

</script>

<template>
  <div class="day">
    <div class="tittle">{{ day.name }}</div>
    <Blocks :list="day.blocks" @select="handleSelect"></Blocks>
    <div>
      <div>
        <div
          class="block waste"
          :class="{ select: selectType === 1 }"
          @click="handleColorSelect(1)"
          @mouseover="(e) => { handleOver(e, '浪费') }"
          @mouseleave="(e) => { handleLeave(e) }"
        ></div>
        <div
          class="block forcibly"
          :class="{ 'select': selectType === 2 }"
          @click="handleColorSelect(2)"
          @mouseover="(e) => { handleOver(e, '强制工作') }"
          @mouseleave="(e) => { handleLeave(e) }"
        ></div>
        <div
          class="block efficient"
          :class="{ 'select': selectType === 3 }"
          @click="handleColorSelect(3)"
          @mouseover="(e) => { handleOver(e, '高效工作') }"
          @mouseleave="(e) => { handleLeave(e) }"
        ></div>
        <div
          class="block play"
          :class="{ 'select': selectType === 4 }"
          @click="handleColorSelect(4)"
          @mouseover="(e) => { handleOver(e, '玩耍') }"
          @mouseleave="(e) => { handleLeave(e) }"
        ></div>
        <div
          class="block rest"
          :class="{ 'select': selectType === 5 }"
          @click="handleColorSelect(5)"
          @mouseover="(e) => { handleOver(e, '休息') }"
          @mouseleave="(e) => { handleLeave(e) }"
        ></div>
        <div
          class="block sleep"
          :class="{ 'select': selectType === 6 }"
          @click="handleColorSelect(6)"
          @mouseover="(e) => { handleOver(e, '睡眠') }"
          @mouseleave="(e) => { handleLeave(e) }"
        ></div>
      </div>
      <div class="tip" :style="{ top: tip.top, left: tip.left }" v-show="tip.show">{{ tip.title }}</div>
      <input v-model="remark" />
      <button class="save-button" @click="handleSave">保存</button>
      <button class="save-button" @click="downloadJson(day)">下载</button>
    </div>
  </div>
</template>

<style scoped>
.tittle {
  margin-top: 20px;
}
.save-button {
  margin-left: 15px;
}

.efficient {
  background-color: #f8f16d;
}
.play {
  background-color: #409eff;
}
.rest {
  background-color: #67c23a;
}
.sleep {
  background-color: #909399;
}
.forcibly {
  background-color: #e6a23c;
}
.waste {
  background-color: #f56c6c;
}
.day {
  width: 500px;
  height: 500px;
  display: inline-block;
}

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

.select {
  border: 2px solid #303133;
}
</style>
