# Threads

## Kenmerken van een proces
- Proces
  - Het *bezit bronnen* (virtueel geheugen, file handles)
- Thread
  - Het wordt uitgevoerd volgens *een bepaald pad* in een uitvoeringstoestand (actief, gereed, geblokkeerd) met een bepaalde prioriteit 
- Deze twee karakteristieken kunnen onafhankelijk door het besturingssysteem worden behandeld.

## Threads and Processen
![](https://i.imgur.com/nISL1L5.png)

Een proces een thread  🡺 MSDOS

Meerdere processen, een thread per proces 🡺 Oorspronkelijk Unix

Een proces, meerdere threads per proces 🡺 Java engine

Meerdere processen meerdere threads per proces 🡺 Windows NT, Solaris en Linux

Een thread kan worden gezien als een onafhankelijke programmateller binnen een proces.

## Single Threaded and Multithreaded Process Models
![](https://i.imgur.com/c0k05df.png)

### Voordelen threads:
- Het creëren van een thread kost veel minder tijd dan het creëren van een proces.
-Hetzelfde geld voor het overschakelen van een proces.
- Omdat threads hetzelfde geheugen en I/O delen kunnen zij met elkaar communiceren zonder tussenkomst van de kernel.
  Denk aan servers. Voor elke aanvraag een nieuwe thread.
  Wanneer een proces opgeschort wordt worden alle threads van dat proces opgeschort.
### User-Level Threads
- Threadmanagement door de applicatie
- Kernel weet niet van de threads  geen kernel privileges
- Scheduling is aplicatie specifiek.
### Kernel-level threads
- Windows NT en OS/2 zijn voorbeelden van deze aanpak
- De kernel bestuurt de context informatie van de processen en de threads
- Het overschakelen van de threads wordt bestuurt door de kernel.
  Gecombineerde benadering wordt gedaan door Solaris. Create in user space
  De meeste scheduling en synchronisatie wordt ook in de userspace gedaan.

## Blokkeren van threads
![](https://i.imgur.com/D6VCbNF.png)

Bij het bovenste plaatje in de figuur wordt 2 x een Remote procedure call aan geroepen naar verschillende machines.
Hetzelfde gebeurd in het onderste deel, maar daar zijn 2 threads opgestart.
De tweede methode is beter, tenzij door een I/O aanvraag het gehele proces opgeschort wordt.(zie volgende plaatje).

### Voorbeelden gebruik meerdere threads:
- Asynchrone verwerking:
  - File, html-server
- Werk op voor of achtergrond: spreadsheet berekeningen, uitvoer van gegevens naar scherm, lezen van gegevens
- Uitvoeringssnelheid:
  - Benaderen van verschillende bronnen
- Structuur van programma’s

## Multithreading in een uniprocessor
![](https://i.imgur.com/gm96LVn.png)

Voorbeeld 2 processors.
Proces 1 heeft 2 threads 
Proces 2 heeft 1 thread
Er moet synchronisatie plaats vinden tussen thread A en B
Scheduling van threads binnen proces.

## Waarom multithreading
- Uitvoeren van ‘achtergrondtaken’ binnen applicatie
  - Bijvoorbeeld spellingscheck binnen tekstverwerker
  - Applicatie ‘lijkt’ sneller want gebruiker kan doorwerken tijdens check
  - GUI blijft reageren !
- Snellere uitvoer van een programma
  - Bij multicore kunnen programma’s meerdere dingen tegelijkertijd doen
  - Bij singlecore kan programma andere dingen doen indien de ‘hoofdthread’ geblokkeerd raakt.

## Threads op gebruikers- en kernel-niveau
![](https://i.imgur.com/wHgOqc0.png)

### Thread op gebruikersniveau in plaats van op kernelniveau hebben enkele voordelen:
1. Threadwisseling vereist geen priveleges, dit bespaart overhead van twee moduswisselingen.
2. De scheduling kan specifiek voor een toepassing gelden.
3. De thread kunnen worden uitgevoerd op elk os.
4. Voorbeeld Java engine
#### Nadelen:
1. Systeem-aanroepen leiden tot blokkering: alle threads worden geblokkeerd.
2. Kan geen gebruik maken van multiprocessing. Elke processor een proces!

### Threads op kernel niveau
Het toepassingsprogramma bevat een API Application Program Interface die gekoppeld is aan de thread-voorziening van de kernel (NT en OS2)
#### Nadeel:
1. Moduswisseling naar de kernel 

## Hyper Threading
![](https://i.imgur.com/47CpDcd.png)

## Core Block Diagram
![](https://i.imgur.com/3dItxaK.png)

## Risico van parallelisme

## Multithreaded kruispunt
![](https://i.imgur.com/WYNDs95.png)

Meer hier over in het volgende hoofdstuk
