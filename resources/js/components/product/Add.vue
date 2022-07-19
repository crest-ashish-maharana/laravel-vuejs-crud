<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Add Product</h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent="create">
                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Name</label>
                                    <input type="text" class="form-control" placeholder="Enter Name" v-model="product.name">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Detail</label>
                                    <input type="text" class="form-control" placeholder="Enter Detail" v-model="product.detail">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <button type="submit" class="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"add-product",
    data() {
        return {
            product: {
                name: "",
                detail: "",
            }
        }
    },
    methods: {
        async create() {
            await axios.post('/api/products', this.product)
            .then(response => {
                console.log(response);
                this.$router.push({name:"productList"})
            })
            .catch(error => {
                console.log(error);
            })
        }
    }
}
</script>