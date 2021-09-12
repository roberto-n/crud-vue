<template>
    

    <div id="editar">
    <p >Nome:{{listar.nome}}</p>
    <input type="text" name="nome" v-model="listar.nome"> 
    <p >Email:{{listar.email}}</p>
    <input type="text" name="email" v-model="listar.email" >
    <p >CPF:{{listar.cpf}}</p>
    <input type="text" name="cpf" v-model="listar.cpf"> 
    <p >Data De Nacimento: {{listar.data_de_nacimento}}</p>
    <input type="text" name="data_de_nacimento" v-model="listar.data_de_nacimento">
    <p >Telefone: {{listar.telefone}}</p>
    <input type="text" name="telefone" v-model="listar.telefone">
    <p >Endereço:{{listar.endereco}}</p>
    <input type="text" name="endereco" v-model="listar.endereco">
    <p >Estado:{{listar.estado}}</p>
    <select id="estado" name="estado" v-model="listar.estado">
    <option value="AC">Acre</option>
    <option value="AL">Alagoas</option>
    <option value="AP">Amapá</option>
    <option value="AM">Amazonas</option>
    <option value="BA">Bahia</option>
    <option value="CE">Ceará</option>
    <option value="DF">Distrito Federal</option>
    <option value="ES">Espírito Santo</option>
    <option value="GO">Goiás</option>
    <option value="MA">Maranhão</option>
    <option value="MT">Mato Grosso</option>
    <option value="MS">Mato Grosso do Sul</option>
    <option value="MG">Minas Gerais</option>
    <option value="PA">Pará</option>
    <option value="PB">Paraíba</option>
    <option value="PR">Paraná</option>
    <option value="PE">Pernambuco</option>
    <option value="PI">Piauí</option>
    <option value="RJ">Rio de Janeiro</option>
    <option value="RN">Rio Grande do Norte</option>
    <option value="RS">Rio Grande do Sul</option>
    <option value="RO">Rondônia</option>
    <option value="RR">Roraima</option>
    <option value="SC">Santa Catarina</option>
    <option value="SP">São Paulo</option>
    <option value="SE">Sergipe</option>
    <option value="TO">Tocantins</option>
    <option value="ET">Estrangeiro</option>
</select>
    <p >Cidade:{{listar.cidade}}</p>
   <input type="text" name="cidade" v-model="listar.cidade">
    <button @click="editar">editar</button>
   <button @click="deletar">deletar</button>
   </div>

</template>
<script>
import api from '@/services/api'
export default{
data(){
    return{
        listar:"",
    cadastro:{
      nome:'',
      email:'',
      cpf: '',
      data_de_nacimento: '',
      telefone: '',
      endereco:'',
      estado:'',
      cidade:''
         }
    }
   },
   mounted(){ 
   api.get('/user/'+this.$route.params.user)
  .then( (response)=> {
    this.listar=response.data
    return this.listar})},
methods:{
  editar(){
      api.put('/user/'+this.$route.params.user,this.listar)
  },
 deletar(){
      api.delete('/user/'+this.$route.params.user)
  }
 }
}

</script>
<style lang="scss">

</style>
