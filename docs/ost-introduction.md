# OS introduction
![](https://i.imgur.com/NDcm2pf.png)


## Computerarchitectuur

*Grofweg bestaan computersystemen uit 3 hoofdonderdelen*
- CPU
- Geheugen
- Input-Output apparaten

![](https://i.imgur.com/5hqEAxq.png)

- CPU heeft 1 of meerdere execution units
- CPU bevat diverse registers
    - *Bijhouden welke instructies*
    - *Communicatie met I/O*
- In Geheugen staat
    - *Programma code*
    - *Data*
- I/O Module
    - *Hebben eigen (hardware) buffers*

![](https://i.imgur.com/uDggSYi.png)

## CPU Execution Unit
De CPI leest instuctuies uit het geheugen en voert deze uit.

![](https://i.imgur.com/45ulcXt.png)
Na elke instructie wordt gecheckt of er een interrupt is geweest.
![](https://i.imgur.com/Qm4emHQ.png)

## Cachegeheugen
![](https://i.imgur.com/rOCvqE1.png)
*Relatief kleine cache, bevat 60% van data*
![](https://i.imgur.com/3XYPHVD.png)

## Geheugenhiërarchie
![](https://i.imgur.com/H7XyS1d.png)

## Moore’s Law
Sinds 1965 gold de volgende wetmatigheid:
- Computersystemen verdubbelen hun snelheid grofweg elke 2 jaar.

![](https://i.imgur.com/SAkt3A0.png)

Deze wetmatigheid heeft veel invloed gehad op de manier waarop software zich ontwikkeld heeft:
- Er kwamen nieuwe high-level talen (zoals Java en C#) die performance inruilen voor gebruiksgemak en portabiliteit.
- Er wordt steeds meer gebruik gemaakt van frameworks om de complexiteit van software op te vangen ten koste van overhead.
- Veel software die uitkwam was te langzaam voor de hardware van dat moment

Ook van invloed op ‘mindset’ van softwareontwikkelaars
> “Het is niet erg dat mijn software (te) langzaam is. Volgend jaar is dit (met nieuwe hardware) vanzelf verholpen.”


## Moore’s Law is dead ?
Single-Threaded Integer Perfomance         |  Single-Threaded Floating-Point Performance
:-------------------------:|:-------------------------:
![](https://i.imgur.com/RgCYUEm.png)  |  ![](https://i.imgur.com/ZxrJOEM.png)
## Moore’s law is alive !
![](https://i.imgur.com/yCgef5Z.png)
![](https://i.imgur.com/ifl2BXt.png)
## Amdahl’s Law
![](https://i.imgur.com/wpWvITe.png)
## *“The free lunch is over”*
De mythe dat het probleem van langzame software automatisch wordt verholpen door snellere hardware in de toekomst is voorbij.

We zullen in softwareontwikkeling ons moeten richten op het vergroten van parallelisme (multi-threading) indien we meer performance willen.

![](https://i.imgur.com/1R91c5c.png)