<template>
    <div class="list_box_wrap">
        <!--
        <div id="group01" class="group_wrap">
            <p class="h1_type">M Tag</p>
            <div class="box_wrap">
                <div class="type_view">
                    <m-tag>H1</m-tag>
                </div>
            </div>
        </div>
        -->
        <div id="group02" class="group_wrap">
            <p class="h1_type">Form Tag</p>
            <div class="box_wrap">
                <p class="h2">Input</p>
                <div class="type_view">
                    <p class="sbt">basic type</p>
                    <m-input v-model="text1" label="basic"/><br/>
                    <p class="sbt">round type</p>
                    <m-input rounded filled v-model="text1" label="filled"/><br/>
                    <m-input filled v-model="text1" label="filled" class="round_type"/><br />
                    <p class="sbt">disabled</p>
                    <m-input v-model="text1" label="basic" disabled/><br/>
                    <m-input filled v-model="text1" label="filled" class="round_type" disabled/><br/>
                    <p class="sbt">validate</p>
                    <m-input filled v-model="text1" 
                            class="round_type" 
                            label="필수입력" 
                            bottom-slots 
                            hint="이 필드는 필수입니다."
                            :rules="[val => !!val || '이 필드는 필수 입력입니다.']" ref="inputRef"/>
                    <m-space-h />
                    <m-input filled v-model="text2"  
                        class="round_type" 
                        label="max 3" 
                        bottom-slots 
                        hint="최대 3글자" 
                        error-message="최대 3글자만 입력하세요?"
                        :error="!isValid" />
                    <m-space-h />
                    <m-input filled 
                        v-model="text2" 
                        class="round_type" 
                        label="Type here" 
                        bottom-slots 
                        hint="최대 3글자" 
                        :error="!isValid">
                        <template v-slot:error>
                            Please use maximum 3 characters.
                        </template>
                    </m-input>
                    
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
                    <!-- <p class="sbt">color and icon</p>
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
                    
                </div> -->
                <p class="h2">DateRangePicker</p>
                <div class="type_view">
                    <p class="sbt">Standard</p>
                    <m-date-range-picker v-model="date1" />
                </div>

                <p class="h2">TextArea</p>
                <div class="type_view">
                    <m-textarea 
                        :maxlength="1000"
                        :showError="true"
                        :minHeight="textarea1.minHeight" 
                        :counter="textarea1.counter" 
                        :value="textarea1.value" 
                        :bottomMessage="textarea1.bottomMessage"
                        :height="50"
                        />
                        <!--
                        :maxlength="1000"
                        :height="100"
                        :showError="true"
                        :minHeight="textarea1.minHeight" 
                        :counter="textarea1.counter" 
                        :value="textarea1.value" 
                        :bottomMessage="textarea1.bottomMessage"
                        -->
                        
                </div>
        
                <p class="h2">M Select</p>
                <div class="type_view">
                    <p class="sbt">Standard</p>
                    <m-select v-model="select1" :options="options"/>
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
                    <m-checkbox v-model="check1" label="선택" />
                    <m-checkbox v-model="check2" label="미선택"/>
                    <m-checkbox  v-model="check2" label="비활성" disable/>
                    <m-checkbox v-model="check2" label="선택 비활성" disable/>
                    <p class="sbt">label position</p>
                    <m-checkbox v-model="check1" label="Label on Right" right-label/>
                    <m-checkbox v-model="check2" label="Label on Left" left-label/>
                    <!-- <p class="sbt">ArrayAsModel</p>
                    <div class="type_view">
                        <m-checkbox v-model="check3" label="A" val="A"/>
                        <m-checkbox v-model="check3" label="B" val="B"/>
                        <m-checkbox v-model="check3" label="C" val="C"/>
                        <m-checkbox v-model="check3" label="D" val="D"/>
                    </div> -->
                    <p class="sbt">size</p>
                    <div class="type_view">
                        <m-checkbox size="xs" v-model="check1" label="Size 'xs'"/>
                        <m-checkbox size="sm" v-model="check2" label="Size 'sm'"/>
                        <m-checkbox size="md" v-model="check1" label="Size 'md'"/>
                        <m-checkbox size="lg" v-model="check2" label="Size 'lg'" />
                        <m-checkbox size="xl" v-model="check1" label="Size 'xl'" />
                        <m-checkbox size="30px" v-model="check2" label="Size '30px'" />
                    </div>

                    <p class="sbt">Icon</p>
                    <div class="type_view">
                        <m-checkbox v-model="check4" val="A" size="xs" checked-icon="swipe_left"  unchecked-icon="swipe_right"/>
                        <m-space-v size="50"/>
                        <m-checkbox v-model="check4" val="B" size="xs" checked-icon="task_alt"    unchecked-icon="highlight_off"/>
                        <m-space-v size="50"/>
                        <m-checkbox v-model="check4" val="C" size="xs" checked-icon="star"        unchecked-icon="star_border"/>  
                    </div>

                    <p class="sbt">Toggle</p>
                    <div class="type_view">
                        <m-toggle v-model="toggle1"/>
                    </div>  
                </div>
            </div>
        </div>
        <div id="group05" class="group_wrap">
            <p class="h1_type">Button</p>
            <div class="box_wrap">
                <p class="h2">Button</p>
                <div class="type_view">
                    <p class="sbt">basic</p>
                    <m-button-3 color="mediumGrey">type01</m-button-3>
                    <m-button-3 lined>type02</m-button-3>
                    <m-button-3 color="slateBlue">type03</m-button-3>
                    <p class="sbt">disabled</p>
                    <m-button-3 color="mediumGrey" disabled>type01</m-button-3>
                    <m-button-3 lined disabled>type02</m-button-3>
                    <m-button-3 color="slateBlue" disabled>type03</m-button-3>
                </div>
                <p class="h2">Button Size [medium[default], large]</p>
                <div class="type_view">
                    <m-button-3 lined size="small">small</m-button-3>
                    <m-button-3 lined size="medium">medium</m-button-3>
                    <m-button-3 lined size="large">large</m-button-3>
                </div>
            </div>
        </div>
        <div id="group06" class="group_wrap">
            <p class="h1_type">Slide</p>
            <div class="box_wrap">
                <p class="h2">Slide</p>
                <div class="type_view">
                    <q-carousel v-model="slide2" 
                            transition-prev="slide-right" 
                            transition-next="slide-left" 
                            swipeable
                            animated 
                            control-color="primary"
                            class="rounded-borders"
                            navigation
                            padding
                            arrows
                            height="300px">
                        <q-carousel-slide name="style" class="column no-wrap flex-center">
                            <div class="q-mt-md text-center">
                                <ol class="ranking_list">
                                    <li>
                                        <span class="txt01">1</span>
                                        <span class="img"><img src="~assets/ranking_pro1.png" alt="프로필사진"/></span>
                                        <span class="txt02">몬스탁닉네임</span>
                                    </li>
                                    <li>
                                        <span class="txt01">2</span>
                                        <span class="img"><img src="~assets/ranking_pro2.png" alt="프로필사진"/></span>
                                        <span class="txt02">호빵맨</span>
                                    </li>
                                    <li>
                                        <span class="txt01">3</span>
                                        <span class="img"><img src="~assets/ranking_pro3.png" alt="프로필사진"/></span>
                                        <span class="txt02">식빵맨</span>
                                    </li>
                                    <li>
                                        <span class="txt01">4</span>
                                        <span class="img"><img src="~assets/ranking_pro4.png" alt="프로필사진"/></span>
                                        <span class="txt02">쨜랑이</span>
                                    </li>
                                    <li>
                                        <span class="txt01">5</span>
                                        <span class="img"><img src="~assets/ranking_pro5.png" alt="프로필사진"/></span>
                                        <span class="txt02">세균맨</span>
                                    </li>
                                </ol>
                            </div>
                        </q-carousel-slide>
                        <q-carousel-slide name="tv" class="column no-wrap flex-center">
                            <div class="q-mt-md text-center">
                                <ul>
                                    <li>데이터1</li>
                                    <li>데이터2</li>
                                    <li>데이터3</li>
                                </ul>
                            </div>
                        </q-carousel-slide>
                        <q-carousel-slide name="layers" class="column no-wrap flex-center">
                            <div class="q-mt-md text-center">
                                <ul>
                                    <li>데이터1</li>
                                    <li>데이터2</li>
                                    <li>데이터3</li>
                                </ul>
                            </div>
                        </q-carousel-slide>
                        <q-carousel-slide name="map" class="column no-wrap flex-center">
                            <div class="q-mt-md text-center">
                                <ul>
                                    <li>데이터1</li>
                                    <li>데이터2</li>
                                    <li>데이터3</li>
                                </ul>
                            </div>
                        </q-carousel-slide>
                    </q-carousel>
                    
                <!--                     
                    <div class="row justify-center">
                        <q-btn-toggle glossy v-model="slide2" :options="[
                            { label: 1, value: 'style' },
                            { label: 2, value: 'tv' },
                            { label: 3, value: 'layers' },
                            { label: 4, value: 'map' }
                            ]" />
                    </div> 
                -->
                </div>
            </div>
        </div> 
        <div id="group07" class="group_wrap">
            <p class="h1_type">Dialog</p>
            <div class="box_wrap">
                <p class="h2">Dialog</p>
                <div class="type_view">
                    <m-button-3 lined @click="alert = true">alert</m-button-3>
                    <m-button-3 lined @click="confirm = true">confirm</m-button-3>
                    <m-button-3 lined @click="dailog1 = true">dailog1</m-button-3>
                    <m-alert v-model="alert" content="문제가 발생하였습니다." buttonLabel="확인" title="경고메시지"/>
                    <m-confirm v-model="confirm" content="진행할까요?" title="확인메시지"/>
                    <m-dialog v-model="dailog1">
                        <q-card>
                            <q-card-section class="row items-center q-pb-none">
                                <div class="text-h6">Close icon</div>
                                <q-space />
                                <q-btn icon="close" flat round dense v-close-popup />
                            </q-card-section>
                            <q-card-section>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.
                            </q-card-section>
                        </q-card>
                    </m-dialog>
                </div>
            </div>
        </div>
        <div id="group08" class="group_wrap">
            <p class="h1_type">Tab</p>
            <div class="box_wrap">
                <p class="h2">Tab</p>
                <div class="type_view">
                    <m-tabs class="line_type" v-model="tab1" :items="tabs" />
                     <div v-if="tab1 == 'G'">
                        contents1
                    </div>
                    <div v-if="tab1 == 'F'">
                        contents2
                    </div>
                </div>
            </div>
        </div>
        <div id="group09" class="group_wrap">
            <p class="h1_type">Menu</p>
            <div class="box_wrap">
                <p class="h2">Menu</p>
                <div class="type_view">
                    <m-menu :items="tabs"/>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { ref, computed } from 'vue';
