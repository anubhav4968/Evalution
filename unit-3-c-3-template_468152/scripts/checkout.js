// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let amount=JSON.parse(localStorage.getItem("amount"))
document.getElementById("wallet").innerText=amount

function confirm(){
    let no=document.getElementById("number_of_seats").value
    console.log(Number(no)*100)
    if(Number(no)*100>amount)
    {
        alert("Insufficient Balance!")
    }
    else if(Number(no)*100<amount){
        alert("Booking successfull!")
         let x=Number(no)*100
         amount=amount-x
         localStorage.setItem("amount",JSON.stringify(amount))
         window.location.reload()
    }
}

let data=JSON.parse(localStorage.getItem("movie"))

data.forEach(ele => {
    document.getElementById("movie").innerHTML=null
    let box=document.createElement("div")
    let imgbox=document.createElement("div")
    let img=document.createElement("img")
    img.src=ele.Poster
    imgbox.append(img)

    let name=document.createElement("p")
    name.innerText=ele.Title

    box.append(name,imgbox)
    document.getElementById("movie").append(box)

});