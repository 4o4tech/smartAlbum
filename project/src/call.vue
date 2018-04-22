
<template>
	
<!-- <text class="text_call" @click="pick"> Call </text> -->


<div @click="jump" class="div_btn"><text class="btn_text">call</text></div>


</template>



<script>
import Nat from 'natjs';
import list from './list.vue'

// const Nat = weex.requireModule('natjs');
const modal = weex.requireModule('modal');
var navigator = weex.requireModule('navigator')

export default{

	methods: {

	jump() {
			Nat.camera.captureImage({}, (err, ret) => {
        console.log(ret.path)
      })
    }
  }
}


</script>

<style scpoed>
	
.text_call{
	font-size: 24px;


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

</style>