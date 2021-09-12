import Vue from "vue";
import VueRouter from "vue-router";
import cadastrar from '../pages/cadastrar';
import pesquisar from '../pages/pesquisar';
import editar from '../pages/editar';
import visualizar from '../pages/visualizar';



Vue.use(VueRouter);



const routes = [{
    name:'cadastrar',
    path:'/cadastrar',
    component:cadastrar,},


{name:'pesquisar',
    path:'/pesquisar/',
    component:pesquisar},

{name:'visualizar',
path:'/visualizar/:user',
component:visualizar},

{name:'editar',
path:'/editar/:user',
component:editar}]


 
const router = new VueRouter({
    mode:'history',
    routes,
   
});

export default router
