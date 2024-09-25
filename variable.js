// function test(){
//     let b="bye"
//     if(true){
//         var b="helo"
//         console.log(b)
//     }
//     console.log(b)

// }

// test()


// console.log(count)
// var count=1


// function abc(){
//     console.log(a)
//     var a=10
//     let b=20
//     const c=30
// }

// abc()

// function test(){
//     var a=10
//     if(true){
//         let a=20
//         console.log(a)
//     }
//     console.log(a)
// }
// test()


//hoisting //tempopral dead zone
// console.log(a)
// var a=10
// console.log(a)


//first class function
// console.log(a)
// let a=()=>{
//     console.log('hello')
// }


// IFFY

// (
//     function (){
//         console.log('hello')
//     }
// )()


// const d1={
//     name:"ronak",
//     age:20,
//     d3:{
//         name:"ankit"
//     },
//     func:()=>{

//     }
// }
// const d2=JSON.parse(JSON.stringify(d1))
// d2.age=27
// d2.d3.name="ronak"
// // d2.name="jatin"
// // console.log(d1)
// console.log(d1)
// console.log(9==="9")
// console.log(undefined==undefined)
// console.log(NaN==NaN)
// console.log(typeof NaN)
// console.log(9/"stinndjhg")
// console.log(9/"hllo"===9/"hllo")
// console.log(9/"1")

// const func=()=>{
//     const a=10

//     return ()=>{
//         console.log(a)
//     }
// }

// func()()
// const b=func()
// b()
//  var addSix =createBase(6)
//  addSix(10) SHOULD return 16


//  const createBase=function(base){
//     return (b)=>{
//         console.log(base+b)
//     }
//  }

//  var addSix=createBase(6)
//  var addNine=createBase(9)
//  addNine(10)
// addSix(3)
// addSix(9)


function square(){
    let a=[];
    for(let i=0;i<50000000;i++){
        a[i]=i*i;
    }
   
    return function (index){
        return a[index]
    }

    // return a[index]
}

// console.log(square(100))
// console.log(square(1000))

// const improved=square()
// console.log(improved(10))
// console.log(improved(100))
// console.log(improved(10000))


// objec function memouzation useCallback



