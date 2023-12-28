<template>
  <div class="container mt-5">
    <div class="row d-flex justify-content-center">
      <div class="col-4" style="width: 420px">
        <img src="../assets/Image Assets/screenshot.png" alt="screenshot" />
      </div>
      <div class="col-4" style="width: 420px">
        <div class="card mx-auto" style="border-radius: 0px; width: 390px">
          <div class="card-body">
            <div class="mt-2 d-flex justify-content-center">
              <img
                src="../assets/instagram_logo.svg.png"
                alt="instagram typoghraph"
                class="card-img-top w-50"
              />
            </div>
            <div class="mt-5 d-flex justify-content-center align-items-center">
              <input
                type="text"
                v-model="username"
                placeholder="Username"
                class="form-control"
                style="
                  width: 83%;
                  height: 40px;
                  padding: 10px;
                  border-color: lightgray;
                  border-radius: 3px;
                  font-size: small;
                "
              />
            </div>
            <div class="mt-2 d-flex justify-content-center align-items-center">
              <input
                type="password"
                v-model="password"
                placeholder="Password"
                class="form-control"
                style="
                  width: 83%;
                  height: 40px;
                  padding: 10px;
                  border-color: lightgray;
                  border-radius: 3px;
                  font-size: small;
                "
              />
            </div>
            <div class="mt-3 d-flex justify-content-center">
              <button
                class="btn text-white"
                style="
                  background-color: rgb(87, 184, 223);
                  font-weight: bold;
                  width: 83%;
                  height: 35px;
                  border-radius: 9px;
                "
                @click.prevent="login"
              >
                Login
              </button>
            </div>
            <div
              class="mt-3 d-flex justify-content-center"
              style="width: 83%; margin: auto"
            >
              <hr class="flex-grow-1" />
              <p class="mx-2">ATAU</p>
              <hr class="flex-grow-1" />
            </div>
            <div class="mt-3 d-flex justify-content-center">
              <a href="#" style="text-decoration: none"
                >Masuk Dengan Facebook</a
              >
            </div>
            <div class="mt-3 mb-2 d-flex justify-content-center">
              <a
                href="#"
                style="text-decoration: none; color: black; font-size: small"
                >Lupa kata sandi?</a
              >
            </div>
          </div>
        </div>
        <div
          class="card mx-auto mt-2 d-flex text-center"
          style="border-radius: 0px; width: 390px"
        >
          <p class="mt-3">
            Tidak punya akun?
            <a href="/register" style="text-decoration: none; font-weight: bold"
              >Buat akun</a
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        if (!this.username || !this.password) {
          this.$swal({
            icon: "error",
            title: "Please fill all fields...",
            confirmButtonColor: '#FF0000',
          });
          // return;
        }
        const res = await axios.post("auth/login", {
          username: this.username,
          password: this.password,
        });
        if (res && res.status == 200) {
          const userData = JSON.stringify(res.data.user);
          localStorage.setItem("user", userData);
          localStorage.setItem("token", res.data.token);
          this.$router.push("/");
        }
      } catch (err) {
        this.$swal({
            icon: "error",
            title: 'Oops..',
            text: err.response.data.message,
            confirmButtonColor: '#FF0000',
        });
      }
    },
  },
};
</script>
