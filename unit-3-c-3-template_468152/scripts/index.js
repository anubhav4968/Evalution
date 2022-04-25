// Store the wallet amount to your local storage with key "amount"
let amount=JSON.parse(localStorage.getItem("amount"))
if(amount==null)
{
    document.getElementById("wallet").innerText=0
}
else
{
document.getElementById("wallet").innerText=amount
}
function addTo()
{
    let amount=document.getElementById("amount").value
    console.log(amount)

    let wallet=document.getElementById("wallet").innerText
     wallet= Number(wallet) + Number(amount)
     document.getElementById("wallet").innerText=wallet
     console.log(wallet)
     localStorage.setItem("amount",JSON.stringify(wallet))
     
}

