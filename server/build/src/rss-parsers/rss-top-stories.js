import fetch from 'node-fetch';
const RSS_URL = 'http://rss.cnn.com/rss/edition.rss';
export const fetchRSS = () => {
    fetch(RSS_URL)
        .then((response) => response.text())
        .then((content) => new window.DOMParser().parseFromString(content, "text/xml"))
        .then((data) => {
        console.log(data);
    });
};
//# sourceMappingURL=rss-top-stories.js.map