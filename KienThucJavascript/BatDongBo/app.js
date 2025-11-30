// Bất đồng bộ callback
// setTimeout(() => {
//     console.log('Hello')

// },0) // chạy bất đồng bộ sau 1s mới chạy console.log('Hello'), bất đồng bộ nên luôn chạy sau
// console.log('I Am Alex')

// Bất đồng bộ Promise
// const pFunc = () => 
//     new Promise((resolve, reject) => {
//     setTimeout(() => {
//     resolve('Hello')
// },0)
// }) 
// const value = pFunc()
//    .then((value) => {
//     console.log(value)
//     return 100
// })
//    .catch((error) => {
//     console.warn(error)
    
// }).finally(() => {
//    console.log('Ket thuc roi')
   
// })

// value.then((value) => {
//     console.log(value);
    
// })

// console.log('value', value)


/**
 * Async / Await
 * * await chỉ sử dụng được trong một async function
 * * chỉ sử dụng await với promise
 */

const p2 = () => 
    new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve('Hello')
},0)
}) 

// const handle = async () => {
//     try {
//         const value = await p2()
//         console.log(value);
//     }catch(error) {
//         console.warn(error);
//     } finally {
//         console.log('Finally');
        
//     }
// }
// handle()

;(async () => {
    try {
        const value = await p2()
        console.log(value);
    }catch(error) {
        console.warn(error);
    } finally {
        console.log('Finally');
        
    }
})()



