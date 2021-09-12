<template>


<div  id="cadastrar">
<b-form >


 <b-form-group label="Nome">
 <b-form-input type="text" name="nome" v-model="cadastro.nome"></b-form-input></b-form-group>

<b-form-group label="Email">
<b-form-input type="text" name="email" v-model="cadastro.email"></b-form-input></b-form-group>

<b-form-group label="CPF">
<b-form-input type="text" name="cpf" v-model="cadastro.cpf"></b-form-input></b-form-group>

<b-form-group label="Data_De_Nacimento">
<b-form-input type="text" name="data_de_nacimento" v-model="cadastro.data_de_nacimento"></b-form-input></b-form-group>

<b-form-group label="Senha">
<b-form-input type="text" name="senha" v-model="cadastro.senha"></b-form-input></b-form-group>

<b-form-group label="Telefone">
<b-form-input type="text" name="telefone" v-model="cadastro.telefone"></b-form-input></b-form-group>

<b-form-group label="Endereco">
<b-form-input type="text" name="endereco" v-model="cadastro.endereco"></b-form-input></b-form-group>

<b-form-group label="Estado">
<select id="estado" name="estado" v-model="cadastro.estado">
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
</select></b-form-group>

<b-form-group label="Cidade" >
<b-form-input type="text" name="cidade" v-model="cadastro.cidade"></b-form-input></b-form-group>

<b-button size="lg" type="submit" variant="primary" @click="salvar">Cadastrar</b-button>

</b-form>


</div>
    
</template>

<script>
import api from '@/services/api'
export default{
data(){
return {
      cadastro:{
      nome:'',
      email:'',
      cpf: '',
      data_de_nacimento: '',
      telefone: '',
      senha:'',
      endereco:'',
      estado:'',
      cidade:''

        }
      }
 },
methods:{

  salvar(){
    api.post('user',this.cadastro)
   
    }
  }
}
</script>


<style>

</style>