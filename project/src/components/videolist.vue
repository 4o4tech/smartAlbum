<template>
  <list>
      <cell bind:v-for=" list in lists" @loadmore="fetch" loadmoreoffset="10">
        <text class="text">{{list}}</text>
        <div class="panel">
          <!--<video class="video" :src="data['video'].play_addr.url_list[0]"   controls @start="onstart" @pause="onpause" @finish="onfinish" @fail="onfail"></video>-->

          <!--<video class="video" src="http://v11-dy.ixigua.com/56a39fc807ae7892527aa706a7be9775/5ab7cc46/video/m/220ca7e7234729b4cd292216fc74ffe4cf31152660d0000577c419dded2/"  autoplay="true" controls-->
          <!--@start="onstart" @pause="onpause" @finish="onfinish" @fail="onfail"></video>-->

        </div>

      </cell>

  </list>


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
    data () {

        return {
            lists: [1, 2]
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
        type:'jsonp',
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
      }
    },
    created(){
    let url = 'https://www.douyin.com/aweme/v1/challenge/aweme/?ch_id=1554129378843650&count=5';

    this.getVideo(url,res =>{
      //get ajax data from server side
      modal.toast({message:'Succeesful get data',duration: 1});
      // give server data to page data
      this.lists = res.data['aweme_list'];

      //test , work
      console.log(this.lists);
    })

  }
  }
</script>

<style scoped>
  .panel {
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
    margin-top:20px;
    width: 720px;
    height: 960px;
  }
</style>
