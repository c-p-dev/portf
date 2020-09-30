<template>
    <div class="container">
        <section
            id="contact-me"
            class="content content-page animate__animated animate__fadeInUp animate__delay-1s"
        >
            <Vtitle title="Contact Me" />
            <div class="contact-me-details secondary-font t-center">
                <!-- <div class="by-email">
                    <h4>Send me an Email</h4>
                    <h3 class="email">chris.patuasic@gmail.com</h3>
                </div>
                <div class="by-resume">
                    <h4>Check Out my Resume</h4>
                    <button id="resume-btn">
                        <span>View Resume</span>
                    </button>
                </div> -->

                <p>
                    Shoot me an message here.  Will gladly try to message you back right away.
                </p>
            
                <a class="main-buttons" href="mailto:chris.patuasic@gmail.com">Email me</a>
                
            </div>
        </section>
     </div>
</template>

<script>
import Vtitle from "./shared/Vtitle.vue";
// import IconifyIcon from "@iconify/vue";
// import linkedinFilled from "@iconify/icons-ant-design/linkedin-filled";
// import facebookFilled from "@iconify/icons-ant-design/facebook-filled";
// import githubFilled from "@iconify/icons-ant-design/github-filled";
// import gmailIcon from "@iconify/icons-mdi/gmail";

export default {
    name: "ContactMe",
    components: {
        Vtitle,
        // IconifyIcon
    },
    data() {
        return {
            icons: {
                // linkedinFilled,
                // facebookFilled,
                // githubFilled,
                // gmailIcon
            }
        };
    }
};
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
}
.title-header {
    grid-column: 2;
    margin: 0 auto;
    text-align: center;
}
.contact-me-details {
    grid-column: 2;
    text-align: center;
    font-family: "QuickSand";
    font-size: 16px;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-row-gap: 10px;

    .email {
        font-size: 1.4rem;
        font-family: "Questrial";
    }
}

#template-icons {
    display: inline-grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    text-align: center;
    list-style-type: none;
    justify-self: end;
    column-gap: 12px;
    align-items: center;
    li {
        cursor: pointer;
        &:hover {
            transform: scale(1.2);
        }
    }
}

.main-buttons {

    margin-top: 30px;
    background: transparent;
    border: none;
    color: $gray;
    font-family: "Open Sans";
    width: 200px;
    margin: 0 auto;
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

@media only screen and (min-width: 900px) {
    .by-email,
    .platforms,
    .by-resume {
        display: flex;
        text-align: center;
        align-items: center;
        justify-self: center;
    }

    h4 {
        margin-right: 80px;
    }
}
</style>
