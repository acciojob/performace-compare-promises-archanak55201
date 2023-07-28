// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];
let td1=document.getElementById("output-all");
let td2=document.getElementById("output-any");
let start=performance.now();
// console.log(start);
let arr=[];
for(let i=0;i<apiUrls.length;i++){

    let prom =new Promise((resolve)=>{
        setTimeout(() => {
        resolve(fetch(apiUrls[i]));
        },3000)
    })
    arr.push(prom);
}
  let prom3=Promise.all(arr);
  prom3.then((data)=>{
	  td1.innerText=performance.now()-start;
    // console.log(performance.now()-start);
  })
let prom4=Promise.any(arr);
  prom4.then((data)=>{
	  td2.innerText=performance.now()-start;
    // console.log(performance.now()-start);
  })

// You can write your code here
