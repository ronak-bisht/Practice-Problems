// const str="hello"
// const obj2=str.split("")
// const arr=[]
// for(i in obj2){
//     arr.push(obj2[obj2.length-1-i])
// }
// console.log(arr)
// console.log(arr.join(""))



// obj2.forEach((obj)=>{
//     console.log(obj)
// })


//fibonacci series 0 1 1 2 3 5 8
// function fibo(n){

//     let a=0;
//     let b=1;
//     let res
//     if(n==0){
//         return 0
//     }
//     if(n==1){
//         return 1
//     }
//     else{
//         while(n>=2){
//             res=a+b
//             a=b
//             b=res
//             n--
//         }
       
//     }   
//     return res
// }
// function fibo(n){
//     if (n<=1) return n
//     return fibo(n-1)+fibo(n-2)
// }

// console.log(fibo(6))


// currying

// function add(a,b){
//     return a+b
// }
// function add2(a){
//     return function (b){
//         return a+b
//     }
// }
// console.log(add2(2)(5))


//memoization
// function fiboo(fn){
//     const obj={}
    
//     return function(a){
//         console.log(obj)
//         if(a in obj){
//             return obj[a]
//         }
//         else{
//             const ans=fn(a)
//             obj[a]=ans
//             return ans
//         }
//     }
// }

// const fiboncii=fiboo(fibo)
// console.log(fiboncii(7))
// console.log(fiboncii(8))




// //output promises has priority good will print first
// setTimeout(()=>{
//     console.log('hellow')
// },0)

// Promise.resolve("good").then((res)=>{
//     console.log(res)
// })
// setTimeout(()=>{
//     console.log('hii')
// })
// const obj=Promise.resolve("good")
// const obj=new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("im done")
//     },2000)
// })

// async function test(){
//     const res=await obj
//     console.log(res)
//     console.log('not good')
// }
// test()
// console.log('what outside')

const obj={
    name:"ronak",
    
}
name="rahul"
const fn=()=>{
    console.log(this.name)
}
function fn2(){
    console.log(this.name)
}

const fn3=fn2.bind(obj)

fn3()









