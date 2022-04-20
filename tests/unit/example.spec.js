import Vue from 'vue'
import Vuetify from 'vuetify'
import {mount, createLocalVue} from '@vue/test-utils';
import Home from "../../src/views/Home";

Vue.use(Vuetify)
const localVue = createLocalVue();

describe('Home.vue', () => {
    let vuetify;
    beforeEach(() => {
        vuetify = new Vuetify()
    });

    it('check method calculateExpenses', () => {
        const items = [{expanseName: "Продукты", expenseValue: 100}, {expanseName: "Одежда", expenseValue: 500}];
        const wrapper = mount(Home, {
            localVue,
            vuetify
        });

        wrapper.setData({expensesList: items});
        wrapper.find('.expense-form__calculate-button').trigger('click', { button: 0 });

        expect(wrapper.vm.result).toBe(600);
        expect(wrapper.vm.statisticList).toEqual([
            {expanseName: "Продукты", expenseValue: 100, expensePercent: 17},
            {expanseName: "Одежда", expenseValue: 500, expensePercent: 83}]);
    })
})
