<template>
  <div class="col-6" style="width: 600px">
    <div class="container mt-3" style="margin-left: 70px">
      <div class="d-flex">
        <div class="card d-flex border-0">
          <div class="card-body" v-for="post in posts" :key="post.id">
            <div class="d-flex">
              <img
                src="../assets/Image Assets/wallhaven-ulti.jpg"
                alt="profile icn"
                style="width: 40px; height: 40px; object-fit: cover"
                class="rounded-circle"
              />
              <p
                style="margin-left: 10px; font-weight: 550; padding: 5px"
                class="card-title"
              >
                {{ post.user.username }}
              </p>
              <p style="padding: 5px">1 Hari</p>
            </div>
            <div class="card">
              <div class="card-body">
                <div
                  id="carouselExample"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div
                      v-for="(attachment, index) in post.attachments"
                      :key="index"
                      class="carousel-item"
                      :class="{ active: index === 0 }"
                    >
                      <img
                        :src="getImgUrl(attachment.storage_path)"
                        class="d-block w-100"
                        alt="Sliding Image"
                      />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
            <div class="d-flex">
              <button class="btn">
                <img
                  src="../assets/icons/heart.svg"
                  alt="btnheart"
                  style="width: 30px"
                />
              </button>
              <button class="btn">
                <img
                  src="../assets/icons/comment.svg"
                  alt="btncomment"
                  style="width: 30px"
                />
              </button>
              <button class="btn">
                <img
                  src="../assets/icons/share.svg"
                  alt="btnshare"
                  style="width: 30px"
                />
              </button>
            </div>
            <p style="margin-left: 13px">21.4K Like</p>
            <div class="d-flex">
              <p style="margin-left: 13px; font-weight: 550" class="card-title">
                {{ post.user.username }}
              </p>
              <p
                class="card-text overflow-hidden"
                style="white-space: nowrap; margin-left: 10px"
              >
                {{ post.caption }}
              </p>
            </div>
          </div>
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
      posts: [],
      attachments: [],
      token: localStorage.getItem("token"),
    };
  },
  mounted() {
    const headers = {
      Authorization: "Bearer " + this.token,
    };
    axios
      .get("posts", { headers })
      .then((res) => {
        this.posts = res.data.posts;
        this.attachments = res.data.posts.attachments;
      })
      .catch((err) => {
        this.$swal({
          icon: "error",
          text: err,
        });
      });
  },
  methods: {
    getImgUrl(img_path) {
      return "http://127.0.0.1:8000/" + img_path;
    },
  },
};
</script>
