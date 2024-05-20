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


Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
Attenzione: **nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.

        creo un numero randomico fra 1 e il numero massimo di bombe a cui ho accesso in quella difficoltà
        inizializzo un array (vuoto) che contiene i numeri già estratti come bomba
        
        FINO A CHE IL NUMERO DI ELEMENTI NELL'ARRAY è MINORE DI 16:
            se l'array contiene il numero generato, continua a generarne altri
            quando trovi un numero che non è già presente nell'array, pushalo all'interno di esso

