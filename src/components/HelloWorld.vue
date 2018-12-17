<template>
    <div>
        <el-table :data="tableData">
            <el-table-column prop="date" label="日期" width="140">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>

export default {
    name: "HelloWorld",
    data() {
        return {
            tableData: [
                {
                    name: 1,
                    date: 1,
                    address: 1,
                },
                {
                    name: 1,
                    date: 1,
                    address: 1,
                },
                {
                    name: 1,
                    date: 1,
                    address: 1,
                }
            ]
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .el-header {
        background-color: #b3c0d1;
        color: #333;
        line-height: 60px;
    }

    .el-aside {
        color: #333;
    }
</style>
