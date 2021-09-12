<template>
    <div > 
     <table>
       <thead>
      <tr>
         <th>nome</th>
         <th>email</th>
         <th>cpf</th>
         <th>data_de_nacimento</th>
         <th>telefone</th>
         <th>endereço</th>
         <th>estado</th>
         <th>cidade</th>
         <th>editar</th>
         <th>deletar</th>
      </tr >
      </thead>
      <tbody>
     <tr>
   <td >{{listar.nome}}</td>
   <td > {{listar.email}}</td>
   <td>{{listar.cpf}}</td>
   <td>{{listar.data_de_nacimento}}</td>
   <td> {{listar.telefone}}</td>
   <td>{{listar.endereco}}</td>
   <td>{{listar.estado}}</td>
   <td>{{listar.cidade}} </td>
   <td ><button @click="editar">editar</button></td>
   <td><button @click="deletar">deletar</button></td>
  </tr>
   </tbody>
 </table>
 </div>
</template>

<script>
import api from '@/services/api'

export default{



data(){
    return{
        
        listar:"",
        }
      
         
       
    
   },
   
mounted(){ 
   api.get('/user/'+this.$route.params.user)
  .then( (response)=> {
    this.listar=response.data
    return this.listar})},

methods:{
  editar(){
      
  },
      
  deletar(){
      api.delete('/user/'+this.$route.params.user)
  }
 }
}
</script>

<style >

</style>