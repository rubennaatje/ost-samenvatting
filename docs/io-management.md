# I/O beheer

## Vereenvoudigd computersysteem (week 1)
![](https://i.imgur.com/IeRRnPZ.png)

## Moderne architectuur
![](https://i.imgur.com/HCmaGDv.png)

## I/O apparaten
* Input/Output apparaten zijn er in veel verschillende smaken
    * Leesbaar/schrijfbaar door mensen (scherm, toetsenbord, printer, muis, etc.)
    * Leesbaar/schrijfbaar door systeem (harde schijf, USB apparaat, SATA controller)
    * Communicatie apparaten (netwerk, BT, modem)

* Input/Output apparaten verschillen sterk qua
    * Data rate
    * Toepassing
    * Complexiteit 
    * Eenheid van communicatie
    * Block devices (HD, SSD, USB stick)
    * Stream devices (toetsenbord, netwerkkaart, printer)
    * Data weergave
    * Foutcondities
* De I/O beheer taak van het besturingssysteem is dan ook
    * Niet uniform te realiseren
    * Complex, maar te reduceren door device drivers te gebruiken
    
![](https://i.imgur.com/br3QlTI.png)

## Gelaagdheid in I/O beheer
![](https://i.imgur.com/A645H9J.png)

* Probleem van OS om te communiceren met I/O apparaten wordt opgedeeld in lagen.
* Scheduling & control:
    - Daadwerkelijke communicatie met hardware, afhandeling van interrupts
* Device I/O:
    - Functies op device I/O (bijvoorbeeld netwerkkaart functies)
* Logical I/O:
    - Vertaling van functionaliteit van device naar logisch niveau (bijvoorbeeld netwerk sockets).

## Five-State Process Model
![](https://i.imgur.com/LIDprGB.png)

Not-running
ready klaar om uitgevoerd te worden.
Blocked wacht op I/O.
De Dispatcher kan niet het proces selecteren dat het langst in de wachtrij is omdat het misschien geblokkeerd is
New en exit kunnen in twee fasen uitgevoerd worden.
New: identificatie en tabelopbouw. Daarna bevindt het proces zich in de toestand new.
Exit: eerst wordt het proces natuurlijk of door een fout door de bevoegde instantie afgebroken en komt in de toestand exit. Andere processen hebben nog de gelegenheid om de procesgegevens te gebruiken. Pas daarna wordt het proces met zijn tabellen verwijderd.

## Vormen van I/O
### Programmed I/O

![](https://i.imgur.com/ZJYymP6.png)
1. CPU doet verzoek aan I/O apparaat en wacht tot deze klaar is (busy waiting). Proces blijft dus in Running state.

2. Gegevens kunnen daarna direct verwerkt worden

### Interrupt-driven I/O

![](https://i.imgur.com/7AVp64i.png)

1. OS doet verzoek aan I/O apparaat, plaats het proces in Blocked state en selecteert een ander proces.

2. I/O apparaat signaleert wanneer gegevens beschikbaar zijn middels interrupt

3. OS onderbreekt  proces om device driver te laten communiceren met I/O device en 

4. laat CPU nieuwe gegevens verwerken of 

5. in het werkgeheugen plaatsen. Het proces dat de I/O aanvroeg wordt in de Ready state gezet.

6. Als proces dat I/O aanvroeg weer aan bod komt (Running) wordt data in werkgeheugen verwerkt.

![](https://i.imgur.com/jVi9TVh.png)
 
### I/O met Direct Memory Access (DMA)
1. OS doet verzoek aan I/O apparaat, plaats het proces in Blocked state en selecteert een ander proces..
2. I/O apparaat maakt gebruik van DMA module om gegevens autonoom in het werkgeheugen te plaatsen. Wanneer DMA klaar is volgt een interrupt.
3. OS verwerkt interrupt door proces dat I/O heeft aangevraagd in Ready state te plaatsen.
4. Als proces dat I/O aanvroeg weer aan bod komt (Running) wordt data in werkgeheugen verwerkt.

![](https://i.imgur.com/RzVXznn.png) Wat gebeurt er met een blocked process?

#### A seven-state Process Model
![](https://i.imgur.com/ZzOlRJV.png)

Proces kan niet uitgeswapped worden

### De oplossing: Buffering
Autonome I/O operaties worden niet op geheugen van proces gedaan maar op buffers van het OS

Per I/O actie alloceert OS een buffer aan die operatie

![](https://i.imgur.com/eML2Mi6.png)

#### Single buffering - leesactie
![](https://i.imgur.com/CueQeKy.png)

![](https://i.imgur.com/zMfvFC1.png)

#### Double buffering – 2 leesacties
![](https://i.imgur.com/VqL6u2v.png)
![](https://i.imgur.com/7WgQacu.png)

#### Cyclische Buffer
Voorkomt dat OS steeds buffers moet alloceren of vrije buffer zoeken.

Door de extra buffers (>2) kunnen ook piek-aanvragen beter afgehandeld worden.

![](https://i.imgur.com/7lMPAVJ.png)

## Disk Scheduling
Toegang tot harde schijven vormt belangrijk deel van totale I/O werklast.

Door de fysieke opbouw van opslagmedia op basis van harde/optische schijven is speciale scheduling nodig om resource efficient te kunnen delen tussen processen

### Vertragingstijden van schijfmedia
![](https://i.imgur.com/D9EcD0M.png)

### Disk scheduling - vingeroefening
![](https://i.imgur.com/5Lp1oU3.png)

### Disk scheduling door OS
Het besturingsysteem plaats alle openstaande I/O acties van parallelle processen/threads in een wachtrij en beslist in welke volgorde ze afgehandeld dienen te worden.

Eenvoudigst: FIFO
![](https://i.imgur.com/wbUCDyn.png)
#### Disk scheduling - SSTF
Shortes Service Time First

Welke I/O actie in de wachtrij kan het snelst worden uitgevoerd.

Ofwel voor welke I/O actie hoeft de kop minimaal te bewegen
![](https://i.imgur.com/v1gCguA.png)

#### Disk scheduling - SCAN
Kop beweegt heen en weer

Betere verdeling van wachttijd over de diverse I/O acties

![](https://i.imgur.com/Lce8d5d.png)

## Tentamenstof
Hoofdstuk 11: In ieder geval paragrafen 11.1 t/m 11.5
