import { mount } from "@vue/test-utils";
import CalcComp from "../components/CalcComp.vue";
import { expect } from "@jest/globals";


describe('Test Calculator', ()=>{
  it('test operand1', ()=>{
    const wrapper = mount(CalcComp)
    const operand1 = wrapper.find('input[name=operand1]')
    operand1.setValue('1')

    expect(wrapper.vm.operand1).toBe(1)
  })

  it('test operand2', ()=>{
    const wrapper = mount(CalcComp)

    const operand2 = wrapper.find('input[name=operand2]')
    operand2.element.value = '1'
    operand2.trigger('input')

    expect(wrapper.vm.operand2).toBe(1)
  })

  it('test sum', ()=>{
    const wrapper = mount(CalcComp)
    const operand1 = wrapper.find('input[name=operand1]')
    const operand2 = wrapper.find('input[name=operand2]')
    operand1.setValue('1')
    operand2.setValue('2')

    const btn = wrapper.find('button[name="sum"]')
    btn.trigger('click')

    expect(wrapper.vm.result).toBe(3)
  })

  it('test sub', ()=>{
    const wrapper = mount(CalcComp)
    const operand1 = wrapper.find('input[name=operand1]')
    const operand2 = wrapper.find('input[name=operand2]')
    operand1.setValue('2')
    operand2.setValue('2')

    const btn = wrapper.find('button[name="sub"]')
    btn.trigger('click')

    expect(wrapper.vm.result).toBe(0)
  })

  it('test div', ()=>{
    const wrapper = mount(CalcComp)
    const operand1 = wrapper.find('input[name=operand1]')
    const operand2 = wrapper.find('input[name=operand2]')
    operand1.setValue('2')
    operand2.setValue('2')

    const btn = wrapper.find('button[name="div"]')
    btn.trigger('click')

    expect(wrapper.vm.result).toBe(1)
  })

  it('test mult', ()=>{
    const wrapper = mount(CalcComp)
    const operand1 = wrapper.find('input[name=operand1]')
    const operand2 = wrapper.find('input[name=operand2]')
    operand1.setValue('2')
    operand2.setValue('2')

    const btn = wrapper.find('button[name="mult"]')
    btn.trigger('click')

    expect(wrapper.vm.result).toBe(4)
  })

  it('test expon', ()=>{
    const wrapper = mount(CalcComp)
    const operand1 = wrapper.find('input[name=operand1]')
    const operand2 = wrapper.find('input[name=operand2]')
    operand1.setValue('2')
    operand2.setValue('2')

    const btn = wrapper.find('button[name="expon"]')
    btn.trigger('click')

    expect(wrapper.vm.result).toBe(4)
  })

  it('test exponwithout', ()=>{
    const wrapper = mount(CalcComp)
    const operand1 = wrapper.find('input[name=operand1]')
    const operand2 = wrapper.find('input[name=operand2]')
    operand1.setValue('2')
    operand2.setValue('2')

    const btn = wrapper.find('button[name="exponwithout"]')
    btn.trigger('click')

    expect(wrapper.vm.result).toBe(1)
  })

  it('radioinput', async () => {
  const wrapper = mount(CalcComp)
  const radioInput = wrapper.find('input[type="radio"]')

  await radioInput.setChecked()

  expect(radioInput.element.checked).toBeTruthy()
  })
})