console.log("Jai shree Ganesh");
// const h2=document.getElementById('h2tag').id
// const h2=document.getElementById('h2tag').getAttribute('id')
// const h2=document.getElementById('h2tag').setAttribute('class','test heading');
const h2=document.getElementById('h2tag')
h2.style.backgroundColor = 'red';
h2.style.padding = '20px';
h2.style.color='black';
h2.style.margin='10px';

// console.log(h2.textContent);
// console.log(h2.innerHTML)
// console.log( h2.innerText)

const h2query=document.querySelector('#h2tag')
console.log(h2query);
// const inputs=document.querySelector('input[type="password"]');
// console.log(inputs);

// const ul=document.querySelector('ul');
// ul.querySelector('li')
// const ligreen=ul.querySelector('li')
// ligreen.style.backgroundColor='green';
// ligreen.style.padding='20px';
// ligreen.style.width='400px'
// console.log(ul);
// ligreen.innerText='GreenBackgroundLi'

// console.log(h2);


// querySelectorAll
const lis=document.querySelectorAll('li')
lis[1].style.backgroundColor='red'
lis.forEach((item,i)=>{
    item.style.backgroundColor='red';
    // item.style.margin='2px'
})
// console.log(lis);

const classlis=document.getElementsByClassName('list')
const convertArrayhtmlcollection= Array.from(classlis)
convertArrayhtmlcollection.forEach((item)=>{
    item.style.backgroundColor='orange'
})
// classlis.forEach((item)=>{

// })

console.log(classlis);

// create and edit remove


