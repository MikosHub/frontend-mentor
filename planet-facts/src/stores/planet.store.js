import { defineStore } from "pinia";
import planetData from '../../data.json';

export const usePlanetStore = defineStore('planets', {
    state: () => ( {
        currentPlanet: 0,
        currentMode: 0,
        planetData: planetData
    })
});