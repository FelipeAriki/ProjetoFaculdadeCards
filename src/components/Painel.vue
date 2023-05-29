<template>
        <div class="d-flex flex-wrap justify-content-between p-5">
          <div v-for="vaga in vagas" :key="vaga.id">
              <Card :vaga="vaga"/>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <input class="form-control align-items-center mb-5 mt-5" type="text" placeholder="Informe o cargo que está procurando"  @change="buscarCargo($event.target.value)" style="width:318px"/>
        </div>
</template>


<script scoped>
import Card from './Card.vue'

export default {
    name:'Painel',
    components:{
      Card
    },
    data(){
      return{
        vagas: [{
                logo:'',
                cargo: '',
                cidade:'',
                estado:'',
                requisitos:'',
                formacao:'',
                regime:'',
                jornada:'',
                remuneracao:''
            }]
      }
    },
    mounted(){
        this.obterVagas();
    },
    methods: {
      obterVagas() {
            fetch('http://localhost:8081/vagas/obterVagas', { method: 'GET' })
            .then((res) => {
                return res.json();
            })
            .then((response) => {
                this.vagas = response;
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {

            });
        },
        buscarCargo(frase){
            fetch('http://localhost:8081/vagas/obterVagasPorCargo?cargo='+frase, { method: 'GET' })
            .then((res) => {
                return res.json();
            })
            .then((response) => {
                this.vagas = response;
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {

            });
        }
    }
}


</script>