import { defineStore } from 'pinia'
import dummyData from '../../seeders'

export const useProductStore = defineStore('product', {
  state: () => ({
    products : dummyData,
    cart : []
  }),

  getters: {
    getAllProducts: (state) => state.products,
    getProductById: (state) => {
      return (productId) => state.products.find(product => product.id === productId)
    },
    getCartProducts: (state) => state.cart,
    totalAmount: (state) => {
      return state.cart.reduce((total, cartItem) => {
        const product = cartItem.product;
        const quantity = cartItem.quantity;
        const amount = product.details.price * quantity;
        return total + amount;
      }, 0);
      return total.toFixed(2);
    },
  },
  actions: {
    addToCart(product) {
          const existingCartItem = this.cart.find(item => item.product.id === product.id);
          if (existingCartItem) {
            existingCartItem.quantity += 1;
          } else {
            this.cart.push({ product, quantity: 1 });
          }
          alert('Added to cart');
      },
      removeFromCart(productId) {
        const index = this.cart.findIndex(item => item.product.id === productId);
        if (index !== -1) {
          const cartItem = this.cart[index];
          if (cartItem.quantity > 1) {
            cartItem.quantity -= 1;
          } else {
            this.cart.splice(index, 1);
          }
        }
      },
      checkout() {
        this.cart.length = 0;
        alert('Checkout successful');
      },
  }
})