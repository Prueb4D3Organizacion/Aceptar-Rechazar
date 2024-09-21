<template>
  <div class="data-management">
    <PersonRents
      v-if = "!selectedTenants.length"
      @Details="addTenantToTable"
    />
    <TableRents
      v-else
      :tenenList="selectedTenants"
    />
  </div>
</template>

<script setup>

import PersonRents from '@/contexts/learning/components/person-rents.vue'
import TableRents from '@/contexts/learning/components/table-rents.vue'
import { ref } from 'vue';

const selectedTenants = ref([]);

const addTenantToTable = (tenant) => {
  selectedTenants.value.push(tenant);
};
</script>

<style scoped>

</style>