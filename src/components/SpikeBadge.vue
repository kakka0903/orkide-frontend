<template>
<div>

    <div class="relative flex items-center justify-center w-24 h-24 text-secondary">
        <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="193.926" height="195.072" viewBox="0 0 193.926 195.072">
            <path id="Path_174" data-name="Path 174" d="M4455.449,17009.135l45.105,10.387-9.958-46.371,34.573,32.447,13.9-45.514,14.132,45.514,34.613-32.447-10.763,46.371,45.693-10.387-31.437,34.264,44.01,13.777-44.01,14.209,31.438,34.814-45.693-10.178,10.763,45.373-34.613-31.668-14.132,45.43-13.9-45.43-34.573,31.668,9.958-45.373-45.105,10.178,31.179-34.814-45.232-14.209,45.232-13.777Z" transform="translate(-4441.396 -16960.084)"/>
        </svg>
        <p
            class="absolute text-white"
            style="top:50%; left: 50%; transform: translate(-50%, -50%)"
        >
            <slot></slot>
        </p>
    </div>
</div>
</template>
