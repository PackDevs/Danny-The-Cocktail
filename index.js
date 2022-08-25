const images=[
    {
        name:"lemone",
         image:'lemone.jpg',
        
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
        image:"mandalene.jpg",
    },
    // {
    //     // name:"orange",
    //     // image:"orange2.jpg",
    // },
    {
        name:"margarita",
        image:"margarita.jpg",
    },
    // {
    //     // name:"martini",
    //     // image:"martini.jpg",
    // }
];


// console.log(alpha);
// const root=document.getElementById('root');
// const names=document.getElementById('name')
// root.innerHTML=`<h1>${images[0].name}</h1>`
// {images.map((image)=>{
//     root.innerHTML +=`<img src= '${image.image}' >`;
    
// } )}

const photo=(image,name)=>{

const photos=`

<div class="card">
  <div class="card-body"><img src=${image}> </div>
  <div class="card-footer">${name}</div>
</div>
`
root.innerHTML+=photos;
}


// images.map((photo)=>{ root.innerHTML +=`<img src= ` ${image.photo}})
images.map(data=>{
    photo(data.image,data.name);
})