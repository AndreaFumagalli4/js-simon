const tempo = document.getElementById('tempo');
const start = document.getElementById('start');
const pause = document.getElementById('pause');
const reset = document.getElementById('reset');



start.addEventListener( 'click', function() {

    let isCount = true;
    let time = 0;
    
    pause.addEventListener('click', function(){
    
    });
    
    reset.addEventListener('click', function(){
        
    });
});

/**
 *  1. - Quando l'utente clicca start parte il conteggio dei secondi: set interval - ogni secondo alla variabile time si somma 1;
 *  2. - Quando clicca su pause il conteggio si ferma: 
 *  2.1 - SE clicca ancora su start ==> il conteggio riparte; 
 *  2.2 - SE clicca su reset ==> il conteggio si azzera;
 * 3. - Se l'utente, dopo avere azzerato, clicca su start il conteggio riparte. 
 */



