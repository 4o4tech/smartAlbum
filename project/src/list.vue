<template>
  <div>
    <list>
      <cell v-for="news in lists">
        <div class="panel">
          <!--<text class="text">{{news.newsTitle}}</text>-->
          <!--<text class="content">{{news.newsContent}}</text>-->
          <!--news.video.play_addr.url_list[0]-->
          <!--<video class="video" :src=""   controls @start="onstart" @pause="onpause" @finish="onfinish" @fail="onfail"></video>-->

          <image class="video" :src="news.video.dynamic_cover.url_list[0]"></image>


        </div>
      </cell>

    </list>
  </div>
</template>

<style scoped>
  .panel {
    width: 650px;
    height: 960px;
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


  .video{
    margin-top:10px;

    width: 650px;
    height: 960px;
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
            let url='https://www.douyin.com/aweme/v1/challenge/aweme/?ch_id=1554129378843650&count=10';
            this.getNews(url,res=>{
                modal.toast({message:'请求成功',duration:1});
                this.lists=res.data['aweme_list'];

                let temp = res.data['aweme_list']

//                console.log(res.data['aweme_list'])
                for(let i=0;i<temp.length;i++){
                    console.log(res.data['aweme_list'][i].video.play_addr.url_list[0]);                }

            });
        },
        methods: {
            getNews(url,callback){
                return stream.fetch({
                    method:'GET',
                    type:'jsonp',
                    url:url
                },callback);
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