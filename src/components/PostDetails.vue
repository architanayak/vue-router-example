<template>
  <div>
    <b-container
      :style="{ backgroundColor: background(this.postId) }"
      v-if="postDetails"
    >
      <b-row>
        <b-col cols="12">
          <h1>{{ postDetails.title }}</h1>
        </b-col>
      </b-row>
      <div class="postBody">
        <b-row align-h="center">
          <b-col cols="10">
            <p>{{ postDetails.body }}</p>
          </b-col>
        </b-row>
      </div>
      <b-row>
        <b-col cols="12" class="commentTitle">
          <h2 style="font-weight: 500">Comments</h2>
        </b-col>
        <comment-tile :comments="allComments"></comment-tile>
      </b-row>
    </b-container>
    <h3 v-else>Loading....</h3>
  </div>
</template>

<script>
import { Service } from "../service.js";
import commentTile from "./CommentTile.vue";

export default {
  name: "PostDetails",
  components: {
    commentTile,
  },
  mounted() {
    this.getPostDetails();
    this.getComments();
  },
  data() {
    return {
      postId: this.$route.params.id,
      postDetails: null,
      allComments: [],
    };
  },
  methods: {
    getPostDetails() {
      Service.get(`posts/${this.postId}`)
        .then((res) => {
          this.postDetails = {
            ...res.data,
          };
        })
        .catch((error) => console.log(error));
    },
    getComments() {
      Service.get(`comments?postId=${this.postId}`)
        .then((res) => {
          this.allComments = res.data;
        })
        .catch((error) => console.log(error));
    },
    background: function(postId) {
      return postId % 2 == 0 ? "#B5E0D9" : "#FFE6E6";
    },
  },
};
</script>

<style scoped>
.container {
  box-shadow: 2px 2px 4px gray;
  border: 1px solid rgb(228, 220, 220);
  border-radius: 4px;
  padding: 10px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  margin-bottom: 5%;
}

.postBody {
  border: 1px solid lightgray;
  box-shadow: 2px 2px 4px gray;
  border-radius: 15px;
  background-color: white;
  width: 90%;
  margin: 0 auto;
  height: fit-content;
}

.row {
  margin: 2% 0;
  margin-bottom: 4%;
}

h1 {
  font-weight: bolder;
  font-size: 2.5rem;
  font-family: Arial, Helvetica, sans-serif;
}

hr {
  width: 90%;
  border-top: 1px solid darkgray;
}

.commentTitle {
  font-size: 200%;
  font-weight: bold;
}

.commentHr {
  width: 30%;
  margin: 0 auto;
  margin-bottom: 2%;
}

a {
  color: black;
}

a:hover {
  font-size: 120%;
  color: black;
}
</style>
