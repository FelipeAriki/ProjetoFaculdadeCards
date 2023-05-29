<template>
        <div class="flip-card mb-5">
            <div class="flip-card-inner">
                <div class="flip-card-front rounded bg-white">
                    <img v-bind:src="vaga.logo" alt="logo da empresa" width="200" height="90"/>
                    <p>{{ vaga.cargo }}</p>
                    <p>{{ vaga.regime }}</p>
                    <p>{{ vaga.cidade +" - "+ vaga.estado }}</p>
                </div>
                <div class="flip-card-back rounded p-4 bg-white text-black">
                    <div>
                        <p>{{ vaga.requisitos }}</p>
                        <p>{{ vaga.formacao }}</p>      
                        <p>{{ vaga.jornada }}</p>
                        <p>{{ "R$ "+ vaga.remuneracao }}</p>
                    </div>
                </div>
            </div>
        </div>
</template>


<script>
export default {
    name:'Card',
    props:{
        vaga:Object
    },
    data() {
        return {
            
        }
    },
    mounted(){
        
    },
    methods: {
        
    }
}


</script>


<style scoped>
/* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
.flip-card {
  background-color: transparent;
  width: 400px;
  height: 200px;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  background-color: #bbb;
  color: black;
}

/* Style the back side */
.flip-card-back {
  background-color: dodgerblue;
  color: white;
  transform: rotateY(180deg);
}
</style>