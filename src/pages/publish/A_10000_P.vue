<template>
    <div class="login_wrap">
      <q-form>
        <div class="login_area">
          <div class="monstock_logo l_row"><img src="~assets/logo.svg" alt="monstock logo"/></div>
          <div class="l_row"><m-select v-model="model" :options="options" label="Standard"/></div>
          <div class="l_row"><m-input filled v-model="text1" label="filled" class="round_type"/></div>
          <div class="l_row"><m-input filled v-model="text1" label="filled" class="round_type"/></div>
          <div class="btn_wrap l_row"><m-button-3 color="slateBlue" class="full">slateBlue</m-button-3></div>
        </div>
      </q-form>
    </div>
</template>

<script>
export default {
    name: 'A_10000_P'
};
</script>
