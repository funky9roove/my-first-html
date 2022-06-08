
let infomation = document.querySelector("#information");
let lastOpen;

let infoTable = {
    '01': `<P>2022 Bahrain Grand Prix Winner</p>
    <p>p1.Charles LECLERC<br>p2.Carlos SAINZ<br>p3.Lewis HAMILTON</p>`,
    '02': "",
    '03': "",
}


document.querySelectorAll(".item").forEach(item=>{
    item.addEventListener("click",()=>{

        let id = item.childNodes[1].innerHTML
        if (infomation.style.display === "none") {
            infomation.style.display = "block"
        }
        infomation.innerHTML = infoTable[id]
    })
})


