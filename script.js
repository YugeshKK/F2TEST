const arr=[
    {
        "name": "Veggie Delight",
        "imageSrc": "https://source.unsplash.com/random?veggies",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://source.unsplash.com/random?chicken",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://source.unsplash.com/random?pizza",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Steak",
        "imageSrc": "https://source.unsplash.com/random?steak",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://source.unsplash.com/random?salmon",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://source.unsplash.com/random?pasta",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "https://source.unsplash.com/random?salad",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://source.unsplash.com/random?friedChicken",
        "time": "55 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://source.unsplash.com/random?risotto",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "https://source.unsplash.com/random?burger",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://source.unsplash.com/random?paneerTikka",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://source.unsplash.com/random?ribs",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://source.unsplash.com/random?caesarSalad",
        "time": "25 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "https://source.unsplash.com/random?fishTacos",
        "time": "35 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "https://source.unsplash.com/random?chocolateCake",
        "time": "90 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.9
    }
]


const flexbox= document.getElementById('six');



for (let index = 0; index < arr.length; index++) {

    var heart= document.createElement('img');
    heart.src='images/icons8-heart-50.png';
    heart.height=20;
    heart.width=20;
    heart.setAttribute('class', 'rat')
    
    var star= document.createElement('img');
    star.src='images/icons8-star-50.png';
    star.height=20;
    star.width=20;
    
    
    var pink= document.createElement('img');
    pink.src='images/icons8-heart-30.png';
    pink.height=20;
    pink.width=20;
    pink.setAttribute('id', 'pink')

var div= document.createElement('div')
var im= document.createElement('img');
var p= document.createElement('p');
var h5= document.createElement('h5');
var time= document.createElement('p');
time.setAttribute('id', 'type')


im.src=arr[index].imageSrc;
im.height=200;
im.width=289;
div.appendChild(im);
p.innerText=arr[index].type;
h5.innerText=arr[index].name;
time.innerText=arr[index].time;
div.appendChild(p);
div.appendChild(h5);
div.appendChild(time);

var secdiv= document.createElement('div')
secdiv.setAttribute('class', 'sec')
var rat= document.createElement('p')
rat.innerText=arr[index].rating;
secdiv.appendChild(star);
secdiv.appendChild(rat)
secdiv.appendChild(heart)

div.appendChild(secdiv)
flexbox.appendChild(div)

}


const hh= document.getElementsByClassName('rat')
const dd= document.getElementsByClassName('sec');

var pp= document.createElement('img');
pp.src='images/icons8-heart-30.png';
pp.height=20;
pp.width=20;
pp.setAttribute('id', 'pink');


var ss= document.createElement('img');
ss.src='images/icons8-heart-50.png';
ss.height=20;
ss.width=20;



for (let index = 0; index < hh.length; index++) {
    const element = hh[index];
    const ele= dd[index];
   element.addEventListener('click', ()=>{
    element.replaceWith(pp);
    ele.appendChild(pp)
   })
}


const input= document.getElementById('inp')
const sear= document.getElementById('sear')


sear.addEventListener('click', ()=>{
    var val= input.value;

    const ans=[];

    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        var fullname= [];
        fullname.push(element.name);

        var ann= fullname.filter((peyar)=>{
            const pin= new RegExp(val, 'i');
              const res= peyar.match(pin);
              return res;
           })

           if(ann.length>0){
              for (let index = 0; index < ann.length; index++) {
                ans.push(element);
              }
           }

           for (let index = 0; index < ans.length; index++) {

            var heart= document.createElement('img');
            heart.src='images/icons8-heart-50.png';
            heart.height=20;
            heart.width=20;
            heart.setAttribute('class', 'rat')
            
            var star= document.createElement('img');
            star.src='images/icons8-star-50.png';
            star.height=20;
            star.width=20;
            
            
            var pink= document.createElement('img');
            pink.src='images/icons8-heart-30.png';
            pink.height=20;
            pink.width=20;
            pink.setAttribute('id', 'pink')
        
        var div= document.createElement('div')
        var im= document.createElement('img');
        var p= document.createElement('p');
        var h5= document.createElement('h5');
        var time= document.createElement('p');
        time.setAttribute('id', 'type')
        
        flexbox.innerHTML=''

        im.src=ans[index].imageSrc;
        im.height=200;
        im.width=289;
        div.appendChild(im);
        p.innerText=ans[index].type;
        h5.innerText=ans[index].name;
        time.innerText=ans[index].time;
        div.appendChild(p);
        div.appendChild(h5);
        div.appendChild(time);
        
        var secdiv= document.createElement('div')
        secdiv.setAttribute('class', 'sec')
        var rat= document.createElement('p')
        rat.innerText=ans[index].rating;
        secdiv.appendChild(star);
        secdiv.appendChild(rat)
        secdiv.appendChild(heart)
        
        div.appendChild(secdiv)
        flexbox.appendChild(div)
        
        }

    }
})

