<template>
    <div class="list_box_wrap">
        <div id="group01" class="group_wrap">
            <p class="h1_type">M Tag</p>
            <div class="box_wrap">
                <div class="type_view">
                    <m-tag>H1</m-tag>
                </div>
            </div>
        </div>
        <div id="group02" class="group_wrap">
            <p class="h1_type">Form Tag</p>
            <div class="box_wrap">
                <p class="h2">Input</p>
                <div class="type_view">
                    <p class="sbt">basic type</p>
                    <m-input />
                    <p class="sbt">style type</p>
                    <m-input-style-button />
                    
                </div>
                <p class="h2">M Select</p>
                <div class="type_view">
                    <p class="sbt">Standard</p>
                    <m-select v-model="model" label="Standard"/>
                </div>
                <p class="h2">Radio</p>
                <div class="type_view">
                    <p class="sbt">basic</p>
                    <m-radio val="line1" label="Line1"/>
                    <m-radio val="line2" label="Line2"/>
                    <m-radio val="line3" label="Line3"/>
                    <m-radio val="line4" label="Line4"/>
                </div>  
                <p class="h2">Checkbox</p>
                <div class="type_view">
                    <p class="sbt">basic</p>
                    <m-checkbox val="" label="chk1"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MTabs from 'src/components/MTabs.vue';
import MAlert from 'src/components/MAlert.vue';
import MHeader from 'src/components/MHeader.vue';
import MMenu from 'src/components/MMenu.vue';
import MButton3 from 'src/components/MButton3.vue';
import MInput from 'src/components/MInput.vue';
import MSelect from 'src/components/MSelect.vue';
import MRadio from 'src/components/MRadio.vue';
export default {
    components: { MTabs, MAlert, MHeader, MMenu, MButton3, MSelect, MRadio },
    MInputname: 'publish',
    setup() {
        return {
            model:ref(null),
            options:[
                'Google', 'Facebook'
            ]
        }
    }
};
</script>
<style>
body{background:linear-gradient(to top right, #ffeff0 0%, #dcf6e7 100%);
    background:#ffeff0; /* Old browsers */
    background:-moz-linear-gradient(45deg, #ffeff0 1%, #dcf6e7 100%); /* FF3.6-15 */
    background:-webkit-linear-gradient(45deg, #ffeff0 1%,#dcf6e7 100%); /* Chrome10-25,Safari5.1-6 */
    background:linear-gradient(45deg, #ffeff0 1%,#dcf6e7 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffeff0', endColorstr='#dcf6e7',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
}
.btnTop {position:fixed;z-index:50;overflow:hidden;width:30px;height:30px;right:10px;bottom:10px}
.btnTop a {display:block;width:30px;height:30px;text-indent:-9999em;opacity:.7}
.btnTop a:hover {opacity:1}
.list_box_wrap {padding:0 20px 20px 20px;min-width:1000px}
.tabs {background-color:#46675c;position:fixed;top:0;right:0;left:0;z-index:49}
.tabs .logo {position:absolute;width:150px;top:0;left:0;height:50px;line-height:50px;color:#fff;font-weight:bold;text-align:center;background-color:#000;font-size:16px}
.tabs ul {overflow:hidden;margin-left:150px}
.tabs ul li {float:left;width:14.25%}
.tabs ul li a {display:block;text-align:center;height:50px;line-height:50px;font-weight:bold;color:#fff;font-size:13px;position:relative;font-family:'verdana'}
.tabs ul li a.active {background-color:#3ca66b}
.tabs ul li a:after {content:'';position:absolute;top:0;right:0;bottom:0;width:1px;background-color:rgba(255,255,255,.3)}
.tabs ul li:last-child {width:14.5%}
.tabs ul li:last-child a:after{display:none}

.h1_type {font-weight:bold;font-size:18px;color:#000;margin-bottom:10px;font-family:'verdana';padding-top:60px}
.h2 {background-color:#e0f2e8;margin:0 -20px;height:30px;line-height:30px;padding:0 20px;font-weight:bold;margin-bottom:10px}
.box_wrap {border:1px solid #ddd;padding:0 20px 0 20px;background-color:#fff}
.type_view {padding-bottom:20px;max-width:1080px}
.type_view .sbt {margin-bottom:5px;color:#333}
.type_view .sbt ~ .sbt {margin-top:10px}
.type_view.btn_view button {margin-right:20px}
.type_view > .checkbox, .type_view > .radio {margin-right:15px}
</style>