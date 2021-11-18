import axios from "axios";

export function getData() {
    return axios({
        url: '../data/Animals.json'
    })
}