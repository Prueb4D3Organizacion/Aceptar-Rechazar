<script setup>
import TheHeader from './the-header.vue'
</script>

<template>
  <div class="layout">
    <TheHeader />
    <div class="main-content">
      <main class="content">
        <router-view></router-view>
      </main>
    </div>
  </div>

</template>

<style scoped>

.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  position: absolute;
  left: 0;
  top: 0;
  padding:10px;

}
.main-content {
  display: flex;
  flex: 1;
  padding: 10px; /* Espaciado interno */
  flex-wrap: wrap; /* Ajusta el contenido al tamaño de la pantalla */
  background-color: #f4f4f4; /* Color de fondo */
  gap: 5vh; /* Espaciado entre elementos */
  justify-content: center; /* Centra los elementos */
  align-content: center;


}
</style>