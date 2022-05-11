/*
  Gatti in fila
  Scrivi un programma che dato:
    a) Un numero totale di gatti
    b) Il numero dei gatti presenti in ogni fila
  Restituisca in output:
    - Il numero di file risultanti
    - Nel caso l'ultima fila risulti incompleta indicare il numero di gatti mancanti per completarla (quanti gatti mancano per arrivare a b?)

  Esempio:
    Input: numero di gatti = 44, gatti per fila = 6
    Output: numero di file = 8, gatti mancanti = 4

  Consigli:
  Per l'arrotondamento ti consiglio di non usare Math.round (arrotonda all'intero superiore solo da .5 in su),
  utilizza Math.ceil (arrotonda sempre all'intero superiore).

  http://www.imparareaprogrammare.it
*/

/*REGOLA D'ORO: Dobbiamo portare il problema nel mondo reale. Inserirlo in una situazione che nella vita sei in grado di risolvere, prendendo anche carta e penna.
Solo risolvendo il problema prima su carta, senza codice o nella programmazione. soltanto se sappiamo risolvere il problema prima possiamo applicarlo anche nella programmazione

4 PASSAGGI FONDAMENTALI:
1- Definire il problema ( capire quale input stiamo ricevendo, quali output Dobbiamo restituire e quindi tutti i calcoli che vanno fatti per arrivare a quel deteriminato output)
2- Dividere il problema in sottoproblemi ( piccole azioni da far svolgere)
3-Risolvilo con carta e penna ( pseudocodice ).
*/

//Qui definiamo i nostri input
var cats = 44;
var inLine = 6;

//Qui definiamo il nostro output
/*Nello pseudocodice abbiamo scritto una sorta di funzione chiamata arrotonda e quindi dobbiamo andare ad individuare questa funzione
anche all'interno di javascript*/
var numLines = Math.ceil(cats/inLine);
//Esattamente in linea con le regole di matematica verranno eseguite prima le moltiplicazioni e divisioni e poi addizione e sottrazione
//Le parentesi sono anche evitabili, ma è per capire il concetto che ho scritto nella riga 38
var missingCat = (numLines*inLine)-cats;

console.log('$(cats) gatti in fila per $(inLine) si unirono compatti in $(numLines) file. Nell\'ultima fila rimasero $(missingCat) posti gatto disponibile');
