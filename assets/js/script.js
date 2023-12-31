const { createApp } = Vue;
const DateTime = luxon.DateTime;

createApp({
    data() {
        return {
            // Dati dei contatti e messaggi
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            activeContact: 0, // Contatto attualmente attivo
            myMessage: "", // Messaggio inserito dall'utente
            foundContacts: "", // Ricerca dell'utente
        }
    },
    methods: {
        // Milestone 1: Cambio di contatto attivo
        changeContact(clickedIndex) {
            this.activeContact = clickedIndex;
        },



        // Milestone 2: Aggiunta di un nuovo messaggio e risposta automatica
        newMessage() {
            // Aggiunta di un nuovo messaggio
            if (this.myMessage.length >= 1) {
                this.contacts[this.activeContact].messages.push({
                    date: this.generateDate(),
                    message: this.myMessage,
                    status: 'sent'
                });
                this.myMessage = "";
                this.automaticMessage(); // Invio della risposta automatica
            }
        },
        
        automaticMessage() {
            // Simulazione di una risposta automatica randomica
            const getRandomResponse = () => {
                const responses = [
                    "Va bene!",
                    "Sì, certo!",
                    "Non so cosa rispondere.",
                    "Puoi spiegare meglio?",
                    "Mi dispiace, non ho capito.",
                    "Grazie!",
                    "Cosa fai di bello?",
                ];
                const randomIndex = Math.floor(Math.random() * responses.length);
                return responses[randomIndex];
            };
            
            // Simulazione dell'invio della risposta
            setTimeout(() => {
                const randomResponse = getRandomResponse();
                this.contacts[this.activeContact].messages.push({
                    date: this.generateDate(),
                    message: randomResponse,
                    status: 'received'
                });
            }, 1000);
        },

        // Milestone 3: Ricerca dell'utente
        resetVisibility() {
            this.contacts.forEach((contact) => {
              contact.visible = true;
            });
          },

        // Generazione della data
        generateDate() {
            return DateTime.now().setLocale('it').toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS);
        },

        deleteMessage(index) {
            const message = this.contacts[this.activeContact].messages[index];
            this.contacts[this.activeContact].messages.splice(index, 1);
        }
    },

    computed: {
        filteredContacts() {
          // Utilizza un computed per calcolare i contatti filtrati
          return this.contacts.filter((contact) =>
            contact.name.toLowerCase().includes(this.foundContacts.toLowerCase())
          );
        },
    },


}).mount('#app');