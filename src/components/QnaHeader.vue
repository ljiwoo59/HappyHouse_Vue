<template>
  <div>
    <header id="index_header" class="jumbotron text-center mb-1">
      <h4>행복한 우리 집</h4>
    </header>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark rounded">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="/">Home</a>
        </li>
      </ul>
    </nav>
    <input type="text" v-model="title"/>&nbsp;
    <button @click="search" >검색</button>
    <br><hr>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: ""
    }
  },
  methods: {
    search() {
      if (this.title != "") {
        this.$store.dispatch("SEARCH");
      } else {
        alert("검색어를 입력해 주세요");
      }
    }
  }
};
</script>

<style></style>
