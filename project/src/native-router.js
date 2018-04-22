const domain='http://domain.com';
const routes = [{
    path:'/product/:id';
    component:domain+'/dist/product/detail.js';//js bundle address，must end with '.js'
    name:'product';
}];
export default routes;