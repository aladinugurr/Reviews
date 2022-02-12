const persons = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text:
          "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
      },
      {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text:
          "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
      },
      {
        id: 3,
        name: "peter jones",
        job: "intern",
        img:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text:
          "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
      },
      {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text:
          "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
      },
]


const buttonLeft = document.getElementById("button__left");
const buttonRight = document.getElementById("button__right");
var text = document.querySelector(".text");
var names = document.getElementsByClassName("name")[0];
var img = document.getElementById("image");
var job = document.querySelector(".job");
const btnRight= document.getElementById("button__right");
const surprisemeBtn = document.querySelector(".surpriseme__button");

var initialValue = 0;

img.src = persons[initialValue].img
names.innerHTML = persons[initialValue].name
job.innerHTML = persons[initialValue].job;
text.innerHTML = persons[initialValue].text;


btnRight.addEventListener('click',function(){
  
  if(initialValue===3 ){
    initialValue=-1;
  }

  initialValue++;
  console.log(initialValue)
  img.src = persons[initialValue].img
  names.innerHTML = persons[initialValue].name
  job.innerHTML = persons[initialValue].job;
  text.innerHTML = persons[initialValue].text; 

    
})

buttonLeft.addEventListener('click',function(){
  if(initialValue===0){
    initialValue=4;
  }

  initialValue--;
  console.log(initialValue)
  img.src = persons[initialValue].img
names.innerHTML = persons[initialValue].name
job.innerHTML = persons[initialValue].job;
text.innerHTML = persons[initialValue].text;  
})




surprisemeBtn.addEventListener('click',function(){
  const randomNumber = Math.floor(Math.random()*4);
  initialValue = randomNumber;
  img.src = persons[initialValue].img
  names.innerHTML = persons[initialValue].name
job.innerHTML = persons[initialValue].job;
text.innerHTML = persons[initialValue].text;  
})
