import '@testing-library/jest-dom'
import { Title } from '../common/Title'
import { shallow } from 'enzyme'
import { useIsMobile } from '../custom-hooks/useIsMobile'
import { renderHook } from '@testing-library/react'
jest.mock('../custom-hooks/useIsMobile')

describe('tests 2', () => {

    let wrapper = shallow(<Title isEnglish={false} isMobile={false} />);
    
    beforeEach(() => {
        jest.clearAllMocks();
        console.log("Before each");
        wrapper = shallow(<Title isEnglish={false} isMobile={false} />);
    })

    test('Title component should have not errors when is rendered', () => {
        const expectedTitle = "Mal de Cushing en perros y tratamientos con trilostano y mitotano:El caso de Ally";
    
        const title = wrapper.find('div').text();

        const button = wrapper.find('button').at(0);
        try {
            button.simulate('click')
        } catch (error) {
            console.log("There's not any button");
        }

        const img = wrapper.find('img');
        const imgAttributes = img.props();
        const cssClasses = img.prop('className');

        const input = wrapper.find('input').at(0);
        input.simulate('change', { target: { value: 'value' } });

        const form = wrapper.find('form');
        expect(form.exists()).toBe(true);
        form.simulate('submit', { preventDefault: () => { } });

        const setIsMobile = jest.fn();
        expect(setIsMobile).not.toHaveBeenCalled();
        expect(setIsMobile).toHaveBeenCalledTimes(2);
        expect(setIsMobile).toHaveBeenCalledWith(expect.any(Function));


        console.log(imgAttributes, cssClasses);
    
        expect(wrapper).toMatchSnapshot();
        expect(title).toBe(expectedTitle)
    })

    test('Mocking', async () => {
        useIsMobile.mockReturnValue(false)
    })

    test('Hooks', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useIsMobile());
        const { r } = result.current;
        console.log(r);
        await waitForNextUpdate();
        expect(r).toBe(false);
    })
})
