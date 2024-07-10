<template>
  <section class="">
    <div class="">
      <!-- pesos -->
      <div class="form-group">
        <label for="pesos">cantidad de pesos</label>
        <input
          id="pesos"
          type="number"
          class="form-control"
          v-model.number="cantPesos"
        />
      </div>
      <!-- dolares -->
      <div class="form-group">
        <label for="dolares">valor del dolar en pesos</label>
        <input
          id="dolares"
          type="number"
          class="form-control"
          v-model.number="valorDelDolarEnPesos"
          :disabled="actualizarAutomaticamente"
        />
        <label for="actualizar">actualizar automaticamente</label>
        <input
          id="actualizar"
          type="checkbox"
          class="form-control"
          v-model="actualizarAutomaticamente"
          @click="cambiarActualizacionAutomatica()"
        />
      </div>
      <p v-if="actualizarAutomaticamente">fecha consulta: {{fechaConsultaApi}}</p>
    </div>
    <p>{{cantDolares}}</p>
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
      return this.cantPesos / this.valorDelDolarEnPesos;
    }
  },
  methods: {
    async actualizarValorDelDolarEnPesos(){
      this.fechaConsultaApi = new Date();
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
};
</script>

<style>
  label {
    text-transform: capitalize;
  }
</style>
