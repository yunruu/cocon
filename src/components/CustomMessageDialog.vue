<template>
    <div class="fixed top-6 left-0 w-full flex justify-center">
        <div v-if="props.show" class="flex gap-4 bg-teal-100 p-3 w-5/6 rounded-md border border-teal-400 items-center">
            <img src="../assets/icons/success.svg" alt="Success icon" class="w-6 h-6" />
            <h2 class="text-md font-semibold">{{ message }}</h2>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps(['message', 'show']);
</script>