<template>
     <div class="content-top-area">
        <div class="content-header">
            <h2 class="content-tit">{{ topTitle }} 대시보드</h2>
            <div class="file-download-area">
                
            </div>
        </div>
        <CFilterArea>
            <slot></slot>
        </CFilterArea>
        <div class="btn-group">
            <CButton>설정 초기화</CButton>
            <CButton>분석 실행</CButton>
        </div>

     </div>
</template>

<script>
import CFilterArea from '@/components/templates/CFilterArea.vue'
import CButton from '@/components/elements/CButton.vue'
import { ref } from 'vue';

export default {

    components : {
        CFilterArea,
        CButton
    },
    setup () {
        const topTitle = ref('매출분석');

        return {
            topTitle
        }
    }
}
</script>

<style lang="scss" scoped>
    .content-top-area{
        background-color: #eee;
        margin-top: 12px;
        .content-header{
            display: flex;
        }
    }
    
    .btn-group{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>