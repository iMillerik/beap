<template lang="pug">
	
	#app
		textarea(placeholder="Enter any text and then copy URL and then share it with friends. Press CTRL+Enter to download your text as file", autofocus, autocomplete="off", v-model="text", @input="pushToURL", @keyup.ctrl.13="saveAsFile")

</template>

<style>
	@import url('https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,700i&display=swap&subset=cyrillic');
</style>

<style lang="less">
	@import "./assets/less/main";
</style>

<script src="./assets/js/main.js"></script>