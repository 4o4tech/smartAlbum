<template>
  <recycle-list for="(num, i) in lists" @loadmore="fetch" loadmoreoffset="10">
    <cell-slot :key="i">
      <div class="panel">
        <!-- <text class="text">{{num}}</text> -->

        <video class="video" src="https://aweme.snssdk.com/aweme/v1/playwm/?video_id=eb943ea59b204898beddb85a8002674a&line=0"  autoplay="true" controls
      @start="onstart" @pause="onpause" @finish="onfinish" @fail="onfail"></video>
        

      </div>
    </cell-slot>
  </recycle-list>
</template>

<script>
  const modal = weex.requireModule('modal')
  const LOADMORE_COUNT = 2

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
      }
    }
  }
</script>

<style scoped>
  .panel {
    width: 640px;
    height: 960px;
    margin-left: 55px;
    margin-top: 25px;
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
    width: 640px;
    height: 960px;
  }
</style>
