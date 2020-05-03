import axios from 'axios';

const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
}

function fetchListItem(pageName) {
    return axios.get(`${config.baseUrl}${pageName}/1.json`);
}

function fetchCommentItem(commentId) {
    return axios.get(`${config.baseUrl}item/${commentId}.json`);
}

function fetchUserInfo(userName) {
    return axios.get(`${config.baseUrl}user/${userName}.json`);
}

export {
    fetchListItem,
    fetchCommentItem,
    fetchUserInfo
};
 

