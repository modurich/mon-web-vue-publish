<template>
  <div class="centerarea_box01">
      <div class="con_box">
        <div style="padding:32px">
          <m-button-3 @click="showDialog" lined color="primary">백드롭 열기</m-button-3>
        </div>
        <!-- S 백드롭 -->
        <!-- <m-dialog-bottom-blank v-model="dailog2">
            <div>
                <div class="row align-center">
                    <div class="f-16-b-mg">보팅</div>
                    <q-space />
                    <div>
                        <div class="row align-center f-14-500-cl">
                            <span>2일 hh:mm:dd</span>
                            <m-icon name="time" stroke-opacity="0" :color="$style.clover" :style="{ marginLeft: '4px' }" />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-sm-6" :style="{ marginTop: '16px' }">
                        <div class="f-12-500-gt">누적 보팅파워 / 한도</div>
                        <div class="row f-14-500-lg">
                            <div class="f-14-b-sb">2000</div>&nbsp;/&nbsp;<div class="f-14-b-lg">10000 VP</div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6" :style="{ marginTop: '16px' }">
                        <div class="f-12-500-gt">전체보상 (현재기준 예상값)</div>
                        <div class="row align-center">
                            <div class="f-14-b-cfp">324.12344566</div>
                            <m-icon name="monCoin" :color="$style.crayolaFlamingoPink" stroke-opacity="0" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <m-space-h size="1" :style="{ backgroundColor: $style.ghostWhite, marginTop: '16px' }" />
                <div :style="{ padding: '0 16px', marginTop: '16px' }">
                    <div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-6 gt-xs">
                                <div class="f-12-500-gt">내 보팅 보상 (현재기준 최대값)<strong>&nbsp;+ 20% 🚀</strong></div>
                                <div class="row align-center">
                                    <div class="f-14-b-cfp">234.684899</div>
                                    <m-icon name="monCoin" :color="$style.crayolaFlamingoPink" stroke-opacity="0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </m-dialog-bottom-blank> -->
        <!-- E 백드롭 -->
      </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import MDialogBottomBlank from 'src/components/MDialogBottomBlank.vue';
import { Dialog, Notify } from 'quasar';

export default {
  components: { MDialogBottomBlank },
  name: 'BackDropDialog',
  data() {
    return {
      dailog2: ref(false),
    }
  },
  methods: {
    showDialog() {
      Dialog.create({
          parent: this,
          component: 'm-dialog-bottom-blank',
          children: {
              render: function(h) {
                  return (
                      <div>
                          <div>
                              <div class="row align-center">
                                  <div class="f-16-b-mg">보팅</div>
                                  <q-space />
                                  <div>
                                      <div class="row align-center f-14-500-cl">
                                          <span>2일 hh:mm:dd</span>
                                          <m-icon name="time" stroke-opacity="0" color="$style.clover" />
                                      </div>
                                  </div>
                              </div>
                              <div class="row">
                                  <div class="col-xs-12 col-sm-6">
                                      <div class="f-12-500-gt">누적 보팅파워 / 한도</div>
                                      <div class="row f-14-500-lg">
                                          <div class="f-14-b-sb">2000</div>&nbsp;/&nbsp;<div class="f-14-b-lg">10000 VP</div>
                                      </div>
                                  </div>
                                  <div class="col-xs-12 col-sm-6">
                                      <div class="f-12-500-gt">전체보상 (현재기준 예상값)</div>
                                      <div class="row align-center">
                                          <div class="f-14-b-cfp">324.12344566</div>
                                          <m-icon name="monCoin" stroke-opacity="0" />
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div>
                              <m-space-h size="1"/>
                              <div>
                                  <div>
                                      <div class="row">
                                          <div class="col-xs-12 col-sm-6 gt-xs">
                                              <div class="f-12-500-gt">내 보팅 보상 (현재기준 최대값)<strong>&nbsp;+ 20% 🚀</strong></div>
                                              <div class="row align-center">
                                                  <div class="f-14-b-cfp">234.684899</div>
                                                  <m-icon name="monCoin"  stroke-opacity="0" />
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  );
              }
          }
      });
    }
  }
};
</script>
