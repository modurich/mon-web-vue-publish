
const routes = [
    {
        path: '/',
        component: () => import('layouts/MonstockLayout.vue'),
        //component: () => import('layouts/MonstockLayout_legacy.vue'),
        children: [
            { path: '', component: () => import('pages/Index.vue') },
            { path: '/publish', component: () => import('pages/publish/Index.vue') },
            { path: '/publish/UiGuide', component: () => import('pages/publish/UiGuide.vue') }
        ]
    },
    // Always leave this as last one,
    // but you can also remove it
    {
        path: '*',
        component: () => import('pages/Error404.vue')
    }
];

export default routes;
