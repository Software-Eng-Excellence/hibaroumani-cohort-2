


export interface Order {
    id: number;
    price: number;
    item: string;
}
//Single Responsibility Principle
export class OrderManagement {
    //get orders , add oders
    private orders: Order[] = [];

    constructor(private validator: IValidator, private calculator: ICalculator) { }

    getOrders() {
        return this.orders;
    }
    addOrder(item: string, price: number) {

        const order: Order = { id: this.orders.length + 1, item, price };
        this.validator.validate(order);
        this.orders.push(order);

    }
    getOrder(id: number) {
        return this.getOrders().find((order) => order.id === id);
    }

    getTotalRevenue() {
        return this.calculator.getRevenue(this.getOrders());
    }
    getAverageBuyPower() {
        return this.calculator.getAverageBuyPower(this.getOrders());
    }
}
//Liskov Principle
export class PremiumOrderManagement extends OrderManagement {
    getOrder(id: number): Order | undefined {
        console.log("ALERT: Premium Order being fetched ");
        return super.getOrder(id);
    }
}
interface IValidator {
    validate(order: Order): void;
}
//Interface Segregation Principle
interface IPossibleItems {
    getPossibleItems(): string[];
}
//Open Closed Principle
export class Validator implements IValidator {
    //Class Validator Depends on the following classes, (IT SHOULDN'T), that's why we created them in the constructor
    constructor(private rules: IValidator[]) { }
    //constructor(private rules: IValidator[]) {}
    validate(order: Order): void {
        this.rules.forEach((rule) => {
            rule.validate(order);
        });
    }
}
//Single Responsibility Principle/Open Closed Principle//Interface Segregation Principle
export class ItemValidator implements IValidator, IPossibleItems {
    getPossibleItems(): string[] {
        return ItemValidator.possibleItems;
    }
    private static possibleItems: string[] = [
        //orderable Item
        "Sponge",
        "Chocolate",
        "Fruit",
        "Red Velvet",
        "Birthday",
        "Carrot",
        "Marble",
        "Coffee",
    ];
    validate(order: Order) {
        if (!ItemValidator.possibleItems.includes(order.item)) {
            throw new Error(
                `Invalid item. Must be one of: ${ItemValidator.possibleItems.join(
                    ", "
                )}`
            );
        }
    }
}
//Single Responsibility Principle/Open Closed Principle
export class MaxPriceValidator implements IValidator {
    validate(order: Order) {
        if (order.price > 100) {
            throw new Error("Price must be less than 100");
        }
    }
}
//Single Responsibility Principle/Open Closed Principle
export class PriceValidator implements IValidator {
    validate(order: Order) {
        if (order.price <= 0) {
            throw new Error("Price must be greater than zero");
        }
    }
}
interface ICalculator {
    getRevenue(orders: Order[]): number;
    getAverageBuyPower(orders: Order[]): number;
}
//Single Responsibility Principle
export class FinanceCalculator implements ICalculator {
    //calculate total revenue and average by power
    getRevenue(orders: Order[]): number {
        return orders.reduce(
            (total, order) => total + order.price,
            0
        ); /*Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function. initially total is 0 */
    }
    getAverageBuyPower(orders: Order[]): number {
        return orders.length === 0 ? 0 : this.getRevenue(orders) / orders.length;
    }
}
