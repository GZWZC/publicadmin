<template>
    <div id="app">
        <dash-board/>
    </div>
</template>
<script>
import DashBoard from './components/DashBoard';

export default {
    name: "App",
    components: { 
        DashBoard
    },
    data() {
        const item = {
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
        };
        return {
            tableData: Array(20).fill(item)
        };
    }
};
</script>

<style lang="scss">
@import './style.scss';
#app{
    height: 100%;
}
</style>
