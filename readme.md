L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

    html: creo una struttura header/main/footer. Nel main inserisco un div#grid 
    js: seleziono il div#grid e creo un ciclo for
        per 100 volte creo un elemento article, gli assegno le classi (create in style.css), e gli appendo (con append()) il numero dell'indice
        gli aggiungo un addEventListener che al click
            aggiunge la classe con il bg azzurro
            console.log(indice)
        appendo l'elemento appena creato al div#grid


Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

