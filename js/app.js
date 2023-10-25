// let str = "       Lorem ipsum dolor sit amet, consectetur adip ";
// let st = "+998976";

// console.log(str.charAt(3))
// console.log(str.charCodeAt(4));
// console.log(str.concat("Eshmat","Toshmat"));
// console.log(str.endsWith("adip"))
// console.log(str.startsWith("adip"))
// console.log(str.includes("adip"))
// console.log(str.indexOf("adip"))
// console.log(str.padEnd(90,"..."))
// console.log(str.repeat(2))
// console.log(str.slice(18,25))
// console.log(str.split ( ","))
// console.log(str.replaceAll(" ", ","))
// console.log(str.trim())
// console.log(str.toUpperCase())


// ARRAY METHODS
// let fruits =["Apple", "Lime", "Banana", "Cherry"]

// console.log(fruits.length);
// console.log(fruits.concat(["Lime", "Cherry"]));
// console.log(fruits.flat(2));
// console.log(fruits.join(", "));
// console.log(fruits.reverse());
// console.log(fruits.slice(1,3));
// fruits.push("Strawberry");
// fruits.unshift("");
// console.log(fruits.shift());
// fruits.unshift();

// console.log(fruits);



// let arr = ["olma","limon", "anor", "behi", "ananas"]
// console.log(arr. indexOf("anor"));
// console.log(arr.splice(2,1))

// let arr = ["Olma","limon", "anor", "behi ", "ananas"]
// let savol = prompt ("quyidagi mevalar orasidan qaysi birini olib tashashlashni xoxlaysiz? Olma, limon, anor, behi, ananas")
// // console.log(arr.indexOf(savol));
// arr.splice(arr.indexOf(savol),1)
// alert(arr)
// let savol2 = prompt ("qaysi mevani qo'shmoqchisiz?")
// let savol3 = prompt ("nechinchi indexga qo'shmoqchisiz?")
// // let number = Number(savol3)
// arr.splice(savol3, 0, savol2)
// alert(arr)



let fruits= ["olma","banan","gilos"];

console.log(fruits)
let meva = prompt("Quyidagi mevalarga  yana qanaqasini qo'shgan bo'lardingiz? (olma, banan,gilos)")
fruits.push(meva)
console.log (fruits)
fruits.splice(0, 1);
console.log (fruits)
alert(fruits)



let ism = prompt ("Ismingiz?")
let yil = prompt ("nechinchi yilda tu'gilgansiz")
let oy = prompt ("qaysi oyda tavallud topgansiz")
let kun = prompt ("sanasi nechi?")

let hozir = Date.now();
let month = (Number(oy)-1)
let tugilganKun = new Date(yil, month, kun).getTime()

let year = ((hozir-tugilganKun)/1000/60/60/24/365.2)
let months = ((hozir-tugilganKun)/1000/60/60/24 % 365.2 / 31)
let day= ((hozir-tugilganKun)/1000/60/60 / 24 % 365.18 %31)

alert("Hurmatli" +" "+ ism +" "+  year + " " +"yil"+ months + " " +"oy" + " " + day + " "+"kun"  + " " +"yashapsiz!" )
console.log("Hurmatli" +" "+ ism +" "+  year + " " +"yil"+ months + " " +"oy" + " " + day + " "+"kun"  + " " +"yashapsiz!" )



//Ustoz manda quyidagi muammo yuzaga keldi, shu sababdan 2 marta yozdim. 
//Muammo shundaki, perseInt funksiyasini topolmayapman 
//deydi konsolda va barcha hisob kitoblarni javobini chiqarmaydi. buni sababi manga qorohg'uligicha qoldi.
//agar sababini aniqlay olsangiz iltimos tushuntirib bering. Oldindan rahmat!

let ismi = prompt ("Ismingiz?")
let yili = prompt ("nechinchi yilda tu'gilgansiz")
let oyi = prompt ("qaysi oyda tavallud topgansiz")
let kuni = prompt ("sanasi nechi?")

let now = Date.now();
let month2 = (Number(oyi)-1)
let tugilganKun2 = new Date(yili, month2, kuni).getTime()

let years = perseInt((now-tugilganKun2)/1000/60/60/24/365.2)
let month3 = perseInt((now-tugilganKun2)/1000/60/60/24 % 365.2 / 31)
let day2= perseInt((now-tugilganKun)/1000/60/60 / 24 % 365.18 %31)

alert("Hurmatli" +" "+ ismi +" "+ year + " " +"yil"+ month3 + " " +"oy" + " " + day2 + " "+"kun"  + " " +"yashapsiz!" )
console.log("Hurmatli" +" "+ ismi +" "+ year + " " +"yil"+ month3 + " " +"oy" + " " + day2 + " "+"kun"  + " " +"yashapsiz!" )














