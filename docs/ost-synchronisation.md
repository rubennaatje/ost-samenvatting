# Synchronisation

## Semaphore
- Een semaphore is een ‘teller’ die bepaalt hoeveel threads/processen toegang mogen hebben tot een resource of kritieke sectie
- Bij initialisatie wordt ingesteld hoeveel threads toegang mogen hebben. (In dit geval 5)
- Een thread vraagt toegang middels een wait() aanroep
  - De semaphore verlaagd zichzelf. 
  - Waarde nu >= 0 => doe niets
  - Waarde nu <0 => blokkeer aanroepende thread en plaats deze in een wachtrij 
- Een thread geeft semaphore weer vrij middels een signal() aanroep
  - De semaphore verhoogd zichzelf
  - Waarde nu <=0 deblokkeer een thread/proces uit de wachtrij
  
![](https://i.imgur.com/k6tJKOF.png)

## Binaire Semaphore
- Een semaphore die geïnitialiseerd is op ‘1’
- Er kan dus maar 1 thread/proces gelijktijdig de semaphore ‘pakken’
- Een vorm van mutual exclusion

![](https://i.imgur.com/YRDknQC.png)

## Multithreaded kruispunt
![](https://i.imgur.com/2Lw1E4e.png)

## De kapperszaak
![](https://i.imgur.com/8hBX2vU.png)
https://streamable.com/0e1r4

## Monitors
- Een programmeertaal constructie om synchronisation te realiseren
  - Mogelijkheid om op een object een ‘lock’ te krijgen
  - Maar 1 thread kan gelijktijdig gebruik maken van een object en haar methodes
  - Veel gebruikt in OO-talen	
- Groot voordeel:
  - Juiste implementatie van synchronisatie is verantwoordelijkheid van monitor object en niet van de aanroeper !
  - Daardoor makkelijker in gebruik dan semaphores en minder foutgevoelig
- Aanroepen:
  - Monitor.Enter(object) and Monitor.Exit(object)
  - Monitor.Wait(object)
  - Monitor.Pulse(object) (soms Monitor.Signal() )
  - Monitor.PulseAll(object)
- Bij PulseAll worden alle threads die aan het wachten zijn op toegang tot het object vrijgegeven
  - Van belang om na Wait() aanroep gewenste conditie opnieuw te controlleren

![](https://i.imgur.com/uZ1R7Mw.png)

## Messaging
- Combinatie van proces synchronisatie en communicatie
- Niet afhankelijk van ‘shared memory’ model. 
  - Processen kunnen ook op verschillende machines draaien (Gedistribueerde systemen)
- Aanroepen:
  - send (destination, message)
  - receive(source, message)
- Aanroep kan blocking of non-blocking zijn
  - Meestal Send => non-blocking, receive => blocking
- Voorbeeld van messaging systeem is Windows
- Aanroepen:
  - send (destination, message)
  - receive(source, message)
- Wat zijn destination en source ?
  - Directe adressen (rechtstreeks communiceren met een thread die je kent / zelf aangemaakt hebt)
  - Indirecte adressen (communiceren met andere threads via ‘mailboxen’
  
![](https://i.imgur.com/ty2kJCY.png)

## Lezers en schrijversprobleem
- Vaak wordt een ‘resource’ door verschillende threads gebruikt (gelezen) maar slechts door enkele threads beschreven. 
- Voor synchronisatie moeten de volgende condities bewaakt worden
  - Iedereen mag gelijktijdig de waarde lezen
  - Slechts 1 schrijver mag op een bepaald moment schrijftoegang hebben
  - Tijdens het schrijven hebben lezers geen toegang
- Dus:
  - Geen mutual exclusion tussen lezers
  - Wel mutual exclusion tussen schrijvers onderling en tussen schrijvers en lezers
- Reden:
  - Standaard mutual exclusion is soms inefficient wanneer de gedeelde data vaak gelezen moet worden
  
![](https://i.imgur.com/rG16aOY.png)
