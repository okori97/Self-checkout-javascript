const scanItem = (barcode, items) => {
    return items.find(item => {
        return item.barcode === barcode;
    });
}

const addItem = (item, basket) => {
    basket.push(item);
}

const totalPrice = (basket) => {
    let total = 0;

    for(var i = 0; i < basket.length; i++) {
        total += basket[i].price;
    }

    return total;
}

const deleteItem = (barcode, basket) => {

 /*
 for(var i = 0; i < basket.length; i++) {
     if(basket[i].barcode === barcode){
         basket.splice([i],1);
     } }   
*/
     const index = basket.findIndex(item => item.barcode === barcode);
     if (index > -1){ 
         basket.splice(index,1);
        }

}

const barcode = {
    scanItem: scanItem

}

module.exports = { scanItem, addItem, totalPrice, deleteItem };