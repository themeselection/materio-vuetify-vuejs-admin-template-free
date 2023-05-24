<script setup>
const desserts = [
  {
    dessert: 'Frozen Yogurt',
    calories: 159,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Ice cream sandwich',
    calories: 237,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Eclair',
    calories: 262,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Cupcake',
    calories: 305,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Gingerbread',
    calories: 356,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
]
</script>

<template>
  <VTable density="compact">
    <thead>
      <tr>
        <th class="text-uppercase">
          Desserts(100g Servings)
        </th>
        <th class="text-uppercase text-center">
          calories
        </th>
        <th class="text-uppercase text-center">
          Fat(g)
        </th>
        <th class="text-uppercase text-center">
          Carbs(g)
        </th>
        <th class="text-uppercase text-center">
          protein(g)
        </th>
      </tr>
    </thead>

    <tbody>
      <tr
        v-for="item in desserts"
        :key="item.dessert"
      >
        <td>
          {{ item.dessert }}
        </td>
        <td class="text-center">
          {{ item.calories }}
        </td>
        <td class="text-center">
          {{ item.fat }}
        </td>
        <td class="text-center">
          {{ item.carbs }}
        </td>
        <td class="text-center">
          {{ item.protein }}
        </td>
      </tr>
    </tbody>
  </VTable>
</template>
