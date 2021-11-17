<template>
  <div>
      id: <input type="text" v-model="Qna.id"/><br>
      title: <input type="text" v-model="Qna.title"/><br>
      content: <textarea cols="50" rows="10" v-model="Qna.content"></textarea><br>
      <br><hr>
      <span class="addContainer" @click="addQna">
          <i class="addBtn fas fa-plus" aria-hidden="true"></i>
      </span>
  </div>
</template>

<script>
export default {
    data() {
        return {
            Qna: {
                id: "",
                title: "",
                content: ""
            }
        }
    },
    methods: {
        addQna() {
            // action call
            if (this.Qna.id != "" && this.Qna.title != "" && this.Qna.content != "") {
                this.$store.dispatch("ADDQNA", this.Qna);
                console.log(this.Qna.id);
                this.Qna.id = "";
                this.Qna.title = "";
                this.Qna.content = "";
                this.$router.push("/list");
            } else {
                alert("입력해주세요.")
            }
        }
    },
}
</script>

<style>

</style>