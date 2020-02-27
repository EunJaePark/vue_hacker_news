import axios from 'axios';

const config = {
    baseUrl = 'https://api.hnpwa.com/v0/';
}

function fetchListItem(pageName) {
    return axios.get(`${config.baseUrl}${pageName}/1.json`);
}

export {fetchListItem};

