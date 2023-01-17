<template>
    <div class="filter-area">
        <v-form>
            <slot></slot>
        </v-form>
    </div>
</template>

<script>
export default {
    setup () {
    
        return {}
    }
}
</script>

<style lang="scss" scoped>
    .filter-area {
        width: 100%;
        background-color: #fff;
        border: 1px solid #000;
        border-radius: 4px;
        box-shadow: 4px 2px 2px #888;
        margin-top: 20px;
        box-sizing: border-box;
        padding: 10px 16px;
    }
</style>