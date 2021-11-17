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
        <td v-text="Qna.reply"></td>
      </tr>
    </table>

    <span class="clearAllBtn" @click="back">돌아가기</span>&nbsp;&nbsp;
    <span class="clearAllBtn" @click="rp">답글달기</span>&nbsp;&nbsp;
  </div>
</template>

<script>
import {mapState} from "vuex";
export default {
    created() {
        this.$store.dispatch("DETAILQNA", this.$route.params.num);
    },

    computed: {
        ...mapState(["Qna"])
    },

    methods: {
    back() {
            this.$router.push("/");
        },
    rp() {
    this.$router.push("/reply");
    }
    },
}
</script>

<style lang=""></style>
