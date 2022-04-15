import {mount} from '@vue/test-utils'

import Home from "@/views/Home";

describe('Home.vue', () => {
    it('test', () => {
        const items = [{expanseName: "Продукты", expenseValue: 100},
            {expanseName: "Одежда", expenseValue: 500}];
        const wrapper = mount(Home);

        expect(wrapper.vm.getTotalValue(items)).toBe(600)
    })
})
