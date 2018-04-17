<template>
  <div class="conatiner">
    

    <text class="select_title">SmartAlbum, one step manage your videos.</text>
    <div @click="chooseImage" class="div_btn"><text class="btn_text" style="color:#fff">chooseImage</text></div>
    <div @click="previewImage" class="div_btn""><text class="btn_text" style="color:#fff">previewImage</text></div>
    <div @click="uploadFile" class="div_btn"><text class="btn_text" style="color:#fff">uploadFile</text></div>

  </div>
</template>

<style>

.conatiner{
  height:900px;
  width:100%;

}

.select_title{
  margin-left:15px;
  margin-bottom: 20px;
  font-weight: 600;
}

.div_btn{
  margin: 0 auto;
  margin-top:40px;
  padding:20px;
  background-color:#1ba1e2;
  color:#fff;
  width:50%;
}

.btn_text{
  margin:0 auto;
  text-align:center;  
}


</style>

<script>

 

  const plugin = weex.requireModule('imagePicker');

  module.exports = {
    components:{

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
//          sourceType: 'camera', //album 从相册选图，camera 使用相机，默认二者都有
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
            token:"9DdPcD6YxZaB51a4RkUyg8VkH8vXmsWwuqGwf_c9:NGFNJx-CqaLyAHuAR-At5_VD9TE=:eyJkZXRlY3RNaW1lIjoxLCJzY29wZSI6InlvdWRpYW4iLCJkZWFkbGluZSI6MTUxMjk4NTM3MH0="
          },
          name: 'file',
          filePath:this.images[0]
//          filePath:'zcfile://tmp_L3N0b3JhZ2UvZW11bGF0ZWQvMC9QaWN0dXJlU2VsZWN0b3IvQ2FtZXJhSW1hZ2UvUGljdHVyZVNl\nbGVjdG9yXzIwMTcxMjA1XzIzMDAwMC5KUEVH\n'
        },function (successData) {
          console.log(successData)
        },function (err) {
          console.log(err)
        },function (process) {
          console.log(process)
        })
      },
    }
  }
</script>