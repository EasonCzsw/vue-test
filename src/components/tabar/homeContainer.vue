<template>
    <div class="divHome">
        <h1>home</h1>
        <!-- 轮播图 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in imgList" :key="item.id">
                {{ item.id }}
                <img :src="item.url">
            </mt-swipe-item>
        </mt-swipe>

        <!-- 九宫格布局 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../assets/六宫格小图标/menu1.png" alt="">
                    <div class="mui-media-body">新闻资讯</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../assets/六宫格小图标/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../assets/六宫格小图标/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../assets/六宫格小图标/menu4.png" alt="">
                    <div class="mui-media-body">留言反馈</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../assets/六宫格小图标/menu5.png" alt="">
                    <div class="mui-media-body">视频专区</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../assets/六宫格小图标/menu6.png" alt="">
                    <div class="mui-media-body">联系我们</div>
                </a>
            </li>
        </ul> 
    </div>
</template>

<script>
    // 图片路径：http://jsonplaceholder.typicode.com/photos
    export default {
        data() {
            return {
                imgList: [],
                getImgUrl: 'http://jsonplaceholder.typicode.com/photos'
            }
        },
        created() {
            this.getImglist();
        },
        methods: {
            getImglist() {
                this.$http({
                    method: 'GET',
                    url: this.getImgUrl
                }).then((result) => {
                    var list = []; 
                    result.data.filter((e) => {
                        if (e.id < 7) {
                            list.push({
                                id: e.id,
                                url: e.url
                            });
                        }
                    });
                    this.imgList = list;
                    console.log(this.imgList);
                });
            }
        },
    }
</script>

<style lang="scss" scoped>
    .mint-swipe {
        width: 100%;
        height: 200px;
        .mint-swipe-item {
            img {
                width: 100%;
                height: 100%;
            }
        }
    }

    .mui-grid-view .mui-grid-9 {
        background-color: #fff;
    }
    img {
        width: 60px;
        height: 60px;
    }
    .mui-media-body {
        font-size: 13px;
    }
    .mui-grid-view .mui-grid-9 .mui-table-view-cell {
        border: none;
    }
</style>