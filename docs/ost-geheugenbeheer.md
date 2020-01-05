# Geheugenbeheer
- Processen bevinden zich in het geheugen
  - Programma code
  - Stack
  - Heap
- Besturingssysteem is verantwoordelijk voor
  - Laden van het programma in een stuk geheugen en creëren geheugenruimte (stack / heap)
  - Toekennen van extra geheugen op verzoek van proces
  - Beheren van beschikbaar fysiek geheugen dat gedeeld moet worden door processen

![](https://i.imgur.com/7UY2MfY.png)

## Vereisten voor geheugenbeheer
- Relocatie
   - Plek in fysiek geheugen kan veranderen (bijvoorbeeld door swappen)
- Bescherming
   - Niet lezen/schrijven in geheugen van ander proces
- Delen
   - Shared memory: Nodig voor synchronisatie en communicatie
- Logische indeling
   - Ondersteuning voor (dynamische) modules zoals dll’s
- Fysieke indeling
   - Welk proces heeft (momenteel) welk deel van het fysieke geheugen tot zijn beschikking
   
## Geheugen *statisch* indelen in partities
- Geheugen kan ingedeeld worden
   - In partities met vaste grote
   - In partities met verschillende groottes
- Groot nadeel van vaste grote:
   - Kleine programma’s verspillen geheugen
   - Dit is interne fragmentatie
   
![](https://i.imgur.com/1VSzA3h.png)

## Eén wachtrij (fifo)
![](https://i.imgur.com/DJtoX3r.png)
![](https://i.imgur.com/bvkH6zJ.png)

- Welke jobs komen in welke partitie terecht?
<details>
  <summary>Antwoord</summary>
    <img src="https://i.imgur.com/SQLYwEr.png" alt="">
    <img src="https://i.imgur.com/5uNzaJb.png alt="">
</details>

- Hoe groot is de interne fragmentatie?
<details>
  <summary>Antwoord</summary>
    <img src="https://i.imgur.com/YP2rZhG.png" alt="">
</details>

## Meerdere wachtrijen (fifo)
![](https://i.imgur.com/MLkablp.png)
![](https://i.imgur.com/L70DEJ8.png)

- Welke jobs komen in welke partitie terecht?
<details>
  <summary>Antwoord</summary>
    <img src="https://i.imgur.com/UlgGGT9.png" alt="">
</details>

- Hoe groot is de interne fragmentatie?
<details>
  <summary>Antwoord</summary>
    <img src="https://i.imgur.com/2blHfpb.png" alt="">
</details>

## Som
- Stel de geheugengrootte is: 32MB
- 10 MB wordt voor het OS gebruikt
- De overige 22 MB wordt verdeeld in de volgende partities: 10, 4, 4, 4 MB
- De volgende Jobs: 7, 3, 6, 6 MB moeten uitgevoerd worden

![](https://i.imgur.com/3j8kZ5j.png)

- Wat is de interne, de externe en totale fragmentatie?
<details>
<summary>Antwoord</summary>
<img src="https://i.imgur.com/0dHC92O.png" alt="">
Uitleg plaatje:
Job 1 (7MB) gaat in de 2e 10MB partitie
Job 2 (3MB) gaat in de 1e 4MB partitie
De andere jobs kunnen nergens in
(In het plaatje staat 4-1 = 1MB dat moet 4-3 = 1MB zijn)
- Interne fragmentatie = 3 + 1 = 4 MB
- Externe fragmentatie = 4 + 4 = 8 MB
- Totale fragmenetatie = 4 + 8 = 12 MB
- 2 jobs moeten wachten terwijl alle jobs 22 MB nodig hebben er ok ook 22 MB beschikbaar is!
</details>

## Externe fragmentatie bij *dynamische* allocatie
![](https://i.imgur.com/WQAshYH.png)

## Uitswappen van processen
- Er kunnen zoveel processen bestaan dat er een gebrek aan werkgeheugen onstaat
- Swap deze processen naar disk om meer geheugen vrij te krijgen
- De state wordt *suspend* (uitgesteld) state wanneer het process geswapt is naar disk
- Tween nieuwe states
  - Blocked, suspend
  - Ready, suspend
  
Swapping is het verplaatsen van een proces van het hoofdgeheugen naar schijf (swapspace) en andersom.
Swapping is een I/O bewerking en daarmee lopen we het risico dat het probleem niet wordt opgelost maar verergerd.

Suspend = uitgesteld

## A seven-state process model
![](https://i.imgur.com/WvoeaQV.png)

## Externe fragmentatie by *dynamische* allocatie
![](https://i.imgur.com/HKgyZom.png)

## Plaatsingsalgoritmes
- First fit
  - Snel een block gevonden
- Best fit
  - Minimale interne fragmentatie
- Next fit
  - Pogign to verdelen van externe fragmentatie
- Buddy system

![](https://i.imgur.com/PjCHpMy.png)

## Buddy system
In het figuur zie je een voorbeeld waar een 1MB initial blok wordt gebruikt. Het eerste request (100K) waar je een blok van 128K
nodig moet hebben. Dus om daar te komen moet je 1e van de 2 512K blokken splitsen, je krijgt dan 256K - 256K - 512K blokken.
Maar omdat een 128K blok groter is dan de 100k blok splits je de 256K in 2 128K blokken waardoor je wat er in het plaatje te zien
is krijgt. (request 100k)

![](https://i.imgur.com/BjB70Wd.png)

## Hardware ondersteuning voor relocation
![](https://i.imgur.com/WzRopIe.png)

Omdat geheugenblokken (bijvoorbeeld na uit- en inswappen) elders in het geheugen komen is het nodig om hardwareondersteuning te hebben die het logische procesgeheugen vertaald naar het fysieke adres.

## Geheugenbeheer door paritionering
- Zowel partitioneringen met vaste en verschillende groottes is behoorlijk inefficiënt
  - Fragmentatie
  - Geheugenbehoefte vooraf bekend
  - Moeilijk resizen

## Paging (beter)
- Met wat extra hardware ondersteuning in de CPU kan het een stuk efficiënter
- CPU's worden uitgebreid met MMU
  - Memory Management Unit
Dit biedt mogelijkheid om geheugen veel fijnmaziger te partitioneren
  - Deze techniek heet paging en de partitie een page
  - Omvang van een page is bijvoorbeeld 4KB
- Elke process bestaat uit een x aantal pages

## Applicatie pages in geheugen laden
![](https://i.imgur.com/184YaYC.png)https://i.imgur.com/FJLGPNC.png

## Applicatie pages in geheugen laden
![](https://i.imgur.com/FJLGPNC.png)

## Van logisch naar fysiek adres
![](https://i.imgur.com/wyUVsgs.png)

## Som
- Het interne geheugen is 32MB groot
- De grootte van een page is 512 bytes
- Het OS neemt zelf 8MB in beslag

- Hoeveel pagina's kan men in het interne geheugen plaatsen?
<details>
  <summary>Antwoord</summary>
- 32MB - 8MB = 23MB
- 24MB = 24000 kb / 0,5 kb (pagina) = 48000 pagina's
</details>

- Uit hoeveel bits bestaat de offset?
<details>
  <summary>Antwoord</summary>
- 512 bytes per pagina = 9 bits off
</details>
