<template>
  <ClientOnly>
    <span><span class="hidden sm:inline-flex ">{{ timezoneText }}</span> {{ clockText }}</span>
  </ClientOnly>
</template>

<script>
export default {
  name: 'TimezoneClock',

  setup () {
    const hours = ref('00')
    const minutes = ref('00')
    const seconds = ref('00')
    const timezoneText = ref('GTM+1')

    const getTimeZone = () => {
      timezoneText.value = new Date().toString().match(/([A-Z]+[\+-][0-9]{2})/)[1]
    }
    const addZeroPadding = (n) => {
      // add padding to one digit numbers
      return (parseInt(n, 10) >= 10 ? '' : '0') + n
    }
    const clockText = computed(() => {
      return `${hours.value}:${minutes.value}:${seconds.value}`
    })
    const updateTime = () => {
      // update time variables
      const date = new Date()
      hours.value = addZeroPadding(date.getHours())
      minutes.value = addZeroPadding(date.getMinutes())
      seconds.value = addZeroPadding(date.getSeconds())

      // call again in a second
      window.setTimeout(updateTime, 1000)
    }

    onBeforeMount(() => {
      // get timezone and start update loop
      getTimeZone()
      window.setTimeout(updateTime, 1000)
    })

    return { clockText, timezoneText }
  }
}
</script>
