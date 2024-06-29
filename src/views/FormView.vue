<template>
    <div class="flex items-center gap-6 mt-14 ml-6">
        <img src="../assets/icons/logo.svg" alt="Logo" class="w-16" />
        <div class="text-3xl font-semibold text-pink-800">
            <p>Currency</p>
            <p>Converter</p>
        </div>
    </div>
    <CurrencyForm />
</template>

<script setup>
import CurrencyForm from '../components/CurrencyForm.vue'
</script>