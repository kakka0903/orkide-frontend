<template>
    <button class="flex group">
        <div class="flex flex-col items-end">
            <div class="w-[260px] h-4 pl-1 bg-white border-[3px] border-secondary-dark group-hover:border-secondary "></div>
            <div class="flex items-center justify-center border-t-0 w-64 h-20 text-sm bg-white border-[3px] border-secondary-dark group-hover:border-secondary text-secondary-dark">
                <slot/>
            </div>
        </div>
        <div class="flex flex-col items-start">
            <div class="w-[84px] h-4 bg-white border-[3px] border-l-0 border-secondary-dark group-hover:border-secondary"></div>
            <div class="w-20 h-20 text-sm bg-white border-t-0 border-[3px] border-l-0 border-secondary-dark group-hover:border-secondary"></div>
        </div>
    </button>
</template>
