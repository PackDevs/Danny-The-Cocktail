const images=[
    {
        name:"lemone",
         image:'./lemone.jpg',
        
     },
    {
        name:"orange",
        image:'./orange.jpg'
    },
    {
        name:"oranges",
        image:'./orange.jpg'
    },
    {
        name:"coca-cola",
        image:'./Coca-Cola.png',
    },
    {
        name:"mandalene",
        image:'./mandalene.jpg',
    }
];


// console.log(alpha);
const root=document.getElementById('root');
const names=document.getElementById('name')
// root.innerHTML=`<h1>${images[0].name}</h1>`
{images.map((image)=>{
    root.innerHTML +=`<img src= '${image.image}' >`;
} )}