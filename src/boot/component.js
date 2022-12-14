import Vue from 'vue';
import MButton3 from 'components/MButton3.vue';
import MInputStyleButton from 'components/MInputStyleButton.vue';
import MChip from 'components/MChip.vue';
import MChipList from 'components/MChipList.vue';
import MCheckbox from 'components/MCheckbox.vue';
import MInput from 'components/MInput.vue';
import MTextarea from 'components/MTextarea.vue';
import MToggle from 'components/MToggle.vue';
import MSelect from 'components/MSelect.vue';
import MRadio from 'components/MRadio.vue';
import MMenu from 'components/MMenu.vue';
import MOverflowMenu from 'components/MOverflowMenu.vue';
import MBadge from 'components/MBadge.vue';
import MBadgeText from 'components/MBadgeText.vue';
import MTag from 'components/MTag.vue';
import MIcon from 'components/MIcon.vue';
import MDialog from 'components/MDialog.vue';
import MAlert from 'components/MAlert.vue';
import MFullAlert from 'components/MFullAlert.vue';
import MConfirm from 'components/MConfirm.vue';
import MFullConfirm from 'components/MFullConfirm.vue';
import MNoticeAlert from 'components/MNoticeAlert.vue';
import MFullBlank from 'components/MFullBlank.vue';
import MNoticeFullDialog from 'components/MNoticeFullDialog.vue';
import MHeader from 'components/MHeader.vue';
import MTabs from 'components/MTabs.vue';
import MDateRangePicker from 'components/MDateRangePicker.vue';
import MLinearProgress from 'components/MLinearProgress.vue';
import MSpaceH from 'components/MSpaceH.vue';
import MSpaceV from 'components/MSpaceV.vue';
import MSlideDialog from 'components/MSlideDialog.vue';
import MViStatus from 'components/MViStatus.vue';
import MProfilePhoto from 'components/MProfilePhoto.vue';
import MReportDialog from 'components/MReportDialog.vue';
import MDialogBlank from 'components/MDialogBlank.vue';
import MDialogBottomBlank from 'components/MDialogBottomBlank.vue';
import MCandleStick from 'components/MCandleStick.vue';
import MFloatInput from 'components/MFloatInput.vue';
import MFloatBottom from 'components/MFloatBottom.vue';
import MFoldableShadowedBox from 'components/MFoldableShadowedBox.vue';
import MHighchart from 'components/MHighchart.vue';

import TextareaAutosize from 'vue-textarea-autosize';
import { Plugin } from 'vue-fragment';


Vue.component('MIcon', MIcon);
Vue.component('MButton3', MButton3);
Vue.component('MInputStyleButton', MInputStyleButton);
Vue.component('MChip', MChip);
Vue.component('MChipList', MChipList);
Vue.component('MCheckbox', MCheckbox);
Vue.component('MInput', MInput);
Vue.component('MTextarea', MTextarea);
Vue.component('MToggle', MToggle);
Vue.component('MSelect', MSelect);
Vue.component('MRadio', MRadio);
Vue.component('MMenu', MMenu);
Vue.component('MOverflowMenu', MOverflowMenu);
Vue.component('MBadge', MBadge);
Vue.component('MBadgeText', MBadgeText);
Vue.component('MTag', MTag);
Vue.component('MDialog', MDialog);
Vue.component('MAlert', MAlert);
Vue.component('MFullAlert', MFullAlert);
Vue.component('MConfirm', MConfirm);
Vue.component('MFullConfirm', MFullConfirm);
Vue.component('MNoticeAlert', MNoticeAlert);
Vue.component('MFullBlank', MFullBlank);
Vue.component('MNoticeFullDialog', MNoticeFullDialog);
Vue.component('MHeader', MHeader);
Vue.component('MTabs', MTabs);
Vue.component('MDateRangePicker', MDateRangePicker);
Vue.component('MLinearProgress', MLinearProgress);
Vue.component('MSpaceH', MSpaceH);
Vue.component('MSpaceV', MSpaceV);
Vue.component('MSlideDialog', MSlideDialog);
Vue.component('MViStatus', MViStatus);
Vue.component('MProfilePhoto', MProfilePhoto);
Vue.component('MReportDialog', MReportDialog);
Vue.component('MDialogBlank', MDialogBlank);
Vue.component('MDialogBottomBlank', MDialogBottomBlank);
Vue.component('MCandleStick', MCandleStick);
Vue.component('MFloatInput', MFloatInput);
Vue.component('MFloatBottom', MFloatBottom);
Vue.component('MFoldableShadowedBox', MFoldableShadowedBox);
Vue.component('highcharts', MHighchart);



Vue.use(TextareaAutosize);
Vue.use(Plugin);

import Polycy from 'pages/publish/Polycy.vue';
Vue.component('Polycy', Polycy);

import VueDragscroll from 'vue-dragscroll';
Vue.use(VueDragscroll);

// leave the export, even if you don't use it
export default async({ Vue, ssrContext }) => {
};
