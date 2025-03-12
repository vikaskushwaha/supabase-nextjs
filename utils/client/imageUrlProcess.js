

export const getValidImageUrl = (url) => {
    if (!url) return "/default-image.jpg"; // Provide a fallback image
    if (url.startsWith("http")) return url;
    return `https:${url}`;
};