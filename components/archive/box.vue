<template>
    <div class="flex">
        <div>
            <div class="w-64 h-4 bg-white border-2 border-b-0 border-primary"></div>
            <div class="flex items-center justify-center w-64 h-20 text-sm bg-white border-2 border-primary text-primary">
                <slot/>
            </div>
        </div>
        <div>
            <div class="w-20 h-4 bg-white border-2 border-b-0 border-l-0 border-primary"></div>
            <div class="w-20 h-20 text-sm bg-white border-2 border-l-0 border-primary"></div>
        </div>
    </div>
</template>
