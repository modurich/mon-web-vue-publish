
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

            { path: '/publish/A_12100_U', component: () => import('pages/publish/A_12100_U.vue') },
            { path: '/publish/A_12200_U', component: () => import('pages/publish/A_12200_U.vue') },

            { path: '/publish/A_21121_P', component: () => import('pages/publish/A_21121_P.vue') },
            { path: '/publish/A_21120_T', component: () => import('pages/publish/A_21120_T.vue') },
            { path: '/publish/A_21000_T', component: () => import('pages/publish/A_21000_T.vue') },
            { path: '/publish/A_22100_P', component: () => import('pages/publish/A_22100_P.vue') },
            { path: '/publish/A_21310_T', component: () => import('pages/publish/A_21310_T.vue') },
            { path: '/publish/A_21510_T', component: () => import('pages/publish/A_21510_T.vue') },
            { path: '/publish/A_70000_P', component: () => import('pages/publish/A_70000_P.vue') },
            { path: '/publish/A_22923_P', component: () => import('pages/publish/A_22923_P.vue') },
            { path: '/publish/A_100_U', component: () => import('pages/publish/A_100_U.vue') },
            { path: '/publish/A_101_U', component: () => import('pages/publish/A_101_U.vue') },
            { path: '/publish/A_102_U', component: () => import('pages/publish/A_102_U.vue') },
            { path: '/publish/A_103_U', component: () => import('pages/publish/A_103_U.vue') },
            { path: '/publish/A_104_U', component: () => import('pages/publish/A_104_U.vue') },
            { path: '/publish/A_105_U', component: () => import('pages/publish/A_105_U.vue') },
            { path: '/publish/A_106_U', component: () => import('pages/publish/A_106_U.vue') },
            { path: '/publish/A_50000_P', component: () => import('pages/publish/A_50000_P.vue') },
            { path: '/publish/H_21000_T', component: () => import('pages/publish/H_21000_T.vue') },
            { path: '/publish/A_51100_P', component: () => import('pages/publish/A_51100_P.vue') },
            { path: '/publish/C_21100_T', component: () => import('pages/publish/C_21100_T.vue') },
            { path: '/publish/H_50000_P', component: () => import('pages/publish/H_50000_P.vue') },
            { path: '/publish/H_41000_T', component: () => import('pages/publish/H_41000_T.vue') }
        ]
    },
    {
        path: '/publish',
        component: () => import('layouts/MonstockLayout1.vue'),
        children: [
            { path: '', component: () => import('src/pages/publish/index.vue') },
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
