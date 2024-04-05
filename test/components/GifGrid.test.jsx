import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { UseFetchGifs } from "../../src/hooks/UseFetchGifs"

jest.mock('../../src/hooks/UseFetchGifs');

describe('pruebas en gifgrid', () => {

    const category = 'One piece'

    test('debe mostrar el loading inicialmente', () => {

        UseFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })
      
        render( <GifGrid category={ category }/>)
        expect(screen.getByText('Cargando...'))
    })
    
  test('debe mostrar items cuando se cargan las imagenes usando useFetchGifs', () => {

    const gifs = [
        {
            id: 'ABC',
            title: 'One piece',
            url: 'http://one-piece.com'
        },
        {
            id: '123',
            title: 'Dragon ball',
            url: 'http://one-piece.com'
        },
    ]

    UseFetchGifs.mockReturnValue({
        images: gifs,
        isLoading: false
    })

    render( <GifGrid category={ category }/>)
    screen.debug()
  })
})
