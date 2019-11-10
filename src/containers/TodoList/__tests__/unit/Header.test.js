import { shallowMount } from '@vue/test-utils'
import Header from '../../components/Header.vue'

it('Header 包含Input框', () => {
  const wrapper = shallowMount(Header)
  const input = wrapper.find('[data-test="input"]')
  expect(input.exists()).toBe(true)
})

it('Header 中 input 初始内容为空', () => {
  const wrapper = shallowMount(Header)
  const inputValue = wrapper.vm.$data.inputValue
  expect(inputValue).toBe('')
})

it('Header 中 input 框值变化，数据应该跟着变', () => {
  const wrapper = shallowMount(Header)
  const input = wrapper.find('[data-test="input"]')
  input.setValue('dell lee')
  const inputValue = wrapper.vm.$data.inputValue
  expect(inputValue).toBe('dell lee')
})

it('Header 中 input 框输入值，无内容时，无反应', () => {
  const wrapper = shallowMount(Header)
  const input = wrapper.find('[data-test="input"]')
  input.setValue('')
  input.trigger('keyup.enter')
  expect(wrapper.emitted().add).toBeFalsy()
})

it('Header 中 input 框输入值，有内容时，有反应。同时清空Value', () => {
  const wrapper = shallowMount(Header)
  const input = wrapper.find('[data-test="input"]')
  input.setValue('dell lee')
  input.trigger('keyup.enter')
  expect(wrapper.emitted().add).toBeTruthy()
  expect(wrapper.vm.$data.inputValue).toBe('')
})
