<template>



		<list>
			<cell class="cell">
			  <div class="panel" v-for="char in lists" :key="char.aweme_id">
				<!-- <text class="text"
				  @appear="onappear(char)"
				  @disappear="ondisappear(char)"
				  >{{char}}</text>

		 -->
		 		  

<!-- 				<video class="video" src="http://flv2.bn.netease.com/videolib3/1611/01/XGqSL5981/SD/XGqSL5981-mobile.mp4"  autoplay controls
      @start="onstart" @pause="onpause" @finish="onfinish" @fail="onfail"></video>
 -->
      <video class="video" :src="char.video.play_addr.url_list[0]"  autoplay controls
      @start="onstart" @pause="onpause" @finish="onfinish" @fail="onfail"></video>
    <text class="info">state: {{state}}</text>

				  <text class="text">{{char.aweme_id}}</text>


				  <text class="text">{{char.video.play_addr.url_list[0]}}</text>
			  </div>w
			</cell>
	    </list>w
		

	  
</template>

<script>

import Vue from 'vue';
	
  const modal = weex.requireModule('modal');
  const stream = weex.requireModule('stream');

  export default {
	data () {
	  return {
		lists: [],
		state: '----'
	  }
	},
	created(){
		let url = 'https://www.douyin.com/aweme/v1/challenge/aweme/?ch_id=1554129378843650&count=10';

		this.getVideo(url,res =>{
			//get ajax data from server side
			modal.toast({message:'Succeesful get data',duration: 1});
			// give server data to page data
			this.lists = res.data['aweme_list']; 

			//test , work?
			console.log(res.data);
		});

	},
	methods: {
	  getVideo(url,callback){
	  	return stream.fetch({
	  		method:'GET',
	  		type:'jsonp',
	  		url:url,
	  	}, callback)
	  },

	  onstart (event) {
        this.state = 'onstart'
      },
      onpause (event) {
        this.state = 'onpause'
      },
      onfinish (event) {
        this.state = 'onfinish'
      },
      onfail (event) {
        this.state = 'onfinish'
      }
	}
  }
</script>

<style scoped>
  .cell {
	flex-direction: column;
	align-items: center;

  }
  .panel {
	width: 720px;
	height: 960px;
	margin: 50px;
	justify-content: center;
	border-width: 4px;
	border-style: solid;
	border-color: rgb(162, 217, 192);
	background-color: rgba(162, 217, 192, 0.4);
  }
  .text {
	font-size: 36px;
	text-align: center;
	color: #41B883;
  }

  .video{
  	width: 630px;
    height: 350px;
  }
</style>
