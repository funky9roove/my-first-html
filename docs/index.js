
let infomation = document.querySelector("#information");
let lastOpen;

let infoTable = {
    '01': `<P>2022 Bahrain Grand Prix Winner</p>
    <img src="images/charles-leclerc.png" alt="error" width="130" height="130"><p>p1.Charles LECLERC</p>
    <img src="images/Carlos-SAINZ.png" alt="error" width="193" height="130"><p>p2.Carlos SAINZ</p>
    <img src="images/Lewis-HAMILTON.png" alt="error" width="200" height="130"><p>p3.Lewis HAMILTON</p>`,
    '02': `<p>2022 Saudi Arabia Grand Prix Winner</P>
    <img src="images/Max-VERSTAPPEN.png" alt="error" width="180" height="130"><p>p1.Max VERSTAPPEN</p>
    <img src="images/charles-leclerc.png" alt="error" width="130" height="130"><p>p2.Charles LECLERC</p>
    <img src="images/Carlos-SAINZ.png" alt="error" width="193" height="130"><p>p3.Carlos SAINZ</p>`,
    '03': `<p>2022 Austraila Grand Prix Winner</p>
    <img src="images/charles-leclerc.png" alt="error" width="130" height="130"><p>p1.Charles LECLERC</p>
    <img src="" alt="error" width="" height=""><p>p2.Sergio PEREZ</p>
    <img src="" alt="error" width="" height=""><p>p3.George RUSSELL</p>`,
    '04': ``,
    '05': ``,
    '06': ``,
    '07': ``,
    '08': ``,
    '09': ``,
    '10': ``,
    '11': ``,
    '12': ``,
    '13': ``,
    '14': ``,
    '15': ``,
    '16': ``,
    '17': ``,
    '18': ``,
    '19': ``,
    '20': ``,
    '21': ``,
    '22': ``,
    '23': ``,
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


