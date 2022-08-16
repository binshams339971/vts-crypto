const generateDefaultThumbnailLinkFromId = (id) => {
    return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}
const getVideoId = (url) => {
    var re = /https?:\/\/(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube(?:-nocookie)?\.com\S*?[^\w\s-])([\w-]{11})(?=[^\w-]|$)(?![?=&+%\w.-]*(?:['"][^<>]*>|<\/a>))[?=&+%\w.-]*/i;

    var id = url.match(re);

    try {
        return id[1];
    } catch {
        throw new Error('Invalid Youtube Video Url');
    }
}

const getDefaultThumbnailLinkFromURL = (url) => {
    try {
        let id = getVideoId(url);
        return generateDefaultThumbnailLinkFromId(id);
    } catch {
        throw new Error('Invalid Youtube Video URL');
    }
}

const getDefaultThumbnailLinkFromId = (id) => {
    return generateDefaultThumbnailLinkFromId(id);
}

export {
    getDefaultThumbnailLinkFromId,
    getDefaultThumbnailLinkFromURL,
    getVideoId
}