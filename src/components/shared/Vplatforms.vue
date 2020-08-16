<template>
     <ul id="template-icons">
         <li v-for="item in platforms" :key="item.name">
            <a v-bind:href="item.link" target="_blank">
                <IconifyIcon
                    :icon="item.icon"
                    :style="{ color: '#ffffff', fontSize: '30px' }"
                />
            </a>
         </li>
        <!-- <li>
            <a href="https://www.linkedin.com/in/chris-patuasic-85b403158/" target="_blank">
                <IconifyIcon
                    :icon="icons.linkedinFilled"
                    :style="{ color: '#ffffff', fontSize: '30px' }"
                />
            </a>
        </li>
        <li>
            <a href="https://www.facebook.com/chrisyaneh" target="_blank">
                <IconifyIcon
                    :icon="icons.facebookFilled"
                    :style="{ color: '#ffffff', fontSize: '30px' }"
                />
            </a>
        </li>
        <li>
            <a href="https://github.com/c-p-dev" target="_blank">
                <IconifyIcon
                    :icon="icons.githubFilled"
                    :style="{ color: '#ffffff', fontSize: '30px' }"
                />
            </a>
        </li> -->
        <!-- <li>
            <a href="https://www.facebook.com/chrisyaneh" target="_blank">
                <IconifyIcon
                    :icon="icons.gmailIcon"
                    :style="{ color: '#ffffff', fontSize: '30px' }"
                />
            </a>
        </li> -->
    </ul>
</template>

<script>
import IconifyIcon from "@iconify/vue";
// import linkedinFilled from "@iconify/icons-ant-design/linkedin-filled";
// import facebookFilled from "@iconify/icons-ant-design/facebook-filled";
// import githubFilled from "@iconify/icons-ant-design/github-filled";
export default {
    name: "Vplatforms",
     components: {
        IconifyIcon,
    },
    data() {
        let platforms =  [
            // {
            //     link:`https://www.facebook.com/chrisyaneh`,
            //     name:`facebook`,
            //     icon: facebookFilled
            // },
            // {
            //     link:`https://www.linkedin.com/in/chris-patuasic-85b403158/`,
            //     name:`linkedIn`,
            //     icon: linkedinFilled
            // },
            // {
            //     link:`https://github.com/c-p-dev`,
            //     name:`GitHub`,
            //     icon: githubFilled
            // },
        ]
        return {
            platforms: platforms
        }
    },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$bg: #0a0c10;
$orange: #f88600;
$gray: #cccccc;


</style>
