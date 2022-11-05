<template>
  <div class="uiguide_wrap">
    <div id="group01" class="group_wrap">
      <!-- <p class="h1_type">title</p>
      <div class="box_wrap">
        <p class="h2">title</p>
        <div class="type_view">
            <div class="con_box">
            <h3 class="mgt16">프로필 사진</h3>
            <h3 class="between">
              <span>콘텐츠 관리</span>
              <a href="#" class="link_view">구독현황</a>
            </h3>
            <h3 class="between">
              <span>콘텐츠 관리</span>
              <button class="ico_trash">전체삭제</button>
            </h3>
            <div class="l_row_l between">
              <span class="font16 txt_dk">최근 6개월 종료된 인사이트</span>
              <span>22.09.20 ~ 22.09.20</span>
            </div>
          </div>
        </div>
      </div> -->
      <p class="h1_type">ico</p>
      <div class="box_wrap">
        <p class="h2">etc</p>
        <div class="type_view ico">
          <span class="tag_red">-0.81%</span>
          <span class="tag_blue">+1.24%</span>
        </div>
        <div class="type_view ico">
          <button class="btn_view">버튼</button>
          <a href="#" class="link_view">링크</a>
          <a href="#" class="link_view gray">링크 gray</a>
          <span class="ico_info">PRO란?</span>
          <span class="ico_info_bk">PRO란?</span>
        </div>
      </div>
      <div class="box_wrap">
        <p class="h2">기업 symbol</p>
        <div class="type_view ico">
          <span class="ico_sb sb_bitcoin">bitcoin</span>
          <span class="ico_sb sb_ethereum">ethereum</span>
          <span class="ico_sb sb_klip">klip</span>
          <span class="ico_sb sb_klaytn">klaytn</span>
          <span class="ico_sb sb_metamask">metamask</span>
          <span class="ico_sb sb_dcent">dcent</span>
          <span class="ico_sb sb_null">null</span>
        </div>
      </div>
      <div class="box_wrap">
        <p class="h2">기업 badge</p>
        <p class="h3">badge1</p>
        <div class="type_view ico">
          <span class="badge1 build" />건설&nbsp;&nbsp;&nbsp;
          <span class="badge1 semiconductor" />반도체&nbsp;&nbsp;&nbsp;
          <span class="badge1 display" />디스플레이&nbsp;&nbsp;&nbsp;
          <span class="badge1 politics" />정치&nbsp;&nbsp;&nbsp;
          <span class="badge1 energy" />에너지&nbsp;&nbsp;&nbsp;
          <span class="badge1 it" />it&nbsp;&nbsp;&nbsp;
          <span class="badge1 cosmetics" />화장품&nbsp;&nbsp;&nbsp;
          <span class="badge1 car" />자동차&nbsp;&nbsp;&nbsp;
          <span class="badge1 bio" />바이오&nbsp;&nbsp;&nbsp;
          <span class="badge1 blockchain" />블록체인&nbsp;&nbsp;&nbsp;
        </div><br/><br/>
        <p class="h3">badge2</p>
        <div class="type_view ico">
          <span class="badge2">건설</span>
          <!-- <span class="badge2 build">건설</span>
          <span class="badge2 semiconductor">반도체</span>
          <span class="badge2 display">디스플레이</span>
          <span class="badge2 politics">정치</span>
          <span class="badge2 energy">에너지</span>
          <span class="badge2 it">it</span>
          <span class="badge2 cosmetics">화장품</span>
          <span class="badge2 car">자동차</span>
          <span class="badge2 bio">바이오</span>
          <span class="badge2 blockchain">블록체인</span> -->
        </div><br/><br/>
        <p class="h3">badge3</p>
        <div class="type_view ico">
          <span class="badge3 line black">gray</span>
          <span class="badge3 gray">gray</span>
          <span class="badge3 green">green</span>
          <span class="badge3 dark_green">dark green</span>
          <span class="badge3 light_green">light_green</span>
          <span class="badge3 brown">brown</span>
          <span class="badge3 yellow">yellow</span>
          <span class="badge3 primary">primary</span>
          <span class="badge3 red">red</span>
          <span class="badge3 pink">pink</span>
        </div>
        <div class="type_view ico">
          <span class="badge3 big gray">gray</span>
          <span class="badge3 big green">green</span>
          <span class="badge3 big light_green">light_green</span>
          <span class="badge3 big brown">brown</span>
          <span class="badge3 big yellow">yellow</span>
          <span class="badge3 big primary">primary</span>
          <span class="badge3 big red">red</span>
          <span class="badge3 big pink">pink</span>
        </div>
      </div>
      <div class="box_wrap">
        <p class="h2">level</p>
        <div class="type_view ico">
          <span class="ico_level1">level1</span>
          <span class="ico_level2">level2</span>
          <span class="ico_level3">level3</span>
          <span class="ico_level4">level4</span>
          <span class="ico_level5">level5</span>
        </div>
      </div>
      <div class="box_wrap">
        <p class="h2">badge</p>
        <div class="type_view ico">
          <span class="badge r1">R1</span>
          <span class="badge r2">R2</span>
          <span class="badge r3">R3</span>
          <span class="badge rstar">R★</span>
          <span class="badge pl1">PL1</span>
          <span class="badge pl2">PL2</span>
          <span class="badge pl3">PL3</span>
          <span class="badge plstar">PL★</span>
          <span class="badge cl1">CL1</span>
          <span class="badge cl2">CL2</span>
          <span class="badge pro">PRO</span>
          <span class="badge confirm">인증</span>
          <span class="badge sup">SUP</span>
          <span class="badge operate">운영</span>
          <span class="badge bot">bot</span>
          <span class="badge monster">monster</span>
        </div>
      </div>
    </div>
    <div id="group02" class="group_wrap">
      <p class="h1_type">Form Tag</p>
      <div class="box_wrap">
        <p class="h2">Input</p>
        <div class="type_view">
          <p class="sbt">basic type</p>
          <m-input v-model="text1" label="basic" /><br />
          <br />
          <p class="sbt">round type</p>
          <m-input filled v-model="text1" label="filled" class="round_type"/><br />
          <p class="sbt">search type</p>
          <div class="search_input">
            <m-input filled v-model="text1" class="round_type" placeholder="검색어를 입력해 주세요">
              <template v-slot:prepend>
                <q-icon class="ico_search" />
              </template>
            </m-input>
            <m-button-3 color="primary">검색</m-button-3>
          </div>
          <br />
          <p class="sbt">search type</p>
          <m-input v-model="search" filled type="search" hint="Search" class="round_type">
            <template v-slot:append>
              <button class="ico_ip_search" />
            </template>
          </m-input>
          <p class="sbt">disabled</p>
          <m-input v-model="text1" label="basic" disabled /><br />
          <m-input filled v-model="text1" label="filled" class="round_type" disabled /><br />
          <p class="sbt">validate</p>
          <m-input filled v-model="text1" class="round_type" label="필수입력" bottom-slots hint="이 필드는 필수입니다."
            :rules="[val => !!val || '이 필드는 필수 입력입니다.']" ref="inputRef" />
          <m-space-h />
          <m-input filled v-model="text2" class="round_type" label="max 3" bottom-slots hint="최대 3글자"
            error-message="최대 3글자만 입력하세요?" :error="!isValid" />
          <m-space-h />
          <m-input filled v-model="text2" class="round_type" label="Type here" bottom-slots hint="최대 3글자"
            :error="!isValid">
            <template v-slot:error>
              Please use maximum 3 characters.
            </template>
          </m-input>
          <br/><br/>

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
            <m-textarea :maxlength="1000" :showError="true" :minHeight="textarea1.minHeight"
              :counter="textarea1.counter" :value="textarea1.value" :bottomMessage="textarea1.bottomMessage"
              :height="50" />
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
            <m-select v-model="select1" :options="options" />
          </div>
          <p class="h2">Radio</p>
          <div class="type_view">
            <p class="sbt">basic</p>
            <m-radio v-model="rad1" val="A" label="A" />
            <m-radio v-model="rad1" val="B" label="B" />
            <m-radio v-model="rad1" val="C" label="C" />
            <m-radio v-model="rad1" val="D" label="D" />
            <p class="sbt">size</p>
            <m-radio v-model="rad1" val="A" label="xs" size="xs" />
            <m-radio v-model="rad1" val="B" label="sm" size="sm" />
            <m-radio v-model="rad1" val="C" label="md" size="md" />
            <m-radio v-model="rad1" val="D" label="lg" size="lg" />
            <m-radio v-model="rad1" val="E" label="xl" size="lg" />
            <m-radio v-model="rad1" val="F" label="30px" size="30px" />
            <p class="sbt">icon</p>
            <m-radio v-model="rad1" val="A" label="A" size="15px" checked-icon="task_alt"
              unchecked-icon="panorama_fish_eye" />
            <m-radio v-model="rad1" val="B" label="B" size="15px" checked-icon="task_alt"
              unchecked-icon="panorama_fish_eye" />
            <m-radio v-model="rad1" val="C" label="C" size="15px" checked-icon="task_alt"
              unchecked-icon="panorama_fish_eye" />
            <m-radio v-model="rad1" val="D" label="D" size="15px" checked-icon="task_alt"
              unchecked-icon="panorama_fish_eye" />
            <p class="sbt">disable</p>
            <m-radio disable v-model="rad1" val="A" label="A" />
            <m-radio disable v-model="rad1" val="B" label="B" />
            <m-radio disable v-model="rad1" val="C" label="C" />
            <m-radio disable v-model="rad1" val="D" label="D" />
            <p class="sbt">label</p>
            <m-radio v-model="rad1" val="A" label="Label on Right" right-label />
            <m-radio v-model="rad1" val="B" label="Label on Left" left-label />
          </div>
          <p class="h2">Checkbox</p>
          <div class="type_view">
            <p class="sbt">basic</p>
            <m-checkbox v-model="check1" label="선택" />
            <m-checkbox v-model="check2" label="미선택" />
            <m-checkbox v-model="check2" label="비활성" disable />
            <m-checkbox v-model="check2" label="선택 비활성" disable />
            <p class="sbt">label position</p>
            <m-checkbox v-model="check1" label="Label on Right" right-label />
            <m-checkbox v-model="check2" label="Label on Left" left-label />
            <!-- <p class="sbt">ArrayAsModel</p>
                    <div class="type_view">
                        <m-checkbox v-model="check3" label="A" val="A"/>
                        <m-checkbox v-model="check3" label="B" val="B"/>
                        <m-checkbox v-model="check3" label="C" val="C"/>
                        <m-checkbox v-model="check3" label="D" val="D"/>
                    </div> -->
            <p class="sbt">size</p>
            <div class="type_view">
              <m-checkbox size="xs" v-model="check1" label="Size 'xs'" />
              <m-checkbox size="sm" v-model="check2" label="Size 'sm'" />
              <m-checkbox size="md" v-model="check1" label="Size 'md'" />
              <m-checkbox size="lg" v-model="check2" label="Size 'lg'" />
              <m-checkbox size="xl" v-model="check1" label="Size 'xl'" />
              <m-checkbox size="30px" v-model="check2" label="Size '30px'" />
            </div>

            <p class="sbt">Icon</p>
            <div class="type_view">
              <m-checkbox v-model="check4" val="A" size="xs" checked-icon="swipe_left" unchecked-icon="swipe_right" />
              <m-space-v size="50" />
              <m-checkbox v-model="check4" val="B" size="xs" checked-icon="task_alt" unchecked-icon="highlight_off" />
              <m-space-v size="50" />
              <m-checkbox v-model="check4" val="C" size="xs" checked-icon="star" unchecked-icon="star_border" />
            </div>

            <p class="sbt">Toggle</p>
            <div class="type_view">
              <m-toggle v-model="toggle1" />
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
            <m-button-3 color="mediumGrey">mediumGrey</m-button-3>
            <m-button-3 lined>lined</m-button-3>
            <!-- <m-button-3 color="primary">type03</m-button-3> -->
            <m-button-3 color="primary">primary</m-button-3>
            <m-button-3 lined color="primary">lined primary</m-button-3>
            <m-button-3 color="darkPurple">darkPurple</m-button-3>
            <m-button-3 color="yellow">yellow</m-button-3>
            <m-button-3 color="red">red</m-button-3>
            <m-button-3 lined color="lightGrey">lightGrey</m-button-3>
            <m-button-3 color="textPrimary">textPrimary</m-button-3>
            <p class="sbt">disabled</p>
            <m-button-3 color="mediumGrey" disabled>mediumGrey</m-button-3>
            <m-button-3 lined disabled>lined</m-button-3>
            <m-button-3 color="primary" disabled>primary</m-button-3>
            <m-button-3 lined color="primary" disabled>lined primary</m-button-3>
            <m-button-3 color="darkPurple" disabled>darkPurple</m-button-3>
            <m-button-3 color="yellow" disabled>yellow</m-button-3>
            <m-button-3 color="red" disabled>red</m-button-3>
            <m-button-3 lined color="lightGrey" disabled>lightGrey</m-button-3>
            <m-button-3 color="textPrimary" disabled>textPrimary</m-button-3>
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
            <q-carousel v-model="slide2" transition-prev="slide-right" transition-next="slide-left" swipeable animated
              control-color="primary" class="rounded-borders" navigation padding arrows height="300px">
              <q-carousel-slide name="style" class="column no-wrap flex-center">
                <div class="q-mt-md text-center">
                  <ul>
                    <li>데이터1</li>
                    <li>데이터2</li>
                    <li>데이터3</li>
                  </ul>
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
          </div>
        </div>
        <div class="box_wrap">
          <p class="h2">Slide2</p>
          <div class="type_view">
            <swiper class="swiper" :options="swiperOption">
              <swiper-slide>
                <div class="recommend_list">
                  <div class="img_area">
                    <img src="~assets/profile_img2.png" alt="profile" />
                  </div>
                  <div class="txt_tit">몬스탁닉넴열글자까지</div>
                  <span class="badge_area">
                    <span class="badge pro">PRO</span>
                    <span class="badge pl1">PL1</span>
                  </span>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="recommend_list">
                  <div class="img_area">
                    <img src="~assets/profile_img3.png" alt="profile" />
                  </div>
                  <div class="txt_tit">몬스탁닉네임02</div>
                  <span class="badge_area">
                    <span class="badge pro">PRO</span>
                    <span class="badge pl1">PL1</span>
                  </span>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="recommend_list">
                  <div class="img_area">
                    <img src="~assets/profile_img4.png" alt="profile" />
                  </div>
                  <div class="txt_tit">몬스탁닉네임03</div>
                  <span class="badge_area">
                    <span class="badge pro">PRO</span>
                    <span class="badge pl1">PL1</span>
                  </span>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="recommend_list">
                  <div class="img_area">
                    <img src="~assets/profile_img1.png" alt="profile" />
                  </div>
                  <div class="txt_tit">몬스탁닉네임04</div>
                  <span class="badge_area">
                    <span class="badge pro">PRO</span>
                    <span class="badge pl1">PL1</span>
                  </span>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="recommend_list">
                  <div class="img_area">
                    <img src="~assets/profile_img1.png" alt="profile" />
                  </div>
                  <div class="txt_tit">몬스탁닉네임05</div>
                  <span class="badge_area">
                    <span class="badge pro">PRO</span>
                    <span class="badge pl1">PL1</span>
                  </span>
                </div>
              </swiper-slide>
            </swiper>
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
            <m-button-3 lined @click="dailog2 = true">dailog2</m-button-3>
            <m-button-3 lined @click="dailog3 = true">dailog3</m-button-3>
            <m-button-3 lined @click="dailog4 = true">dailog4</m-button-3>
            <m-alert v-model="alert" content="문제가 발생하였습니다." buttonLabel="확인" title="경고메시지" />
            <m-confirm v-model="confirm" content="진행할까요?" title="확인메시지" />
            <m-dialog v-model="dailog1" class="cls_test">
              <q-card>
                <q-card-section class="row items-center q-pb-none">
                  <div class="text-h6">Close icon</div>
                  <q-space />
                  <q-btn icon="close" flat round dense v-close-popup />
                </q-card-section>
                <q-card-section>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas
                  eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus
                  minima, porro labore.
                </q-card-section>
              </q-card>
            </m-dialog>
            <m-dialog v-model="dailog2" class="cls_test">
              <Polycy tp="01" />
            </m-dialog>
            <m-dialog v-model="dailog3" class="cls_test">
              <Polycy tp="02" />
            </m-dialog>
            <m-dialog v-model="dailog4" class="cls_test">
              <Polycy tp="03" />
            </m-dialog>

          </div>
        </div>
      </div>
      <div id="group08" class="group_wrap">
        <p class="h1_type">Tab</p>
        <div class="box_wrap">
          <p class="h2">basic Tab</p>
          <div class="type_view">
            <m-tabs class="line_type" v-model="tab1" :items="tabs" />
            <div v-if="tab1 == 'G'">
              contents1
            </div>
            <div v-if="tab1 == 'F'">
              contents2
            </div>
          </div>
          <p class="h2">large Tab</p>
          <div class="type_view">
            <m-tabs class="line_type large" v-model="tab1" :items="tabs" />
            <div v-if="tab1 == 'G'">
              contents1
            </div>
            <div v-if="tab1 == 'F'">
              contents2
            </div>
          </div>
        </div>
        <div class="box_wrap">
          <p class="h2">boxTab</p>
          <div class="type_view">
            <m-tabs class="box_type large" v-model="tab1" :items="tabs" />
            <div v-if="tab1 == 'G'">
              contents1
            </div>
            <div v-if="tab1 == 'F'">
              contents2
            </div>
          </div>
        </div>
        <div class="box_wrap">
          <p class="h2">cardTab</p>
          <div class="type_view">
            <m-tabs class="card_type small" v-model="tab1" :items="tabs" />
            <div v-if="tab1 == 'G'">
              contents1
            </div>
            <div v-if="tab1 == 'F'">
              contents2
            </div>
          </div>
        </div>
        <div class="box_wrap">
          <p class="h2">cardTab</p>
          <div class="type_view">
          <q-tabs class="line_type large" v-model="tab1">
            <q-tab name="G"  label="스테이킹"></q-tab>
            <q-tab name="F"  label="의제 투표" alert="red"></q-tab>
          </q-tabs>
          <q-tab-panels v-model="tab1" animated>
            <q-tab-panel name="G" class="tab_contents">
              <div class="text-h6">스테이킹</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>

            <q-tab-panel name="F" class="tab_contents">
              <div class="text-h6">의제 투표</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>
          </q-tab-panels>
          </div>
        </div>
      </div>
      <!-- <div id="group09" class="group_wrap">
        <p class="h1_type">ico</p>
        <div class="box_wrap">
          <p class="h2">level</p>
          <div class="type_view">
          </div>
        </div>
        <div class="box_wrap">
          <p class="h2">badge</p>
          <div class="type_view">
          </div>
        </div>
      </div> -->
      <div id="group10" class="group_wrap">
        <p class="h1_type">Callps</p>
        <div class="box_wrap">
          <p class="h2">Callps</p>
          <div class="type_view">
            <textarea v-model="text3" cols="165" rows="10"></textarea>
          </div>
          <div class="type_view">
            <v-clamp autoresize :max-lines="2">
              {{text3}}
              <template #after="{ toggle, expanded, clamped }">
                <button v-if="expanded || clamped" class="btn_view_list" @click="toggle">{{ clamped ? '더보기' : '닫기'
                }}</button>
              </template>
            </v-clamp>
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
import MDialogBlank from 'src/components/MDialogBlank.vue';
import Polycy from './Polycy.vue';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
import VClamp from '@boyuai/vue-clamp';

