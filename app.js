new Vue({
  el: "#app",
  data: {
    tugasBaru: "",
    daftarTugas: [],
  },
  methods: {
    tambahTugas() {
      if (this.tugasBaru.trim() !== "") {
        this.daftarTugas.push(this.tugasBaru);
        this.tugasBaru = "";
      }
    },
    hapusTugas(index) {
      this.daftarTugas.splice(index, 1);
    },
  },
});
