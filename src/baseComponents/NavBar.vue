<template>
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu v-for="(parent, parentIndex) in configs">
            <el-submenu :index="`${parentIndex}`">
                <template slot="title"><i class="el-icon-message"></i>{{parent.name}}</template>
                <el-menu-item-group>
                    <el-menu-item v-for="(children, childerenIndex) in parent.childrens" :index="`${parentIndex}-${childerenIndex}`">
                        {{children.name}}
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </el-aside>
</template>

<script>
import configs from './configs';
export default {
    name: "NavBar",
    data() {
        return {
            configs
        }
    }
};
</script>
