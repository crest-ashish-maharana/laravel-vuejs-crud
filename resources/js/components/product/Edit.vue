<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Update Product</h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent="update">
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
                                    <input type="text" class="form-control" placeholder="Enter Title" v-model="product.detail">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <button type="submit" class="btn btn-primary">Update</button>
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
    name:"edit-product",
    data() {
        return {
            product: {
                name: "",
                detail: "",
                _method:"patch"
            }
        }
    },
    mounted() {
        this.showProduct()
    },
    methods: {
        async showProduct() {
            await axios.get(`/api/products/${this.$route.params.id}`)
            .then(response => {
                console.log('showProduct Response =>\n', response)
                const { name, detail } = response.data
                this.product.name = name
                this.product.detail = detail
            })
            .catch(error => {
                console.log('showProduct Error =>\n', response)
            })
        },
        async update() {
            await axios.post(`/api/products/${this.$route.params.id}`, this.product)
            .then(response => {
                console.log('updateProduct Response =>\n', response)
                this.$router.push({name:"productList"})
            })
            .catch(error => {
                console.log('updateProduct Error =>\n', error)
            })
        }
    }
}
</script>