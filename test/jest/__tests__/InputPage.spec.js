import IndexPage from 'src/pages/IndexPage.vue'
import { shallowMount } from '@vue/test-utils'

describe('IndexPage', () => {
  it('ตรวจสอบหัวข้อ title', () => {
    const wrapper = shallowMount(IndexPage)
    let header = wrapper.find('.htmlClass h1')
    expect(header.exists()).toBe(true)
    expect(header.text())
      .toBe('Vue is awesome.')
  });
  it('ภูมิ(nickname)', () => {
    const wrapper = shallowMount(IndexPage)
    let header = wrapper.find('.htmlClass h1')
    expect(header.exists()).toBe(true)
    expect(header.text())
      .toBe('Vue is awesome.')
  });
  it('ณัฐภูมิ (firstName)', () => {
    const wrapper = shallowMount(IndexPage)
    let header = wrapper.find('.htmlClass h1')
    expect(header.exists()).toBe(true)
    expect(header.text())
      .toBe('Vue is awesome.')
  });
  it('หลู่จิ่ง (secondName)', () => {
    const wrapper = shallowMount(IndexPage)
    let header = wrapper.find('.htmlClass h1')
    expect(header.exists()).toBe(true)
    expect(header.text())
      .toBe('Vue is awesome.')
  });
  it('329 (studentcode)', () => {
    const wrapper = shallowMount(IndexPage)
    let header = wrapper.find('.htmlClass h1')
    expect(header.exists()).toBe(true)
    expect(header.text())
      .toBe('Vue is awesome.')
  });
  it('ตรวจสอบตัวแปร title', () => {
    const wrapper = shallowMount(IndexPage, {
      data () {
        return {
          title: 'ฉันรักวิว.',
          nickname:'ภูมิ',
          firstName: 'ณัฐภูมิ',
          secondName: 'หลู่จิ่ง',
          studentcode: '329'
        }
      }
    })
    let header = wrapper.find('.htmlClass h1')
    expect(header.text()).toBe('ฉันรักวิว.')
  })
})


test('ทดสอบว่ามีฟอร์ม', () => {
const wrapper = shallowMount(IndexPage)
expect(wrapper.find('form').exists()).toBe(true)
})

test('ทดสอบว่ามีฟอร์ม มีการรับค่า', () => {
const wrapper = shallowMount(IndexPage)
expect(wrapper.find('form > input').exists()).toBe(true)
})

test('ทดสอบว่ามีปุ่ม', () => {
const wrapper = shallowMount(IndexPage)
expect(wrapper.find('button').exists()).toBe(true)
})