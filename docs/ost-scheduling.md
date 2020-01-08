# Scheduling

## Criteria
- Scheduling
  - Het verdelen van processortijd onder processen en threads
- Rechtvaardigheid
  - Ieder proces een rechtvaardig deel van de cpu-tijd
- Efficiëntie
  - Effectieve bezetting CPU
- Responsetijd
  - Minimaal voor interactieve gebruikers
- Turnaround (doorlooptijd)
  - Minimaal voor batchgebruikers
- Throughput (doorvoer)
  - Maximaliseer het aantal per uur verwerkte jobs
  
```
cpu efficientie: 1       - Switchtime     
	               quantum + Switchtime
Stel Switchtime = 50 msec en quantum=200 ms => 1 - 50/250 = 80%
bij een quantum=100 ms => 1 - 50/150 = 67%
Quantum groot is goed voor batchsystemen maar slecht voor interactieve systemen.
FIFO => goed voor batchsystemen maar onacceptabele responsetijden. 
Preemptive Schedulers:  (multi tasking).
(met context switch)
{Deze kunnen tussentijds stop gezet worden}.
Non- Preemptive Schedulers Bijv. FIFO heeft de shortest Job first het kortste gemiddelde proces duur.
```

## Procestoestanden
![](https://i.imgur.com/3wFX1ez.png)
![](https://i.imgur.com/qJD97N8.png)
```
Lange termijn: wordt uitgevoerd wanneer een proces wordt gecreëerd.
Hoe meer processen er gecreëerd zijn des te kleiner is het percentage tijd voor uitvoering.
Toegang beslissen op basis van het aantal processen, of op het percentage leeglooptijd van de processor.

Middellange termijn swapfunctie

Korte termijn welk gereed proces als volgende wordt uitgevoerd.
```
## Principes
- Nonpreemptive scheduling
  - Job helemaal afronden
  - Geen task switchen
- Nonpreemptive multitasking
  - Cooperative multitasking
  - Task switch als blocked
- Preemptive multitasking
  - OS kan elk moment ingrijpen
 
Blocked: bij BLOCKING CALL, file i/o, socket accept in gui-programma's: wachten op event

## Wachtrijdiagram
![](https://i.imgur.com/FJDAsYa.png)  
```
Lange termijn scheduler: FCFS first come, first served of op basis van systeemprestaties: prioriteit, 
verwachte uitvoeringstijd, I/O-bronnen
Timesharing: accepteren tot systeem verzadiging optreedt.

Middellange termijn: swapping: wanneer niet alle pagina’s van processen meer in het hoofdgeheugen passen, 
moet een deel geswapt worden. Welke processen worden verplaatst naar het secudaire geheugen?

In essentie is scheduling een kwestie van beheren van wachtrijen om wachtrijvertragingen te minimaliseren en 
prestaties in een wachtrijomgeving te optimaliseren.

Korte termijn scheduler == dispatcher
Kan een proces preemtief onderbreken ten gunste van een ander proces: 
door klokinterrupt
I/O-interrupt
Besturingssysteemaanroepen
signalen
```

## Wachtrijen met prioriteiten
![](https://i.imgur.com/nARV3Xy.png)  

```
Priority scheduling: (Statisch en dynamisch).

- Statisch:   (VAX)
Hoogste prior is eerste aan de beurt. 
Na iedere beurt prior verlagen, dit voorkomt 
starvation van de lagere processen {nice}.
Dynamisch, Proces Prioriteit aanpassen. 

1/f Priority: 
Indien een proces slechts een fractie van het quantum 
per keer gebruikt, wordt de prior opgevoerd: 
P=(1-f)*max_prior+ f*(min_prior)

(Meestal bij I/O processen of interactieve users,
UNIX past dit toe in combinatie met R. Robin).
```

## ALgoritmen
- First Come First Served (FCFS, FIFO)
  - Processen worden op volgorde 1 voor 1 afgehandeld
- Shortest Proces Next (SPC)
  - Begin met de kortste processen
- Shortest Remaining Next (SRN)
  - Kies voor het proces dat nog het minste werk heeft te doen
- Highest Repsonse Ratio Next (HRRN)
  - Kies proces op basis van omvang EN wachttijd
- Round Robin (RR)
  - Laat elk proces kortstondig aan de beurt komen

## First Come First Served (FCFS, FIFO)
![](https://i.imgur.com/kqDBQMz.png)  

- Een gereed proces komt in de ready queue
- Bij wisseling komt het oudste proces aan de beurt

### Voorbeeld fifo (nonpreemptief)
![](https://i.imgur.com/XzTN5Z6.png)  

``` 
Niet-preëmptief de uitvoering van een proces dat actief is wordt voortgezet totdat het proces wordt beëindigd of 
zichzelf blokkeert om op I/O te wachten.
-Slecht gebruik van I/O devices

Wachttijd zeer gevoelig aan variantie van de burstlengte
Konvooi-effect
Teveel aandacht voor:
-Processorgebonden processen

Niet goed voor 
-Processen met veel I/O
Interactieve processen
Processen in ware tijd
```

## Shortest Process Next (SPN) (nonpreemptief)
- Proces met kortste verwachte verwerkingstijd wordt het eerst geselecteerd

![](https://i.imgur.com/dYVd7u4.png)  
![](https://i.imgur.com/Eo1dosz.png)  

Bepaal de gemiddelde turnaroundtijd van a en van b bediend door een fifo scheduler. Aankomsttijd alle jobs = 0

![](https://i.imgur.com/fX93knb.png)  

```
Hoe bepalen we de kortste Job?
met de beste turnaround tijd, T/T ?
(gem. doorlooptijd minimaal).
Job volgorde: A,B,C,D.
gem. TT:(4A+3B+2C+D)/4.
Eerste job telt *4 --> 
Snelste job eerst. {Slimme schedulers proberen per gebruiker te schatten 
 wat de gemiddelde CPU tijd is, om zo de shortest job  te vinden}.
Quanta: T0;(T0+T1)/2; (T0+T1)/4+T2/2;   etc.
Eenvoudige optelling van de waarde die je had + de nieuwe gebruikte qoutum/2
```

## Shortest Remaining Time (SRT)
- Preëmptieve versie kortste resterende proces tijd strategie
- Moet een schatting van de verwerkingstijd gebruiken

![](https://i.imgur.com/yDkUFIB.png)
![](https://i.imgur.com/mHX1Shj.png)

## Highest Repsonse Ratio Next (HRRN)
- Het volgende proces met de hoogste ratio wordt geselecteerd

![](https://i.imgur.com/OlOthzL.png)


```
Bij T=9 moet je een keuze maken tussen 3 processen die nog uitgevoerd moeten worden:
RR = (w + s) / s  
RR3 = (5 + 4)/4 = 2.25 
RR4 = (3 + 5)/5 = 1,6
RR5 = (1 + 2)/2 = 1,5
De grootste dus proces 3 moet worden uitgevoerd.
Op T = 13 moet je weer kiezen:
RR4 = (7+5)/5 = 2,4
RR5 = (5 + 2)/2 = 3,5 dus RR5 wordt uitgevoerd.
```

## Round Robin (RR)
- Preëmptieve verwerking gebaseerd op een klok
- Een tijdquantum wordt aan elk proces toegewezen

![](https://i.imgur.com/C9vnNZR.png)

```
Round Robin scheduling:
  Ieder proces krijgt een (vast)
  tijd quantum toegewezen. 
  Is het Quantum verbruikt dan onderaan de lijst.
-> Daardoor nadeling voor I/O gebonden processen want gebruiken vaak niet hele timeslice
  Zorgvuldig quantum 'tunen' voor rendement en 
  respons tijd.
```

## Tijdsquotum en standaardinteractie
![](https://i.imgur.com/IciWidh.png)

```
Betere plaatjes plaatje 1 t.o.v. 2 bedrieglijk.
Quantum lengte kiezen is lastig.
Groot -> slechte respons      Klein -> veel switching.
Indien volledig quantum gebruikt wordt, krijgt 
het proces de volgende keer een groter quantum.
Aging: 
Een combinatie van dynamische  tijdquanta en dynamische prioriteit is in de CTSS toegepast:  Na ieder volledig gebruikte interval wordt het aantal quanta verdubbeld en de prioriteit verlaagd.
Grote programma's verdwijnen zo naar de laagste prior en de CPU heeft meer tijd voor de interactieve users. Stel de CPU tijd per proces is vooraf bekend is: 
Wat is dan het beste algoritme voor de scheduler 
```

## Round Robin en Processen met veel I/O
![](https://i.imgur.com/5Wfxe7N.png)

## Wachtrijschema bij een scheduler met virtual round robin
![](https://i.imgur.com/QHnjhLu.png)

```
Klein quotum korte responsetijd (grotere overhead)
Een groot quotum  nadelig voor I/O gebonden processen voordelig voor processorgebonden processen (rekentaken).
Om dit probleem op te lossen wordt een aanvullende wachtrij toegevoegd waarin processen staan die gereed zijn bij een IO-aanvraag. Deze rij krijgt voorrang boven de gewone wachtrij “gereed”..
De timeslice wordt dan bepaald door het algemene quatum min de tijd die besteed is aan uitvoering uit de hoofdwachtrij gereed.
```

## Round Robin en Processen met veel I/O
![](https://i.imgur.com/5zKuiYo.png)

## Round Robin scheduling
- Gevraagd:
- Gemiddelde turn around tijd tq en tq/ts
- time quanta = 1

![](https://i.imgur.com/NwzKu6u.png)

## Feedback
- Bij andere scheduling algoritmen worden kleien processen vaak eerst afgehandeld (verlaagd gemiddelde wachttijd)
- Kan ook bij Round Robin:
   - Staf processen die lang uitgevoegd worden door prioriteit te verlagen
	
![](https://i.imgur.com/bAzlVz5.png)
	
## Scheduling met feedback
![](https://i.imgur.com/1lOdAXW.png)

## Thread scheduling - Individuele scheduling
- Voordelen
  - Werklast verdeeld door CPU's
  - Gemeenschappelijke wachtrij waar alle threads in staan
- Nadelen
  - CPU-cache minder efficient gebruikt
  - Veel processwisselingen door afhankelijkheden tussen threads
  
![](https://i.imgur.com/2BOidNm.png)

## Thread scheduling - Groeps scheduling
- Deel/alle threads van een proces gelijktijdig op/van CPU
- Voordelen
  - Eenvoudige scheduling
  - Threads draaien parallel
    - Dus minder synchronisatieproblemen
- Nadelen
  - Minder efficient cpu-belsating
    
```
Groep: bijvoorbeeld alle threads van een proces
Dispatch groep threads in één keer

Efficientie: als er veel te doen is valt dat wel mee
simpele scheduling
oude techniek, voordat er threads waren
een proces – een processor
groep processen – groep processors
```

## Thread scheduling - Vaste toewijzing
- Wanneer een proces wordt ingeroosterd, dan krijgt elke thread een processor toegewezen gedurende de levensduur van het proces.
- Lijkt inefficient maar zinvol indien er veel rpcoessors zijn (20-100+)
  - Bijvoorbeeld in een CPU
  
## Energie efficienie
- Energieverbuik door de CPU:
- Power = Frequency * Voltage^2 * Capacitance + Leakage
  - Frequency * Voltage^2 = afhaneklijk van belasting
  - Capacitance + Leakage = gegeven door hardware
- Frequency : Huidige klokfrequentie
- Voltage : Huidige schakelvoltage
- Capacitance : Elektrische capaciteit van de CPU
- Leakage : Lekstroom door de CPU
<hr>
- Energieverbruik door CPU:
- Power = Frequency * Voltage^2 * Capacitance + Leakage

![](https://i.imgur.com/PmFz9Ro.png)

- CPU's kunnen in verschillende power-states verkeren:
- C-states
  - C0: Volledig actief
  - C1: (Half) CPU voert momenteel geen instructies uit
  - C2: (Stop-Clock) CPU is in 'lichte' slaaptoestand en heeft korte tijd nodig om volgende instructie te kunnen uitvoeren
  - C3: (Sleep) CPU staat 'uit'
  - C4 t/m C10: Extra sleep states vna bijvoorbeeld Intel Haswell
- P-states
  - P0: Maximale power en klokfrequentie
  - P1: Minder dan P0, voltage en klokfrequentie omlaag
  - Pn: Laagste voltage en klokfrequentie

![](https://i.imgur.com/qRhZkgu.png)

## Energie efficientie - Timer Coalescing
![](https://i.imgur.com/T8E90qf.png)
![](https://i.imgur.com/NbrhKQC.png)













