<template>
    <el-container style="height:100%;">
        <nav-bar/>
        <el-main>
            <router-view />
        </el-main>
	</el-container>
</template>

<script>
import NavBar from '../baseComponents/NavBar';

export default {
    name: "DashBoard",
    components: { 
        NavBar
    }
};
</script>
