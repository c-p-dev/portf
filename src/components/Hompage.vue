<template>
    <div class="container home-page-bg ">
        <section id="home-page">
            <div class="content ">
                <img ref="logo2" id="logo2" class="animate__animated animate__fadeInUp animate__delay-1s" src="../assets/logo2.svg" alt />
                <div class="description t-center secondary-font animate__animated animate__fadeInUp animate__delay-2s" >
                    <p>I'm a software engineer based in Philippines, with some experience developing front-end and back-end web application stuffs.</p>
                </div>
                <div class="main-buttons animate__animated animate__fadeInUp animate__delay-2s">
                    <button id="work-btn" v-on:click="gotoProjects" @mouseover="changeBg('bg4.jpg')" @mouseleave="resetBg()" >Projects</button>
                    <button id="resume-btn" v-on:click="getResume">Resume</button>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import 'animate.css'
export default {
    name: "Homepage",
    data: function() {
      
        return {
            bgStyle: {
                background:''
            }
        }
    },
    created() {
        // window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
        // window.removeEventListener('scroll', this.handleScroll);
    },
    
    methods: {
        handleScroll() {
            // console.log(`event`, event);
            // console.log(`refs`, this.$refs);
            // const lgo2 = this.$refs.logo2.getBoundingClientRect();
            // console.log(`lgo2`,lgo2);
            // Any code to be executed when the window is scrolled
        },
        gotoProjects: function() {
            // console.log(`$event`, event);
            // console.log(`page`,page);
            if (event) {
                event.preventDefault();
                const el = document.getElementById("projects");
                console.log(`el`, el);
                if (el) {
                    let offset = -1000;
                    const yOffset = offset;
                    const y =
                        el.getBoundingClientRect().top +
                        window.pageYOffset +
                        yOffset;
                    console.log(`window.pageYOffset`, window.pageYOffset);
                    console.log(`y`, y);
                    el.scrollIntoView({
                        top: y,
                        behavior: "smooth",
                        block: "center"
                    });
                }
            }
        },
        getResume: function() {
            window.open(`../resume/cpv9.pdf`, "_blank");
        },
        changeBg: function(image){
            console.log(`image`, image);
            this.bgStyle = {
                background:  'red'
            }
            console.log(`bgstyle`, this.bgStyle)
        },
        resetBg: function(){
        
            this.bgStyle = {
                backgroundImage: '../assets/bg2.jpg'
            }
            console.log(`reset`, this.bgStyle)
        }
    
    }
};
</script>
<style lang="scss" scoped>
.content {
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    img {
        width: 100%;
        // min-width: 300px;
    }

    background-color: rgba(0,0,0, 0.7);
    padding: 80px;
}
.home-page-bg {
    background: url("../assets/bg2.jpg");
    border: 1px solid #000000;
    box-sizing: border-box;
    background-size: cover;
}

.main-buttons {

    margin-top: 30px;
    button, a {
        background: transparent;
        border: none;
        color: $gray;
        font-family: "Open Sans";
        width: 100%;
        margin: 15px 10px;
        border: 1px solid $white;
        border-radius: 15px;
        padding: 20px;
        font-size: 1.2rem;
        cursor: pointer;
        &:hover, .active{
            background: $orange;

            color: $white;
            border: 2px solid $white;
            border-radius: 15px;
            transition: background 0.5s ease;
        }
    }



}
@media only screen and (min-width: 798px) {
    .content {

        width: 60%;
    }
    .main-buttons {
      
        button {
            width: 45%;
            font-size: 1rem;
            margin: 10px 10px;
        }
    }
}
</style>
