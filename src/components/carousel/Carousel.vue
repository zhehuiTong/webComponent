<template>
    <div class="carousel-main-container">
        <img class="carousel-item" src="../../assets/1.jpg" alt="1" ref="img1">
        <img class="carousel-item" src="../../assets/2.jpg" alt="1" ref="img2">
        <img class="carousel-item" src="../../assets/3.jpg" alt="1" ref="img3">
        <img class="carousel-item" src="../../assets/1.jpg" alt="1" ref="img1">
        <img class="carousel-item" src="../../assets/2.jpg" alt="1" ref="img2">
        <img class="carousel-item" src="../../assets/3.jpg" alt="1" ref="img3">
        <div class="btn-item btn-left" @click="left"></div>
        <div class="btn-item btn-right" @click="right"></div>
    </div>
</template>

<script>
import CarouselJS from './Carousel'
export default {
    data() {
        return {
            carouselJS: null
        }
    },
    methods: {
        left() {
            this.carouselJS.left()
        },
        right() {
            this.carouselJS.right()
        }
    },
    mounted () {
        let tCarouselArray = document.getElementsByClassName('carousel-item')
        this.$data.carouselJS = new CarouselJS(tCarouselArray);
    },
}
</script>

<style scoped>
.carousel-main-container{
    position: relative;
    margin: 0 auto;
    width: 500px;
    height: 300px;
    border: 1px solid red;
    overflow: hidden;
}
.carousel-item{
    position: absolute;
    width: 500px;
    height: 300px;
}
.btn-item{
    position: absolute;
    width: 100px;
    height: 100px;
    top: 50%;
    margin-top: -50px;
}
.btn-left{
    background: darkblue;
}
.btn-right{
    background: darkcyan;
    right: 0;
}
</style>


