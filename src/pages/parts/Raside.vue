

<template>
    <aside class="right_aside">
        <div class="aside_box">
            <p class="tit">KOSPI</p>
            <div class="number_wrap">
                <span class="txt01 blue">2402.59</span>
                <span class="txt02 blue">▼ 17.15</span>
                <span class="txt03 blue">-0.81%</span>
            </div>
        </div>
        <div class="aside_box">
            <p class="tit">KOSDAQ</p>
            <div class="number_wrap">
                <span class="txt01 red">795.16</span>
                <span class="txt02 red">▲ 2.91</span>
                <span class="txt03 red">+1.24%</span>
            </div>
        </div>
    </aside>
</template>

<script>


export default {
    name: 'Raside',
   
};
</script>

<style lang="scss" scoped>
    .right_aside{
        .aside_box{
            padding:25px 20px;
            background: #fff;
            .tit{color:#141414;font-size:16px;font-weight: 700;}
            .number_wrap{
                font-size: 16px;
                .blue{color:#2c80ff}
                .red{color:#fb1f1f}
                .txt01{font-size:24px;}
                .txt03{
                    padding:2px 10px;
                    display: inline-flex;
                    border-radius: 4px;
                    &.blue{background:#eef5ff}
                    &.red{background:#fff0f0}
                }
                span + span{margin-left:10px}
            }
            
        }
        .aside_box + .aside_box{margin-top:20px}
    }
</style>
