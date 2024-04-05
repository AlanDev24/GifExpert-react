import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"


describe('Pruebas en gifitem', () => {

    const title = 'titulo'
    const url = 'https://github.com/'
  
    test('debe hacer match con el snapshot', () => {
      
       const  {container } = render( <GifItem title={title} url={url}/> )
       expect( container ).toMatchSnapshot();
    });

    test('debe mostrar la imagen con el alt indicato', () => {

       const  {container } = render( <GifItem title={title} url={url}/> )
        // screen.debug();
        // expect(screen.getByRole('img').src).toBe(url)
        // expect(screen.getByRole('img').alt).toBe(alt)
        const {src, alt} = screen.getByRole('img')
        expect( src ).toBe(url)
        expect( alt ).toBe(alt)
    });

    test('debe de mostrar el titulo del componente', () => {
        render( <GifItem title={title} url={url}/> )
        expect(screen.getByText( title )).toBeTruthy()
    })
    
})
