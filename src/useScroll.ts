import { ref, onMounted, onUnmounted } from '@vue/composition-api'

// 独立的功能，返回滚动高度
export default function useScroll (): any {
  const top = ref(0)
  function update () {
    console.log('update')
    top.value = window.scrollY
  }
  // 防抖节流
  onMounted(() => {
    // 生命周期
    window.addEventListener('scroll', update)
  })
  onUnmounted(() => {
    window.removeEventListener('scroll', update)
  })
  return { top }
}
