<template>
	<div>
		<section>
			<transition-group name="list" tag="ul">
				<li v-for="qna in Qnas" :key="qna.num" class="shadow">
					
					{{qna.num}}.
                    <router-link to="`/detail/${qna.num}`">{{qna.title}}</router-link>
					<!-- {{qna.wdate}} -->
					<span class="removeBtn" type="button" @click="removeQna(qna.num)">
						<i class="far fa-trash-alt" aria-hidden="true"></i>						
					</span>
				</li>
			</transition-group>
		</section>	
        <section>
            <!-- <TodoFooter></TodoFooter> -->
        </section>	
	</div>
</template>

<script>
// import TodoFooter from "@/views/TodoFooter.vue"
// import axios from "axios"
import {mapState, mapActions} from "vuex"

export default {
    components : {
        // TodoFooter,
    },
    // data(){
    //     return {
    //         qnas : [],
    //     }
    // },
    created(){
        // this.selectAll()
		this.$store.dispatch("ALLQNA")

    },
	computed: {
		...mapState(["Qnas"]),
	},
    methods: {
		...mapActions({
				removeQna: "DELETEQNA",
		}),

        // selectAll(){
        //     axios
        //     .get("http://localhost/qna")
        //     .then((response) => {
        //         this.qnas = response.data
        //     })
        // },
		// removeQna(num){
        //     axios
        //     .delete("http://localhost/qna/" + num)
        //     .then(() => {
        //         this.selectAll()
        //     })
        // },
        
    },
}
</script>

<style scoped>
	.del {
		text-decoration: line-through;
	}
	ul {
		list-style-type: none;
		padding-left: 0px;
		margin-top: 0;
		text-align: left;
	}
	li {
		display: flex;
		min-height: 50px;
		height: 50px;
		line-height: 50px;
		margin: 0.5rem 0;
		padding: 0 0.9rem;
		background: white;
		border-radius: 5px;
	}
	.checkBtn {
		line-height: 45px;
		color: #62acde;
		margin-right: 5px;
	}
	.removeBtn {
		margin-left: auto;
		color: #de4343;
	}

	.list-enter-active,
	.list-leave-active {
		transition: all 1s;
	}
	.list-enter,
	.list-leave-to {
		opacity: 0;
		transform: translateY(30px);
	}
</style>
