<template>
  <div>


	<div>
		<input type="text" placeholder="Input Text" class="input" :autofocus=true value="" @change="onchange" @input="oninput"/>
	</div>


		
	 <!--  <div>
		<div class="tab-panels" :style="{ left: activeTab * -750 + 'px'}">
		  <div class="panel" v-for="(panel, pi) in panels" :key="pi">
		  	<text>{{pi}}</text>
			<text class="content">{{panel.content}}</text>
		  </div>
		</div>
	  </div> -->

	



	<!-- <router-view class="template"></router-view> -->


	  <div class="tabbar">
		  <div class="tab active" :style="{ left: activeTab * 250 + 'px'}"></div>
		  <div v-for="(tab, i) in tabs" :key="i" class="tab" @click=" jump(i)">
			<image class="icon" :src="tab.icon"></image>
			<text class="title">{{tab.title}}</text>
		  </div>
	  </div>
  </div>

</template>

<script>

  import videolist from './newlist.vue';

  // import router from './router.js'


  export default {
  	

	data () {
	  return {
	  	header:"index",
		activeTab: 0,
		tabs: [{
			title: 'main',
			icon: '//gw.alicdn.com/tfs/TB1kCk2SXXXXXXFXFXXXXXXXXXX-72-72.png'
		}, {
			title: 'upload',
			icon: '//gw.alicdn.com/tfs/TB1I2E9OVXXXXbFXVXXXXXXXXXX-45-45.png'
		}, {
			title: 'mine',
			icon: '//gw.alicdn.com/tfs/TB1gUhyPXXXXXX5XXXXXXXXXXXX-45-45.png'
		}]
	  }
	},
	components:{
		videolist
	},
	computed: {
	  panels () {
		return this.tabs.map(tab => ({ content: tab.title }))
	  }
	},
	methods:{

		jump: function(e) {

			console.log(e)
			this._data.activeTab = e

      }
	}
}
</script>

<style scoped>

.header{
	width:750;
	height:80px;
}

.header_text{
	font-size:36px;

}

.template{

	width:750px;
	height:960px;
}

.input{
	height:80px;
	padding:10px;
	font-size: 32px;
	width: 750px;
	border-bottom-width:1px;

}

  .tabbar {
	flex-direction: row;
	background-color: #457cff;
	position:fixed;
	bottom:0px;
  }
  .tab {
	height: 120px;
	width: 250px;
	justify-content: center;
	align-items: center;
  }
  .active {
	position: absolute;
	top: 0;
	left: 0;
	background-color: #2d54af;
	transition: left 0.2s ease-in-out;
  }
  .icon {
	width: 45px;
	height: 45px;
  }
  .title {
	font-size: 28px;
	color: #FFF;
	margin-top: 10px;
  }
  .tab-panels {
	position: relative;
	width: 3750;
	flex: 1;
	flex-direction: row;
	align-items: stretch;
	background-color: #F5F5F5;
	transition: left 0.2s ease-in-out;
  }
  .panel {
	width: 750px;
	justify-content: center;
	align-items: center;
  }
  .content {
	font-size: 36px;
	color: #707070;
  }
</style>