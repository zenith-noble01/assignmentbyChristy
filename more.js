const images=document.querySelector(".images")

const changeImage =(event)=>{
    document.querySelector(".freeSpace").scr= event.children[0].src;
   
}

    let theImages=document.querySelectorAll("#logo");
    theImages.forEach(function(image){
        let text =image.getAttribute("alt");
        let displayedImage = image.getAttribute("src");
        image.addEventListener("mouseover", function(e){
            let space= document.querySelector("#space img");
            space.setAttribute("alt", text);
            space.setAttribute("src",displayedImage);
            let p =document.querySelector("#par");
            
            p.innerHTML=text
        })
    })
