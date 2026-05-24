const JEEC_DAYS = [
    { year: 2026, month: 5, day: 27 },
    { year: 2026, month: 5, day: 28 },
    { year: 2026, month: 5, day: 29 },
    { year: 2026, month: 5, day: 30 },
    { year: 2026, month: 5, day: 31 },
];

const MONTH_NAMES_PT = [
    'Janeiro','Fevereiro','Março','Abril','Maio','Junho', 'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'
];

Vue.createApp({
    data() {
        const today = new Date();
        return {
            mostrarCalendario: false,
            viewYear:      today.getFullYear(),
            viewMonth:     today.getMonth() + 1,
            selectedDay:   null,
            selectedMonth: null,
            selectedYear:  null,
            qty:           1,
            confirmationMsg: '',
        };
    },
    computed: {
        monthLabel() {
            return `${MONTH_NAMES_PT[this.viewMonth - 1]} ${this.viewYear}`;
        },
        daysInMonth() {
            return new Date(this.viewYear, this.viewMonth, 0).getDate();
        },
        leadingBlanks() {
            const jsDay = new Date(this.viewYear, this.viewMonth - 1, 1).getDay();
            return (jsDay + 6) % 7;
        },
        selectedJeecDate() {
            if (
                this.selectedDay &&
                this.selectedMonth === this.viewMonth &&
                this.selectedYear  === this.viewYear  &&
                this.isJeecDay(this.selectedDay)
            ) {
                return `${String(this.selectedDay).padStart(2,'0')}/${String(this.selectedMonth).padStart(2,'0')}/${this.selectedYear}`;
            }
            return null;
        }
    },
    methods: {
        prevMonth() {
            if (this.viewMonth === 1) { this.viewMonth = 12; this.viewYear--; }
            else this.viewMonth--;
        },
        nextMonth() {
            if (this.viewMonth === 12) { this.viewMonth = 1; this.viewYear++; }
            else this.viewMonth++;
        },
        isPast(day) {
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const d = new Date(this.viewYear, this.viewMonth - 1, day);
            return d < today;
        },
        isJeecDay(day) {
            return JEEC_DAYS.some(j =>
                j.year  === this.viewYear  &&
                j.month === this.viewMonth &&
                j.day   === day
            );
        },
        selectDay(day) {
            if (this.isPast(day)) return;
            this.confirmationMsg = '';
            this.selectedDay   = day;
            this.selectedMonth = this.viewMonth;
            this.selectedYear  = this.viewYear;
        },
        reservar() {
            if (!this.qty || this.qty < 1) return;
            this.confirmationMsg = `Reserva confirmada: ${this.qty} bilhete(s) para ${this.selectedJeecDate}.`;
            this.selectedDay = null;
        }
    }
}).mount('#bilhetes');