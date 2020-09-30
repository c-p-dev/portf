<template>
    <div class="container">
        <section
            id="projects"
            class="content content-page animate__animated animate__fadeInUp animate__delay-1s"
        >
        <Vtitle title="Projects" />
            <p class="t-center secondary-font">These are live projects that I was involve with. I do not own them.</p>
            <div class="project-list">
                <div v-for="item in projects" :key="item.projectName" class="proj-item">
                    <a v-bind:href="item.projectUrl" target="_blank">
                        <div class="pro-img">
                            <img v-bind:src="require('../assets/projects/' + item.projectImage)" alt />
                        </div>
                        <div class="pro-desc">{{item.projectName}}</div>
                    </a>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Vtitle from "./shared/Vtitle.vue";
export default {
    name: "Projects",
    components: {
        Vtitle
    },
    data: function() {
        let projects = [
            {
                projectName: "RAM",
                projectUrl: "https://www.royalairmaroc.com",
                projectImage: "ram.png"
            },
            {
                projectName: "TAP",
                projectUrl: "https://www.flytap.com/en-pt/",
                projectImage: "tap.png"
            },
            {
                projectName: "Ourshop",
                projectUrl: "https://www.ourshop.com",
                projectImage: "ourshop.png"
            },
            {
                projectName: "IBET25",
                projectUrl: "https://www.ibet25.info/",
                projectImage: "ibet25.png"
            },
            {
                projectName: "Travel360",
                projectUrl: "https://www.travel3sixty.com/",
                projectImage: "t360.png"
            },
            {
                projectName: "Pera Hub App",
                projectUrl:
                    "https://play.google.com/store/apps/details?id=com.yondu.cbcs.perahub&hl=en",
                projectImage: "perahub.png"
            },
            {
                projectName: "m-HRIS (Android)",
                projectUrl:
                    "https://play.google.com/store/apps/details?id=mcl.mobile.mclhris&hl=en",
                projectImage: "mcl.png"
            }
        ];
        return {
            projects: projects
        };
    }
};
import "animate.css";
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$bg: #0a0c10;
$orange: #f88600;
$gray: #cccccc;

.column-template {
    display: grid;
    grid-template-columns: 40px auto 40px;
    grid-template-rows: 80px auto;
    p{
        font-size: 16px;;
        font-family: "Quicksand";
        grid-column: 2;
        text-align: center;
    }
}
.title-header {
    grid-column: 2;
    margin: 0 auto;
    text-align: center;
}

.project-list {
    grid-column: 2;
    text-align: center;
    margin: 20px;
    .proj-item {
        margin: 30px 20px;
        align-items: center;
        justify-items: center;
        text-decoration: none;

        &:hover{
          
            transform: scale(1.4);
            -webkit-transition: transform .08s ease-in-out;
            -moz-transition:transform .08s ease-in-out;
            -ms-transition:transform .08s ease-in-out;
            img{
                filter: grayscale(0%)!important;
                transition:filter 0.3s ease-in-out;
            }
        }
        .pro-img {
            img {
                max-width: 280px;
                filter: grayscale(100%);
            }
        }
        .pro-desc{
            text-decoration: none;
            font-family: "PatuaOne";
            font-size: 18px;
        }
    }
}
@media only screen and (min-width: 900px) {
    .project-list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
}
</style>
