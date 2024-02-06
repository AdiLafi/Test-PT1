document.addEventListener("DOMContentLoaded", function(){
    const storeName = localStorage.getItem("storeName")
    const price = localStorage.getItem("price")

    document.querySelector("td:nth-child(2)").textContent = storeName

    const tdElement = document.querySelector(".price") 
    tdElement.textContent = price
});







