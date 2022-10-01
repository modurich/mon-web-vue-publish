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
                    <m-input v-model="text1" label="basic"/>
                    <m-input filled v-model="text1" label="filled" class="round_type"/>
                    <!-- <m-input outlined v-model="text1" label="outlined"/>
                    <m-input standout v-model="text1" label="standout"/>
                    <m-input standout="bg-teal text-orange" v-model="text1" label="custom standout"/>
                    <m-input borderless v-model="text1" label="borderless"/>
                    <m-input rounded filled v-model="text1" label="rounded filled"/>
                    <m-input rounded outlined v-model="text1" label="Rounded outlined" />
                    <m-input rounded standout v-model="text1" label="Rounded standout" />
                    <m-input square filled v-model="text1" label="Square filled" />
                    <m-input square outlined v-model="text1" label="Square outlined" />
                    <m-input square standout v-model="text1" label="Square standout" />    -->
                    <p class="sbt">color and icon</p>
                    <m-input color="purple-12" v-model="text1" label="purple-12">
                        <template v-slot:prepend>
                            <m-icon name="event"/>
                        </template>
                    </m-input>
                    <m-input color="teal" filled v-model="text1" label="teal">
                        <template v-slot:prepend>
                            <m-icon name="event"/>
                        </template>
                    </m-input>
                    <m-input color="gray-3" label-color="orange" v-model="text1" label="purple-12">
                        <template v-slot:append>
                            <m-icon name="event" color="orange"/>
                        </template>
                    </m-input> 
                    <m-input color="lime-11" borderColor="greed" bg-color="greed" filled v-model="text1" label="purple-12">
                        <template v-slot:prepend>
                            <m-icon name="event"/>
                        </template>
                    </m-input>                                                             
                    <p class="sbt">style type</p>
                    <m-input-style-button />
                    
                </div>
                <p class="h2">DateRangePicker</p>
                <div class="type_view">
                    <p class="sbt">Standard</p>
                    <m-date-range-picker v-model="date1" />
                </div>

                <p class="h2">Checkbox</p>
                <div class="type_view">
                    <m-textarea />
                </div>
                <p class="h2">M Select</p>
                <div class="type_view">
                    <p class="sbt">Standard</p>
                    <m-select v-model="select1" :options="options" label="Standard"/>
                </div>
                <p class="h2">Radio</p>
                <div class="type_view">
                    <p class="sbt">basic</p>
                    <m-radio v-model="rad1" val="A" label="A"/>
                    <m-radio v-model="rad1" val="B" label="B"/>
                    <m-radio v-model="rad1" val="C" label="C"/>
                    <m-radio v-model="rad1" val="D" label="D"/>
                    <p class="sbt">size</p>
                    <m-radio v-model="rad1" val="A" label="xs" size="xs" />
                    <m-radio v-model="rad1" val="B" label="sm" size="sm"/>
                    <m-radio v-model="rad1" val="C" label="md" size="md"/>
                    <m-radio v-model="rad1" val="D" label="lg" size="lg"/>
                    <m-radio v-model="rad1" val="E" label="xl" size="lg"/>
                    <m-radio v-model="rad1" val="F" label="30px" size="30px"/>
                    <p class="sbt">icon</p>
                    <m-radio v-model="rad1" val="A" label="A" size="15px" checked-icon="task_alt" unchecked-icon="panorama_fish_eye"/>
                    <m-radio v-model="rad1" val="B" label="B" size="15px" checked-icon="task_alt" unchecked-icon="panorama_fish_eye"/>
                    <m-radio v-model="rad1" val="C" label="C" size="15px" checked-icon="task_alt" unchecked-icon="panorama_fish_eye"/>
                    <m-radio v-model="rad1" val="D" label="D" size="15px" checked-icon="task_alt" unchecked-icon="panorama_fish_eye"/>                    
                    <p class="sbt">disable</p>
                    <m-radio disable v-model="rad1" val="A" label="A"/>
                    <m-radio disable v-model="rad1" val="B" label="B"/>
                    <m-radio disable v-model="rad1" val="C" label="C"/>
                    <m-radio disable v-model="rad1" val="D" label="D"/>    
                    <p class="sbt">label</p>
                    <m-radio v-model="rad1" val="A" label="Label on Right" right-label/>
                    <m-radio v-model="rad1" val="B" label="Label on Left" left-label/>                                    
                </div>  
                <p class="h2">Checkbox</p>
                <div class="type_view">
                    <p class="sbt">basic</p>
                    <m-checkbox v-model="check1" label="chk1"/>
                    <m-checkbox v-model="check2" label="chk2"/>
                    <m-checkbox v-model="check1" label="chk3"/>
                    <m-checkbox v-model="check2" label="chk4"/>
                    <p class="sbt">color</p>
                    <m-checkbox v-model="check1" label="teal" color="teal"/>
                    <m-checkbox v-model="check2" label="orange" color="orange"/>
                    <m-checkbox v-model="check1" label="red" color="red"/>
                    <m-checkbox v-model="check2" label="cyan" color="cyan"/>                    
                    <p class="sbt">label</p>
                    <m-checkbox v-model="check1" label="Label on Right" right-label/>
                    <m-checkbox v-model="check2" label="Label on Left" left-label/>
                    <p class="sbt">disable</p>
                    <m-checkbox disable v-model="check1" label="chk1"/>
                    <m-checkbox disable v-model="check2" label="chk2"/>
                    <m-checkbox v-model="check1" label="chk3"/>
                    <m-checkbox v-model="check2" label="chk4"/>                    
                    <p class="sbt">Icon</p>
                    <m-checkbox v-model="check4" val="A" size="xs" checked-icon="swipe_left"  unchecked-icon="swipe_right"/>
                    <m-space-v size="50"/>
                    <m-checkbox v-model="check4" val="B" size="xs" checked-icon="task_alt"    unchecked-icon="highlight_off"/>
                    <m-space-v size="50"/>
                    <m-checkbox v-model="check4" val="C" size="xs" checked-icon="star"        unchecked-icon="star_border"/>  
                    <p class="sbt">ArrayAsModel</p>
                    <m-checkbox v-model="check3" label="A" val="A"/>
                    <m-checkbox v-model="check3" label="B" val="B"/>
                    <m-checkbox v-model="check3" label="C" val="C"/>
                    <m-checkbox v-model="check3" label="D" val="D"/>
                    <p class="sbt">size</p>
                    <m-checkbox size="xs" v-model="check1" label="Size 'xs'"/>
                    <m-checkbox size="sm" v-model="check2" label="Size 'sm'"/>
                    <m-checkbox size="md" v-model="check1" label="Size 'md'"/>
                    <m-checkbox size="lg" v-model="check2" label="Size 'lg'" />
                    <m-checkbox size="xl" v-model="check1" label="Size 'xl'" />
                    <m-checkbox size="30px" v-model="check2" label="Size '30px'" />
                </div>
            </div>
        </div>
        <div id="group05" class="group_wrap">
            <p class="h1_type">Button</p>
            <div class="box_wrap">
                <p class="h2">Big Button</p>
                <div class="type_view">
                    <p class="sbt">basic</p>
                    <m-button-3>TYPE01</m-button-3>
                    <m-button-3>TYPE02</m-button-3>
                    <m-button-3>TYPE03</m-button-3>
                    <m-button-3>TYPE04</m-button-3>
                    <p class="sbt">disabled</p>
                    <m-button-3 disabled>TYPE01</m-button-3>
                    <m-button-3 disabled>TYPE02</m-button-3>
                    <m-button-3 disabled>TYPE03</m-button-3>
                    <m-button-3 disabled>TYPE04</m-button-3>
                </div>
                <p class="h2">Button Size [medium[default], large]</p>
                <div class="type_view">
                    <m-button-3 size="medium">medium</m-button-3>
                    <m-button-3 size="large">large</m-button-3>
                </div>
                <p class="h2">Color Button [mediumGrey[default], orange, crayolaFlamingoPink, slateBlue, vividRaseberry, duronResonantBlue]</p>
                <div class="type_view">
                    <m-button-3 color="mediumGrey">mediumGrey</m-button-3>
                    <m-button-3 color="orange">orange</m-button-3>
                    <m-button-3 color="crayolaFlamingoPink">crayolaFlamingoPink</m-button-3>
                    <m-button-3 color="slateBlue">slateBlue</m-button-3>
                    <m-button-3 colro="vividRaseberry">vividRaseberry</m-button-3>
                    <m-button-3 colro="duronResonantBlue">duronResonantBlue</m-button-3>
                </div>
                <p class="h2">Button Lined [true[default], false]</p>
                <div class="type_view">
                    <m-button-3 lined>True</m-button-3>
                    <m-button-3>False</m-button-3>
                </div>
                <p class="h2">Button round [true[default], false]</p>
                <div class="type_view">
                    <m-button-3 round>True</m-button-3>
                    <m-button-3 v-vind:round="false">False</m-button-3>
                </div>
                <p class="h2">Button To/Href</p>
                <div class="type_view">
                    <m-button-3 to="/A_10000_P">A_10000_P</m-button-3>
                    <m-button-3 href="http://google.com">To Google</m-button-3>
                </div> 
            </div>
        </div>
        <div id="group06" class="group_wrap">
            <p class="h1_type">Slide</p>
            <div class="box_wrap">
                <p class="h2">Slide</p>
                <div class="type_view">
                    <m-slide-dialog v-bind:title="slide1.title" v-bind:list="slide1.list" class="dialog"/>
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
import MSelect from 'src/components/MSelect.vue';
import MRadio from 'src/components/MRadio.vue';
import MSpaceV from 'src/components/MSpaceV.vue';
import { ref } from 'vue';
import MSlideDialog from 'src/components/MSlideDialog.vue';
import MTextarea from 'src/components/MTextarea.vue';

export default {
    components: { MTabs, MAlert, MHeader, MMenu, MButton3, MSelect, MRadio, MSpaceV, MSlideDialog, MTextarea },
    setup() {
        return {
            text1:ref(''),
            check1:ref(true),
            check2:ref(false),
            check3:ref(['A', 'C']),
            check4:ref(['A', 'B', 'C']),
            rad1:ref('B'),
            select1:ref("Facebook"),
            options:[
                'Google', 'Facebook'
            ],
            date1: {
                from:ref(''),
                to:ref('')
            },
            slide1: {
                title:'슬라이드쇼',
                list:['A', 'B', 'C']
            }
        }
    }
};
</script>
<style>
body{
    background:#f8f8f8;
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