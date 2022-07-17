import { createApp } from 'vue'
import { createServer } from 'miragejs'
import App from './App.vue'
import './index.css'

createServer({
    routes() {
      this.get("/api/projects/musicvideos", () => ({
        musicvideos: [
          { id:1, youtubeId:"Ri3k4XB2e7c", name: 'Trapmobile', description: 'is the third music video produced by Orkidé. The trapmobile seen in the videos, is a Volvo station wagon.', artist: 'Undergrunn', length: 165, year: 2020},
          { id:2, youtubeId:"2NR29EicJP4", name: 'DR.PLAZA', description: 'This music video is actually banned in saudi arabia since it features the use of narcotics', artist: 'Undergrunn', length: 238, year: 2019},
          { id:3, youtubeId:"KaCIVZKTjv4", name: 'Hjemmebrent', description: 'This project was codenamed "generic song 3" since information orkidé projects kept leaking to the masses.', artist: 'MONSTER', length: 199, year: 2019},
        ],
      }))
    },
})

createApp(App).mount('#app')
