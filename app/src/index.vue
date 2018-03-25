<template>
  <div>
	  <div>
		<videolist></videolist>

		<div class="tab-panels" :style="{ left: activeTab * -750 + 'px'}">
		  <div class="panel" v-for="(panel, pi) in panels" :key="pi">
			<text class="content">{{panel.content}}</text>
		  </div>
		</div>
	  </div>

	  <div class="tabbar">
		  <div class="tab active" :style="{ left: activeTab * 250 + 'px'}"></div>
		  <div v-for="(tab, i) in tabs" :key="i" class="tab" @click="activeTab = i">
			<image class="icon" :src="tab.icon"></image>
			<text class="title">{{tab.title}}</text>
		  </div>
	  </div>
  </div>

</template>

<script>

	import videolist from './list.vue';

  export default {
  	

	data () {
	  return {
		activeTab: 0,
		tabs: [{
		  title: 'Main',
		  icon: '//gw.alicdn.com/tfs/TB19YESOVXXXXaNaXXXXXXXXXXX-45-45.png'
		}, {
		  title: 'Upload',
		  icon: '//gw.alicdn.com/tfs/TB1I2E9OVXXXXbFXVXXXXXXXXXX-45-45.png'
		}, {
		  title: 'Mine',
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
	}
}
</script>

<style scoped>
  .tabbar {
	flex-direction: row;
	background-color: #FF4563;
	position:fixed;
	bottom:50px;
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
	background-color: rgb(218, 59, 85);
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