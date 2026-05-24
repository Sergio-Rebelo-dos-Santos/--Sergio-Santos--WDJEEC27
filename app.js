const speakers= [
            {name: 'Sr Rogerio', desc: 'Sou o presidente desta coisa toda', img:'assets/rogerio.jpg'},
            {name: 'Charles Bispo', desc: 'Eu sou eu, se nao concordas estás errado', img:'assets/bispo.png'},
            {name: 'Pato Da JEEC', desc: 'Quack!', img:'assets/pato.jpg'}
        ];


const app = Vue.createApp({
    data() {
        return {
            speakers,
            slideAtual: 0,
        };
    },
    methods: {
        prevSlide() {
            this.slideAtual = (this.slideAtual - 1 + this.speakers.length) % this.speakers.length;
        },
        nextSlide() {
            this.slideAtual = (this.slideAtual + 1) % this.speakers.length;
        },
    }
});

app.mount('#app')