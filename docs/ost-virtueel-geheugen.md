# Virtueel geheugen
- Veel besturingssystemen werken met virtueel geheugen
- Niet alle pages die bij een process horen hoeven altijd in het geheugen te staan
  - Tijdelijke opslag in wisselbestand (op harde schijf of in flash)
  - Pages die wel in geheugen staan heet Resident Set
  - Main memory fungeert als cache van het virtuele geheugen
  - Het OS beheert deze cache
- Voordelen
  - Er kunnen meer processen gelijktijdig geladen zijn
    - Kans is groter dat tenminste 1 proces Ready is => daardoor beter CPU gebruik
  - Een proces kan meer geheugen gebruiken dan er fysiek aanwezig is

## Localiteitsprincipe
- Een proces gebruikt op een bepaald moment slechts een deel van zijn pages
- Indien een page gebruikt wordt is de kans groot dat daar in de nabije toekomst opnieuw naar gerefereerd wordt

![](https://i.imgur.com/llOxiYg.png)

## Virtuele adressen
- Een virtueel adres is een offset in één van de pages van het proces
- In de page table wordt bijgehouden welke pages waar in het geheugen (frame) is geplaatst
  - P = Present (staat page in frame of in wisselbestand)
  - M = Modified (is er sindsdat de page geladen is iets aan gewijzigd)
  
![](https://i.imgur.com/GXH6H2s.png)

## Pages in frames
-Frames zijn universele opslagplekken volgens een vaste structuur en positie
-De pages worden in een frame ‘geplaatst’
-Frames zijn wissellijsten en kunnen steeds een andere page bevatten

## Vertaling virtueel naar fysiek adres - Pages in pageframes
![](https://i.imgur.com/JvGpsui.png)

## Page fault - Laden van page
![](https://i.imgur.com/mUaGPnF.png)

## Som - page table
- Veel 32bits CPUs werken met pages van 4KB groot
- De 32 bits geheugen ruimte is 2^32 = 4GB groot

- Hoe groot is dan de page table zelf?
<details>
  <summary>Antwoord</summary>
  
  - De offset in een 4KB pagina is 12 bits
  - Een frame is dus 20 bits
  - "+" control bit is 32 bits = 4 bytes
  - 4GB / 4KB = ruim 1 miljoen pages
  - Omvang page table is dus 4*1,048,576 = 4MB groot
</details>

## Som - page table 2
- Stel er is een 64 bits CPU met pages van 4KB groot
- Hoe groot is de page table dan?

<details>
  <summary>Antwoord</summary>
  
  - 2^64 / 4096 = 4,5 * 10^15 pages
  - Page table is dan 18000 TB groot! (wat maar 0,1% van de beschikbare virtuele geheugenruimte is)
  - Per proces!
  - Dit kan natuurlijk niet
  - Oplossing is een hiërarchische page table in *virtual memory*
</details>

## Hiërarchische page tables (32 bits)
![](https://i.imgur.com/yE42twm.png)

## Hiërarchische page tables (klein proces)
![](https://i.imgur.com/LBFU9Vy.png)

## Adresvertaling met hiërarchische page table
![](https://i.imgur.com/DYQocLa.png)

## Table Lookaside Buffer – Cache voor de page table
![](https://i.imgur.com/8jSvJ89.png)

## Virtueel geheugen beheer
- Het OS moet verschillende 'beslissingen' nemen
- Welke pages van een proces moeten bij het opstarten van dit proces in het geheugen geladen worden?
  - Geen: demand poging
  - Deel/alles: prepaging
- Als er een page fault optreed en er dus een page in een frame geladen meot worden, welke frame ga ik daarvoor gebruiken?
  - Welke page kan uit het werkgeheugen?
  - Sommige pages zijn gelocked (bijvoorbeeld geheugen van OS zelf)
  
## Pages vervangen
- Er zijn verschillende algoritmes om te besluiten welke page uit het geheugen kan:
  - Optimaal
    - Wekle page is het langst nog niet nodig
      - Alleen theoretisch want OS kan niet weten hoe processen verder verlopen

![](https://i.imgur.com/TULjxcv.png)
  - Langst al niet gebruikte page
    - Least Recently Used (LRU)
    - Bijna net zo goed als optimaal
    - Lastig te implementeren

![](https://i.imgur.com/NP9nRJQ.png)
  - First in First out
    - Page die al het langst in het geheugen staat eruit
    - Makkelijk te implementeren

![](https://i.imgur.com/SXOESJw.png)
  - Clock algoritme (meer hierover volgende paragraaf)
    - Mooite tussenweg

![](https://i.imgur.com/qofAqa9.png)
    
## Clock algoritme
- Stap 1:
  - Zoek page die niet recentelijk gebruikt is en niet gewijzigd
  - Is er 1? Gooi die er dan uit
- Geen gevonden ?
- Stap 2:
  - Zoek page die niet recentelijk gebruikt is maar wel gewijzigd
  - Reset daarbij recentelijk gebruikte bit
- Geen gevonden?
- Herhaal stap 1 en stap 2
  - Omdat tijdens stap 2 de recentelijk gebruikte bit is gereset wordt er zeker een kandidaat gevonden

``` js
while(!found_page)
  if(zoek page die niet recentelijk gebruikt is en niet gewijzigd) {
    remove(page);
    found_page = true;
  }
  else if (zoek page die niet recentelijk gebruikt is maar wel gewijzigd) {
    reset();
  }
```

![](https://i.imgur.com/l4h4hrZ.png)

## Geheugen segmentatie
- Het geheugen van een proces kan in verschillende segmenten opgedeeld worden:
  - Modulaire indeling:
    - Verschillende onderdelen/data van een programma in eigen segment
  - Functionele indeling:
    - Code-, datasegmenten
- Geheugensegmentatie kan worden gebruikt in combinatie met paging
- Geheugensegmentatie is op z'n retour. Binnen Intel x64 architectuur wordt er nog maar beperkt gebruik van gemaakt

## Protectie middels segmenten
![](https://i.imgur.com/zrjFpzh.png)

## Gesegmenteerd geheugen
![](https://i.imgur.com/jt2hUvW.png)

## Gesegmenteerd geheugen + paging
![](https://i.imgur.com/ADTMtYA.png)    




