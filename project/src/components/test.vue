

<template>

<div>

    
  <list>

     <!-- <image src="https://cdn.ruguoapp.com/3a9125717a54671a8c16680a1d6b433d?imageView2/0/w/2000/h/400/q/30" style="width:500px; height:500px;"></image> -->
     
    <div class="temp_image">
    </div>
      <cell v-for="news in lists">
        <div class="panel">
          <text class="text">{{news.newsTitle}}</text>
          <text class="content">{{news.newsContent}}</text>
        </div>
      </cell>
      
  </list>


 
</div>

  
</template>
<style scoped>
    .panel {
      width: 650px;
      height: 250px;
      margin-left: 50px;
      margin-top: 35px;
      margin-bottom: 35px;
      flex-direction: column;
      padding-top:15px;
       padding-left:10px;
      padding-right:10px;
      border-width: 2px;
      border-style: solid;
      border-color: rgb(162, 217, 192);
      background-color: rgba(162, 217, 192, 0.2)
     
    }
     
    .text {
      font-size: 36px;
      text-align: center;
      color: #41B883;
    }
     
     
    .content{
      lines:3;
      font-size: 28px;
    }




</style>
<script>
const modal = weex.requireModule('modal')
const stream = weex.requireModule('stream');
export default {
  data() {
    return {
      lists: [],
     
    }
  },
  created(){
    let url='http://www.jspang.com/DemoApi/newsApi.php';
    // let url='http://127.0.0.1:5000/getVideo';
    // http://api.4o4.tech/getVideo
    this.getNews(url,res=>{
      modal.toast({message:'请求成功',duration:1});
      this.lists=res.data;
      console.log(res.data[0]);
    });
  },
  methods: {
    getNews(url,callback){
      return stream.fetch({
        method:'GET',
        type:'json',
        url:url
      },callback);
    }
  }
}
</script>



 <!-- <template>
  <div>
    <video class="video" :src="src" autoplay controls
      @start="onstart" @pause="onpause" @finish="onfinish" @fail="onfail"></video>
    <text class="info">state: {{state}}</text>
  </div>
</template>

<style scoped>
  .video {
    width: 630px;
    height: 350px;
    margin-top: 60px;
    margin-left: 60px;
  }
  .info {
    margin-top: 40px;
    font-size: 40px;
    text-align: center;
  }
</style>

<script>
  export default {
    data () {
      return {
        state: '----',
        src:'http://flv2.bn.netease.com/videolib3/1611/01/XGqSL5981/SD/XGqSL5981-mobile.mp4'
      }
    },
    methods:{
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
</script> -->