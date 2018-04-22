<template>


  <div class="wrapper">
    
  
  <wxc-tab-bar :tab-titles="tabTitles"
               :tab-styles="tabStyles"
               title-type="icon"
               @wxcTabBarCurrentTabSelected="wxcTabBarCurrentTabSelected">
    <!--The first page content-->
    <div class="item-container" :style="contentStyle"><mainPage>main page</mainPage></div>

    <!--The second page content-->
    <div class="item-container" :style="contentStyle">
    <videolist>Collection</videolist>
    </div>

    <!-- The Third page content-->
    <div class="item-container temp_image" :style="contentStyle">
      <image src="https://cdn.ruguoapp.com/3a9125717a54671a8c16680a1d6b433d?imageView2/0/w/2000/h/400/q/30" style="width:500px; height:500px;"></image>
    </div>
  </wxc-tab-bar>



  </div>
  
</template>

<style scoped>
  .item-container {

    width: 750px;
    background-color: #f2f3f4;
    /*align-items: center;*/
    /*justify-content: center;*/
  }

  .temp_image{
    align-items: center;
    justify-content: center;
  }


</style>
<script>
  import { WxcTabBar, Utils } from 'weex-ui';

  // import config.js 
  import Config from './config'

  //first page selectPic module
  // import selectVideo from './components/selectPic.vue'
  import mainPage from './mainPage.vue'

  import videolist from './components/videolist.vue'

  // import videolist from '.list.vue'



  export default {
    components: { 
      WxcTabBar,
      mainPage,
      videolist
    },
    data: () => ({
      tabTitles: Config.tabTitles,
      tabStyles: Config.tabStyles
    }),
    created () {
      const tabPageHeight = Utils.env.getPageHeight();
      // If the page doesn't have a navigation bar
      // const tabPageHeight = env.deviceHeight / env.deviceWidth * 750;
      const { tabStyles } = this;
      this.contentStyle = { height: (tabPageHeight - tabStyles.height) + 'px' };
    },
    methods: {
      wxcTabBarCurrentTabSelected (e) {
        const index = e.page;
        // console.log(index);
      }
    }
  };
</script>