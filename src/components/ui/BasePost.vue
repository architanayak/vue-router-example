<template>
  <div>
    <b-card
      v-for="post in posts"
      :key="post.id"
      :style="{ backgroundColor: background(post.id) }"
      class="post"
    >
      <b-row class="row1">
        <p class="title">
          <router-link 
            :to="'/posts/' + post.id"
          >
            Title - {{ post.title }}
          </router-link>
        </p>
        <p class="body" 
          :title="post.body"
        >
          Description - {{ post.body.slice(0, 70) + "..." }}
        </p>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "basePost",
  props: ["posts"],
 
  methods: {
    background: function(postId) {
      return postId % 2 == 0 ? "#B5E0D9" : "#FFE6E6";
    },
  },
};
</script>

<style scoped>
body > .title {
  margin: 0;
}

.post {
  width: 80%;
  margin: 2% auto;
  box-shadow: 2px 2px 7px grey;
}

p {
  width: 100%;
}

.body {
  align-content: center;
}

.row1 {
  height: 80%;
}

.row2 {
  height: 20%;
}

.title {
  font-size: 150%;
  font-weight: 600;
  margin-bottom: 2%;
}

.title > a {
  color: black;
}

.button {
  background-color: white;
  box-shadow: 1px 1px 3px darkslategrey;
  border-radius: 5px;
  border: none;
}

.button > a {
  color: black;
}

.button:hover {
  background-color: lightgray;
  font-size: 120%;
}

.userName {
  float: right;
}

.userName > a {
  color: black;
}

.userName > a:hover {
  font-size: 110%;
}
</style>
