import { shallowMount } from '@vue/test-utils'
import TodoList from '../../TodoList.vue'
import Header from '../../components/Header.vue'

it('Header 样式发生改变，做提示', () => {
  const wrapper = shallowMount(Header);
  expect(wrapper).toMatchSnapshot();
})

it('TodoItem 监听到 Header的add事件时，会增加一个内容', () => {
  const content = 'dell lee';
  const wrapper = shallowMount(TodoList)
  const header = wrapper.find(Header);
  header.vm.$emit('add', content)
  const undoList = wrapper.vm.$data.undoList;
  expect(undoList).toEqual([content]);
})
