<template>
    <div></div>
</template>

<script setup>
import { navigateTo } from 'nuxt/app'

if (process.client) {
    navigateTo('/login')
}
</script>