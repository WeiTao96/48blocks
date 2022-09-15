<script setup lang="ts">
import { IBlock } from '../../types/index.interface'

defineProps<{ list: Array<IBlock> }>()

interface IColor {
    [key: number]: string
}

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


</script>
    
<template>
    <div>
        <div v-for="item in list" :key="item.id" class="block" :style="{ backgroundColor: colorFilter(item.type) }">
        </div>
    </div>
</template>
    
<style scoped>
.block {
    width: 5px;
    height: 5px;
    display: inline-block;
    margin: 5px;
    cursor: pointer;
}
</style>
    