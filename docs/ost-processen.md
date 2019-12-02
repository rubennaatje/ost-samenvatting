# Beschrijving en besturing van processen

## De processor hardware
![](https://i.imgur.com/6aFrh6b.png)

## Multiprocessor
![](https://i.imgur.com/hea9jKr.png)

## Multicore
Alle 4 de cores hebben dezelfde hardware aan boord (integer, fpu berekeningen). De hardware is dus symmetrisch
![](https://i.imgur.com/HuH6LXQ.png)

## Wat is een proces?

- Een programma in uitvoering
- De eenheid die aan een processor kan worden toebedeeld (door het operating system)
- Een eenheid van activiteit dat bestaat uit
  - Een set van instructies (het programma)
  - Een toestand
  - Een set van resources die het proces gebruikt

## Proces is een ‘construct’
- Een proces is een construct van het besturingssysteem
- Zoals kleur een construct is van onze hersenen

![](https://i.imgur.com/6Ksd9Hv.png)

## Eisen aan het besturingssysteem
- Processen creëren
- Meerdere processen concurrent uitvoeren
  - Optimaal processorgebruik 
  - Optimale responstijd
- Bronnen toewijzen aan de processen
- Communicatie tussen processen ondersteunen

## Standaardfuncties van een kernel
### Proces Management

- Creëren en beëindigen van processen
- Inroosteren en toedelen van processen (scheduling en dispatching)
- Wisselen van processen
- Het synchroniseren van processen en ondersteunen communicatie tussen processen
- Beheer van proces-besturingsblokken

## Proces
- Wordt ook taak genoemd
- Executie van een individueel programma
- Kan worden weergegeven in een trace (reeks van uitgevoerde instructies)

Dispatcher (verdeler)
Een programma die de processen beurtelings de processortijd geeft.
Voorkomt dat een enkel proces alleen  processor tijd krijgt

Spoor, boom

## Two-state process model
![](https://i.imgur.com/NwV1XlA.png)

## Wisselen van Processen
- De processor is sneller dan I/O daarom kunnen alle processen wachten op I/O
- Haal processen die niet verder kunnen van de processor om andere processen de kans te geven.
- Hiervoor is een nieuwe state nodig:
- De blocked state

Swapping is het verplaatsen van een proces van het hoofdgeheugen naar schijf (swapspace) en andersom.
Swapping is een I/O bewerking en daarmee lopen we het risico dat het probleem niet wordt opgelost maar verergerd.

Suspend = uitgesteld

## Five-State Process Model
![](https://i.imgur.com/fnaaBk9.png)

Not-running
ready klaar om uitgevoerd te worden
Blocked wacht op I/O
De Dispatcher kan niet het proces selecteren dat het langst in de wachtrij is omdat het misschien geblokkeerd is
New en exit kunnen in twee fasen uitgevoerd worden.
New: identificatie en tabelopbouw. Daarna bevindt het proces zich in de toestand new.
Exit: eerst wordt het proces natuurlijk of door een fout door de bevoegde instantie afgebroken en komt in de toestand exit. Andere processen hebben nog de gelegenheid om de procesgegevens te gebruiken. Pas daarna wordt het proces met zijn tabellen verwijderd.

## Eén geblokkeerde wachtrij
![](https://i.imgur.com/UHpfCy9.png)

Wachtrij bijv. fifo. 
Treedt er een event op, dan moet de wachtrij blocked doorzocht worden om het proces te vinden die deze event aangevraagd heeft. Het proces kan dan weer in de ready queue geplaatst worden.
Om het werk te bekorten kan het ook zoals op de volgende dia georganiseerd worden. 

![](https://i.imgur.com/TqPjQ3Q.png)

## Wanneer wisselt een proces?

### Interrupts
- Clock
  -het proces heeft de maximale time slice gebruikt
- I/O 

### Page fault 
- Het geheugenadres is niet gevonden in het virtuele geheugen, daarom moet het uit het hoofdgeheugen gehaald worden

### Trap
- Error treedt op
- Het proces heeft een exit uitgevoerd
### Soms ook bij aanroep van OS API
- Zoals open file

## Uitswappen van Processen
- Er kunnen zoveel processen bestaan dat er een gebrek aan werkgeheugen ontstaat.
- Swap deze processen naar disk om meer geheugen vrij te krijgen
- De state wordt suspend (uitgesteld) state wanneer het proces geswapt is naar disk
- Twee nieuwe states
  -Blocked, suspend
  -Ready, suspend
  
Swapping is het verplaatsen van een proces van het hoofdgeheugen naar schijf (swapspace) en andersom.
Swapping is een I/O bewerking en daarmee lopen we het risico dat het probleem niet wordt opgelost maar verergerd.

Suspend = uitgesteld

## A Seven-state Process Model
![](https://i.imgur.com/orYJTRi.png)

## Wanneer stopt een Proces ?

- Proces is klaar
- Beëindigen parent
- Verzoek van parent

- Tijdslimiet overschreden
- Event time-out
- Memory unavailable
- I/O failure

- Protection error
- Arithmetic error
- Invalid instruction
- Privileged instruction

Door afloop proces, door een intterrupt of door een exit-aanroep
Zie tabel 3-2 op blz. 114
Exit: Proces Termanation zie volgende dia
Batch job veroorzaakt een Halt instructie
User logs off
Het proces executes een service request om de taak te beëindigen
Error en fault condities

## Tabellen
### Geheugen
- Het toewijzen van het hoofdgeheugen  aan processen
- Het toewijzen van secundair geheugen aan processen
- Protectie-attributen voor toegang tot gedeeld geheugen
- Informatie nodig voor het besturen van virtueel geheugen
### I/O
- I/O device is beschikbaar of toegewezen
- De status van een I/O operatie
- Locatie in het hoofdgeheugen die wordt gebruikt voor de bron of bestemming van de I/O data transfer
### Bestand (file handle)
- Alleen geopende bestanden:
- Plaats in op schijf
- Huidige pointers
- Huidige toestand
### Proces
- Proces control block

Besturingsstructuren in het Operating System
Schedulers en dispatcher voor het uitvoeren van processen door de processor
Het toewijzen van bronnen aan de  processen
Respons van aanvragen door gebruikerprogramma's
Tabellen die worden geconstrueerd voor elke entiteit die het operating system gestuurd

### Process Control Block
- Procesidentificatie
  - Unieke numerieke identifier
  - Dit kan de index in de primaire proces tabel zijn
  - User identifier
  - Identificatiecode parent
- Procestoestand
  - De inhoud van de processor registers
    - User-visible registers
    - Control and status registers
    - Stack pointers
  - Program status word (PSW)
    - Bevat status informatie
    - Bijvoorbeeld: de EFLAGS register op de Pentium processor
- Procesbesturingsinformatie
Toegevoegde informatie nodig voor het operating system om de actieve processen te besturen en te coördineren
  - Scheduling en state informatie
  - Gegevensstructuur
  - Communicatie tussen processen
  - Procesprivileges
  - Geheugenbeheer
  - Eigendom en gebruik van bronnen

## Uitvoering van het besturingssysteem - Aparte Kernel (zoals vroeger)
![](https://i.imgur.com/oZWWaHF.png)

- Het concept proces bestaat alleen bij de gebruikerprogramma’s
- De OS code wordt uitgevoerd als een aparte entiteit in de privilege mode
- OS code wordt nooit uitgevoerd binnen een proces

Blz. 139
Nonproces Kernel
De kernel wordt buiten elk proces uitgevoerd.
De operating system code wordt uitgevoerd als een separate entiteit dat opereert in de privileged mode

## Uitvoering binnen gebruikersprocessen
![](https://i.imgur.com/KQuJLVW.png)
- Vrijwel alle software van het besturingssysteem wordt in de context van het gebruikersproces uitgevoerd. 
- Bij het optreden van Interrupts, Traps, System calls wordt de CPU in de kernel mode gezet en wordt de OS routine uitgevoerd in de context van het gebruikersproces (mode switch)
- Wordt vastgesteld dat er een proceswisseling moet plaatsvinden, dan wordt de besturing overgedragen aan de proceswisselroutine

Blz. 139
Elk beeld bevat niet alleen de gebieden voor het proces maar ook programma, gegevens en stackgebieden voor de kernelprogramma’s (procesbesturingsblok) zie de volgende dia.
Geen proceswisseling, maar moduswisseling.
