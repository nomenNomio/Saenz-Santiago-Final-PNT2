<template>
  <section>
    <div class="d-flex flex-column align-items-center w-100">
      <h2 class="display-4 text-center m-2">Componente Usuarios API</h2>
      <h4
        class="text-center m-2 text-muted"
        style="font-weight: 300; line-height: 1.2"
      >
        El request se hace en el mounted
      </h4>

      <div v-if="usuarios.length" class="table-responsive w-75 mt-5 mb-3">
        <table class="table text-center">
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Numero de Telefono</th>
          </tr>
          <tr v-for="(usuario, index) in usuarios" :key="index">
            <td class="text-capitalize">{{ usuario.nombre }}</td>
            <td>{{ usuario.email }}</td>
            <td>{{ usuario.telefono }}</td>
          </tr>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
import * as ServiciosUsuario from "../servicios/usuarios";

export default {
  name: "src-componentes-usuarios",
  props: [],
  data() {
    return {
      usuarios: [],
    };
  },
  async mounted() {
    this.usuarios.push(...(await this.getUsuarios()));
  },
  methods: {
    async getUsuarios() {
      return await ServiciosUsuario.getUsuarios();
    },
  },
};
</script>
