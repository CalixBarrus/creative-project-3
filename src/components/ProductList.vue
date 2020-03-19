<template>
  <div>
  <div class="wrapper">
    <div class="products">
      <div class="product" v-for="product in products" :key="product.id">
        <div class="product-header">
          <h2>{{product.name}}</h2>
          <p>{{product.species}}</p>
        </div>
        <div class="image">
          <img :src="'/images/products/'+product.image">
        </div>
        <div class="product-profile">
          <p>Weight: {{product.weight}}</p>
          <p>Height: {{product.height}}</p>
          <p>Favorite Activity: {{product["fav-activity"]}}</p>
          <p>Favorite Food: {{product["fav-food"]}}</p>
          <p>Catchphrase: {{product.catchphrase}}</p>
          <!-- <button class="favorite-button" @click="toggleFavorite(animal)" ><i :class={ far: animal.isFavorite, fas: !animal.isFavorite, 'fa-heart': true }></i></button> -->
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<script>
export default {
  name: "ProductList",
  props: {
    products: Array,
  },
  methods: {
    // toggleFavorite(animal) {
      // Do stuff
  //  }
  }
  // computed: {
    // iconClass: () => {
    //   return {
    //     far: this.$root.$data.favorites.find(animal.name), // Regular
    //     fas: !this.$root.$data.favorites.find(animal.name), // Solid
    //     'fa-heart': true
    //   }
    // }
  // },
};
</script>

<style scoped>

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.animals {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.animal {
  margin: 10px;
  margin-top: 50px;
  max-width: 450px;
}

.image img {
  max-height: 300px;
}

</style>