const all= document.getElementById('all');
const veg= document.getElementById('veg');
const non= document.getElementById('non');


all.addEventListener('click', ()=>{
    location.reload();
})


veg.addEventListener('click', ()=>{
    const ans=[];
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if(element.type=='veg'){
            ans.push(element);
        }
    }
    flexbox.innerHTML=''
    for (let index = 0; index < ans.length; index++) {

        var heart= document.createElement('img');
        heart.src='images/icons8-heart-50.png';
        heart.height=20;
        heart.width=20;
        heart.setAttribute('class', 'rat')
        
        var star= document.createElement('img');
        star.src='images/icons8-star-50.png';
        star.height=20;
        star.width=20;
        
        
        var pink= document.createElement('img');
        pink.src='images/icons8-heart-30.png';
        pink.height=20;
        pink.width=20;
        pink.setAttribute('id', 'pink')
    
    var div= document.createElement('div')
    var im= document.createElement('img');
    var p= document.createElement('p');
    var h5= document.createElement('h5');
    var time= document.createElement('p');
    time.setAttribute('id', 'type')
    

    im.src=ans[index].imageSrc;
    im.height=200;
    im.width=289;
    div.appendChild(im);
    p.innerText=ans[index].type;
    h5.innerText=ans[index].name;
    time.innerText=ans[index].time;
    div.appendChild(p);
    div.appendChild(h5);
    div.appendChild(time);
    
    var secdiv= document.createElement('div')
    secdiv.setAttribute('class', 'sec')
    var rat= document.createElement('p')
    rat.innerText=ans[index].rating;
    secdiv.appendChild(star);
    secdiv.appendChild(rat)
    secdiv.appendChild(heart)
    
    div.appendChild(secdiv)
    flexbox.appendChild(div)
    
    }
    
})

non.addEventListener('click', ()=>{
    const ans=[];
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if(element.type=='non-veg'){
            ans.push(element);
        }
    }
    flexbox.innerHTML=''
    for (let index = 0; index < ans.length; index++) {

        var heart= document.createElement('img');
        heart.src='images/icons8-heart-50.png';
        heart.height=20;
        heart.width=20;
        heart.setAttribute('class', 'rat')
        
        var star= document.createElement('img');
        star.src='images/icons8-star-50.png';
        star.height=20;
        star.width=20;
        
        
        var pink= document.createElement('img');
        pink.src='images/icons8-heart-30.png';
        pink.height=20;
        pink.width=20;
        pink.setAttribute('id', 'pink')
    
    var div= document.createElement('div')
    var im= document.createElement('img');
    var p= document.createElement('p');
    var h5= document.createElement('h5');
    var time= document.createElement('p');
    time.setAttribute('id', 'type')
    

    im.src=ans[index].imageSrc;
    im.height=200;
    im.width=289;
    div.appendChild(im);
    p.innerText=ans[index].type;
    h5.innerText=ans[index].name;
    time.innerText=ans[index].time;
    div.appendChild(p);
    div.appendChild(h5);
    div.appendChild(time);
    
    var secdiv= document.createElement('div')
    secdiv.setAttribute('class', 'sec')
    var rat= document.createElement('p')
    rat.innerText=ans[index].rating;
    secdiv.appendChild(star);
    secdiv.appendChild(rat)
    secdiv.appendChild(heart)
    
    div.appendChild(secdiv)
    flexbox.appendChild(div)
    
    }
})

