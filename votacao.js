Vue.createApp({
    data() {
        return {
            speakers: typeof speakers !== 'undefined' ? speakers : [],
            voto: null,
            opinNome: '',
            opinTexto: '',
            opinioes: [],
        };
    },
    methods: {
        votar(nome) {
            this.voto = nome;
        },
        submeterOpiniao() {
            if (!this.opinTexto.trim()) return;
            this.opinioes.push({
                nome: this.opinNome.trim(),
                texto: this.opinTexto.trim(),
            });
            this.opinNome  = '';
            this.opinTexto = '';
        }
    }
}).mount('#interacao');