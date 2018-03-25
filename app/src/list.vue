<template>
  <list>
	<cell class="cell">
	  <div class="panel" v-for="char in lists" :key="char">
		<text class="text"
		  @appear="onappear(char)"
		  @disappear="ondisappear(char)"
		  >{{char}}</text>
	  </div>
	</cell>
  </list>
</template>

<script>
  const modal = weex.requireModule('modal')
  const stream = weex.requireModule('steam')

  export default {
	data () {
	  return {
		lists: []
	  }
	},
	created:{
		let url = 'http://www.jspang.com/DemoApi/newsApi.php';

		this.getVideo(url,res =>{
			//get ajax data from server side
			modal.toast({message:'Succeesful get data'},duration:1});
			// give server data to page data
			this.lists = res.data; 

			//test , work?
			console.log(res.data);
		});

	},
	methods: {
	  onappear (char) {
		modal.toast({ message: char + ' appear' })
	  },
	  ondisappear (char) {
		modal.toast({ message: char + ' disappear' })
	  },
	  getVideo(url,callback){
	  	return steam.fetch({
	  		methods:'GET',
	  		type:'jsonp',
	  		url:url
	  	}, callback)
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
	width: 600px;
	height: 900px;
	margin: 50px;
	justify-content: center;
	border-width: 4px;
	border-style: solid;
	border-color: rgb(162, 217, 192);
	background-color: rgba(162, 217, 192, 0.4);
  }
  .text {
	font-size: 200px;
	text-align: center;
	color: #41B883;
  }
</style>
