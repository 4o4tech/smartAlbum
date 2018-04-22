<template>
  <div @click="click" class="div_btn">
    <text class="btn_text">testMyModule</text>


     <!-- <pickItem tel="12305" style="width:200;height:100">12305</pickItem> -->
  </div>


</template>

<script>

  module.exports = {

    methods: {
      click: function() {
        
        weex.requireModule('imagePick').chooseImage({
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
                })
        
      }
    }
  }
</script>

<style scoped>
  
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

</style>