export default {
  components: { MTabs, MAlert, MHeader, MMenu, MButton3, MSelect, MRadio, MSpaceV, MSlideDialog, MTextarea, MToggle, MDialogBlank, Polycy, Swiper, SwiperSlide, VClamp },
  data() {
    const text2 = ref('');
    return {
      text1: ref(''),
      inputRef: ref(null),
      text2,
      text3: `크고 속에서 희망의 가슴이 바로 붙잡아 있는 별과 것이다. 얼마나 방황하였으며, 사랑의 청춘의 천지는 생생하며, 물방아 더운지라 아니다. 영락과 쓸쓸한 같이, 얼음이 청춘 타오르고 이것이다. 사랑의 곳으로 인생의
황금시대의 그들은 속에서 이것이다. 있는 긴지라 싹이 인생을 얼마나 것이다. 같이, 안고, 기쁘며, 보라. 청춘 생명을 공자는 싸인 사막이다. 우리의 뜨고, 하는 역사를 것이다. 피고 청춘의 이상은 못할 봄바람이다.
너의 원대하고, 자신과 인생에 위하여 원질이 풍부하게 되는 교향악이다. 밝은 그들을 그들의 아름답고 웅대한 꽃이 바이며, 길을 것이다.길을 우리의 위하여, 있는 그와 있으랴? 주며, 그들은 풍부하게 피가 끓는다.
바로 예수는 피가 쓸쓸하랴? 천지는 그러므로 못할 인생을 그들에게 긴지라 인간의 봄바람이다. 목숨이 피가 피부가 하는 밥을 그들은 이상, 교향악이다. 같은 그들의 이상 그들의 평화스러운 그들은 인류의 청춘은 ?
인생을 힘차게 가치를 싸인 이는 무엇을 미인을 쓸쓸하랴? 있는 하는 얼마나 두손을 뿐이다. 힘차게 놀이 이것은 듣기만 웅대한 설산에서 이것이야말로 이것이다. 사는가 얼음에 인류의 인간이 그들의 얼음이
쓸쓸하랴?기쁘며, 그것은 창공에 공자는 커다란 그들을 위하여 때문이다. 설산에서 살았으며, 열락의 우리 것이다. 청춘의 청춘의 방황하여도, 피고, 날카로우나 보이는 이상이 이는 힘있다. 이상의 목숨을 너의 위하여
위하여서, 청춘에서만 물방아 힘있다. 있는 튼튼하며, 꽃이 것이다. 실현에 그들의 그와 만천하의 인생을 크고 맺어, 있는가? 구하기 넣는 되려니와, 피고 소리다.이것은 그들은 사막이다. 청춘은 이상, 꽃이 불어
미묘한 부패뿐이다. 이상의 속잎나고, 청춘은 군영과 힘차게 이 장식하는 것이다. 주는 그들에게 따뜻한 천고에 커다란 인생의 봄바람이다.`,
      isValid: computed(() => text2.value.length <= 3),
      check1: ref(true),
      check2: ref(false),
      check3: ref(['A', 'C']),
      check4: ref(['A', 'B', 'C']),
      rad1: ref('B'),
      select1: ref("Facebook"),
      options: [
        'Google', 'Facebook'
      ],
      tab1: ref('G'),
      tabs: [
        { label: 'GOOGLE', value: 'G', icon: 'mail' },
        { label: 'FACEBOOK', value: 'F', icon: 'photo' }
      ],
      date1: {
        from: ref(''),
        to: ref('')
      },
      slide1: ref(1),
      slidelist: [
        { content: 'https://cdn.quasar.dev/img/mountains.jpg' },
        { content: 'https://cdn.quasar.dev/img/parallax1.jpg' },
        { content: 'https://cdn.quasar.dev/img/parallax2.jpg' },
        { content: 'https://cdn.quasar.dev/img/quasar.jpg' }
      ],
      slide2: ref('style'),
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo provident incidunt ducimus iusto perferendis porro earum. Totam, numquam?',
      textarea1: {
        value: "abcdedfdf",
        counter: true,
        minHeight: 100,
        showError: true,
        bottomMessage: "바닥메시지"
      },
      toggle1: ref(false),
      alert: ref(false),
      confirm: ref(false),
      dailog1: ref(false),
      dailog2: ref(false),
      dailog3: ref(false),
      dailog4: ref(false),
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 50,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        breakpoints: {
          1024: {
            slidesPerView: 5,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 10
          }
        }
      }
    }
  },
  methods: {

  }
};
</script>
<style lang="scss" scoped>
.uiguide_wrap {
  body {
    background: #f8f8f8;
  }

  .btnTop {
    position: fixed;
    z-index: 50;
    overflow: hidden;
    width: 30px;
    height: 30px;
    right: 10px;
    bottom: 10px
  }

  .btnTop a {
    display: block;
    width: 30px;
    height: 30px;
    text-indent: -9999em;
    opacity: .7
  }

  .btnTop a:hover {
    opacity: 1
  }

  .list_box_wrap {
    padding: 0 20px 20px 20px;
    min-width: 1000px
  }

  .tabs {
    background-color: #46675c;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 49
  }

  .tabs .logo {
    position: absolute;
    width: 150px;
    top: 0;
    left: 0;
    height: 50px;
    line-height: 50px;
    color: #fff;
    font-weight: bold;
    text-align: center;
    background-color: #000;
    font-size: 16px
  }

  .tabs ul {
    overflow: hidden;
    margin-left: 150px
  }

  .tabs ul li {
    float: left;
    width: 14.25%
  }

  .tabs ul li a {
    display: block;
    text-align: center;
    height: 50px;
    line-height: 50px;
    font-weight: bold;
    color: #fff;
    font-size: 13px;
    position: relative;
    font-family: 'verdana'
  }

  .tabs ul li a.active {
    background-color: #3ca66b
  }

  .tabs ul li a:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 1px;
    background-color: rgba(255, 255, 255, .3)
  }

  .tabs ul li:last-child {
    width: 14.5%
  }

  .tabs ul li:last-child a:after {
    display: none
  }

  .h1_type {
    font-weight: bold;
    font-size: 18px;
    color: #000;
    margin-bottom: 10px;
    font-family: 'verdana';
    padding-top: 60px
  }

  .h2 {
    background-color: #eee;
    color: #555;
    margin: 0 -20px;
    height: 30px;
    line-height: 30px;
    padding: 0 20px;
    font-weight: bold;
    margin-bottom: 10px
  }

  .box_wrap {
    border: 1px solid #ddd;
    padding: 0 20px 0 20px;
    background-color: #fff
  }

  .type_view {
    padding-bottom: 20px;
    max-width: 1080px;
    &.ico{
      display: inline-flex;
      align-items: center;
      span{margin-right:10px}
    }

    .q-checkbox,
    .m-radio,
    .m-button3 {
      margin-right: 16px
    }
  }

  .type_view .sbt {
    margin-bottom: 5px;
    color: #333
  }

  .type_view .sbt~.sbt {
    margin-top: 10px
  }

  .type_view.btn_view button {
    margin-right: 20px
  }

  .type_view>.checkbox,
  .type_view>.radio {
    margin-right: 15px
  }
}
</style>