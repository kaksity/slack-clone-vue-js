<template>
    <div class="sidebaroption">
        <div class="sidebaroption__icon" v-if="icon">
            <v-icon>{{icon}}</v-icon> <h3>{{ title }}</h3>
        </div>
        <div class="sidebaroption__channel" v-else>
            <h3># {{ title }}</h3> 
        </div>
        
    </div>
</template>
<style scoped>
    .sidebaroption{
        display: flex;
        padding: 10px 0 10px 5px;
        align-items: center;
        cursor: pointer;
    }
    .sidebaroption:hover {
        background-color: #340e36;
    }
    .sidebaroption__icon {
        display: flex;
        padding: 10px;
        font-size: 15px !important;
    }
    .sidebaroption__icon > h3{
        margin-left: 3px;
    }
    .sidebaroption__channel {
        display: flex;
        padding: 10px 0;
        align-items: center;
    }
    .sidebaroption__channel > h3{
        font-weight: 500;
    }
</style>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
    props: ['icon', 'title']
})
</script>
