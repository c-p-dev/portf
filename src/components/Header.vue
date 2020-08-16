<template>
    <header id="header" class="animate__animated animate__fadeInDown" v-bind:class="{ scrolled: isActive }">
        <span id="hamburger">
            <IconifyIcon
                :icon="icons.hamburgerMenu"
                :style="{ color: '#ffffff', fontSize: '40px' }"
            />
        </span>

        <a id="logo"  href="/" >
            <img src="../assets/cp-logo.svg" alt="vue logo" />
        </a>

        <ul id="nav">
            <li>
                <a href="/aboutme" v-on:click="gotoPage($event, 'about-me')" >About me</a>
            </li>
            <li>
                <a href="/experience" v-on:click="gotoPage($event, 'experience')" >Experience</a>
            </li>
            <li>
                <a href="/projects" v-on:click="gotoPage($event, 'projects')" >Projects</a>
            </li>
            <li>
                <a href="/contact-me" v-on:click="gotoPage($event, 'contact-me')" >Contact Me</a>
            </li>
        </ul>
       
        
    </header>
</template>

<script>
import IconifyIcon from "@iconify/vue";
import hamburgerMenu from "@iconify/icons-cil/hamburger-menu";
import linkedinFilled from "@iconify/icons-ant-design/linkedin-filled";
import facebookFilled from "@iconify/icons-ant-design/facebook-filled";
import githubFilled from "@iconify/icons-ant-design/github-filled";
import gmailIcon from "@iconify/icons-mdi/gmail";
import 'animate.css'

export default {
    name: "Header",
    components: {
        IconifyIcon,
    },
    data() {
        return {
            isActive: false,
            icons: {
                hamburgerMenu,
                linkedinFilled,
                facebookFilled,
                githubFilled,
                gmailIcon
            }
        };
    },
    created () {
    window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        gotoPage: function(event, page){
            // console.log(`$event`, event);
            // console.log(`page`,page);
            if (event) {
                event.preventDefault()
                const el = document.getElementById(page);
                console.log(`el`, el);
                if(el){
                    let offset = -1000
                    if(page === 'about-me'){
                        offset = -200;
                    }
                    const yOffset = offset; 
                    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    console.log(`window.pageYOffset`,window.pageYOffset);
                    console.log(`y`,y);
                    el.scrollIntoView({ top: y , behavior: 'smooth', block: 'center'});
                }
            }
            
           
        },
        handleScroll($event){
            console.log(`handleSCroll`, $event);
            const el = document.getElementById('header');
            const y = el.getBoundingClientRect().top + window.pageYOffset;
            console.log(`data`, this.isActive)
            if(y > 100){
                this.isActive = true;
            }else{
                this.isActive = false;
            }
            
        }


    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import url("../assets/scss/_global.scss");
#header {
    display: grid;
    grid-template-columns: 0.2fr auto;
    background: transparent;
    position: fixed;
    z-index: 1;
    width: 100%;
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

ul {
    margin: 10px 0px 10px 0px;
}

#nav {
    display: none;
}
#logo {
    text-align: center;
    margin: 10px;
    align-self: center;
}

#hamburger {
    margin: 10px;
}

.scrolled {
    background: $bg !important;
    opacity: 0.8;
    transition: background 1s ease, opacity 1s ease;
}

.t1{
    transition-delay: 100ms;
}

.animate-delay-100{
    --animate-delay: 1s!important;
}
.animate-delay-200{
    --animate-delay: 2s!important;
}
.animate-delay-300{
    --animate-delay: 3s;
}
.animate-delay-400{
    --animate-delay: 4s;
}
.animate-delay-500{
    --animate-delay: 5s;
}

@media only screen and (min-width: 600px) {
    #header {
        display: grid;
        grid-template-columns: 0.2fr 1fr 0.9fr;
    }

    #hamburger {
        display: none;
    }

    #nav {
        display: inline-grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 2fr;
        list-style-type: none;
        text-align: center;
        column-gap: 20px;
        font-family: Roboto;
        font-size: 18px;
        align-items: center;
        white-space: nowrap;

        li {
            
            &:hover {
                border-bottom: 1px solid $orange;
              
                
            }
            a {
                color: $gray;
                text-decoration: none;
            }
        }
    }
}
</style>
