new Vue({
  el: "#app",
  data: {
    tugasBaru: "",
    daftarTugas: [
      { nama: "Belajar Vue", selesai: false },
      { nama: "Bikin kopi", selesai: false },
    ],
  },
  methods: {
    tambahTugas() {
      if (this.tugasBaru.trim() !== "") {
        this.daftarTugas.push({
          nama: this.tugasBaru,
          selesai: false,
        });
        this.tugasBaru = "";
        this.simpanKeLocalStorage();
      }
    },
    hapusTugas(index) {
      this.daftarTugas.splice(index, 1);
      this.simpanKeLocalStorage();
    },
    simpanKeLocalStorage() {
      localStorage.setItem("daftarTugas", JSON.stringify(this.daftarTugas));
    },
  },
  mounted() {
    const data = localStorage.getItem("daftarTugas");
    if (data) {
      this.daftarTugas = JSON.parse(data);
    }
  },
  watch: {
    daftarTugas: {
      handler() {
        this.simpanKeLocalStorage();
      },
      deep: true,
    },
  },
});
