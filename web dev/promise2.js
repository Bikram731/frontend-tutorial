// async function getdata(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve(455);
//         },3500)
//     })
//     // setTimeout
// }
async function getdata(){
    // let x= await fetch('https://jsonplaceholder.typicode.com/todos/1');
  
        let x = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
         
          },
      body: JSON.stringify(data), 
        });
       
    let data=await x.json();
    return data;
    // post request is used in submitting form etc very secure
}
async function main(){
    console.log("modules");
    console.log("load data");
    let data= await getdata();
    console.log("prcoess data");
    console.log("task2");
}
main();
// due to await and async function , other tasks wait for getdata to complete and await can only be used inside async function