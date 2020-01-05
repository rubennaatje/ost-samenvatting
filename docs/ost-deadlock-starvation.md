# Deadlock & Starvation

## It's an imperfect world
- Deadlock en Starvation zijn bijwerkingen van multithreading
- Niet 100% te voorkomen of te genezen

## Voorbeeld deadlock
![](https://i.imgur.com/7l14zYU.png)

## Oorzaak
![](https://i.imgur.com/4DOC1jc.png)
![](https://i.imgur.com/3Hdr7ga.png)

![](https://i.imgur.com/atf7KDY.png)
- Er is 200k geheugen beschikbaar
- P1 en P2 claimen beiden een deel van de resources die ze nodig hebben
- Volgende claim is niet meer mogelijk => Deadlock !!

## Deadlock - condities
- Er zijn 3 condities die moeten gelden voordat deadlock kan ontstaan:
- 1. Mutual Exclusion
  - Slechts 1 proces mag gelijktijdig een resource gebruiken
- 2. Hold and Wait
  - Processen kunnen geblokkeerd raken terwijl ze al resources hebben geclaimd
- 3. Geen resources preemption
  - Resources die toegekend zijn kunnen niet afgepakt worden

- Er ontstaat nu deadlock als:
  - Alle processen op elkaar wachten in een gesloten lus

## Resource graphs
- Je kunt middels Resource Graphs grafisch weergeven welke processen:
  - Resources hebben geclaimd
  - Toegang tot resources willen krijgen

![](https://i.imgur.com/PoAa1Ze.png)
![](https://i.imgur.com/S9Vy5ZL.png)

## Deadlocks - oplossingen
- Struisvogelpolitiek
  - Accepteer dat processen mogelijk vastlopen en door de gebruiker moeten worden ‘afgeschoten’
- Detecteren en oplossen
  - OS scant voor deadlocks en ‘lost’ deze op
- Preventie – design time
- Preventie – run time
  - Het bankiersalgoritme

## Deadlocks - detecteren en oplossen
- Detectie: vindt lus in resource graph
- Deadlock kan doorbroken worden door:
  - Één of meerdere processen in deadlock te beëindigen
  - Resources te preempten
- Uitdaging:
  - Bij welk proces moet het OS inbreken om de deadlock op te lossen
    - Laagste prioriteit ??
    - Proces dat geen open bestanden heeft ??
- Groot nadeel:
  - Leidt tot ongedefinieerde toestanden
  - Proces heeft een deel van de taak volbracht en wellicht bestanden of databases gedeeltelijk aangepast

## Deadlocks - preventie design-time
- Neem 1 van de 3 voorwaarden voor deadlock weg:
  - Geen mutual exclusion òf
  - Geen hold and wait òf
  - Resources zijn preemptable
- Multithreading zonder mutual exclusion is eigenlijk niet mogelijk vanwege data consistentie
- Hold en wait is te voorkomen door:
  - Eerst alle resources claimen die voor de executie nodig is.
  - Indien alle resources beschikbaar zijn dan starten
  - Anders resources vrijgeven
- Vaak is echter niet van tevoren bekend welke resources voor executie nodig zijn

![](https://i.imgur.com/3Xjajaa.png)

## Deadlocks - preventie design-time
- Alle resource preemptable
  - Werkt alleen goed voor resources waarvan de status makkelijk opgeslagen en hersteld kan worden
    - Processor
    - Geheugen
    
## Deadlocks - preventie run-time
![](https://i.imgur.com/ukj5BUT.png)

## Starvation (probleem preventie run-time)
![](https://i.imgur.com/QUKyuwb.png)
