console.log("Jai shree Ganesh");
// const parent=document.querySelector('.parent');
// console.log(parent);
// console.log(parent.children);


// for(let i=0; i<parent.children.length; i++){
//     console.log(parent.children[i].innerHTML);
// }
// parent.children[2].style.color='red'
// console.log(parent.firstElementChild);
// console.log(parent.lastElementChild);

// const dayOne=document.querySelector('.day')
// console.log(dayOne);
// console.log(dayOne.parentElement);
// console.log(dayOne.nextElementSibling);

// console.log("NODES: ",parent.childNodes);


const divs=document.createElement('div');
divs.innerText='Hey this is Parent'
divs.setAttribute('class','divs')

divs.className='main'
divs.id=Math.floor(Math.random()*10+1)
console.log(divs);
