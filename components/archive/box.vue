<template>
    <div class="flex">
        <div>
            <div class="w-64 h-4 bg-white border-[3px] border-b-0 border-secondary"></div>
            <div class="flex items-center justify-center w-64 h-20 text-sm bg-white border-[3px] border-secondary text-secondary-dark">
                <slot/>
            </div>
        </div>
        <div>
            <div class="w-20 h-4 bg-white border-[3px] border-b-0 border-l-0 border-secondary"></div>
            <div class="w-20 h-20 text-sm bg-white border-[3px] border-l-0 border-secondary"></div>
        </div>
    </div>
</template>
