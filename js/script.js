var arrayCognomi = ['Anagni','Cucuzza','Brignani','gelato','Pierattini','Ghibbi'];


// Inserisci nuovo cognome
var newCognome = prompt('Inserisci nuovo cognome nell\'elenco');
arrayCognomi.push(newCognome);

// TODO: Bloccare input errati (numeri o stringhe con lunghezza inferiore a 3)

// Scrivi lista originale cognomi a video
document.getElementsByClassName('lista-cognomi-originale')[0].innerHTML = '';
for(var i=0; i<arrayCognomi.length; i++){
 document.getElementsByClassName('lista-cognomi-originale')[0].innerHTML += '<li>' + arrayCognomi[i] + '</li>\n';
}

// Trasforma tutti i primi caratteri in maiuscolo e poi ordina array
newCognome = newCognome.charAt(0).toUpperCase() + newCognome.slice(1);
for (var i=0; i<arrayCognomi.length; i++){
  arrayCognomi[i] = arrayCognomi[i].charAt(0).toUpperCase() + arrayCognomi[i].slice(1);
}
// Ordina array da A a Z
arrayCognomi.sort();


// Scrivi a video lista cognomi ordinata
document.getElementsByClassName('lista-cognomi-ordinata')[0].innerHTML = '';
for(var i=0; i<arrayCognomi.length; i++){
 document.getElementsByClassName('lista-cognomi-ordinata')[0].innerHTML += '<li>' + (i+1) +' ) ' + arrayCognomi[i] + '</li>\n';
}

// Scrivi a video indice cognome inserito
var posNewCognome =  arrayCognomi.indexOf(newCognome) + 1;
document.getElementById('cognome-inserito').innerText = 'Il cognome ' + newCognome + ' è stato inserito in posizione' + posNewCognome;
