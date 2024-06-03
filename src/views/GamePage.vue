<template>
  <v-container>
    <v-row justify="center">
      <v-col>
        <v-card>
          <v-card-title>Game</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="drawGrid">
              <v-text-field
                v-model.number="sizeX"
                label="Size X"
                type="number"
                required
              ></v-text-field>
              <v-text-field
                v-model.number="sizeY"
                label="Size Y"
                type="number"
                required
              ></v-text-field>
              <v-btn type="submit">Draw Grid</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
        <div class="grid-container" v-if="grid.length">
          <div class="grid">
            <div
              v-for="(row, rowIndex) in grid"
              :key="rowIndex"
              class="grid-row"
            >
              <div
                v-for="(cell, cellIndex) in row"
                :key="cellIndex"
                class="grid-cell"
                :class="{ 'blue': cell }"
                @mouseover="toggleCellColor(rowIndex, cellIndex)"
              ></div>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';

const sizeX = ref(64);
const sizeY = ref(64);
const grid = ref([]);

function drawGrid() {
  grid.value = Array.from({ length: sizeY.value }, () => Array(sizeX.value).fill(false));
}

function toggleCellColor(rowIndex, cellIndex) {
  grid.value[rowIndex][cellIndex] = !grid.value[rowIndex][cellIndex];
}
</script>

<style scoped>
.grid-container {
  max-width: 100%;
  max-height: 80vh;
  overflow: auto;
  margin-top: 20px;
}

.grid {
  display: flex;
  flex-direction: column;
}

.grid-row {
  display: flex;
}

.grid-cell {
  flex: 0 0 auto;
  width: 36px;
  height: 36px;
  border: 1px solid #ccc;
  background-color: white;
}

.grid-cell.blue {
  background-color: blue;
}
</style>
