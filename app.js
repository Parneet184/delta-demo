let btn = document.querySelector(".b1");

btn.addEventListener("click", async()=>{
    let fact = await getFacts();
    console.log(fact);
    let p = document.querySelector(".fact");
    p.innerText = fact;
});

let url = "https://catfact.ninja/fact";

async function getFacts(){
    try{
        let res = await axios.get(url);
        return res.data.fact;
    } catch (e) {
        console.log("error---", e);
        return "no fact found";
    }
}

let btn2 = document.querySelector(".b2");
let url2 = "https://dog.ceo/api/breeds/image/random";

btn2.addEventListener("click", async()=>{
    let link = await getImage();
    let img = document.querySelector("img");
    img.setAttribute("src",link);
    console.log(link);
});


async function getImage(){
    try{
        let res = await axios.get(url2);
        return res.data.message;
    } catch (e) {
        console.log("error---", e);
        return "/";
    }
}
