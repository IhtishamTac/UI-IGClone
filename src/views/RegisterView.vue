<template>
  <div class="col-3 mx-auto mt-5">
    <div class="card">
      <div class="card-body">
        <div class="d-flex justify-content-center">
          <img
            src="../assets/Instagram_logo.svg.png"
            alt="iglogo"
            class="card-img-top"
            style="width: 200px"
          />
        </div>
        <div class="container">
          <div class="mt-2">
            <p style="color: gray; text-align: center; font-weight: 600">
              Buat akun untuk melihat foto dan video dari teman Anda.
            </p>
          </div>
          <div class="d-flex justify-content-center">
            <input
              type="text"
              placeholder="Full Name"
              class="form-control"
              v-model="full_name"
              style="
                height: 40px;
                padding: 10px;
                border-color: lightgray;
                border-radius: 3px;
                font-size: small;
              "
            />
          </div>
          <div class="mt-2 d-flex justify-content-center">
            <input
              type="text"
              placeholder="Username"
              class="form-control"
              v-model="username"
              style="
                height: 40px;
                padding: 10px;
                border-color: lightgray;
                border-radius: 3px;
                font-size: small;
              "
            />
          </div>
          <div class="mt-2 d-flex justify-content-center">
            <input
              type="password"
              placeholder="Password"
              class="form-control"
              v-model="password"
              style="
                height: 40px;
                padding: 10px;
                border-color: lightgray;
                border-radius: 3px;
                font-size: small;
              "
            />
          </div>
          <div class="mt-2 d-flex justify-content-center">
            <textarea
              cols="30"
              rows="10"
              v-model="bio"
              style="
                width: 100%;
                height: 80px;
                padding: 10px;
                border-color: lightgray;
                border-radius: 3px;
                resize: none;
                font-size: small;
              "
              placeholder="Your Bio"
            ></textarea>
          </div>
          <div class="form-check">
            <input
              type="checkbox"
              class="mt-2 form-check-input"
              v-model="is_private"
            />
            <label
              class="small form-check-label"
              style="margin-top: 5px; color: gray"
              >Is Private</label
            >
          </div>
          <div class="mt-3">
            <p style="font-size: small; color: gray; text-align: center">
              Dengan mendaftar, berarti Anda menyetujui Ketentuan, Kebijakan
              Privasi, dan Kebijakan Cookie kami.
            </p>
          </div>
          <div class="mt-3">
            <button
              class="btn text-white"
              style="
                background-color: rgb(87, 184, 223);
                font-weight: bold;
                width: 100%;
                height: 35px;
                border-radius: 9px;
              "
              @click.prevent="register"
            >
              Daftar
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="pb-5">
      <div
        class="card mx-auto mt-2 d-flex text-center"
        style="border-radius: 0px"
      >
        <p class="mt-3">
          Sudah punya akun?
          <a href="/login" style="text-decoration: none; font-weight: bold">Masuk</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      full_name: "",
      username: "",
      password: "",
      bio: "",
      is_private: false,
    };
  },
  methods: {
    async register() {
      if (!this.full_name || !this.username || !this.password || !this.bio) {
        this.$swal({
          icon: "error",
          title: "Please fill all fields...",
          confirmButtonColor: "#FF0000",
        });
      }
      await axios
        .post("auth/register", {
          full_name: this.full_name,
          bio: this.bio,
          username: this.username,
          password: this.password,
          is_private: this.is_private,
        })
        .then((suc) => {
          if (suc && suc.status == 200) {
            const userData = JSON.stringify(res.data.user);
            localStorage.setItem("user", userData);
            localStorage.setItem("token", suc.data.token);
            this.$router.push("/");
          }
        })
        .catch((err) => {
          if (err.response && err.response.status === 422) {
            errorMessage = "Invalid field. Please check your input.";
            let errorList = "";
            for (let key in err.response.data.errors) {
              err.response.data.errors[key].forEach((error) => {
                errorList += `${error}<br>`;
              });
            }
            this.$swal({
              icon: "error",
              title: "Oops..",
              html: errorList,
              confirmButtonColor: "#FF0000",
            });
          }
        });
    },
  },
};
</script>
