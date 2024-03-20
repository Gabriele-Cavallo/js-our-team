// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva

// BONUS 2:
// Organizzare i singoli membri in card/schede


// - Creo l'array di oggetti che deve contenere i dati dei membri del team
    // - ogni oggetto dovrà avere le chaivi (nome,ruolo,foto)
    const ourTeam = [
        {
            name: 'Wayne Barnett',
            role: 'Founder & CEO',
            image: 'wayne-barnett-founder-console.jpg'
        },
        {
            name: 'Angela Caroll',
            role: 'Chief Editor',
            image: 'angela-caroll-chief-editor.jpg'
        },
        {
            name: 'Walter Gordon',
            role: 'Office Manager',
            image: 'walter-gordon-office-manager.jpg'
        },
        {
            name: 'Angela Lopez',
            role: 'Social Media Manager',
            image: 'angela-lopez-social-media-manager.jpg'
        },
        {
            name: 'Scott Estrada',
            role: 'Develpoer',
            image: 'scott-estrada-developer.jpg'
        },
        {
            name: 'Barbara Ramos',
            role: 'Graphic Designer',
            image: 'barbara-ramos-graphic-designer.jpg'
        }
    ];
// - Stampo in console i dati inseriti di ogni oggetto di tutte le proprietà
// - Stampo nel DOM le informazioni degli oggetti
    // - Prendo l'elemento del DOM in cui inserire le stringhe
    // - Creo un template di quello che voglio inserire nel DOM
    // - Popolo l'elemento del DOM inserendo il template con le variabili contenenti le informazioni al posto dei placeholder