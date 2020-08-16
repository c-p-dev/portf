<template>
    <div class="container">
        <section
            id="about-me"
            class="content content-page animate__animated animate__fadeInUp animate__delay-1s"
        >
            <Vtitle title="About Me" />

            <div class="row">
                <div class="col-1">
                    <div class="image-container">
                        <img id="dp" src="../assets/me.png" alt />
                    </div>
                </div>
                <div class="col-1">
                    <div class="about-title primary-font t-center">
                        <h3>Hello. Im Chris</h3>
                    </div>
                    <div class="about-txt secondary-font">
                        <p>I started working as a Software Developer since 2014 after graduating Information Technology. I have both Back-end and Front-end experience but I prefer to keep learning and continue challenging myself to create awesome solutions for people.</p>
                        <p>Since then I like to keep working and producing quality solutions while developing proficiency on my skills. I believe that a good software comes from Iterations of seeking improvements from current solutions.</p>
                    </div>
                </div>
                
            </div>
        </section>
    </div>
</template>

<script>
import Vtitle from "./shared/Vtitle.vue";
import "animate.css";
export default {
    name: "Aboutme",
    components: {
        Vtitle
    }
};
</script>
<style lang="scss" scoped>
.image-container {
    margin: 0 auto;
    text-align: center;
    #dp {
        width: 100%;
        max-width: 500px;

        &::after{
            top: 20px;
            left: 20px;
            z-index: -1;
            border-width: 2px;
            border-style: solid;
            border-color: rgb(100, 255, 218);
            border-image: initial;
        }
    }
}

// .image-container {
//     grid-column: 2;
// }
// .title-header {
//     grid-column: 2;
//     text-align: center;
//     margin: 0 auto;
// }
// #dp {
//     width: 100%;
// }
// .about-title {
//     font-family: "PatuaOne";
//     grid-column: 2;
//     text-align: center;
// }

// .about-txt {
//     font-family: "Quicksand";
//     font-size: 20px;
//     grid-column: 2;
// }
// @media screen and (max-width: 899px) {
//     .image-container {
//         margin: 0 auto;
//         #dp {
//             max-width: 400px;
//         }
//     }
// }

// @media only screen and (min-width: 900px) {
//     .container {
//         display: grid;
//         grid-template-columns: 80px auto 80px;
//         grid-template-rows: 160px 400px 60px auto;
//     }
//     .image-container {
//         grid-column: 2;
//         grid-row: 2;
//         text-align: center;
//         #dp {
//             width: 500px;
//         }
//     }

//     .about-title {
//         grid-column: 2;
//         grid-row: 3;
//         align-items: center;
//         text-align: center;
//         font-size: 30px;
//     }
//     .about-txt {
//         grid-column: 2;
//         grid-row: 4;
//         align-items: center;
//         text-align: left;
//         font-size: 20px;
//         margin: 50px;
//     }

//     .title-header {
//         grid-column: 2;
//         display: block;
//         width: 180px;
//         text-align: center;
//         margin: 0 auto;
//     }
// }
</style>
