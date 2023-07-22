<template>
    <div class="flex">
        <div>
            <div class="w-64 h-4 bg-white border-2 border-b-0 border-blue-600"></div>
            <div class="flex items-center justify-center w-64 h-20 text-sm text-blue-600 bg-white border-2 border-blue-600">
                <slot/>
            </div>
        </div>
        <div>
            <div class="w-20 h-4 bg-white border-2 border-b-0 border-l-0 border-blue-600"></div>
            <div class="w-20 h-20 text-sm bg-white border-2 border-l-0 border-blue-600"></div>
        </div>
    </div>
</template>
