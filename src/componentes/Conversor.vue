<template>
  <section class="">
    <div class="d-flex flex-column align-items-center m-0">
      <div class="w-50 d-flex flex-column align-items-center">

        <h1 class="m-4 h1">Conversor a Dólares</h1>

        <div class="mt-4 rounded border p-2" style="box-shadow: 3px 3px 2px lightgray; width: 60%">
          <!-- pesos -->
          <div class="form-group">
            <label for="pesos">cantidad de pesos</label>
            <input id="pesos" type="number" class="form-control" v-model.number="cantPesos" />
          </div>
          <!-- dolares -->
          <div class="form-group">
            <label for="dolares">valor del dolar en pesos</label>
            <input id="dolares" type="number" class="form-control" v-model.number="valorDelDolarEnPesos"
              :disabled="actualizarAutomaticamente" />
          </div>
          <div class="ml-3">
            <div class="form-check form-check-inline">
              <!-- check actualizar -->
              <input id="actualizar" type="checkbox" class="form-check-input" v-model="actualizarAutomaticamente"
                @click="cambiarActualizacionAutomatica()" />
              <label class="form-check-label ml-1 mr-1" for="actualizar">actualizar el valor del dolar automaticamente</label>
            
            </div>
            <p v-if="actualizarAutomaticamente" style="color: gray;">fecha consulta: {{fechaConsultaApi}}</p>
          </div>
        </div>

        <h4 class="m-4">{{cantDolares}}</h4>
      </div>
    </div>

  </section>
</template>

<script>

import * as valorDolar from "../servicios/valorDolar";

// funciones puras  @click="cambiarActualizacionAutomatica"

// funciones puras

export default {
  name: "src-componentes-conversor",
  components: {},
  props: [],
  data() {
    return {
      cantPesos: null,
      valorDelDolarEnPesos: null,
      actualizarAutomaticamente: false,
      intervaloInfoDolarID:"",
      fechaConsultaApi:"",
    };
  },
  computed: {
    cantDolares(){
      if(this.cantPesos == null) return "Ingrese un monto de pesos.";
      if(!this.valorDelDolarEnPesos) return "Ingrese el valor del dolar, debe ser mayor a 0.";
      const valorDolar = Number((this.cantPesos / this.valorDelDolarEnPesos).toFixed(2));
      return "Valor Convertido USD: " + valorDolar;
    }
  },
  methods: {
    async actualizarValorDelDolarEnPesos(){
      const fechaActual = new Date()
      this.fechaConsultaApi = fechaActual.toLocaleString();
      this.valorDelDolarEnPesos = await valorDolar.getValorVentaDolarBlue();
    },

    async cambiarActualizacionAutomatica(){
      if(!this.actualizarAutomaticamente){
        this.intervaloInfoDolarID = setInterval(this.actualizarValorDelDolarEnPesos, 2000);
      }else{
        clearInterval(this.intervaloInfoDolarID);
      }
    }
  },
  beforeUnmount() { 
    clearInterval(this.intervaloInfoDolarID); 
  }
};
</script>

<style>
  label {
    text-transform: capitalize;
  }
</style>
