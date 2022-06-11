
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
    <img src="images/sergio-perez.png" alt="error" width="130" height="130"><p>p2.Sergio PEREZ</p>
    <img src="images/george-russell.png" alt="error" width="130" height="130"><p>p3.George RUSSELL</p>`,
  
    '04': `<p>2022 Italy Grand Prix Winner</P>
    <img src="images/Max-VERSTAPPEN.png" alt="error" width="180" height="130"><p>p1.Max VERSTAPPEN</p>
    <img src="images/sergio-perez.png" alt="error" width="130" height="130"><p>p2.Sergio PEREZ</p>
    <img src="images/lando-norris.png" alt="error" width="130" height="130"><p>p3.Lando Norris</p>`,
   
    '05': `<p>2022 Miami Grand Prix Winner</p>
    <img src="images/Max-VERSTAPPEN.png" alt="error" width="180" height="130"><p>p1.Max VERSTAPPEN</p>
    <img src="images/charles-leclerc.png" alt="error" width="130" height="130"><p>p1.Charles LECLERC</p>
    <img src="images/Carlos-SAINZ.png" alt="error" width="193" height="130"><p>p2.Carlos SAINZ</p>`,
   
    '06': `<p>2022 Spain Gran Prix Winner</p>
    <img src="images/Max-VERSTAPPEN.png" alt="error" width="180" height="130"><p>p1.Max VERSTAPPEN</p>
    <img src="images/sergio-perez.png" alt="error" width="130" height="130"><p>p2.Sergio PEREZ</p>
    <img src="images/george-russell.png" alt="error" width="130" height="130"><p>p3.George RUSSELL</p>`,
    '07': `<p>2022 Monaco Gran Prix Winner</p>
    <img src="images/sergio-perez.png" alt="error" width="130" height="130"><p>p2.Sergio PEREZ</p>
    <img src="images/Carlos-SAINZ.png" alt="error" width="193" height="130"><p>p2.Carlos SAINZ</p>
    <img src="images/Max-VERSTAPPEN.png" alt="error" width="180" height="130"><p>p1.Max VERSTAPPEN</p>`,
   
    '08': `<P>FORMULA 1 AZERBAIJAN GRAND PRIX 2022</p>
    <p>circuit : Baku City Circuit</p>
    <img src="images/baku.png" alt="error" width="732" height="412">
    <div class="info">circuit length [6.003]
    <div><br>number of laps [51]
    </div><br>Practice 1<br>Jun 10 / 15:00 - 16:00
    <div><br>Practice 2<br>Jun 10 / 18:00 - 19:00
    </div><br>Practice 3<br>Jun 11 / 15:00 - 16:00
    <div><br>Qualifying<br>Jun 11 / 18:00 - 19:00
    </div><br>Race<br>Jun 12 / 15:00 - 17:00</div>`,
  
    '09': `<p>FORMULA 1 AWS GRAND PRIX DU CANADA 2022</p>
    <p>circuit : Circuit Gilles-Villeneuve</p>
    <img src="images/Gilles-Villeneuve.png" alt="error" width="732" height="412">
    <div class="info">circuit length [4.361]
    <div><br>number of laps [70]
    </div><br>Practice 1<br>Jun 17 / 14:00 - 15:00
    <div><br>Practice 2<br>Jun 17 / 17:00 - 18:00
    </div><br>Practice 3<br>Jun 18 / 13:00 - 14:00
    <div><br>Qualifying<br>Ju  18 / 16:00 - 17:00
    </div><br>Race<br>Jun 19 / 14:00 - 16:00</div>`,
  
    '10': `<p>FORMULA 1 LENOVO BRITISH GRAND PRIX 2022</p>
    <p>circuit : Silverstone Circuit</p>
    <img src="images/Silverstone-Circuit.png" width="732" heigth="412">
    <div class="info">circuit length [5.891]
    <div><br>number of laps [52]
    </div><br>Practice 1<br>Jul 01 / 13:00 - 14:00
    <div><br>Practice 2<br>Jul 01 / 16:00 - 17:00
    </div><br>Practice 3<br>Jul 02 / 12:00 - 13:00
    <div><br>Qualifying<br>Jul 02 / 15:00 - 16:00
    </div><br>Race<br>Jul 03 / 15:00 - 17:00</div>`,
 
    '11': `<p>FORMULA 1 ROLEX GROSSER PREIS VON ÖSTERREICH 2022</p>
    <p>circuit : Red Bull Ring</p>
    <img src="images/Red-Bull-Ring.png" alt="error" width="732" heigth="412">
    <div class="info">circuit length [4.318]
    <div><br>number of laps [71]
    </div><br>Practice 1<br>Jul 08 / 13:30 - 14:30
    <div><br>Qualifying<br>Jul 08 / 17:00 - 18:00
    </div><br>Practice 2<br>Jul 09 / 12:30 - 13:30
    <div><br>Sprint<br>Jul 09 / 16:30 - 17:30
    </div><br>Race<br>Jul 10 / 15:00 - 17:00</div>`,
  
    '12': `<p>FORMULA 1 LENOVO GRAND PRIX DE FRANCE 2022</p>
    <p>circuit : Circuit Paul Ricard</p>
    <img src="images/Paul-Ricard.png" alt="error" width="732" heigth="412">
    <div class="info">circuit length [5.842]
    <div><br>number of laps [53]
    </div><br>Practice 1<br>Jul 22 / 14:00 - 15:00
    <div><br>Practice 2<br>Jul 22 / 17:00 - 18:00
    </div><br>Practice 3<br>Jul 23 / 13:00 - 14:00
    <div><br>Qualifying<br>Jul 23 / 16:00 - 17:00
    </div><br>Race<br>Jul 24 / 15:00 - 17:00</div>`,
  
    '13': `<p>FORMULA 1 ARAMCO MAGYAR NAGYDÍJ 2022</p>
    <p>circuit : Hungaroring</p>
    <img src="images/Hungaroring.png" alt="error" width="732" heigth="412">
    <div class="info">circuit length [4.381]
    <div><br>number of laps [70]
    </div><br>Practice 1<br>Jul 29 / 14:00 - 15:00 
    <div><br>Practice 2<br>Jul 29 / 17:00 - 18:00
    </div><br>Practice 3<br>Jul 30 / 13:00 - 14:00
    <div><br>Qualifying<br>Jul 30 / 16:00 - 17:00
    </div><br>Race<br>Jul 31 / 15:00 - 17:00</div>`,
 
    '14': `<p>FORMULA 1 ROLEX BELGIAN GRAND PRIX 2022</p>
    <p>circuit : Circuit de Spa-Francorchamps</p>
    <img src="images/de-Spa-Francorchamps.png" alt="error" width="732" heigth="412">
    <div class="info">circuit length [7.004]
    <div><br>number of laps [44]
    </div><br>Practice 1<br>Aug 26 / 14:00 - 15:00
    <div><br>Practice 2<br>Aug 26 / 17:00 - 18:00
    </div><br>Practice 3<br>Aug 27 / 13:00 - 14:00
    <div><br>Qualifying<br>Aug 27 / 16:00 - 17:00
    </div><br>Race<br>Aug 28 / 15:00 - 17:00</div>`,
 
    '15': `<p>FORMULA 1 HEINEKEN DUTCH GRAND PRIX 2022</p>
    <p>circuit : Circuit Zandvoort</p>
    <img src="images/Zandvoort.png" alt="error" width="732" heigth="412">
    <div class="info">circuit length [4.259]
    <div><br>number of laps [72]
    </div><br>Practice 1<br>Sep 02 / 14:00 - 15:00
    <div><br>Practice 2<br>Sep 02 / 17:00 - 18:00
    </div><br>Practice 3<br>Sep 03 / 13:00 - 14:00
    <div><br>Qualifying<br>Sep 03 / 16:00 - 17:00
    </div><br>Race<br>Sep 04 / 15:00 - 17:00</div>`,
 
    '16': `<p>FORMULA 1 PIRELLI GRAN PREMIO D’ITALIA 2022</p>
    <p>circuit : Autodromo Nazionale Monza</p>
    <img src="images/Autodromo-Nazionale-Monza.png" alt="error" width="732" heigth="412">
    <div class="info">circuit length [5.793]
    <div><br>number of laps [53]
    </div><br>Practice 1<br>Sep 09 / 14:00 - 15:00
    <div><br>Practice 2<br>Sep 09 / 17:00 - 18:00
    </div><br>Practice 3<br>Sep 10 / 13:00 - 14:00
    <div><br>Qualifying<br>Sep 10 / 16:00 - 17:00
    </div><br>Race<br>Sep 11 / 15:00 - 17:00</div>`,
 
    '17': `<p>FORMULA 1 SINGAPORE AIRLINES SINGAPORE GRAND PRIX 2022</p>
    <p>circuit : Marina Bay Street Circuit</p>
    <img src="images/Marina-Bay-Street.png" alt="error" width="732" heigth="412">
    <div class="info">circuit length [5.063]
    <div><br>number of laps [61]
    </div><br>Practice 1<br>Sep 30 / 18:00 - 19:00
    <div><br>Practice 2<br>Sep 30 / 21:00 - 22:00
    </div><br>Practice 3<br>Oct 01 / 18:00 - 19:00
    <div><br>Qualifying<br>Oct 01 / 21:00 - 22:00
    </div><br>Race<br>Oct 02 / 20:00 - 22:00</div>`,
 
    '18': `<p>FORMULA 1 HONDA JAPANESE GRAND PRIX 2022</p>
    <p>circuit : Suzuka International Racing Course</p>
    <img src="images/Suzuka-International-Racing-Course.png" alt="error" width="732" heigth="412">
    <div class="info">circuit length [5.807]
    <div><br>number of laps [53]
    </div><br>Practice 1<br>Oct 07 / 13:00 - 14:00
    <div><br>Practice 2<br>Oct 07 / 16:00 - 17:00
    </div><br>Practice 3<br>Oct 08 / 13:00 - 14:00
    <div><br>Qualifying<br>Oct 08 / 16:00 - 17:00
    </div><br>Race<br>Oct 09 / 14:00 - 16:00</div>`,
  
    '19': `<p>FORMULA 1 ARAMCO UNITED STATES GRAND PRIX 2022</p>
    <p>circuit : Circuit of The Americas</p>
    <img src="images/Circuit-of-The-Americas.png" alt="error" width="732" heigth="412">
    <div class="info">circuit length [5.513]
    <div><br>number of laps [56]
    </div><br>Practice 1<br>Oct 21 / 14:00 - 15:00
    <div><br>Practice 2<br>Oct 21 / 17:00 - 18:00
    </div><br>Practice 3<br>Oct 22 / 14:00 - 15:00
    <div><br>Qualifying<br>Oct 22 / 17:00 - 18:00
    </div><br>Race<br>Oct 23 / 14:00 - 16:00</div>`,
   
    '20': `<p>FORMULA 1 GRAN PREMIO DE LA CIUDAD DE MÉXICO 2022</p>
    <p>circuit : Autódromo Hermanos Rodríguez</p>
    <img src="images/mexico-circuit.png" alt="error" width="732" heigth="412">
    <div class="info">circuit length [4.304]
    <div><br>number of laps [71]
    </div><br>Practice 1<br>Oct 28 / 13:00 - 14:00
    <div><br>Practice 2<br>Oct 28 / 16:00 - 17:00
    </div><br>Practice 3<br>Oct 29 / 12:00 - 13:00
    <div><br>Qualifying<br>Oct 29 / 15:00 - 16:00
    </div><br>Race<br>Oct 30 / 14:00 - 16:00</div>`,
    
    '21': `<p>FORMULA 1 HEINEKEN GRANDE PRÊMIO DE SÃO PAULO 2022</p>
    <p>circuit : Autódromo José Carlos Pace</p>
    <img src="images/brazil-circuit.png" alt="error" width="732" heigth="412">
    <div class="info">circuit length [4.309]
    <div><br>number of laps [71]
    </div><br>Practice 1<br>Nov 11 / 12:30 - 13:30
    <div><br>Qualifying<br>Nov 11 / 16:00 - 17:00
    </div><br>Practice 2<br>Nov 12 / 12:30 - 13:30
    <div><br>Sprint<br>Nov 12 / 16:30 - 17:30
    </div><br>Race<br>Nov 13 / 15:00 - 17:00</div>`,
    
    '22': `<p>FORMULA 1 ETIHAD AIRWAYS ABU DHABI GRAND PRIX 2022</p>
    <p>circuit : Yas Marina Circuit</p>
    <img src="images/Yas-Marina.png" alt="error" width="732" heigth="412">
    <div class="info">circuit length [5.281]
    <div><br>number of laps [58]
    </div><br>Practice 1<br>Nov 18 / 14:00 - 15:00
    <div><br>Practice 2<br>Nov 18 / 17:00 - 18:00
    </div><br>Practice 3<br>Nov 19 / 15:00 - 16:00
    <div><br>Qualifying<br>Nov 19 / 18:00 - 19:00
    </div><br>Race<br>Nov 20 / 17:00 - 19:00</div>`,
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