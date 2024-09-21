<template>
  <div>
    <ul>
      <li v-for="personTenant in tenant" :key="personTenant.id">
        <pv-card style="width: 25rem; overflow: hidden">
          <template #header>
            <img alt="user header" src="https://primefaces.org/cdn/primevue/images/usercard.png" width="100%" />
          </template>
          <template #title>{{ personTenant.name }}</template>
          <template #subtitle>DNI: {{ personTenant.dni }}</template>
          <template #footer>
            <div class="flex gap-4 mt-1">
              <pv-button label="Details" class="w-full" @click="goToDetails(personTenant.id)" />
            </div>
          </template>
        </pv-card>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const tenant = ref([]); // Aquí almacenarás los inquilinos
const router = useRouter();

const goToDetails = (tenantId) => {
  router.push({
    path: '/table-rents',
    query: { id: tenantId }
  });
};

onBeforeMount(async () => {
  try {
    const response = await axios.get('http://localhost:3000/tenant'); // Asegúrate de poner la URL correcta
    tenant.value = response.data; // Asigna los datos de la API a `tenant`
  } catch (error) {
    console.error('Error al obtener los inquilinos:', error);
    // Aquí puedes manejar el error como desees, como mostrar un mensaje al usuario
  }
});
</script>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  list-style-type: none;
}
</style>