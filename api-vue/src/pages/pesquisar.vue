<template>
    
<div>
<b-form >


<b-form-group label="Nome">
<b-form-input type="text" name="nome" v-model="user"></b-form-input>
<b-button size="lg" type="submit" variant="primary" @click.prevent="pesquisa">Pesquisar</b-button></b-form-group>



</b-form>


<table>
     <tr>
         <th>nome</th>
         <th>email</th>
         <th>cpf</th>
         <th>data_de_nacimento</th>
         <th>telefone</th>
         <th>endereço</th>
         <th>estado</th>
         <th>cidade</th>
         <th>vizualizar</th>
         <th>editar</th>
         <th>deletar</th>
         

     </tr >
     <tr v-for="(item, index) in listar" :key="index" >
    <td >
   {{item.nome}}
   </td>
   <td >
   {{item.email}}
   </td>
   <td>
   {{item.cpf}}
   </td>
   <td >
   {{item.data_de_nacimento}}
    </td>
   <td >
   {{item.telefone}}
   </td>
   <td >
   {{item.endereco}}
   </td>
   <td >
   {{item.estado}}
   </td>
   <td >
   {{item.cidade}}

    </td>
    <td >
   

    <button @click="visualizar">visualizar</button>
    </td>
    
    <td >
   

    <button @click="editar">editar</button>
    </td>
    
   
   

   
    </tr>
 </table>

</div>
</template>
<script>
import api from '@/services/api'
import { mapMutations } from 'vuex'

export default{
data(){
    return{
        
        listar:"",
        user:"",
      
         
       
    }
   },

methods:{
  ...mapMutations(['adicionarUser']),
   
   
  pesquisa(){
       this.adicionarUser(this.user)
      api.get('/pesquisar/'+this.user)
  .then( (response)=> {
    this.listar=response.data
    return this.listar})},
    visualizar(){this.$router.push(`/visualizar/${this.listar[0].id}`)},
    editar(){this.$router.push(`/editar/${this.listar[0].id}`)},
  
}

}


















</script>
<style lang="scss">

</style>