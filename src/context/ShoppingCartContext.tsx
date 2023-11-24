import { ReactNode, createContext, useContext, useState } from 'react'
import ShoppingCart from '../components/ShoppingCart'
import useLocalStorage from '../hooks/useLocalStorage'

type ShoppingCartProviderProps = {
        children: ReactNode
}

type CartItem = {
        id: number
        quantity: number
}

type ShoppingCartContext  = {
        openCart: ()=> void
        closeCart: ()=> void
        cartQuantity: number
        cartItems: CartItem[]
        getItemQuantity: (id: number)=> number
        increaseCartQuantity: (id: number)=> void
        decreaseCartQuantity: (id: number)=> void
        removeFromCart: (id: number)=> void
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart() {
  return useContext(
    ShoppingCartContext
  )
}


export function ShoppingCartProvider( {children}: ShoppingCartProviderProps){
        const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("shopping-cart",[])
        const [isOpen, setIsOpen] = useState<boolean>(false)
        const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)

        function getItemQuantity(id:number) {
                return cartItems.find(item => item.id === id)?.quantity || 0
        }

        function increaseCartQuantity(id:number) {
                setCartItems(currItems => {
                        if(currItems.find(item=> item.id === id) == null){
                                return [...currItems, {id, quantity: 1}]
                        } else{
                                return currItems.map(item => {
                                        if (item.id === id){
                                                return { ...item, quantity: item.quantity + 1}

                                        }else{
                                                return item
                                        }
                                })
                        }
                })
        }

        function decreaseCartQuantity(id:number) {
                setCartItems(currItems => {
                        if(currItems.find(item=> item.id === id)?.quantity === 1){
                                return currItems.filter(item => item.id !== id)
                        } else{
                                return currItems.map(item => {
                                        if (item.id === id){
                                                return { ...item, quantity: item.quantity - 1}

                                        }else{
                                                return item
                                        }
                                })
                        }
                })
        }
        
        function removeFromCart(id:number){
                setCartItems(currItems => {
                        return currItems.filter(item => item.id !== id)
                })
        }

        function openCart() {
                setIsOpen(true)
        }
        
        function closeCart(){
                setIsOpen(false)
        }

        return (
                <ShoppingCartContext.Provider value={{  getItemQuantity, 
                                                        increaseCartQuantity, 
                                                        decreaseCartQuantity, 
                                                        removeFromCart,
                                                        cartItems,
                                                        cartQuantity,
                                                        openCart,
                                                        closeCart}}>
                        <ShoppingCart isOpen={isOpen} />
                        {children}
                </ShoppingCartContext.Provider>
        )
}
