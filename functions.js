// function a(...nums){ //rest operator
//     console.log(nums)
// }

// a(...[1,2,3]) //spread operator



// const fn=(a,...numbers,x,y)=>{  //error rest operator should always be at last
//     console.log(x,y)
// }
// fn()


// const fn=(a,x,y,...numbers)=>{ //all the remaining arguments will go in numbers
//     console.log(numbers)
// }

// fn(5,4,3,2,3,2,)


//callback function 
//when function is passed inside a function as an arguments


// this.namee ="ronak"
// namee="ronak"
// var obj={name:"piyush"}
// function sayHello(){
//     return "Hello"+this.name
// }
// const newFunc=sayHello.bind(obj)
// console.log(newFunc())
// console.log(sayHello.call(obj))



// const person={name:"piyush"}

// function sayHi(age){
//     return `${this.name} is ${age}`
// }
// console.log(sayHi.call(person,24))
// console.log(sayHi.bind(person,24))


// const age=10
// var person={
//     name:"piyush",
//     age:20,
//     getAge:function(){
//         return this.age
//     }
// }
// var person2={age:24}
// console.log(person.getAge.call(person2))



 var status="hello"

setTimeout(()=>{
    const status="not hello"
    const data={
        status:"data hello",
        getStatus(){
            return this.status
        },
        newStatus:()=>{
         return this.status
        }
    }
    console.log(data.getStatus())
    console.log(data.newStatus())
    console.log(data.getStatus.call(this))
},0)


// const animal=[
//     {species:"Lion", name:"King"},
//     {species:"Whale",name:"Queen"},
// ]

// function printAnimals(i){
//     this.print=function(){
//         console.log("hello"+i+" "+this.species+": "+this.name)
//     }
//     this.print()
// }



// object - collection of properties stored in a key value pair 
// for in loop
// const user={
//     name:"ronnak",
//     age:24,
// }
// for(key in user){
//     console.log(user[key])
// }

// const arr=[1,2,3,4]
// const arr2=arr.forEach((i)=>{
//    return i*3
// })
// console.log(arr2)