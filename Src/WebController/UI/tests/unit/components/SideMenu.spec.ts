/* tslint:disable no-unused-expression */
import { expect } from 'chai';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';

import SideMenu from '@/components/SideMenu.vue';
import { modules } from '../store/mockstore';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('@/components/SideMenu.vue', () => {
  const store = new Vuex.Store({
    modules
  });

  it('SideMenu is a Vue instance', () => {
    const wrapper = shallowMount(SideMenu, { store, localVue });
    expect(wrapper.isVueInstance()).to.be.true;
  });
});
