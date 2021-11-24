import fetch from 'node-fetch';

const RSS_URL = 'http://rss.cnn.com/rss/edition.rss';

const fetchRSS = () => {
    fetch(RSS_URL)
        .then((response: any) => response.text())
        .then((content: string) => console.log(content))
        // .then((data) => {
        //     console.log(data);
        // });
}

export {
    fetchRSS
};
