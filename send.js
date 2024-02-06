document.addEventListener("DOMContentLoaded", function(){
    const storeName = localStorage.getItem("storeName")
    const price = localStorage.getItem("price")
    document.querySelector("td:nth-child(2)").textContent = storeName
    //document.querySelector("td:nth-child(4)").textContent = price
    console.log(price)
    
    
    const tdElement = document.querySelector(".price") 
    console.log(tdElement)
    tdElement.textContent = price
   
});







