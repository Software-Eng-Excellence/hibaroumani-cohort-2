import { FinanceCalculator, ItemValidator, MaxPriceValidator, Order, OrderManagement, PriceValidator, Validator } from '../src/app'
const rules = [
    new ItemValidator(),
    new PriceValidator(),
    new MaxPriceValidator(),
];
describe("OrderManagement", () => {
    let validator: Validator;
    let calculator: FinanceCalculator;
    let orderManager: OrderManagement;
    let baseValidator: (order: Order) => void;

    //before all new validator and new calculator instances are created
    beforeAll(() => {
        validator = new Validator(rules);
        calculator = new FinanceCalculator();
    });
    //before each new instance of OrderManagement is created
    beforeEach(() => {
        baseValidator = validator.validate; //storing the original validate method to restore it later
        validator.validate = jest.fn(); //mocking/overriding the validate method from the validator instance to avoid actual validation during tests

        orderManager = new OrderManagement(validator, calculator); //order manager is modified in each test to apply other tests (reset)
    });
    afterEach(() => {
        //after each test, the orderManager instance is reset
        validator.validate = baseValidator; //restoring the original validate method
    });
    it("should add an order", () => {
        //Arrange (Application Setup (declaring required variables and objects))
        const item = "Sponge";
        const price = 10;
        // Act (call the method to be tested)
        orderManager.addOrder(item, price);

        //  Assert (check the result)
        expect(orderManager.getOrders()).toEqual([
            { id: 1, item: "Sponge", price: 10 },
        ]); //Expecting the array returned from getOrders to be [{ id: 1, item: "Sponge", price: 10 },] after adding the item
    });
    it("should get an order by ID", () => {
        //Arrange
        orderManager.addOrder("Sponge", 10);
        orderManager.addOrder("Chocolate", 20);

        //Act
        const order = orderManager.getOrder(1);

        //Assert
        expect(order).toEqual({ id: 1, item: "Sponge", price: 10 });
    });
    it("should call finance calculator getRevenue", () => {
        //Arrange
        const item = "Sponge";
        const price = 10;

        orderManager.addOrder(item, price);

        const spy = jest.spyOn(calculator, "getRevenue"); //spy on the getRevenue method from the calculator instance

        //Act
        orderManager.getTotalRevenue();

        //Assert
        expect(spy).toHaveBeenCalled(); //expecting the getRevenue method to be called
        expect(spy).toHaveBeenCalledWith([{ id: 1, item, price }]); //expecting the getRevenue method to be called with specific arguments. Ensure that a mock function is called with specific arguments.
        expect(spy).toHaveReturnedWith(10);
    });
    it("throw additiional exception if validator doesn't pass", () => {
        //Arrange
        const item = "Sponge";
        const price = 10;
        //Mocking the validate method to throw an error
        (validator.validate as jest.Mock).mockImplementation(() => {
            throw new Error("Validation failed");
        }); //considor validator.validate as jest.Mock (we overrided it) to Apply mockImplementation to it


        //Act and Assert
        expect(() => orderManager.addOrder(item, price)).toThrow("Validation failed") //expecting the addOrder method to throw an error with a specific message
    });

})

//Tests for FinanceCalculator class
describe("FinanceCalculator", () => {
    it("should calculate total revenue", () => {
        //Arrange
        const calculator = new FinanceCalculator();
        const orders = [
            { id: 1, item: "Sponge", price: 10 },
            { id: 2, item: "Chocolate", price: 20 },
        ];

        //Act
        const totalRevenue = calculator.getRevenue(orders);

        //Assert
        expect(totalRevenue).toBe(30);
    });

    it("should calculate average buy power", () => {
        //Arrange
        const calculator = new FinanceCalculator();
        const orders = [
            { id: 1, item: "Sponge", price: 10 },
            { id: 2, item: "Chocolate", price: 20 },
            { id: 3, item: "Fruit", price: 30 },
        ];

        //Act
        const averageBuyPower = calculator.getAverageBuyPower(orders);

        //Assert
        expect(averageBuyPower).toEqual(20);
    });
});