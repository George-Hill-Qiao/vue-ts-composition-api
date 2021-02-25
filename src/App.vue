<template>
    <div id="app">
        <h1>test {{ top }}</h1>
        <input
            :class="{ fixeditem: top > 200 }"
            type="text"
            v-model="newTodo"
            @keyup.enter="addTodo"
        />
        <button @click="addTodo">添加</button>
        <ul>
            <li
                class="todo-item"
                @click="toggle(index)"
                :class="{ done: todo.completed }"
                v-for="(todo, index) in todos"
                :key="todo.id">
                {{ todo.title }}
            </li>
        </ul>
        <div>
            总数：{{ remaining }}
        </div>
    </div>
</template>
<script lang="ts">
// 如果不import 打包可以把代码丢掉 tree-shaking
import { defineComponent, ref, reactive, toRefs, computed } from '@vue/composition-api'
import useAddTodo from './addTodo'
import useScroll from './useScroll'
// 拆分复杂的逻辑
export default defineComponent({
  setup () {
    const test = ref<number>(1)
    const state = reactive({
      newTodo: '',
      todos: [
        { id: '1', title: 'one', completed: true },
        { id: '2', title: 'two', completed: false },
        { id: '3', title: 'three', completed: false }
      ]
    })
    const remaining = computed(() => state.todos.filter((todo) => !todo.completed).length)
    function toggle (i) {
      state.todos[i].completed = !state.todos[i].completed
    }
    const { addTodo } = useAddTodo(state)
    const { top } = useScroll()
    return { ...toRefs(state), addTodo, remaining, toggle, top, test }
  }
})
</script>
<style>
li.done {
    text-decoration: line-through;
}
.todo-item {
    height: 40px;
}
input.fixeditem {
    position: fixed;
    top: 0;
    left: 0;
}
</style>
