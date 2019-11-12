import { shallowMount } from '@vue/test-utils'
import TodoList from '../../TodoList.vue'
import Header from '../../components/Header.vue';

it('TodoItem初始化时，undoList应该为空', () => {
  const wrapper = shallowMount(TodoList)
  const undoList = wrapper.vm.$data.undoList;
  expect(undoList).toEqual([])
})

it('TodoItem 监听到 Header的add事件时，会增加一个内容', () => {
  const content = 'dell lee';
  const wrapper = shallowMount(TodoList)
  const header = wrapper.find(Header);
  header.vm.$emit('add', content)
  const undoList = wrapper.vm.$data.undoList;
  expect(undoList).toEqual([content]);
})
