import { onMounted, ref } from 'vue'
import api from '../api'

export default function useMusicVideos () {
  const musicVideos = ref([])
  const getMusicVideos = () => {
    /* use the api to load music videos */
    api.getMusicVideos().then(
      (data) => {
        console.log('music videos loaded from backend: ', data)
        musicVideos.value = data.musicvideos
      },
      (error) => {
        console.error('oh no, loading music videos failed ', error)
        musicVideos.value = []
      }
    )
  }

  // load them after vue component is mounted
  onMounted(getMusicVideos)

  return { musicVideos }
}
