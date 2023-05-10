// Callback function
console.log("Jack Ma Maslahatlari");
const list = [
    "yaxshi talaba bo'ling",
    "tog'ri boshliq tanlang and koproq hato qiling",
    "uzingizni ishlaringizni boshlang",
    "siz kuchli bo'lgan narsalarni qiling",
    "yoshlarga invistitsiya qiling",
    "endi dam oling, foydasi yo'q"
]

async function maslahatBering(age) {
    if (typeof age !== "number") throw new Error("Please Insert a number");
    else if (age <= 20) callback(null, list[0]);
    else if (age > 20 && age <= 30) return list[1];
    else if (age > 30 && age <= 40) return list[2];
    else if (age > 40 && age <= 50) return list[3];
    else if (age > 50 && age <= 50) return list[4];
    else {
        // setTimeout(() => { callback(null, list[5]); }, 5000)
        return list[5];
    }
}
maslahatBering(65).then(data => {
    console.log("Javob", data);
}).catch(err => {
    console.log("ERROR", err);
})
console.log("passed 0");
console.log("Passes 1")


async function run() {
    let result = await maslahatBering(50);
    console.log(result);
    result = await maslahatBering(31);
    console.log(result);
    result = await maslahatBering(41);
    console.log(result);
}

run();