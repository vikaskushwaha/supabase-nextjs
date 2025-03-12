
"use client"

import axios from "axios";
import { useEffect, useState } from "react";

const ProvidersBlog = (providerId) => {
    const [blogData, setBlogData] = useState([]);


    useEffect(() => {
        async function fetch() {
            const res = await axios.get('https://early-invite-q324.vybri.ai/api/1.1/obj/blogs',
                {
                    headers: {
                        Authorization: `Bearer ${process.env.NEXT_PUBLIC_BUBBLE_API_KEY}`,
                    },
                }
            )
            if (res.data.response.results) {
                const blogData = res.data.response.results;
                const blog = blogData.filter(blogData => blogData["Created By"] === providerId)
                setBlogData(blog)


            }

        }
        fetch();
    }, [providerId])
    return blogData;
}

export default ProvidersBlog;


// "use client"
// import axios from "axios";
// import { useEffect, useState } from "react";

// const ProvidersBlog = (providerId) => {
//     const [blogData, setBlogData] = useState([]);
//     const [page, setPage] = useState(1);
//     const [hasMore, setHasMore] = useState(true);

//     useEffect(() => {
//         setBlogData([]); // Reset blog data when providerId changes
//         setPage(1); // Reset page to 1 when providerId changes
//         setHasMore(true); // Reset hasMore when providerId changes
//     }, [providerId]);

//     useEffect(() => {
//         if (!hasMore) return;

//         async function fetch() {
//             const res = await axios.get(`https://early-invite-q324.vybri.ai/api/1.1/obj/blogs?limit=3&page=${page}`, {
//                 headers: {
//                     Authorization: `Bearer 0e7dfb1050c9dffb8861016fa1e4aaaa`,
//                 },
//             });

//             if (res.data.response.results) {
//                 const newBlogData = res.data.response.results;
//                 const filteredBlogs = newBlogData.filter(blog => blog["Created By"] === providerId);

//                 if (filteredBlogs.length === 0) {
//                     setHasMore(false); // No more data to fetch
//                 } else {
//                     setBlogData(prev => [...prev, ...filteredBlogs]);
//                 }
//             }
//         }

//         fetch();
//     }, [providerId, page, hasMore]);

//     const handleScroll = () => {
//         if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
//             setPage(prev => prev + 1);
//         }
//     };

//     useEffect(() => {
//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     return blogData;
// };

// export default ProvidersBlog;

