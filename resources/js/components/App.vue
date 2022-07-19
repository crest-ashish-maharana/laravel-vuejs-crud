<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <router-link to="/" class="navbar-brand">Lavravel & Vue CRUD Demo - Ashish Maharana</router-link>
                <div class="collapse navbar-collapse">
                    <div class="navbar-nav">
                        <router-link :to="{ 'name': 'productList' }" class="nav-item nav-link">Products List</router-link>
                        <router-link :to="{ 'name': 'productAdd' }" class="nav-item nav-link" >Create Product</router-link>
                    </div>
                </div>
            </div>
        </nav>
        <div class="container mt-5">
            <div class="col-12 text-center">
                <h1>Laravel & Vue CRUD Demo</h1>
                <a href="http://ashish-maharana.github.io/" target="_blank">Visit to my portfolio</a>
            </div>
        </div>
        <div class="container mt-5">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "app"
    }
</script>