<template>
    <div class="container">
        <section
            id="experience"
            class="content content-page animate__animated animate__fadeInUp animate__delay-1s"
        >
            <Vtitle title="Experience" />
            <div class="date-selector">
                <div class="mobile-year">
                    <ul>
                        <li v-for="item in year" :key="item.value">
                            <button
                                v-on:click="setActiveYear(item)"
                                class="list-font"
                                v-bind:class="{ active: item.active }"
                            >
                                <span>{{ item.value }}</span>
                            </button>
                        </li>
                    </ul>
                </div>
                <div class="mobile-experience-details ">
                    <div class="title">
                        <span class="pos-name ">{{ getActiveYear().experience.posName }} -</span>
                        <a
                            v-bind:href="getActiveYear().experience.compLink"
                            target="_blank"
                            class="comp-name"
                        >{{ getActiveYear().experience.compName }}</a>
                    </div>

                    <h5 class="year-duration list-font animate__animated animate__fadeInUp ">{{ getActiveYear().experience.year }}</h5>
                    <!-- <div class="role-details secondary-font">
                        <p>{{ getActiveYear().experience.details }}</p>
                    </div> -->
                    <div class="role-details secondary-font">
                        <ul class="check-list">
                            <li  class="animate__animated animate__fadeInUp" v-for="respon in getActiveYear().experience.responsibilities" :key="respon">
                                {{respon}}
                            </li>
                        </ul>
                    </div>
                    <!-- <div class="tech-list">
                    <h5>Technologies:</h5>
                    <ul>
                        <li v-for="item in getActiveYear().experience.techStack" :key="item.value">
                            <IconifyIcon
                                :icon="item"
                                :style="{ color: '#ffffff', fontSize: '30px' }"
                            />
                        </li>
                    </ul>
                    </div>-->
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Vtitle from "./shared/Vtitle.vue";
// import IconifyIcon from "@iconify/vue";
import javascriptIcon from "@iconify/icons-logos/javascript";
import angularIcon from "@iconify/icons-logos/angular-icon";
import codeigniterIcon from "@iconify/icons-logos/codeigniter";
import phpIcon from "@iconify/icons-logos/php";
import javaIcon from "@iconify/icons-logos/java";
import gitlabIcon from "@iconify/icons-logos/gitlab";
import googleCloudPlatform from "@iconify/icons-logos/google-cloud-platform";
import googleAnalytics from "@iconify/icons-logos/google-analytics";
import jqueryIcon from "@iconify/icons-logos/jquery";
import joomlaIcon from "@iconify/icons-logos/joomla";
import vueIcon from "@iconify/icons-logos/vue";
import "animate.css";

