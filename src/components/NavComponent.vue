<template>
  <!-- Sidebar -->
  <div id="my-sidebar" class="border-right" style="width: 280px; position: fixed; height: 100%; border-right: 1px solid lightgray;">
    <div class="sidebar-heading">
      <img
        src="../assets/instagram_logo.svg.png"
        alt="instragam typogrhapu"
        style="width: 40%; margin: 30px;"
      />
    </div>
    <div class="list-group list-group-flush">
      <a
        href="/feed"
        class=" list-group-item-action"
        style="padding: 30px; text-decoration: none;"
        ><img src="../assets/icons/home.svg" alt="" /> Beranda</a
      >
      <a
        href="/about"
        class="list-group-item-action"
        style="padding: 30px; text-decoration: none;"
        ><img src="../assets/icons/search.svg" alt="" /> Cari</a
      >
      <a
        href="/contact"
        class="list-group-item-action"
        style="padding: 30px; text-decoration: none;"
        ><img src="../assets/icons/share.svg" alt="" /> Pesan</a
      >
      <a
        href="/contact"
        class="list-group-item-action"
        style="padding: 30px; text-decoration: none;"
        ><img src="../assets/icons/heart.svg" alt="" /> Notifikasi</a
      >
      <a
        href="/contact"
        class="list-group-item-action"
        style="padding: 30px; text-decoration: none;"
        ><img src="../assets/icons/add.svg" alt="" /> Buat</a
      >
      <a
        href="#"
        v-on:click.prevent="logout"
        class="list-group-item-action"
        style="padding: 30px; text-decoration: none;"
        ><img src="../assets/icons/logout.png" width="22px" alt="" /> Logout</a
      >
    </div>
  </div>
</template>

<script>
import axios from 'axios';
// function toggleSidebar() {
//   const sidebar = document.getElementById("my-sidebar");
//   sidebar.classList.toggle("active");
// }
export default {
  data() {
    return {
      token : localStorage.getItem("token")
    }
  },
  methods: {
    async logout(){
      this.$swal({
        icon: "warning",
        title: "Alert",
        text: "Are you sure want to logout?",
        showCancelButton: true,
      }).then((result)=>{
        if(result.isConfirmed) {
          const headers = {
            "Content-Type" : "application/json",
            Authorization : `Bearer ${this.token}`
          };

          axios.post("auth/logout", {}, {headers}).then(()=>{
            localStorage.removeItem("token");
            this.$router.push('/login');
          })
        }
      })
    }
  },
}
</script>
