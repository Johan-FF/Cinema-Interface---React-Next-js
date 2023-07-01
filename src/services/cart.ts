import { products } from '@/app/types/data/ProductData'
import CardProps from '../types/props/CardProps';

let cart: Cart | null;

export default class Cart {
  private items: any = [];

  private constructor() {
    this.items = [];
  }

  public static getInstance(): Cart {
    if (!cart) {
      cart = new Cart();
    }
    return cart;
  }

  //Agregar producto al carro
  public addProductToCart(item: any) {
    this.items.push(item);
  }

  //Eliminar un producto del carrito segun su id
  public removeProductFromCart(id: string) {
    const idx = this.items.findIndex((item: any) => item === id);
    if (idx !== -1) {
      this.items.splice(idx, 1);
    }
  }

  //Encontrar de la lista de productos uno con el id ingresado
  public findProduct(id: string) {
    const product = products.snacks.find((snack) => snack.productId === id);
    if (product) {
      return {
        productId: product.productId,
        productName: product.productName,
        productPrice: product.productPrice,
        productPoints: product.productPoints,
        url: product.url
      }
    }
  }

  //De una lista de ids devuelve una lista con los productos correspondientes
  public bringProducts(ids: string[]): Array<{
    productId: string;
    productName: string;
    productPrice: string;
    productPoints: number;
    url: string;
  }> {
    const products = [];

    for (const id of ids) {
      const product = this.findProduct(id);
      if (product) {
        products.push(product);
      }
    }

    return products;
  }
//De una lista de ids devuelve una lista con los productos correspondientes, si se repite un producto agrega un contador
  public findUniqueProducts(ids: string[]): Array<{
    productId: string;
    productName: string;
    productPrice: string;
    productPoints: number;
    url: string;
    count: number;
  }> {
    const products = new Map<string, {
      productId: string;
      productName: string;
      productPrice: string;
      productPoints: number;
      url: string;
      count: number;
    }>();

    for (const id of ids) {
      const product = this.findProduct(id);
      if (product) {
        if (products.has(id)) {
          const existingProduct = products.get(id);
          if (existingProduct) {
            existingProduct.count += 1;
          }
        } else {
          products.set(id, { ...product, count: 1 });
        }
      }
    }

    return Array.from(products.values());
  }


  public getCartProducts(): any[] {
    return this.items;
  }

}