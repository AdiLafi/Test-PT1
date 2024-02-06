//ratings & background color style
const ratings = document.querySelectorAll(".rating");
ratings.forEach(ratingElement => {
    const storeRating = parseInt(ratingElement.textContent);
    const selectedRow = ratingElement.closest(".rating");  
    if (storeRating < 2) {
        selectedRow.classList.add("lowRating");
    } else if (storeRating >= 4) {
        selectedRow.classList.add("highRating");
    }
});

//objects
  const sharp ={
    id : 1,
    address:"hassourg 2",
    city:"Jerusalem",
    price: 3500,
    rating:"4/5"
  }
  const apple ={
    id: 2,
    address:"Agrepas 42",
    city:"Nazareth",
    price: 6000,
    rating:"5/5"
  }
  const samsung ={
    id: 3,
    address:"king Goerge 23",
    city:"Ramot",
    price: 4600,
    rating:"2/5"
  }
  const toshiba ={
    id: 4,
    address:"asser 55",
    city:"Tel-Aviv",
    price: 3100,
    rating:"1/5"
  }
  //array of objects
  const allTV =[sharp,apple,samsung,toshiba]
  
//calculate average price function
  function calculateAvrgPric(){
  let sum = 0
  allTV.forEach(tv =>{
  sum += tv.price
  })
  const averagePrice = sum / allTV.length
  console.log("average Price: " + averagePrice)
  }
  calculateAvrgPric()

//find best option function
  function findBestOption(array){
  let bestOption = null;
  for (let i = 0; i < array.length; i++) {
   let selectedObject = array[i]; 
   if ((selectedObject.rating === "4/5" || selectedObject.rating === "5/5") && 
   (!bestOption || selectedObject.price < bestOption.price)){
    bestOption = selectedObject
   } 
  }
  if (bestOption){
  return bestOption.id 
  }
  else {
    return null
  }
  }
  console.log("best place and price on the list is: " + findBestOption(allTV))

  //delete btn
  const deleteBtn = document.querySelectorAll(".deleteBtn")
  deleteBtn.forEach(function(btn){
    btn.addEventListener("click",function(){
        btn.closest('tr').remove()
    });
  });

  //buy btn
  const buyButtons = document.querySelectorAll(".buyBtn");

  buyButtons.forEach(function(button){
    button.addEventListener("click",function(){
      const row = button.closest(".selectedRow")
      const storeName = row.querySelector('td:nth-child(3)').textContent
      const price = row.querySelector('td:nth-child(6)').textContent
      
      localStorage.setItem("storeName",storeName)
      localStorage.setItem("price",price)

      window.open("send.html","_blank")
    });
  });


  