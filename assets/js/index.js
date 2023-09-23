// let myname = "Esma"
// console.log(myname);
// let inf = ["Esma",true,"age",17,null,{
//     age:16,
//     surname:'Qabulova'
// }]
// let a = 30
// let b = 20
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);

// let shop = [13,false,"price",40,true]
// console.log(shop[4]);
// let user1 = {
//     book1:"Cinayet ve ceza",
//     book2:"Yer altindan qeydler",
//     book3:"Heyvan fermasi"
// }
// console.log(user.book1,user.book3);





// let myAge = 20
// let myinf = true
// let myMoney = 800
// console.log(myAge > 18 && myinf && myMoney > 500);




// alert(1 || 0)
// alert(null || 1)
// alert(null || 0 || 1)
// alert(undefined || null || 0)
// alert(1 && 0)
// alert(1 && 5)
// alert(null && 5)
// alert(null && "no matter what")
// alert(null || 2 || undefined)
// alert(1 && null && 2)


// console.log(1 || 0);
// console.log(null || 1);
// console.log(null || 0 || 1);
// console.log(undefined || null || 0);
// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(null && "no matter what");
// console.log(null || 2 || undefined);
// console.log(1 && null && 2);






// let test1 = Number(prompt("Zəhmət olmasa 1-ci imtahan nəticənizi daxil edin"))
// let test2 = Number(prompt("Zəhmət olmasa 2-ci imtahan nəticənizi daxil edin"))
// let test3 = Number(prompt("Zəhmət olmasa 3-ci imtahan nəticənizi daxil edin"))
// let tests = ((test1 + test2 + test3)/3)
// if (tests > 80) {
//     console.log("Ortalamanız 80-dən yüksəkdir və siz qəbul olunursunuz");
// }
// else if (tests == 80) {
//     "Ortalamanız 80-ə bərabərdir və siz qəbul olunursunuz"
// }
// else {
//     console.log("Ortalamanız 80-dən düşükdür və siz qəbul olunmursunuz");
// }

// let user = {
//     name:"Esma",
//     age:16,
//     city:"Baku"
// }
// let question1 = prompt("Zəhmət olmasa adınızı və soyadınızı qeyd edin")
// let question2 = prompt("Zəhmət olmasa yaşınızı qeyd edin")
// let question3 = prompt("Zəhmət olmasa yaşadığınız şəhəri qeyd edin")
// if (question1 == user.name && question2 == user.age && question3 == user.city) {
//     console.log("Uğurla daxil oldunuz");
// }
// else {
//     console.log("Məlumatlarda yanlışlıq var");
// }


// let question1 = prompt("zehmet olmasa 1-ci nomrenizi qeyd edin")
// let question2 = prompt("zehmet olmasa 2-ci nomrenizi qeyd edin")
// alert (`Neticeniz ${Math.pow(question1,question2)}-dir`)

// let animal = prompt("Heyvaninizi qeyd edin")
// switch(animal){
//     case "it":
//         console.log("Heyvaniniz itdir");
//         break
//     case "pisik":
//         console.log("Heyvaniniz pisikdir");
//         break
//     case "dovsan"    :
//         console.log("heyvaniniz dovsandir");
//         break
//         default:
//         console.log("Heyvaniniz movcud deyil");
//         break
// }


// let inf = prompt("adinizi qeyd edin")
// if(inf !=""){
//     if(inf.length >= 5){
//         alert("ugurla daxil oldunuz")
//     }
//     else{
//         alert("daxil ola bilmediniz")
//     }
// }
// else{
//     alert("zehmet olmasa adinizi daxil edin")
// }


// let person = {
//     name:"Esma",
//     password:1234
// }
// let information1 = prompt("zehmet olmasa adinizi qeyd edin")
// if (information1 == person.name){
//     let information2 = prompt("zehmet olmasa parolunuzu qeyd edin")
//     if (information2 == person.password) {
//         alert("ugurla girdiniz")
//     }
//     else{
//         alert("parolunuz sehfdir")
//     }
// }
// else{
//     alert("adiniz sehfdir")
// }


// let yourAge = Number(prompt("Zehmet olmasa yasinizi daxil edin"))
// if(yourAge %2 == 0){
//     alert(`${yourAge} cut reqemdir`)
// }
// else{
//     alert(`${yourAge} tek ededdir`)
// }

// let month = prompt("Zehmet olmasa doguldugunuz ayi qeyd edin")
// switch(month){
//     case "Dekabr":
//     case "Yanvar":
//         alert(`${month} qis ayidir`);
//         break
//         default:
//             alert("Ay sehfdir")
// }

// let week = prompt("Zehmet olmasa heftenin gununu qeyd edin")
// if(week == "senbe" || week == "bazar"){
//     console.log("heftesonudur");
// }
// else if(week == "cume" || week == "cume axsami"){
//     console.log("hefteicidir");
// }
// else{
//     console.log("Gunu sehf qeyd etmisiniz");
// }


