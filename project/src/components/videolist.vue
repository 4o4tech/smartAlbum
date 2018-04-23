<template>


<scroller class="scroller">
    <!-- <wxc-button text="refresh" type="blue" size="small"
              @wxcButtonClicked="refresh" class="div_btn"></wxc-button> -->


  <refresh class="refresh" @refresh="onrefresh" @pullingdown="onpullingdown" :display="refreshing ? 'show' : 'hide'">
      <text class="indicator-text">Refreshing ...</text>
      <loading-indicator class="indicator"></loading-indicator>
    </refresh>


  <list class="video_list">
      <cell v-for=" list in lists" @loadmore="fetch" loadmoreoffset="10">
        <!-- <text class="text">{{list.putTime}}</text> -->
        <div class="panel">

          <text class="text">{{list.putTime}}</text>
          <video class="video" :src="'http://ate-9-10.com/' + list.key"   controls @start="onstart" @pause="onpause" @finish="onfinish" @fail="onfail"></video>

        </div>

      </cell> 


  </list>


 </scroller>



  <!--<recycle-list for="(item, i) in longList" switch="type">-->
    <!--<cell-slot case="A">-->
      <!--<text>- A {{i}} -</text>-->
    <!--</cell-slot>-->
    <!--<cell-slot case="B">-->
      <!--<text>- B {{i}} -</text>-->
    <!--</cell-slot>-->
  <!--</recycle-list>-->

</template>

<script>

  import Vue from 'vue';

  import { WxcButton } from 'weex-ui';

  const modal = weex.requireModule('modal')
  const LOADMORE_COUNT = 2;
  const stream = weex.requireModule('stream');

  const longList = [
      { type: 'A' },
      { type: 'B' },
      { type: 'B' },
      { type: 'A' },
      { type: 'B' }
  ]

  export default {
    components:{
      WxcButton
    },
    data () {

        return {
            lists: [],
            refreshing: false,
        }
    },
    methods: {
      fetch (event) {
        modal.toast({ message: 'loadmore', duration: 1 })

        this.$nextTick(() => {
          const length = this.lists.length
          for (let i = length; i < length + LOADMORE_COUNT; ++i) {
            this.lists.push(i + 1)
          }
        })
      },
      getVideo(url,callback){
        return stream.fetch({
          method:'GET',
          type:'json',
          url:url
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
      },

      refresh(){
        let url='http://api.4o4.tech/getVideo';

        return stream.fetch({
          method:'GET',
          type:'json',
          url:url
        }, res =>{
          //get ajax data from server side
          modal.toast({message:'Succeesful refresh',duration: 1});
          // give server data to page data
          this.lists = res.data;

          // console.log('data:  '+ res.data)
          //test , work
          // console.log(this.lists);
        })

      },

      onrefresh (event) {
        modal.toast({ message: 'Refreshing', duration: 1 })
        this.refreshing = true
        setTimeout(() => {
          this.refreshing = false
        }, 2000)
      },
      onpullingdown (event) {
        console.log("dy: " + event.dy)
        console.log("pullingDistance: " + event.pullingDistance)
        console.log("viewHeight: " + event.viewHeight)
        console.log("type: " + type)
      }

      // refresh(){
      //   let url='http://api.4o4.tech/getVideo';

      //   this.getVideo(url,res =>{
      //     //get ajax data from server side
      //     modal.toast({message:'Succeesful get data',duration: 1});
      //     // give server data to page data
      //     this.lists = res.data;

      //     console.log('data:  '+ res.data)
      //     //test , work
      //     // console.log(this.lists);
      //   })
      // }
      // 模拟ajax
      // loadUrl: function(){
      //   var _this = this;
      //   setTimeout(function(){
      //      _this.url = 'http://img-cdn.wanyouxi.com/video/20170601_mdzz_recommend_video.mp4';
      //   },500);
      // }



    },
    created(){
    // let url = 'https://www.douyin.com/aweme/v1/challenge/aweme/?ch_id=1554129378843650&count=5';

    let url='http://api.4o4.tech/getVideo';

    this.getVideo(url,res =>{
      //get ajax data from server side
      modal.toast({message:'Succeesful get data',duration: 1});
      // give server data to page data
      this.lists = res.data;

      console.log('data:  '+ res.data)
      //test , work
      // console.log(this.lists);
    })

  },


  }
</script>

<style scoped>

  .video_list{
    margin-top: 20px;
  }


.refresh {
    width: 750;
    display: -ms-flex;
    display: -webkit-flex;
    display: flex;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    align-items: center;
  }
  .indicator-text {
    color: #888888;
    font-size: 42px;
    text-align: center;
  }
  .indicator {
    margin-top: 16px;
    height: 40px;
    width: 40px;
    color: blue;
  }

  .panel {
    display:flex;
    width: 725px;
    height: 960px;
    margin-left: 10px;
    margin-top: 35px;
    margin-bottom: 35px;
    flex-direction: column;
    justify-content: center;
    border-width: 2px;
    border-style: solid;
    border-color: rgb(162, 217, 192);
    background-color: rgba(162, 217, 192, 0.2);
  }  
  .text {
    font-size: 24px;
    text-align: center;
    color: #41B883;
  }
  .video{
    display:flex;
    margin-top:20px;
    width: 720px;
    height: 960px;
  }

  .div_btn{
    margin: 0 auto;
    margin-top:60px;
    background-color:blue;

  }
</style>
