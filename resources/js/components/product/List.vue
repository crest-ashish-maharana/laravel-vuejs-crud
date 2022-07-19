<template>
    <div class="row">
        <div class="col-12 mb-2 text-end">
            <router-link :to='{name:"productAdd"}' class="btn btn-primary">Create</router-link>
        </div>
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Products</h4>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Detail</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody v-if="products.length > 0">
                                <tr v-for="product in products" :key="product.id">
                                    <td>{{ product.id }}</td>
                                    <td>{{ product.name }}</td>
                                    <td>{{ product.detail }}</td>
                                    <td>
                                        <router-link :to='{name:"productEdit", params:{id:product.id}}' class="btn btn-primary">Edit</router-link>
                                        <button type="button" @click="deleteProduct(product.id)" class="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                            <tbody v-else>
                                <tr>
                                    <td colspan="4" align="center">No Products Found.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>>

<script>
export default {
    name:"products",
    data() {
        return {
            products: [],
        }
    },
    mounted() {
        this.getProducts()
    },
    methods: {
        async getProducts() {
            await axios.get('/api/products')
            .then(response => {
                console.log("getProducts Response => \n", response)
                this.products = response.data;
                console.log('products', this.products)
            })
            .catch(error => {
                console.log("getProducts Error => \n", error)
                this.products = [];
            })
        },
        deleteProduct(id){
            if(confirm('Are you sure you want to delete this product?')){
                axios.delete(`/api/products/${id}`)
                .then(response => {
                    console.log("deleteCategory Response => \n", response)
                    this.getProducts()
                })
                .catch(error => {
                    console.log("deleteCategory Error => \n", response)
                    console.log(error)
                })
            }
        }
    }
}
</script>