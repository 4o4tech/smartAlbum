import Vue from 'vue'
import Router from 'vue-router'


import Main from '@/components/main'
import Upload from '@/components/upload'
import Mine from '@/component/HelloWorld'



Vue.use(Router)


    // mode: 'abstract',
//     routes : [
//   {path: '/', component: main },
//   {path: '/upload', component: Upload },
//   {path:'/mine',component:Mine}
// ] 


module.exports = new Route({
	routes: [
    {
      path: '/',
      components: {
        default: Main,
        upload: Upload,
        mine: Mine
      }
    }
  ]

})




