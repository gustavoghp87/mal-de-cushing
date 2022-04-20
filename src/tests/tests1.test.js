import '@testing-library/jest-dom'    // to autocomplete methods
import { render } from '@testing-library/react'    // to use render()
import Spanish from '../Spanish'

test('Should be true', () => {

    const var0 = true;
    expect(var0).toBe(true);
})

test('Should be false', () => {

    const var0 = false;
    expect(var0).toBe(false);
})



const request = (response) => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (response) resolve(true)
        else reject("Error message 1")
    }, 10)
})



describe('Tests for Spanish component in Spanish.js', () => {
    test('Val0 should be true when ...', () => {

        const var0 = true;
        expect(var0).toBe(true);
    })
    
    test('Val0 should be false when ...', () => {
    
        const var0 = false;
        expect(var0).toBe(false);
    })


    test('Val1 should be true when ...', (done) => {
        const var0 = true

        request(var0).then((result) => {
            expect(result).toBe(var0);
            done();
        })
    })

    test('Val1 should be false when ...', (done) => {
        const var0 = false
        
        request(var0).catch(error => {
            //expect(error).toBe("Error message 1");
            done()
        })
    })

    test('Spanish component should have ... when is rendered', () => {
        const title = "Mal de Cushing";

        const { getByText} = render(<Spanish />);

        //expect(getByText(title)).toBeInTheDocument();
    })

})