// let week = prompt("Zehmet olmasa heftenin gununu qeyd edin")
// switch(week){
//     case "senbe":
//     case "bazar":
//         console.log("Heftesonudur");
//         break
//         case "cume":
//             case "cume axsami":
//             console.log("Hefteicidir");
//             break
//             default:
//                 console.log("Gunu sehf qeyd etmisiniz");
//                 break
// }

// let hours = Number(prompt("Zehmet olmasa gunde nece saat islediyinizi qeyd edin"))
// let money = Number(prompt("Zehmet olmasa saatliq maasinizi qeyd edin"))
// let price = hours * 30
// let price2 = price * money
// let ayliq = alert(`Ayliq maasiniz ${price2} manatdir`)


// for (let i = 10; i >= 0; i--) {
//     console.log(i);
    
// }
// let j = 10
// while(j >= 0 ){
//     console.log(j);
//     j--
// }

// let n = 10

// do{
//     console.log(n);
//     n--
    
// }while(n>=0)

// let arr = [1,3,5,7]
// for (let m = 0;  m< arr.length; m++) {
//     console.log(arr[m]);
    
// }

// let ar = [0,2,4,6,8]

// let l = 0
// while(l<ar.length){
//     console.log(ar[l]);
//     l++
// }

// let a = [9,8,7,6]
// let r = 0
// do{
//     console.log(a[r]);
//     r++
// }while(r<a.length)

// let q = 0
// let m = 0

// for (let i = 0; i < 20; i++){
//     if (i %2 == 0) {
//         q += i
//         console.log(i);
    
//     }
//     else{
//         m+=i
//         console.log(i);
//     }
    
// }
// console.log(`Cut ededlerinizin cemi ${q}-dir`);
// console.log(`Tek ededlerinizin cemi ${m}-dir`);


//  let o = 20
//     while(o <= 40){
//         console.log(o);
//         o++
//         if (o == 28) {
//             break
//         }
//     }

// for (let index = 1; index < 10 ; index++) {
//     if (index == 8) {
//         continue
//     }
//     console.log(index);
// }


// let s = [13,23,12,45,22,48,66,100]
// for (let a = 0; a <= s.length;) {
//     if (s[a] %2 == 0) {
//         console.log(s[a]);
//     }
// }

// let r = 1
// while(r <= 100){
//     console.log(r);
//     r += 2
// }

// for (let y = 1; y < 5; y++) {
//     console.log("hello");
// }

// for (let h = 0; h < 10; h++) {
//     console.log(h * h);
// }

// while (p >0) {
//     p--
//     if (p <= 10 && p >= 5 ) {
//         continue
//     }
//     console.log(p);
//  }


// let sum4 = 0

// for (let h = 50; h <= 60 ; h++) {
//     sum4 += h
//     console.log(h);
// }


// let e = 0 

// while (e <= 50) {
//     e+=2
//     if (e == 40) {
//         continue
//     }
//     console.log(e);
// }









// 1


// for (let l = 0; l < 20; l+=2) {
//     if(l>10 && l<16){
//         continue
//     }
//     console.log(l);
    
// }

// 2

// let Name = prompt("Please enter your name")
// let Surname = prompt("Please enter your surname")
// function userName (){
//     if(!Name == ""&& !Surname == ""){
        
//             console.log(`Hello ${Name} ${Surname}`);
        
       
//     }
// }
// userName()

// 3

// let a = ["Sema","Esma","Omar","Aise"]
// for(let j in a){
//     console.log("Hello", a[j]);
// }

// 4

let b = [21,23,54,78]
let sum = 0
for (let h = 0; h < b.length; h ++) {
    sum += b[h]
}
console.log(sum);


// 5
let a = [123,434,12,3400]
for (let i = 0; i < a.length; i++) {
    console.log(`${a[i]} ededi`+" "+a[i].toString().length+" reqemlidir");
    
}




// 6

// const frontendLanguages = [ "HTML", "CSS", "JavaScript","React"];
// for( let nu in frontendLanguages){
//     console.log( frontendLanguages[nu]);
// }

// 7

// let p =  Number(prompt("Zehmet olmasa yasinizi daxil edin"))

// function yourAge(eded){
//     let age = eded * eded
//     alert (`Yasinizin kvadrati ${age}-dir`)
// }
// yourAge(p)

// 8

// let s = [123,34,65,6,7,9,56]

// for (let index = 0; index < s.length; index ++ ) {

//     if (index %2 == 0) {
//         console.log(index+" cut ededdir");
//     }
//     else{
//         console.log(index+" tek ededdir");
//     }
    
// }

// 9

function duzBucaq(a,b) {
   return (a+b)*2
}

let netice = duzBucaq(6,10)
console.log(netice);
    








