<template>
  <div class="d-flex mt-5">
    <img
      src="../assets/Image Assets/wallhaven-ulti.jpg"
      class="rounded-circle"
      style="width: 40px; height: 40px; object-fit: cover; margin-left: 120px; margin-top: 7px;"
      alt="profilepicture"
    />
    <div
      class="notflexed"
      style="display: flex; flex-direction: column; margin-left: 10px"
    >
      <label style="font-weight: 550; margin-top: 5px"><a href="#" style="text-decoration: none; color: black;">{{ this.user.username }}</a></label>
      <label style="margin-top: -8px;">{{ this.user.full_name }}</label>
    </div>
  </div>

  <!-- other user -->
  
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      user: {} 
    };
  },
  mounted() {
    const storedUserData = localStorage.getItem("user");
    if (storedUserData) {
      this.user = JSON.parse(storedUserData); 
    }
    console.log(this.user);
  },
};
</script>
