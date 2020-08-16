<template>
    <div class="title-header">
        <h2>{{title}}</h2>
    </div>
</template>

<script>
export default {
    name: "Vtitle",
    props: {
        title: String
    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

h2 {
    font-family: "Questrial";
    font-size: 30px;;
    align-items: center;
    color: $gray;
    // border-bottom: 3px solid $orange;

    &:after{
        content: "";
        display: block;
        height: 1px;
        width: 40%;
        background-color: $orange;
        position: relative;
        top: -40px;
        left: 30%;
    }
}

@media only screen and (min-width: 900px) {
}
</style>
