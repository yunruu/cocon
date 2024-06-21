<template>
    <div class="p-6 mt-8">
        <form @submit.prevent="convertCurrency">
            <div class="flex flex-col space-y-4">
                <div class="flex gap-4 items-center">
                    <div class="flex flex-col w-full">
                        <label for="from" class="text-sm font-semibold">From</label>
                        <select id="from" v-model="fromCurr" class="p-2 border border-gray-300 rounded-md">
                            <option v-for="currency in currencies" :key="currency" :value="currency">{{ getCurrencyDisplay(currency) }}</option>
                        </select>
                    </div>
                    <img src="../assets/icons/exchange-icon.svg" alt="Exchange arrows" class="w-6 h-6 mt-4" />
                    <div class="flex flex-col w-full">
                        <label for="to" class="text-sm font-semibold">To</label>
                        <select id="to" v-model="toCurr" class="p-2 border border-gray-300 rounded-md">
                         <option v-for="currency in currencies" :key="currency" :value="currency">{{ getCurrencyDisplay(currency) }}</option>
                        </select>
                    </div>
                    <img src="../assets/icons/save.svg" alt="Save icon" class="w-6 h-6 mt-4 cursor-pointer" @click="handleClickSave" />

                </div>
                <div class="flex flex-col space-y-2">
                    <label for="amount" class="text-sm font-semibold">Amount</label>
                    <input type="number" id="amount" v-model="amount" min=0 class="p-2 border border-gray-300 rounded-md" />
                </div>
            </div>
        </form>

        <div class="mt-8 p-4 bg-indigo-100 flex justify-between items-center rounded-md">
            <span class="text-sm font-semibold ">Result</span>
            <span class="text-lg font-semibold">{{ convert(fromCurr, toCurr, amount) }} {{ getCurrencySymbol(toCurr) }}</span>
        </div>
    </div>
    <CustomMessageDialog :message="modalData.message" :show="modalData.isOpen" />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { currencies, convert, getCurrencySymbol } from '../utils/currencies';
import { getFromStorage, saveToStorage } from '../utils/storage';
import CustomMessageDialog from './CustomMessageDialog.vue';

const amount = ref(1);
const fromCurr = ref('EUR');
const toCurr = ref('EUR');
const modalData = ref({
    isOpen: false,
    message: 'Currencies saved successfully!',
});

const getCurrencyDisplay = (currency) => {
    return `${currency} (${getCurrencySymbol(currency)})`;
};

const handleClickSave = () => {
    saveToStorage('fromCurrency', fromCurr.value);
    saveToStorage('toCurrency', toCurr.value);
    modalData.value.isOpen = true;
    setTimeout(() => {
        modalData.value.isOpen = false;
    }, 3000);
}

onMounted(() => {
    const localFromCurr = getFromStorage('fromCurrency');
    const localToCurr = getFromStorage('toCurrency');

    if (localFromCurr) {
        fromCurr.value = localFromCurr;
    }

    if (localToCurr) {
        toCurr.value = localToCurr;
    }
});

</script>