<template>
    <article>
        <div class="navbar-button">Geri Dön
        </div>
    </article>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.navbar-button {
    width: 102px;;
    background: #aec2ff; /* Arkaplan rengi */
    box-shadow: 0px 3px 6px #00000029;  /* Gölge efekti */
    border-radius: 39px; /* Kenar yuvarlaklığı */
    opacity: 1; /* Opaklık */
    cursor: pointer; /* Fare imleci */
    text-align: center;
    font: normal normal normal 20px/28px 'Segoe UI';
    color: #000000;
    letter-spacing: 0px;
}

.navbar-button:hover {
    box-shadow: inset 0px 3px 6px #00000029; /* :hover durumunda outer (dış) gölge efekti */
}


</style>