export default {
    name: "Experience",
    components: {
        // IconifyIcon,
        Vtitle
    },
    data: function() {
        let year = [
            {
                value: "Indra Philippines, Inc.",
                active: true,
                experience: {
                    year: "May 2018 - Present",
                    compName: "Indra Philippines, Inc.",
                    compLink: "https://www.indracompany.com/en/indra",
                    posName: "Software Engineer",
                    responsibilities: [
                    "Integrated Google Analytics and Google Tag Manager for a booking web application.",
                    "Developed front end structure from clients designs.",
                    "Maintain assets and updates front end designs.",
                    "Conducted peer reviews with colleagues for code quality.",
                    "Developed and Integrated front end modules for a blog/magazine/booking application.",
                    "Supported applications for front end bug fixes.",
                    "Documented technical procedures for integrating producedcodes",
                    ],
                    techStack: [
                        angularIcon,
                        javascriptIcon,
                        gitlabIcon,
                        googleCloudPlatform,
                        googleAnalytics,
                        vueIcon
                    ]
                }
            },
            {
                value: "Vavasoft Inc.",
                active: false,
                experience: {
                    year: "May 2017 - May 2018",
                    compName: "Vavasoft Inc.",
                    compLink: "http://vavasoftware.net/",
                    posName: "Web Developer",
                responsibilities: [

                "Integrated SMS messaging API",
                "Introduced datatable plugin javascript library. ",
                "Developed modules using datatable.",
                "Enhancing user experience by modifying user Interface.",
                "Added animations for better visuals",
                "Produced a prototype for a commercial site",
                "Developing project using java web application technology.",
                "Contributed designing database schema. ",
                "Added SMS error logs.",
                ],
                    
                    techStack: [angularIcon, javascriptIcon, javaIcon]
                }
            },
            {
                value: "Yondu",
                active: false,
                experience: {
                    year: "January 2016 - April 2017",
                    compName: "Yondu",
                    compLink:"https://www.yondu.com/",
                    posName: "Junior Software Engineer",
                    responsibilities:[
                    "Integrated payment system using 3rd party API.",
                    "Developed interface module for a cross platform mobile application.",
                    "Modified UI of a Human Resource Management System increasing efficiency for user operations.",
                    "Contributed designing database schema for dynamic mobile application builder and product service payment system.",
                    "Produced three prototype systems using different technologies.",
                    ],
                    techStack: [angularIcon, javascriptIcon]
                }
            },
            {
                value: "United Laboratories, Inc.",
                active: false,
                experience: {
                    year: "October 2014 - December 2015",
                    compName: "United Laboratories, Inc.",
                    compLink:"http://www.globalquestconsulting.com/",
                    posName: "PHP Developer",
                    responsibilities : [
                        "Developed module exporting sales reports into a spreadsheet that includes line graphs.",
                        "Created Flu Monitor System module for a Joomla project.",
                        "Boosted website interactivity.",
                        "Integrated google maps API and twitter API.",
                        "Tested and improved queries decreasing fetching time data.",
                        "Added accuracy in the results.",
                        "Prepared and developed user interface for four websites.",
                        "Developed static website for commercial use.",
                    ],
                    techStack: [
                        jqueryIcon,
                        javascriptIcon,
                        phpIcon,
                        codeigniterIcon,
                        joomlaIcon
                    ]
                }
            },
        ];

        return {
            year: year,
            icons: {
                javascriptIcon,
                angularIcon
            }
        };
    },

    methods: {
        setActiveYear: function(chosenYear) {
            console.log(`year`, chosenYear);
            // console.log(`this.year`, this.year);
            this.year.forEach(item => {
                item.active = false;
            });
            chosenYear.active = true;
        },
        getActiveYear: function() {
            return this.year.find(item => item.active === true);
        }
    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.experience-page-bg {
    display: grid;
    grid-template-columns: 40px auto 40px;
    grid-template-rows: 120px 60px 60px 60px 280px 60px 60px;
}
.title {
    font-family: "Montserrat-SemiBold";
    font-size: 1.2em;
}
.year-duration {
    font-size: 0.8em;
    font-style: italic;
}



.date-selector {
    grid-column: 2;

    .mobile-year {
        color: $gray;
        // max-width: 400px;
        overflow-y: scroll;
        font-family: "Open Sans";
        font-size: 1rem;
        margin: 0px auto;
        display: flex;
        margin-bottom: 30px;
        width: calc(100% + 100px);
        margin-left: -50px;
        ul {
            display: flex;
            li {
                list-style: none;
                button {
                    text-decoration-skip-ink: auto;
                    position: relative;
                    cursor: pointer;
                    display: flex;
                    -webkit-box-align: center;
                    align-items: center;
                    width: 100%;
                    background-color: transparent;
                    height: 60px;
                    text-align: center;
                    padding: 0px 15px 2px;
                    outline: 0px;
                    box-shadow: none;
                    border: none;
                    border-bottom: 2px solid $gray;
                    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)
                        0s;
                    span {
                        color: $white;
                        font-size: 1em;
                    }

                    &.active {
                        outline: 0px;
                        border-bottom: 2px solid $orange;
                        background: $highlight;
                        span {
                            color: $orange;
                        }
                    }

                    &:hover{
                        background: $highlight;
                        span {
                            color: $orange;
                        }
                    }
                }
            }
        }
    }
}

@media only screen and (min-width: 900px) {
    .experience-page-bg {
        display: grid;
        grid-template-rows: 120px auto;
    }
    .date-selector {
        grid-column: 2;
        display: grid;
        grid-template-columns: 250px auto;
        .mobile-year {
            grid-column: 1;
            // align-items: center;
            justify-items: center;
            // padding: 20px;
            margin: 0 auto;
            overflow: hidden;
            ul {
                display: block;
                text-align: center;
                padding: 0px;
                li {
                    button {
                        border: none;
                        border-right: 2px solid $gray;
                        &.active {
                            border: none;
                            border-right: 2px solid $orange;
                        }
                    }
                }
            }
        }
    }

    .mobile-experience-details {
        grid-column: 2;
        padding: 20px 10px;
        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
    }

 
}
</style>
