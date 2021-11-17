<template>
  <div>
    <table>
      <tr>
        <th>번호</th>
        <td v-text="Qna.num"></td>
      </tr>
      <tr>
        <th>작성자</th>
        <td v-text="Qna.id"></td>
      </tr>
      <tr>
        <th>제목</th>
        <td v-text="Qna.title"></td>
      </tr>
      <tr>
        <th>작성일</th>
        <td v-text="Qna.wdate"></td>
      </tr>
      <tr>
        <th>내용</th>
        <td v-text="Qna.content"></td>
      </tr>
      <tr>
        <th>답글</th>
        <td>
          <textarea cols="50" rows="10" v-model="reply"></textarea>
        </td>
      </tr>
    </table>

    <span class="clearAllBtn" @click="back">돌아가기</span>&nbsp;&nbsp;
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
            reply: ""
        }
    },
    methods: {
        setReply() {
            this.$store.commit("SETREPLY", this.reply);
            this.$store.dispatch("REPLY", this.$store.state.Qna);
    },
    back() {
            this.$router.push("/");
        },
    }
}


</script>

<style lang=""></style>
