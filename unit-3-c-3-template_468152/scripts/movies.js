// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let amount=localStorage.getItem("amount")
console.log(amount)
document.getElementById("wallet").innerText=amount
// let url=" http://www.omdbapi.com/?s=&apikey=6e713f50"

const mov=document.getElementById("search")

let id;
async function mymovie(){
   try{
       const name = document.getElementById("search").value;
        let res = await fetch(`http://www.omdbapi.com/?apikey=6e713f50&s=${name}`)

        let data =await res.json()

        let movie=data.Search;
        append(movie);
   }
   catch(err){
       console.log("Error:", err)
   }
}

  
function append(data)
{
    document.getElementById("movies").innerHTML=null;
    data.forEach(ele => {
        let box=document.createElement("div")
        let imgbox=document.createElement("div")
        let img=document.createElement("img")
        img.src=ele.Poster
        imgbox.append(img)

        let name=document.createElement("p")
        name.innerText=ele.Title

        
        let btn=document.createElement("button")
        btn.innerText="Book Now"
        btn.addEventListener("click",function(){
            adddata(ele)
        })
        btn.setAttribute("class","book_now")
        
        
        box.append(imgbox,name,btn)
        document.getElementById("movies").append(box)
    });
    
}
 
function adddata(ele)
{
    let arr=[] 
    arr.push(ele)
    console.log(arr)
    localStorage.setItem("movie",JSON.stringify(arr))
    window.location.href="checkout.html"
}


async function main()
{
    let data=await mymovie();
    if(data==undefined)
    {
        return false;
    }
    append(data)

}

function debounce(func,delay){
    if(id){
        clearTimeout();
    }
    id=setTimeout(function(){
        func();
    },delay);
}





















