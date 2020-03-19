<template>


  <div class="wrapper">
    <h1>Animal for loop right here</h1>
    <div class="animals">
      <div class="animal" v-for="animal in animals" :key="animal.id">
        <div class="animal-header">
          <h1>{{animal.name}}</h1>
          <p>{{animal.species}}</p>
        </div>
        <div class="image">
          <img :src="'/images/animals/'+animal.image">
        </div>
        <div class="animal-profile">
          <h2>{{animal.catchphrase}}</h2>
          <!-- <button class="auto" @click="addToCart(animal)" >Add to Cart</button> -->
        </div>
      </div>
    </div>
  </div>


</template>

<script>
export default {
  name: "AnimalList",
  props: {
    animals: Array,
  }
};
</script>