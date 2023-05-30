<template>
    <form class="row g-2">
        <div class="col-md-4">
            <label class="form-label">URL da Logo</label>
            <input type="text" class="form-control" v-model="vaga.logo">
        </div>
        <div class="col-md-4">
            <label class="form-label">Estado</label>
            <select class="form-control" @change='buscarCidade($event.target.value)'>
                <option value="0">Selecione UF</option>
                <option v-for='estado in this.estados' :key="estado.id">{{estado.sigla}}</option>
            </select>
        </div>
        <div class="col-md-4" v-if="visivel">
            <label class="form-label">Cidade</label>
            <select class="form-control" @change='setarCidadeSelecionada($event.target.value)'>
                <option>Selecione uma Cidade</option>
                <option v-for='cidades in this.cidades' :key="cidades.id">{{cidades.nome}}</option>
            </select>
        </div>
        <div class="col-12">
            <label class="form-label">Jornada</label>
            <input type="text" class="form-control" v-model="vaga.jornada">
        </div>
        <div class="col-12">
            <label class="form-label">Requisitos</label>
            <input type="text" class="form-control" v-model="vaga.requisitos">
        </div>
        <div class="col-md-6">
            <label class="form-label">Formacao</label>
            <input type="text" class="form-control" v-model="vaga.formacao">
        </div>
        
        <div class="col-md-2">
            <label class="form-label">Regime</label>
            <input type="text" class="form-control" v-model="vaga.regime">
        </div>
        <div class="col-md-2">
            <label class="form-label">Remuneração</label>
            <input type="text" class="form-control" v-model="vaga.remuneracao">
        </div>
        <div class="col-md-2">
            <label class="form-label">Cargo</label>
            <input type="text" class="form-control" v-model="vaga.cargo">
        </div>
        <div class="col-12">
            <button type="button" class="btn btn-primary" @click="submitForm">Cadastrar</button>
        </div>
    </form>
</template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: 'CadastroVaga',
    data() {
      return {
        vaga:{
            logo:'',
            cargo: '',
            cidade:'',
            estado:'',
            requisitos:'',
            formacao:'',
            regime:'',
            jornada:'',
            remuneracao:''
        },
        visivel:false,
        cidades:'',
        estados:''
      };
    },
    mounted(){
        axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
            .then(response => {this.estados = response.data})
            .catch(err=>this.estados = '{"sigla":""}'); 
    },
    methods: {
      submitForm() {
        const dados = JSON.stringify(this.vaga);
        fetch("http://localhost:8081/vagas/cadastrarVaga", 
            {
                method: 'POST',
                headers: new Headers({'Content-Type': 'application/json'}), 
                body: dados
            })
            .then((r) => {return r.json()})
            .then((response) => {
                if(response.insertedId){
                    alert("Vaga cadastrada!");
                    window.location.reload();
                }
            })
            .catch((error) => {
                console.log(error)
            });
      },
        buscarCidade(uf){
            axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados/'+uf+'/municipios')
            .then(response => {this.cidades = response.data; this.vaga.estado = uf; this.visivel=true})
            .catch(err =>this.cidades = "");
        },
        setarCidadeSelecionada(city){
            this.vaga.cidade = city;
        },
    }
  }
  </script>
  
  <style>
  .container {
    max-width: 500px;
  }
  </style>
  