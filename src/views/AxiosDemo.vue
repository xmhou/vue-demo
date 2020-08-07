<template>
    <div>
        <h1>This is an Axios demo page</h1>
    </div>
</template>
<script>
// import axios from "axios"
export default {
    mounted() {       

        this.axios({
            url: "/api/v1/notifications",
            method: "post",
            withCredentials: false, // 是否携带cookie信息
            // headers: {'X-Requested-With': 'XMLHttpRequest'},
            data: {
                param: '1234'
            }
        }).then(res => {
            console.log(res)
        })
    }
}
</script>
