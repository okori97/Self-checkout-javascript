const barcode = require("../src/selfCheckout");
const {scanItem, addItem, totalPrice, deleteItem } = require("../src/selfCheckout");

// test data

const orange = {
    barcode: 789,
    price: 7,
   };

const pineapple = {
    barcode: 5367,
    price: 80,
   };

const kiwi = {
    barcode: 765,
    price: 25,
   };

   const apple = {
    barcode: 123,
    price: 5,
   };
   const banana = {
    barcode: 456,
    price: 6
   };
   
   const items = [
      apple,
      banana,
      orange,
      pineapple,
      kiwi,
    ];

    let basket = [];

    // Tests 

beforeEach(() => {
    basket = [];
})

describe("scanItem", () => {

    it("returns item based on barcode", () => {
        expect(barcode.scanItem(5367, items)).toEqual(pineapple);
        expect(barcode.scanItem(456, items)).toEqual(banana);
    });
});

describe("addItem", () => {

    it("should add item into basket", () => {
        addItem(kiwi, basket);
        expect(basket).toEqual([kiwi]);
    })

    it("adds two items to basket", () => {
        addItem(pineapple, basket);
        addItem(banana, basket);
        expect(basket).toEqual([pineapple, banana]);
    })
});

describe("totalPrice", () => {

    it("should show total price of items in basket", () => {
        const kiwiPrice = kiwi.price * 4;
        addItem(kiwi, basket);
        addItem(kiwi, basket);
        addItem(kiwi, basket);
        addItem(kiwi, basket);
        expect(barcode.totalPrice(basket)).toEqual(kiwiPrice)
        addItem(pineapple, basket);
        expect(totalPrice(basket)).toEqual(pineapple.price + kiwiPrice)
    })
});

describe("deleteItem", () => {
    it("removes item from basket", ()=>{
        addItem(kiwi, basket);
        addItem(apple, basket);
        addItem(banana, basket);
        addItem(orange, basket);
        deleteItem(kiwi.barcode, basket)
        expect(basket).toEqual([apple, banana, orange])
        addItem(kiwi, basket);
        addItem(kiwi, basket);
        deleteItem(kiwi.barcode, basket)
        expect(basket).toEqual([apple, banana, orange, kiwi])
        addItem(kiwi, basket); 
        addItem(kiwi, basket);
        addItem(kiwi, basket);
        addItem(kiwi, basket);
        deleteItem(kiwi.barcode, basket)
        expect(basket).toEqual([apple, banana, orange, kiwi, kiwi, kiwi, kiwi])
    })
});