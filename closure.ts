// //global scope
// var a=10
// function one(){
//     //inner scope 1
//      var b=20
//     return function two(){

//         //local scope 2
//         var c=30
//         console.log(a+" "+b+" "+c)
//     }
// }
// const func=one()
// func()


//SCOPE CHAAINING 
// //FUNCATION HAS ACCESS TO THE SCOPE OF PARENT AND ITS ALL PARENT EXPLAINED ABOVE
// function a(a){
//     return function b(b){
//         return function c(c){
//             console.log(a+b+c)
//         }
//     }
// }

// a(10)(20)(30)




// let count=0;
// (function printCount(){
//     if(count===0){
//         let count=1  //shadowing
//         console.log(count)
//     }
//     console.log(count)
// })()



// Q) var addSix =createBase(6)
// Q) addSix(10) SHOULD return 16
// function createBase(){
//     const a=6
//     return function (b){
//         return a+b
//     }
// }
// var addSix=createBase()
// console.log(addSix(10))




// function find(){
//     let a=[];
//     for(let i=0;i<10000;i++){
//         a[i]=i*i;
//     }
//     return function (index){
//         return a[index]
//     }

// }

// const func=find()
// console.log(func(10))



//module pattern - when we have private function that we dont want user to see it
//can be only seen with public mehtod
// var Module =(function(){
//     function privateMethod() {
//         console.log("private mehtod")
//     }
//     return {
//       publicMethod:function(){

//       }
//     }
// })()

// Module.publicMethod()
// // Module.privateMethod() -- we cannot access this we never returned it


// function likeTheVideo(){
//     let called=0;
//     return function(){
//         if(called>0){
//             console.log("already subscribed")
//         }else{
//             console.log("thans for subscribing")
//             called++
//         }
//     }
// }

// let isSubscribed=likeTheVideo()
// isSubscribed()
// isSubscribed()
// isSubscribed()
// isSubscribed()





