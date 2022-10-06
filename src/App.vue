<template>
    <div id="q-app">
        <router-view />
    </div>
</template>

<script>
import _ from 'lodash';
import './css/app.sass';
import './css/app_legacy.sass';
import './css/mbadge.css';
import './css/monstock.scss';
import './css/monstock_layout.scss';
import './css/monstock_components.scss';

export default {
    name: 'App'
};
</script>
