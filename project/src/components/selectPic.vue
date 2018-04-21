<template>
  <div class="conatiner">
    

    <text class="select_title">SmartAlbum, one step manage your videos.</text>

    <wxc-button text="chooseImage" type="blue" size="big"
              @wxcButtonClicked="chooseImage" class="div_btn"></wxc-button>

    <wxc-button text="previewImage" type="blue" size="big"
              @wxcButtonClicked="previewImage" class="div_btn"></wxc-button>

    <wxc-button text="uploadFile" type="blue" size="big"
              @wxcButtonClicked="uploadFile" class="div_btn"></wxc-button>


    <wxc-button text="takeVideo" type="blue" size="big"
              @wxcButtonClicked="takeVideo" class="div_btn"></wxc-button>

  <!--   <div @click="takeVideo" class="div_btn"><text class="btn_text">take Video</text></div> -->

  
<!-- 
    <div @click="chooseImage" class="div_btn"><text class="btn_text">chooseImage</text></div>

    <div @click="previewImage" class="div_btn""><text class="btn_text">previewImage</text></div>

    <div @click="uploadFile" class="div_btn"><text class="btn_text">uploadFile</text></div>
 -->
  </div>
</template>

<style>

.conatiner{
  height:900px;
  max-width:750px;
  display:flex;
  justify-content:flex-start ;
  align-items:center;
  
}

.select_title{
  margin-left:15px;
  margin-bottom: 20px;
  font-weight: 600;
}

.div_btn{
  margin: 0 auto;
  margin-top:60px;
  background-color:blue;

}

.btn_text{
  margin:0 auto;
  text-align:center; 
  line-height: normal;
  font-size: 36px;
}

.btn-text {
    text-overflow: ellipsis;
    lines: 1;
    font-size: 36px;
    color: #ffffff;
  }


</style>

<script>

  // import {Nat} from 'natjs';


  import { WxcButton } from 'weex-ui';

  import Nat from 'natjs';

  const modal = weex.requireModule('modal');

  const plugin = weex.requireModule('imagePicker');

  // const Nat = weex.requireModule（'natjs'）;

 export default {
    components:{
      WxcButton
    },
    data: {
      value: '',
      index: 0,
      txtChange: '',
      images: [
      ]
    },
    created: function() {
    },
    methods: {
      chooseImage: function() {
        let that = this;
        plugin.chooseImage({
          maxSelectCount: 10, //最大选择数 默认9张，最小 1
          allowSelectGif: true, //是否允许选择Gif，只是控制是否选择，并不控制是否显示，如果为NO，则不显示gif标识 默认true
          //sourceType: 'camera', //album 从相册选图，camera 使用相机，默认二者都有
          allowEditImage: true, //是否允许编辑图片，选择一张时候才允许编辑，默认true
          clipRatio:{
            x: 16,
            y: 9
          },
        },function (images) {

          let image_arr = [];

          for (let image of images){
            image_arr.push(image['path'])
          }

          that.images = image_arr;

                    console.log(JSON.stringify(images));
                });
      },
      previewImage: function () {
        plugin.previewImage({
          urls: [
            'http://pic.962.net/up/2013-11/20131111660842029339.jpg',
            'http://pic.962.net/up/2013-11/20131111660842034354.jpg'
          ],
                    current: 'http://pic.962.net/up/2013-11/20131111660842034354.jpg',
                })
      },
      uploadFile: function () {
        plugin.uploadFile({
          url: 'https://up.qiniup.com',
          formData: {
            token:"hTRilDJKfK1pOZ23eavYuuniG0fJUjB0M0TwuYa7:nJCquMjbJzDEmGUdIT8bUX7ykA4=:eyJzY29wZSI6ImZpbGUiLCJkZWFkbGluZSI6MTUyNDI5OTczN30="
          },
          name: 'file',
          filePath:this.images[0]
//          filePath:'zcfile://tmp_L3N0b3JhZ2UvZW11bGF0ZWQvMC9QaWN0dXJlU2VsZWN0b3IvQ2FtZXJhSW1hZ2UvUGljdHVyZVNl\nbGVjdG9yXzIwMTcxMjA1XzIzMDAwMC5KUEVH\n'
        },function (successData) {
          console.log("hehe"+successData)
          modal.toast({ 'message': 'Images upload success.', 'duration': 1 });

        },function (err) {
          console.log(err)
        },function (process) {
          console.log(process)
        })
      },

    takeVideo: function(){
          Nat.camera.captureVideo({}, (err, ret) => {
            console.log(ret.path)
          })
    }
 

      // Nat.device.info((err, ret) => {
      //     console.log(ret)
      // })

    }
  }
</script>