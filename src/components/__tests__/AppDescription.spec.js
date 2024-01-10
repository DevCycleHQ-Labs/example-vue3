import { describe, test, it, expect, vi, beforeEach } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils';

import { getDevCycleClient } from '../../devcycle.js';
import AppDescription from '../AppDescription.vue';

vi.mock('../../devcycle.js')

describe('AppDescription', () => {
    let mockGetDevCycleClient
    beforeEach(() => {
        mockGetDevCycleClient = vi.mocked(getDevCycleClient)
    })

    test.each([
        'variation-wink',
        'variation-base',
        'variation-custom',
    ])('renders the app description correctly for variation "%s"', async (variationKey) => {
        mockGetDevCycleClient.mockReturnValue({
            config: { features: {
                'hello-togglebot': { variationKey }
            }},
            subscribe: vi.fn()
        })
        const wrapper = mount(AppDescription);
        await flushPromises();
        expect(wrapper.text()).toMatchSnapshot()
    });

    it('renders the app description correctly when user does not have feature', async () => {
        mockGetDevCycleClient.mockReturnValue({
            config: { features: {}},
            subscribe: vi.fn()
        })
        const wrapper = mount(AppDescription);
        await flushPromises();
        expect(wrapper.text()).toMatchSnapshot()
    });
});
