<template>
  <div>
    <table>
      <tr>
        <th>번호</th>
        <td >{{Qna.num}}</td>
      </tr>
      <tr>
        <th>작성자</th>
        <td >{{Qna.id}}</td>
      </tr>
      <tr>
        <th>제목</th>
        <input type="text" v-model="New.title" :placeholder="Qna.title">
      </tr>
      <tr>
        <th>작성일</th>
        <td >{{Qna.wdate}}</td>
      </tr>
      <tr>
        <th>내용</th>
        <input type="text" v-model="New.content" :placeholder="Qna.content">
      </tr>
      <tr>
        <th>답글</th>
        <td >{{Qna.reply}}</td>
      </tr>
    </table>

    <span class="clearAllBtn" @click="back">돌아가기</span>&nbsp;&nbsp;
    <span class="clearAllBtn" @click="mod">완료</span>&nbsp;&nbsp;
  </div>
</template>

<script>
import {mapState} from "vuex";
export default {
    computed: {
        ...mapState(["Qna"])
    },
    data() {
        return {
            New : {
                title: "",
                content: ""
            }
        }
    },
    methods: {
    back() {
            this.$router.push("/");
        },
    rp() {
    this.$router.push("/reply");
    },
    mod() {
        if (this.New.title == "") this.New.title = this.Qna.title;
        if (this.New.content == "") this.New.content = this.Qna.content;
        this.$store.dispatch("MODIFY", {
            num: this.Qna.num,
            title: this.New.title,
            content: this.New.content,
            reply: this.Qna.reply
        });
        this.$router.push("/detail/this.Qna.num");
    },
    }
}
</script>

<style lang=""></style>
