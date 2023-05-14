// Task-D


const moment = require("moment")

class Shop {
    constructor(non, lagmon, cola) {
        this.non = non;
        this.lagmon = lagmon;
        this.cola = cola
    }

    qoldiq(non, lagmon, cola) {
        const nowString = moment().format('HH:mm');
        return `Hozir: ${nowString}da ${this.non} ta Non, ${this.lagmon} ta Lagmon, ${this.cola} ta CocaCola mavjud!`
    }

    sotish(non, num_bread) {
        this.non -= num_bread;
        return `${non}: ${num_bread} sotildi`;
    }

    qabul(cola, num_cola) {
        this.cola += num_cola;
        return `${cola}: ${num_cola} qabul qilindi`
    }

}

const shop = new Shop(5, 5, 5);
console.log(shop.qoldiq());
console.log(shop.sotish("non", 3));
console.log(shop.qabul("cola", 5));
console.log(shop.qoldiq());