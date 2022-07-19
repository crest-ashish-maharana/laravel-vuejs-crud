const routes = [
    {
        name: 'productList',
        path: '/products',
        component: () => import('./components/product/List.vue')
    },
    {
        name: 'productAdd',
        path: '/products/add',
        component: () => import('./components/product/Add.vue')
    },
    {
        name: 'productEdit',
        path: '/products/:id/edit',
        component: () => import('./components/product/Edit.vue')
    }
]


export default routes;