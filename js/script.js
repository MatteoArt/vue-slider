
const app = Vue.createApp({
    data() {
        return {
            slides: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city.',
                }, {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ],
            activeImageIndex: 0,
            classes: "d-none",
            visible: "d-block",
            active: "active",
            intervalTimerId: null //conterrà l'id del timer che è stato attivato, di default è null
        }
    },
    methods: {
        //funzioni che controllano se aggiungere o meno la classe visible e active
        show(index) {
            if (index === this.activeImageIndex) {
                return this.visible;
            } else {
                return '';
            }
        },
        showAct(index) {
            if (index === this.activeImageIndex) {
                return this.active;
            } else {
                return '';
            }
        },

        prevClick() {
            
            const limit = this.slides.length - 1;

            if (this.activeImageIndex === 0) {
                this.activeImageIndex = limit;
            } else {
                this.activeImageIndex = this.activeImageIndex - 1;
            }
        },
        nextClick() {
            const limit = this.slides.length - 1;
            if (this.activeImageIndex === limit) {
                this.activeImageIndex = 0;
            } else {
                this.activeImageIndex = this.activeImageIndex + 1;
            }
            
        },
        onThumb(index) {
            this.activeImageIndex = index;
        },
        intervalNextSlider() {
            //controllo di sicurezza per vedere se ci sta un timer già attivo
            //se si lo fermo
            if (this.intervalTimerId) {
                this.stopInterval();
            }

            this.intervalTimerId = setInterval(() => {
                const limit = this.slides.length - 1;
                if (this.activeImageIndex === limit) {
                    this.activeImageIndex = 0;
                } else {
                    this.activeImageIndex = this.activeImageIndex + 1;
                }
            },3000);
        },
        stopInterval() {
            clearInterval(this.intervalTimerId);
        }
    },
    mounted() {
        this.intervalNextSlider();
    }
});

app.mount("#app");