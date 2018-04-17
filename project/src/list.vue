<template>
  <div>


        <div class="panel" v-for="list in lists">


         
           <!-- <image class="video" :src="news.video.dynamic_cover.url_list[0]"></image> -->
            <video class="video"  :src="list"  autoplay="false"  controls  >

            </video>

            
            <text class="text">{{list}}</text>

        </div>



       
          
          <!--<text class="content">{{news.newsContent}}</text>-->
          
          

          <!-- <image class="video" :src="news.video.dynamic_cover.url_list[0]"></image> -->


                      <!-- <source :src="news.video.play_addr.url_list[0]" type="video/mp4" @start="onstart" @pause="onpause" @finish="onfinish" @fail="onfail"> -->

              <!-- <source src="http://v11-dy.ixigua.com/56a39fc807ae7892527aa706a7be9775/5ab7cc46/video/m/220ca7e7234729b4cd292216fc74ffe4cf31152660d0000577c419dded2/" type="video/mp4" @start="onstart" @pause="onpause" @finish="onfinish" @fail="onfail"> -->
              
         
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
            let url='https://www.douyin.com/aweme/v1/challenge/aweme/?ch_id=1554129378843650&count=2';
            this.getNews(url,res=>{
                modal.toast({message:'请求成功',duration:1});
                

                let temp = res.data['aweme_list']

//                console.log(res.data['aweme_list'])
                for(let i=0;i<temp.length;i++){

                  this.lists.push(res.data['aweme_list'][i].video.play_addr.url_list[0]);

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
            }
        }
    }
</script>