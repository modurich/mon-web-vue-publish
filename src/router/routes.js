
const routes = [
    {
        path: '/',
        component: () => import('layouts/MonstockLayout.vue'),
        children: [
            { path: '', component: () => import('pages/Index.vue') },
            { path: '/publish/A_10000_P', component: () => import('pages/publish/A_10000_P.vue') },
            { path: '/publish/A_11000_P', component: () => import('pages/publish/A_11000_P.vue') },
            { path: '/publish/A_11100_P', component: () => import('pages/publish/A_11100_P.vue') },
            { path: '/publish/A_11200_P', component: () => import('pages/publish/A_11200_P.vue') },
            { path: '/publish/A_12000_P', component: () => import('pages/publish/A_12000_P.vue') },
            { path: '/publish/A_21121_P', component: () => import('pages/publish/A_21121_P.vue') },
            { path: '/publish/A_21120_T', component: () => import('pages/publish/A_21120_T.vue') }
        ]
    },
    {
        path: '/publish',
        component: () => import('layouts/MonstockLayout1.vue'),
        children: [
            { path: '', component: () => import('pages/publish/Index.vue') },
            { path: '/UiGuide', component: () => import('pages/publish/UiGuide.vue') }
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