import MTabs from 'src/components/MTabs.vue';
import MAlert from 'src/components/MAlert.vue';
import MHeader from 'src/components/MHeader.vue';
import MMenu from 'src/components/MMenu.vue';
import MButton3 from 'src/components/MButton3.vue';
import MSelect from 'src/components/MSelect.vue';
import MRadio from 'src/components/MRadio.vue';
import MSpaceV from 'src/components/MSpaceV.vue';
import MSlideDialog from 'src/components/MSlideDialog.vue';
import MTextarea from 'src/components/MTextarea.vue';
import MToggle from 'src/components/MToggle.vue';
import MConfirm from 'src/components/MConfirm.vue';

export default {
    components: { MTabs, MAlert, MHeader, MMenu, MButton3, MSelect, MRadio, MSpaceV, MSlideDialog, MTextarea, MToggle },
    data() {
        const text2 = ref('');
        return {
            text1:ref(''),
            inputRef: ref(null),
            text2,
            isValid:computed(() => text2.value.length <= 3),
            check1:ref(true),
            check2:ref(false),
            check3:ref(['A', 'C']),
            check4:ref(['A', 'B', 'C']),
            rad1:ref('B'),
            select1:ref("Facebook"),
            options:[
                'Google', 'Facebook'
            ],
            tab1:ref('G'),
            tabs:[
                {label:'GOOGLE', value:'G', icon:'mail'},
                {label:'FACEBOOK', value:'F', icon:'photo'}
            ],
            date1: {
                from:ref(''),
                to:ref('')
            },
            slide1:ref(1),
            slidelist: [
                { content: 'https://cdn.quasar.dev/img/mountains.jpg' },
                { content: 'https://cdn.quasar.dev/img/parallax1.jpg' },
                { content: 'https://cdn.quasar.dev/img/parallax2.jpg' },
                { content: 'https://cdn.quasar.dev/img/quasar.jpg' }
            ],
            slide2: ref('style'),
            lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo provident incidunt ducimus iusto perferendis porro earum. Totam, numquam?',
            textarea1 : {
                value: "abcdedfdf",
                counter: true,
                minHeight: 100,
                showError: true,
                bottomMessage: "바닥메시지"
            },
            toggle1: ref(false),
            alert: ref(false),
            confirm:ref(false),
            dailog1:ref(false)
        }
    }
};
</script>
<style lang="scss" scoped>
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
.h2 {background-color:#eee ;color:#555;margin:0 -20px;height:30px;line-height:30px;padding:0 20px;font-weight:bold;margin-bottom:10px}
.box_wrap {border:1px solid #ddd;padding:0 20px 0 20px;background-color:#fff}
.type_view {padding-bottom:20px;max-width:1080px;
    .q-checkbox,.m-radio,.m-button3{margin-right:16px}
}
.type_view .sbt {margin-bottom:5px;color:#333}
.type_view .sbt ~ .sbt {margin-top:10px}
.type_view.btn_view button {margin-right:20px}
.type_view > .checkbox, .type_view > .radio {margin-right:15px}
</style>