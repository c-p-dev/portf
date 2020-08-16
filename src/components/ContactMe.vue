<template>
    <section>
        <div class="container column-template" id="contact-me">
            <Vtitle title="Contact Me" />
            <div class="contact-me-details">
                <div class="by-email">
                    <h4>Send me an Email</h4>
                    <h3 class="email">chris.patuasic@gmail.com</h3>
                </div>
                <div class="by-resume">
                    <h4>Check Out my Resume</h4>
                    <button id="resume-btn">
                        <span>View Resume</span>
                    </button>
                </div>
                <div class="platforms">
                    <h4>Check me out at these platforms</h4>
                    <div class="platforms">
                        <ul id="template-icons">
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/chris-patuasic-85b403158/"
                                    target="_blank"
                                >
                                    <IconifyIcon
                                        :icon="icons.linkedinFilled"
                                        :style="{ color: '#ffffff', fontSize: '30px;' }"
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/chrisyaneh" target="_blank">
                                    <IconifyIcon
                                        :icon="icons.facebookFilled"
                                        :style="{ color: '#ffffff', fontSize: '30px;' }"
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/c-p-dev" target="_blank">
                                    <IconifyIcon
                                        :icon="icons.githubFilled"
                                        :style="{ color: '#ffffff', fontSize: '30px;' }"
                                    />
                                </a>
                            </li>
                            <!-- <li>
                            <a href="https://www.facebook.com/chrisyaneh" target="_blank">
                                <IconifyIcon
                                    :icon="icons.gmailIcon"
                                    :style="{ color: '#ffffff', fontSize: '30px;' }"
                                />
                            </a>
                            </li>-->
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Vtitle from "./shared/Vtitle.vue";
import IconifyIcon from "@iconify/vue";
import linkedinFilled from "@iconify/icons-ant-design/linkedin-filled";
import facebookFilled from "@iconify/icons-ant-design/facebook-filled";
import githubFilled from "@iconify/icons-ant-design/github-filled";
import gmailIcon from "@iconify/icons-mdi/gmail";

export default {
    name: "ContactMe",
    components: {
        Vtitle,
        IconifyIcon
    },
    data() {
        return {
            icons: {
                linkedinFilled,
                facebookFilled,
                githubFilled,
                gmailIcon
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
    width: 180px;
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

button {
    background: transparent;
    border: none;
    color: $gray;
    font-family: "Open Sans";
    font-size: 16px;
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