const above=document.getElementById('vehicle1');
const below=document.getElementById('vehicle2')

above.addEventListener('change', ()=>{
    if(above.checked){
        below.checked=false;
       const ans=[];
       for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if(element.rating>=4){
            ans.push(element);
        }
       }
        flexbox.innerHTML='';
       for (let index = 0; index < ans.length; index++) {

        var heart= document.createElement('img');
        heart.src='images/icons8-heart-50.png';
        heart.height=20;
        heart.width=20;
        heart.setAttribute('class', 'rat')
        
        var star= document.createElement('img');
        star.src='images/icons8-star-50.png';
        star.height=20;
        star.width=20;
        
        
        var pink= document.createElement('img');
        pink.src='images/icons8-heart-30.png';
        pink.height=20;
        pink.width=20;
        pink.setAttribute('id', 'pink')
    
    var div= document.createElement('div')
    var im= document.createElement('img');
    var p= document.createElement('p');
    var h5= document.createElement('h5');
    var time= document.createElement('p');
    time.setAttribute('id', 'type')
    

    im.src=ans[index].imageSrc;
    im.height=200;
    im.width=289;
    div.appendChild(im);
    p.innerText=ans[index].type;
    h5.innerText=ans[index].name;
    time.innerText=ans[index].time;
    div.appendChild(p);
    div.appendChild(h5);
    div.appendChild(time);
    
    var secdiv= document.createElement('div')
    secdiv.setAttribute('class', 'sec')
    var rat= document.createElement('p')
    rat.innerText=ans[index].rating;
    secdiv.appendChild(star);
    secdiv.appendChild(rat)
    secdiv.appendChild(heart)
    
    div.appendChild(secdiv)
    flexbox.appendChild(div)
    
    }
    }
})


below.addEventListener('change', ()=>{
    if(below.checked){
        above.checked=false
       const ans=[];
       for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if(element.rating < 4){
            ans.push(element);
        }
       }
        flexbox.innerHTML='';
       for (let index = 0; index < ans.length; index++) {

        var heart= document.createElement('img');
        heart.src='images/icons8-heart-50.png';
        heart.height=20;
        heart.width=20;
        heart.setAttribute('class', 'rat')
        
        var star= document.createElement('img');
        star.src='images/icons8-star-50.png';
        star.height=20;
        star.width=20;
        
        
        var pink= document.createElement('img');
        pink.src='images/icons8-heart-30.png';
        pink.height=20;
        pink.width=20;
        pink.setAttribute('id', 'pink')
    
    var div= document.createElement('div')
    var im= document.createElement('img');
    var p= document.createElement('p');
    var h5= document.createElement('h5');
    var time= document.createElement('p');
    time.setAttribute('id', 'type')
    

    im.src=ans[index].imageSrc;
    im.height=200;
    im.width=289;
    div.appendChild(im);
    p.innerText=ans[index].type;
    h5.innerText=ans[index].name;
    time.innerText=ans[index].time;
    div.appendChild(p);
    div.appendChild(h5);
    div.appendChild(time);
    
    var secdiv= document.createElement('div')
    secdiv.setAttribute('class', 'sec')
    var rat= document.createElement('p')
    rat.innerText=ans[index].rating;
    secdiv.appendChild(star);
    secdiv.appendChild(rat)
    secdiv.appendChild(heart)
    
    div.appendChild(secdiv)
    flexbox.appendChild(div)
    
    }
    }
})


const cross= document.getElementById('cross');
const ul= document.getElementById('ul');

cross.addEventListener('click', ()=>{   
        var x = document.getElementById("nav");
        if (x.className === "nav") {
          x.className = " hello";
        } else {
          x.className = "nav";
        }
      
})











