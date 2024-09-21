<template>
  <div v-if="selectedTenant">
    <div class="card">
      <pv-data-table :value="[selectedTenant]" tableStyle="min-width: 50rem">
        <template #header>
          <div class="flex flex-wrap items-center justify-between gap-2">
            <span class="text-xl font-bold">Request Details</span>
          </div>
        </template>
        <pv-column field="name" header="Name"></pv-column>
        <pv-column header="Image">
          <template #body="slotProps">
            <img :src="slotProps.data.image_tenant" alt="tenant image" class="w-24 rounded" />
          </template>
        </pv-column>
        <pv-column field="dni" header="DNI"></pv-column>
        <pv-column field="email" header="Email"></pv-column>
        <pv-column field="status" header="Status">
          <template #body="slotProps">
            {{ slotProps.data.status }}
          </template>
        </pv-column>
        <pv-column header="Action">
          <template #body="slotProps">
            <pv-button label="Approve" severity="success" rounded @click="approveTenant" style="margin-right: 0.5rem;" />
            <pv-button label="Reject" severity="danger" rounded @click="rejectTenant" />
          </template>
        </pv-column>
      </pv-data-table>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import { TenantApiServices } from '@/contexts/learning/services/tenant-api.services.js';

const route = useRoute();
const tenantApiServices = new TenantApiServices();
const selectedTenant = ref(null);

const approveTenant = async () => {
  if (selectedTenant.value) {
    const { id: omitId, ...updatedTenant } = selectedTenant.value; // Omitimos el ID
    updatedTenant.status = 'Approved';

    try {
      await tenantApiServices.updateTenant(omitId, updatedTenant); // Asumiendo que existe un método para actualizar
      selectedTenant.value.status = 'Approved'; // Actualiza el estado local
    } catch (error) {
      console.error('Error al aprobar el inquilino:', error);
    }
  }
};

const rejectTenant = async () => {
  if (selectedTenant.value) {
    const { id: omitId, ...updatedTenant } = selectedTenant.value; // Omitimos el ID
    updatedTenant.status = 'Rejected';

    try {
      await tenantApiServices.updateTenant(omitId, updatedTenant); // Asumiendo que existe un método para actualizar
      selectedTenant.value.status = 'Rejected'; // Actualiza el estado local
    } catch (error) {
      console.error('Error al rechazar el inquilino:', error);
    }
  }
};

onBeforeMount(async () => {
  const tenantId = route.query.id;
  try {
    const response = await tenantApiServices.getTenant(tenantId);
    selectedTenant.value = {
      ...response.data,
      status: 'Pending', // Establece el estado predeterminado
    };
  } catch (error) {
    console.error('Error al obtener los detalles del inquilino:', error);
  }
});
</script>


<style scoped>

</style>