(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{230:function(e,t,a){"use strict";a.r(t);var i=a(0),n=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"geheugenbeheer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#geheugenbeheer"}},[e._v("#")]),e._v(" Geheugenbeheer")]),e._v(" "),a("ul",[a("li",[e._v("Processen bevinden zich in het geheugen\n"),a("ul",[a("li",[e._v("Programma code")]),e._v(" "),a("li",[e._v("Stack")]),e._v(" "),a("li",[e._v("Heap")])])]),e._v(" "),a("li",[e._v("Besturingssysteem is verantwoordelijk voor\n"),a("ul",[a("li",[e._v("Laden van het programma in een stuk geheugen en creëren geheugenruimte (stack / heap)")]),e._v(" "),a("li",[e._v("Toekennen van extra geheugen op verzoek van proces")]),e._v(" "),a("li",[e._v("Beheren van beschikbaar fysiek geheugen dat gedeeld moet worden door processen")])])])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/7UY2MfY.png",alt:""}})]),e._v(" "),a("h2",{attrs:{id:"vereisten-voor-geheugenbeheer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vereisten-voor-geheugenbeheer"}},[e._v("#")]),e._v(" Vereisten voor geheugenbeheer")]),e._v(" "),a("ul",[a("li",[e._v("Relocatie\n"),a("ul",[a("li",[e._v("Plek in fysiek geheugen kan veranderen (bijvoorbeeld door swappen)")])])]),e._v(" "),a("li",[e._v("Bescherming\n"),a("ul",[a("li",[e._v("Niet lezen/schrijven in geheugen van ander proces")])])]),e._v(" "),a("li",[e._v("Delen\n"),a("ul",[a("li",[e._v("Shared memory: Nodig voor synchronisatie en communicatie")])])]),e._v(" "),a("li",[e._v("Logische indeling\n"),a("ul",[a("li",[e._v("Ondersteuning voor (dynamische) modules zoals dll’s")])])]),e._v(" "),a("li",[e._v("Fysieke indeling\n"),a("ul",[a("li",[e._v("Welk proces heeft (momenteel) welk deel van het fysieke geheugen tot zijn beschikking")])])])]),e._v(" "),a("h2",{attrs:{id:"geheugen-statisch-indelen-in-partities"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#geheugen-statisch-indelen-in-partities"}},[e._v("#")]),e._v(" Geheugen "),a("em",[e._v("statisch")]),e._v(" indelen in partities")]),e._v(" "),a("ul",[a("li",[e._v("Geheugen kan ingedeeld worden\n"),a("ul",[a("li",[e._v("In partities met vaste grote")]),e._v(" "),a("li",[e._v("In partities met verschillende groottes")])])]),e._v(" "),a("li",[e._v("Groot nadeel van vaste grote:\n"),a("ul",[a("li",[e._v("Kleine programma’s verspillen geheugen")]),e._v(" "),a("li",[e._v("Dit is interne fragmentatie")])])])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/1VSzA3h.png",alt:""}})]),e._v(" "),a("h2",{attrs:{id:"een-wachtrij-fifo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#een-wachtrij-fifo"}},[e._v("#")]),e._v(" Eén wachtrij (fifo)")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/DJtoX3r.png",alt:""}}),e._v(" "),a("img",{attrs:{src:"https://i.imgur.com/bvkH6zJ.png",alt:""}})]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Welke jobs komen in welke partitie terecht?\n")]),a("details",[a("summary",[e._v("Antwoord")]),e._v(" "),a("img",{attrs:{src:"https://i.imgur.com/SQLYwEr.png",alt:""}}),e._v(" "),a("img",{attrs:{src:"https://i.imgur.com/5uNzaJb.png",alt:""}})]),a("p")]),e._v(" "),a("li",[a("p",[e._v("Hoe groot is de interne fragmentatie?\n")]),a("details",[a("summary",[e._v("Antwoord")]),e._v(" "),a("img",{attrs:{src:"https://i.imgur.com/YP2rZhG.png",alt:""}})]),a("p")])]),e._v(" "),a("h2",{attrs:{id:"meerdere-wachtrijen-fifo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#meerdere-wachtrijen-fifo"}},[e._v("#")]),e._v(" Meerdere wachtrijen (fifo)")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/MLkablp.png",alt:""}}),e._v(" "),a("img",{attrs:{src:"https://i.imgur.com/L70DEJ8.png",alt:""}})]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Welke jobs komen in welke partitie terecht?\n")]),a("details",[a("summary",[e._v("Antwoord")]),e._v(" "),a("img",{attrs:{src:"https://i.imgur.com/UlgGGT9.png",alt:""}})]),a("p")]),e._v(" "),a("li",[a("p",[e._v("Hoe groot is de interne fragmentatie?\n")]),a("details",[a("summary",[e._v("Antwoord")]),e._v(" "),a("img",{attrs:{src:"https://i.imgur.com/2blHfpb.png",alt:""}})]),a("p")])]),e._v(" "),a("h2",{attrs:{id:"som"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#som"}},[e._v("#")]),e._v(" Som")]),e._v(" "),a("ul",[a("li",[e._v("Stel de geheugengrootte is: 32MB")]),e._v(" "),a("li",[e._v("10 MB wordt voor het OS gebruikt")]),e._v(" "),a("li",[e._v("De overige 22 MB wordt verdeeld in de volgende partities: 10, 4, 4, 4 MB")]),e._v(" "),a("li",[e._v("De volgende Jobs: 7, 3, 6, 6 MB moeten uitgevoerd worden")])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/3j8kZ5j.png",alt:""}})]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Wat is de interne, de externe en totale fragmentatie?\n")]),a("details",[a("summary",[e._v("Antwoord")]),e._v(" "),a("img",{attrs:{src:"https://i.imgur.com/0dHC92O.png",alt:""}}),a("p"),e._v(" "),a("ul",[a("li",[e._v("Uitleg plaatje:")]),e._v(" "),a("li",[e._v("Job 1 (7MB) gaat in de 2e 10MB partitie")]),e._v(" "),a("li",[e._v("Job 2 (3MB) gaat in de 1e 4MB partitie")]),e._v(" "),a("li",[e._v("De andere jobs kunnen nergens in")]),e._v(" "),a("li",[e._v("(In het plaatje staat 4-1 = 1MB dat moet 4-3 = 1MB zijn)")]),e._v(" "),a("li",[e._v("Interne fragmentatie = 3 + 1 = 4 MB")]),e._v(" "),a("li",[e._v("Externe fragmentatie = 4 + 4 = 8 MB")]),e._v(" "),a("li",[e._v("Totale fragmenetatie = 4 + 8 = 12 MB")]),e._v(" "),a("li",[e._v("2 jobs moeten wachten terwijl alle jobs 22 MB nodig hebben er ook 22 MB beschikbaar is!\n")])])])])]),e._v(" "),a("h2",{attrs:{id:"externe-fragmentatie-bij-dynamische-allocatie"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#externe-fragmentatie-bij-dynamische-allocatie"}},[e._v("#")]),e._v(" Externe fragmentatie bij "),a("em",[e._v("dynamische")]),e._v(" allocatie")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/WQAshYH.png",alt:""}})]),e._v(" "),a("h2",{attrs:{id:"uitswappen-van-processen"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uitswappen-van-processen"}},[e._v("#")]),e._v(" Uitswappen van processen")]),e._v(" "),a("ul",[a("li",[e._v("Er kunnen zoveel processen bestaan dat er een gebrek aan werkgeheugen onstaat")]),e._v(" "),a("li",[e._v("Swap deze processen naar disk om meer geheugen vrij te krijgen")]),e._v(" "),a("li",[e._v("De state wordt "),a("em",[e._v("suspend")]),e._v(" (uitgesteld) state wanneer het proces geswapt is naar disk")]),e._v(" "),a("li",[e._v("Tween nieuwe states\n"),a("ul",[a("li",[e._v("Blocked, suspend")]),e._v(" "),a("li",[e._v("Ready, suspend")])])])]),e._v(" "),a("p",[e._v("Swapping is het verplaatsen van een proces van het hoofdgeheugen naar schijf (swapspace) en andersom.\nSwapping is een I/O bewerking en daarmee lopen we het risico dat het probleem niet wordt opgelost maar verergerd.")]),e._v(" "),a("p",[e._v("Suspend = uitgesteld")]),e._v(" "),a("h2",{attrs:{id:"a-seven-state-proces-model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a-seven-state-proces-model"}},[e._v("#")]),e._v(" A seven-state proces model")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/WvoeaQV.png",alt:""}})]),e._v(" "),a("h2",{attrs:{id:"externe-fragmentatie-by-dynamische-allocatie"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#externe-fragmentatie-by-dynamische-allocatie"}},[e._v("#")]),e._v(" Externe fragmentatie by "),a("em",[e._v("dynamische")]),e._v(" allocatie")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/HKgyZom.png",alt:""}})]),e._v(" "),a("h2",{attrs:{id:"plaatsingsalgoritmes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plaatsingsalgoritmes"}},[e._v("#")]),e._v(" Plaatsingsalgoritmes")]),e._v(" "),a("ul",[a("li",[e._v("First fit\n"),a("ul",[a("li",[e._v("Snel een block gevonden")])])]),e._v(" "),a("li",[e._v("Best fit\n"),a("ul",[a("li",[e._v("Minimale interne fragmentatie")])])]),e._v(" "),a("li",[e._v("Next fit\n"),a("ul",[a("li",[e._v("Poging to verdelen van externe fragmentatie")])])]),e._v(" "),a("li",[e._v("Buddy system")])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/PjCHpMy.png",alt:""}})]),e._v(" "),a("h2",{attrs:{id:"buddy-system"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#buddy-system"}},[e._v("#")]),e._v(" Buddy system")]),e._v(" "),a("p",[e._v("In het figuur zie je een voorbeeld waar een 1MB initial blok wordt gebruikt. Het eerste request (100K) waar je een blok van 128K\nnodig moet hebben. Dus om daar te komen moet je 1e van de 2 512K blokken splitsen, je krijgt dan 256K - 256K - 512K blokken.\nMaar omdat een 128K blok groter is dan de 100k blok splits je de 256K in 2 128K blokken waardoor je wat er in het plaatje te zien\nis krijgt. (request 100k)")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/BjB70Wd.png",alt:""}})]),e._v(" "),a("h2",{attrs:{id:"hardware-ondersteuning-voor-relocation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hardware-ondersteuning-voor-relocation"}},[e._v("#")]),e._v(" Hardware ondersteuning voor relocation")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/WzRopIe.png",alt:""}})]),e._v(" "),a("p",[e._v("Omdat geheugenblokken (bijvoorbeeld na uit- en inswappen) elders in het geheugen komen is het nodig om hardwareondersteuning te hebben die het logische procesgeheugen vertaald naar het fysieke adres.")]),e._v(" "),a("h2",{attrs:{id:"geheugenbeheer-door-paritionering"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#geheugenbeheer-door-paritionering"}},[e._v("#")]),e._v(" Geheugenbeheer door paritionering")]),e._v(" "),a("ul",[a("li",[e._v("Zowel partitioneringen met vaste en verschillende groottes is behoorlijk inefficiënt\n"),a("ul",[a("li",[e._v("Fragmentatie")]),e._v(" "),a("li",[e._v("Geheugenbehoefte vooraf bekend")]),e._v(" "),a("li",[e._v("Moeilijk resizen")])])])]),e._v(" "),a("h2",{attrs:{id:"paging-beter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#paging-beter"}},[e._v("#")]),e._v(" Paging (beter)")]),e._v(" "),a("ul",[a("li",[e._v("Met wat extra hardware ondersteuning in de CPU kan het een stuk efficiënter")]),e._v(" "),a("li",[e._v("CPU's worden uitgebreid met MMU\n"),a("ul",[a("li",[e._v("Memory Management Unit\nDit biedt mogelijkheid om geheugen veel fijnmaziger te partitioneren")]),e._v(" "),a("li",[e._v("Deze techniek heet paging en de partitie een page")]),e._v(" "),a("li",[e._v("Omvang van een page is bijvoorbeeld 4KB")])])]),e._v(" "),a("li",[e._v("Elke proces bestaat uit een x aantal pages")])]),e._v(" "),a("h2",{attrs:{id:"applicatie-pages-in-geheugen-laden"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#applicatie-pages-in-geheugen-laden"}},[e._v("#")]),e._v(" Applicatie pages in geheugen laden")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/184YaYC.png",alt:""}})]),e._v(" "),a("h2",{attrs:{id:"applicatie-pages-in-geheugen-laden-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#applicatie-pages-in-geheugen-laden-2"}},[e._v("#")]),e._v(" Applicatie pages in geheugen laden")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/FJLGPNC.png",alt:""}})]),e._v(" "),a("h2",{attrs:{id:"van-logisch-naar-fysiek-adres"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#van-logisch-naar-fysiek-adres"}},[e._v("#")]),e._v(" Van logisch naar fysiek adres")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/wyUVsgs.png",alt:""}})]),e._v(" "),a("h2",{attrs:{id:"som-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#som-2"}},[e._v("#")]),e._v(" Som")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Het interne geheugen is 32MB groot")])]),e._v(" "),a("li",[a("p",[e._v("De grootte van een page is 512 bytes")])]),e._v(" "),a("li",[a("p",[e._v("Het OS neemt zelf 8MB in beslag")])]),e._v(" "),a("li",[a("p",[e._v("Hoeveel pagina's kan men in het interne geheugen plaatsen?\n")]),a("details",[a("summary",[e._v("Antwoord")]),a("p"),e._v(" "),a("ul",[a("li",[e._v("32MB - 8MB = 23MB")]),e._v(" "),a("li",[e._v("24MB = 24000 kb / 0,5 kb (pagina) = 48000 pagina's\n")])])])])]),e._v(" "),a("li",[a("p",[e._v("Uit hoeveel bits bestaat de offset?\n")]),a("details",[a("summary",[e._v("Antwoord")]),a("p"),e._v(" "),a("ul",[a("li",[e._v("512 bytes per pagina = 9 bits off\n")])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);