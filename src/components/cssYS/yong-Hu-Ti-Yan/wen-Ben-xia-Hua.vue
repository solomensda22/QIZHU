<template>
    <div class="wen-Ben-xia-Hua">
        <main ref="main">
            <p><a>please add beauuuuuuuutiful underline effect</a></p>

            <p><a>Please add beauuuuuuuutiful underline effect</a></p>

            <p><a>please add beauuuuuuuutiful underline effect!</a></p>

            <p><a>Web开发人员需要知道的CSS技巧！</a></p>

            <p><a>please add beauuuuuuuutiful underline effect!</a></p>

            <p><a>please add beauuuuuuuutiful underline effect!</a></p>

            <p><a>please add beauuuuuuuutiful underline effect!</a></p>
        </main>

    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.wen-Ben-xia-Hua {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 39px 0;
    user-select: none;
    font: 16px / 1 Helvetica, sans-serif;
}

main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 39px 0;
    user-select: none;
    font: 16px / 1 Helvetica, sans-serif;
}

p:nth-of-type(1)>a {
    box-shadow: 0 -1px 0 0 #bd1259 inset;
}

p:nth-of-type(2)>a {
    position: relative;
}

p:nth-of-type(2)>a:after {
    content: '';
    width: 100%;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    border-bottom: 1px solid #1815ec;
}

p:nth-of-type(3)>a {
    padding-bottom: 1px;
    background: linear-gradient(#b4a078, #b4a078) no-repeat;
    background-size: 100% 1px;
    background-position: 0 18px;
}

p:nth-of-type(3)>a:hover {
    animation: text-underline-slideInLeft 1.2s linear infinite forwards;

    @keyframes text-underline-slideInLeft {
        from {
            background-position-x: -432px;
        }

        50% {
            background-position-x: 0;
        }

        to {
            background-position-x: 432px;
        }
    }
}

p:nth-of-type(3)>a:hover {
    animation: text-underline-slideInLeft 1.2s linear infinite forwards;

    @keyframes text-underline-slideInLeft {
        from {
            background-position-x: -432px;
        }

        50% {
            background-position-x: 0;
        }

        to {
            background-position-x: 432px;
        }
    }
}

p:nth-of-type(4)>a {
    padding-bottom: 1px;
    background: linear-gradient(#b4a078, #b4a078) no-repeat;
    background-size: 100% 1px;
    background-position: 0 18px;
}

p:nth-of-type(4)>a:hover {
    animation: text-underline-slideInLeft 1.2s linear infinite forwards;
}

p:nth-of-type(5)>a {
    background: linear-gradient(90deg, #b4a078 66%, transparent 0) repeat-x;
    background-size: .3em 1px;
    background-position: 0 1em;
    text-shadow: .05em 0 white, -.05em 0 white;
    /* avoid parts below the baseline*/
}

p:nth-of-type(6)>a {
    background: linear-gradient(45deg, transparent 45%, #b4a078 45%, #b4a078 60%, transparent 0),
        linear-gradient(-45deg, transparent 45%, #b4a078 45%, #b4a078 60%, transparent 0);
    background-repeat: repeat-x;
    background-size: .3em .15em;
    background-position: 0 1em, .2em 1em;
    text-shadow: .05em 0 white, -.05em 0 white;
    /* avoid parts below the baseline*/
}

p:nth-of-type(7)>a {
    text-decoration: underline wavy #b4a078;
}
</style>