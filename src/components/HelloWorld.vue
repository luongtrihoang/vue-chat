<template>
  <div class="card">
    <OrderList v-model="products" listStyle="height:auto" dataKey="id">
      <template #header> List of Products </template>
      <template #item="slotProps">
        <div class="product-item">
          <div class="image-container">
            <img
              src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
              :alt="slotProps.item.name"
            />
          </div>
          <div class="product-list-detail">
            <h6 class="p-mb-2">{{ slotProps.item.name }}</h6>
            <i class="pi pi-tag product-category-icon"></i>
            <span class="product-category">{{ slotProps.item.category }}</span>
          </div>
          <div class="product-list-action">
            <h6 class="p-mb-2">${{ slotProps.item.price }}</h6>
            <span
              :class="
                'product-badge status-' +
                slotProps.item.inventoryStatus.toLowerCase()
              "
              >{{ slotProps.item.inventoryStatus }}</span
            >
          </div>
        </div>
      </template>
    </OrderList>
  </div>
  <div>
    <Button
      type="button"
      icon="pi pi-discord"
      label="Chat Bot"
      @click="toggle"
      aria:haspopup="true"
      aria-controls="overlay_panel"
    />
  </div>
</template>

<script>
import OrderList from "primevue/orderlist";

export default {
  name: "HelloWorld",
  components: {
    OrderList
  },
  data() {
    return {
      products: [],
      text: "",
      messages: [],
      visibleRight: false,
    };
  },
  created() {
    this.products = [
      {
        id: "1000",
        code: "f230fh0g3",
        name: "Bamboo Watch",
        description: "Product Description",
        image: "bamboo-watch.jpg",
        price: 65,
        category: "Accessories",
        quantity: 24,
        inventoryStatus: "INSTOCK",
        rating: 5,
      },
      {
        id: "1001",
        code: "nvklal433",
        name: "Black Watch",
        description: "Product Description",
        image: "black-watch.jpg",
        price: 72,
        category: "Accessories",
        quantity: 61,
        inventoryStatus: "INSTOCK",
        rating: 4,
      },
      {
        id: "1002",
        code: "zz21cz3c1",
        name: "Blue Band",
        description: "Product Description",
        image: "blue-band.jpg",
        price: 79,
        category: "Fitness",
        quantity: 2,
        inventoryStatus: "LOWSTOCK",
        rating: 3,
      },
      {
        id: "1003",
        code: "244wgerg2",
        name: "Blue T-Shirt",
        description: "Product Description",
        image: "blue-t-shirt.jpg",
        price: 29,
        category: "Clothing",
        quantity: 25,
        inventoryStatus: "INSTOCK",
        rating: 5,
      },
      {
        id: "1004",
        code: "h456wer53",
        name: "Bracelet",
        description: "Product Description",
        image: "bracelet.jpg",
        price: 15,
        category: "Accessories",
        quantity: 73,
        inventoryStatus: "INSTOCK",
        rating: 4,
      },
      {
        id: "1005",
        code: "av2231fwg",
        name: "Brown Purse",
        description: "Product Description",
        image: "brown-purse.jpg",
        price: 120,
        category: "Accessories",
        quantity: 0,
        inventoryStatus: "OUTOFSTOCK",
        rating: 4,
      },
      {
        id: "1006",
        code: "bib36pfvm",
        name: "Chakra Bracelet",
        description: "Product Description",
        image: "chakra-bracelet.jpg",
        price: 32,
        category: "Accessories",
        quantity: 5,
        inventoryStatus: "LOWSTOCK",
        rating: 3,
      },
      {
        id: "1007",
        code: "mbvjkgip5",
        name: "Galaxy Earrings",
        description: "Product Description",
        image: "galaxy-earrings.jpg",
        price: 34,
        category: "Accessories",
        quantity: 23,
        inventoryStatus: "INSTOCK",
        rating: 5,
      },
      {
        id: "1008",
        code: "vbb124btr",
        name: "Game Controller",
        description: "Product Description",
        image: "game-controller.jpg",
        price: 99,
        category: "Electronics",
        quantity: 2,
        inventoryStatus: "LOWSTOCK",
        rating: 4,
      },
      {
        id: "1009",
        code: "cm230f032",
        name: "Gaming Set",
        description: "Product Description",
        image: "gaming-set.jpg",
        price: 299,
        category: "Electronics",
        quantity: 63,
        inventoryStatus: "INSTOCK",
        rating: 3,
      },
    ];
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.card {
  background: #ffffff;
  padding: 2rem;
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  margin-bottom: 2rem;
}
.product-item {
  display: flex;
  align-items: center;
  padding: 0.5rem;
  width: 100%;
}
.product-item .image-container img {
  width: 75px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  margin-right: 1rem;
}

.product-list-detail {
  flex: 1 1 0;
}

.product-list-action {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.product-category-icon {
  vertical-align: middle;
  margin-right: 0.5rem;
  font-size: 0.875rem;
}

.product-category {
  vertical-align: middle;
  line-height: 1;
  font-size: 0.875rem;
}
</style>
