import Vue from 'vue'
// import { mount  } from '@vue/test-utils'
import PmCard from '@/components/material/Card'

const mountComponentWithProps = (Component, propsData) => {
  const Constructor = Vue.extend(Component);
  const vm = new Constructor({
    propsData
  }).$mount();
  return vm.$el;
}

describe('Card', () => {
  it('should be the correct color', () => {
    const cardData = mountComponentWithProps(PmCard, { 
      color: 'blue' 
    })
    const styleData = cardData.style.getPropertyValue('color')

    console.log('styleData => ', styleData)

    expect(styleData).not.toBe({ color: 'red' });
  });

  it('should have the correct img', () => {
    const cardData = mountComponentWithProps(PmCard, { img: 'https://images212.dog.ceo/breeds/lhasa/n02098413_8273.jpg' });
    const titleData = cardData.textContent;

    console.log(titleData)

    expect(titleData).not.toBe('https://images.dog.ceo/breeds/lhasa/n02098413_8273.jpg');
  });
});