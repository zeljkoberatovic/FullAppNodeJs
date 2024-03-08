/**
         * --- [1] DEFINISANJE FORMATA DATUMA I VREMENA ---
         * 
         * Argumenti koji mogu biti poslati:
         * date   - Datum
         * format - Format datuma i/ili vremena koji treba vratiti
         * 
         * Funkcija vraca formatirani datum kao string
         * @returns {string}
         * 
         * Poziva se:
         * dateTime(date) ili dateTime(date, format)
         * 
         * Primjeri:
         * dateTime("2024-08-03");       Rezultat: petak, 08. 03. 2024.
         * dateTime("2024-08-03", "db"); Rezultat: 2024-03-08 00:49:00
         * 
         */ 
function dateTime(date = false, format = false) {
    // Promjenljiva koja oznacava datum koji treba vratiti
    let new_date;
    // - Jezik, inicijalna vrijednost srpski-latinica-CG
    let lang = "sr-Latn-ME";
    if(date) { date = new Date(date); }
    else { date = new Date(); }

    // - Format za MySQL bazu podataka
    if(format == "db") {
        format = { year: 'numeric', month: '2-digit', day: '2-digit', 
                   hour: '2-digit', minute: '2-digit', second: '2-digit' };
        lang = "sv-SE";
        new_date = date.toLocaleDateString(lang, format);
        return new_date; 
   
    } else { format = { weekday: 'long', day: '2-digit', month: '2-digit', year: 'numeric' }; }
    
    return date.toLocaleDateString(lang, format);
}