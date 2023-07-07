import { Snack } from "../modules/shop/types/Interfaces"

export default class BuyFood {
  private static instance: BuyFood
  private foods: Snack[]

  private constructor() {
    this.foods = []
  }

  public static getInstance(): BuyFood {
    if (!BuyFood.instance) {
      BuyFood.instance = new BuyFood()
    }
    return BuyFood.instance
  }

  public addProductToCart(snack: Snack): void {
    const index: number = this.foods.findIndex((product: Snack) => product.id === snack.id)
    if(index !== -1)
      this.foods[index].count+=1
    else
      this.foods.push({...snack, count:1})
  }

  public decreaseProductToCart(id: string): void {
    const index: number = this.foods.findIndex((product: Snack) => product.id === id)
    if(index === -1 )
      return
    if(this.foods[index].count === 0)
      this.removeProductFromCart(id)
    else
      this.foods[index].count-=1
  }

  public removeProductFromCart(id: string): void {
    const index = this.foods.findIndex((product: Snack) => product.id === id)
    if (index !== -1)
      this.foods.splice(index, 1)
  }

  public getTotalPrice(): number {
    let count: number = 0
    this.foods.map((snack: Snack) => {count+=(parseFloat(snack.price)*snack.count)})
    return count
  }

  public getTotalPoints(): number {
    let count: number = 0
    this.foods.map((snack: Snack) => {count+=(snack.points*snack.count)})
    return count
  }

  public getProductList(): Snack[] {
    return this.foods
  }

}