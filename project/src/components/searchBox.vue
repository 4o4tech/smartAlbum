
<template>
  <div class="container">

   <wxc-minibar title="标题"
                   background-color="#009ff0"
                   text-color="#FFFFFF"
                   right-text="更多"
                   @wxcMinibarLeftButtonClicked="minibarLeftButtonClick"
                   @wxcMinibarRightButtonClicked="minibarRightButtonClick"></wxc-minibar>


    <wxc-searchbar ref="wxc-searchbar"
                     @wxcSearchbarCancelClicked="wxcSearchbarCancelClicked"
                     @wxcSearchbarInputReturned="wxcSearchbarInputReturned"
                     @wxcSearchbarInputOnInput="wxcSearchbarInputOnInput"
                     @wxcSearchbarCloseClicked="wxcSearchbarCloseClicked"
                     @wxcSearchbarInputOnFocus="wxcSearchbarInputOnFocus"
                     @wxcSearchbarInputOnBlur="wxcSearchbarInputOnBlur"></wxc-searchbar>
      <text class="value-text">{{value}}</text>
   
  </div>
</template>

<script>
  import { WxcSearchbar,WxcMinibar } from 'weex-ui'

  const modal = weex.requireModule('modal');

  export default {
    components: { WxcSearchbar,WxcMinibar},
    data: () => ({
      value: ''
    }),
    methods: {
      wxcSearchbarInputOnFocus (e) {
      	this.value = e.value;
      },
      wxcSearchbarInputOnBlur () {
      },
      wxcSearchbarInputReturned (){
      },
      wxcSearchbarCloseClicked () {
      },
      wxcSearchbarInputOnInput () {
        
      },
      wxcSearchbarCancelClicked () {
      },
      minibarLeftButtonClick () {
      },
      minibarRightButtonClick () {
        modal.toast({ 'message': 'click rightButton!', 'duration': 1 });
      }
    }
  };
</script>

<style scoped>


  .container {
    background-color: #f2f3f4;
    top:0px;
    height: 200px;
  }
  .value-text {
    margin: 24px;
    font-size: 30px;
    /*color: #333333;*/
    
  }
  .hint {
    margin-left: 24px;
    font-size: 30px;
    /*color: #333333;*/
  }
	
</style>