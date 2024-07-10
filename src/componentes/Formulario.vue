<template>
  <section class="">
    <div class="d-flex flex-column align-items-center m-0">
      <div class="w-50 d-flex flex-column align-items-center">
        <h2 class="display-4 text-center m-2">Componente Formulario</h2>

        <div
          class="mt-4 rounded border p-2"
          style="box-shadow: 3px 3px 2px lightgray; width: 60%"
        >
          <form novalidate @submit.prevent="enviar()">
            <!-- Campo nombre -->
            <div class="form-group">
              <label for="nombre">nombre</label>
              <input
                id="nombre"
                type="text"
                class="form-control"
                v-model.trim="formData.nombre"
              />
              <div
                v-if="formData.nombre && !nombreValido"
                class="alert alert-danger mt-2 m-1"
              >
                <span>El nombre debe tener entre 5 y 15 caracteres</span>
              </div>
            </div>
            <!-- Campo edad -->
            <div class="form-group">
              <label for="edad">edad</label>
              <input
                id="edad"
                type="number"
                class="form-control"
                v-model.number="formData.edad"
              />
              <div
                v-if="formData.edad && !edadValida"
                class="alert alert-danger mt-2 m-1"
              >
                <span>La edad debe estar entre los 18 y los 120 años</span>
              </div>
            </div>
            <!-- Campo email -->
            <div class="form-group">
              <label for="email">email</label>
              <input
                id="email"
                type="email"
                class="form-control"
                v-model="formData.email"
              />
              <div
                v-if="formData.email && !emailValido"
                class="alert alert-danger mt-2 m-1"
              >
                <span>Campo requerido</span>
              </div>
            </div>
            <div class="w-100 pl-1 pr-1 mt-4">
              <button
                class="btn btn-success btn-block my-3"
                :disabled="validarBotonEnvio"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>

      <div v-if="usuarios.length" class="table-responsive w-75 mt-5">
        <table class="table text-center">
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Email</th>
          </tr>
          <tr v-for="(usuario, index) in usuarios" :key="index">
            <td class="text-capitalize">{{ usuario.nombre }}</td>
            <td>{{ usuario.edad }}</td>
            <td>{{ usuario.email }}</td>
          </tr>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
function nombreRegex(nombre) {
  return /^[A-Za-z]{5,15}$/.test(nombre);
}

function edadRegex(edad) {
  const edadNumber = Number(edad);
  return edadNumber >= 18 && edadNumber <= 120;
}

function emailRegex(email) {
  //RFC 5322 copiado

  const validacion =
    /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/.test(
      email
    );

  return validacion;
}

export default {
  name: "src-componentes-formulario",
  components: {},
  props: [],
  data() {
    return {
      formData: this.getInicialData(),
      usuarios: [],
    };
  },
  computed: {
    nombreValido() {
      return nombreRegex(this.formData.nombre);
    },

    edadValida() {
      return edadRegex(this.formData.edad);
    },

    emailValido() {
      return emailRegex(this.formData.email);
    },

    validarBotonEnvio() {
      return !(this.nombreValido && this.edadValida && this.emailValido);
    },
  },
  methods: {
    getInicialData() {
      return {
        nombre: null,
        edad: null,
        email: null,
      };
    },

    enviar() {
      this.usuarios.push(this.formData);

      this.formData = this.getInicialData();
    },
  },
};
</script>

<style>
label {
  text-transform: capitalize;
}
</style>
