import { renderHook, waitFor } from "@testing-library/react"
import { UseFetchGifs } from "../../src/hooks/UseFetchGifs"

describe('pruebas en el hook de useFetchGifs', () => { 

    test('debe regresar el estado inicial', () => { 
        
        const { result } = renderHook( ()=> UseFetchGifs('One piece'))
        const { images, isLoading } = result.current;

        expect(images.length).toBe(0)
        expect(isLoading).toBeTruthy()
     })
    test('debe regresar un arreglo de imagenes y isLoading en false', async() => { 
        
        const { result } = renderHook( ()=> UseFetchGifs('One piece'))
        await waitFor(
            ()=> expect(result.current.images.length).toBeGreaterThan(0),
            
        )
        const { images, isLoading } = result.current;

        expect(images.length).toBeGreaterThan(0)
        expect(isLoading).toBeFalsy()
     })
 })