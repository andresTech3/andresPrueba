import {useState} from "react"
import useGetFetch from "./useGetFetch.js";

  function useGetNewBlogs(){
        const dataBlogs = useGetFetch("https://api-andrestech-blogs.herokuapp.com/blogs","posts");

        
        const [search, setSearch] = useState("");
        const [modalEntryBlog, setModalEntryBlog] = useState(false);

        //logic search
        let searchArr = [];

        if(!search.length >= 1){
            searchArr = [...dataBlogs];
        }
        else{
            searchArr = dataBlogs.filter(blog =>{
                const titleBlogs = blog.title.toLowerCase();
                const titleSearch = search.toLowerCase();
                const checkBlogs = titleBlogs.includes(titleSearch)
                return checkBlogs;
            });
        }

        // const addBlogs = (obj) =>{
        //     const infoNewBlog = [...blogsNew]
        //     infoNewBlog.push({
        //         id : obj.id,
        //         categoria : obj.categoria,
        //         title : obj.title,
        //         descripBlogs : obj.descripBlogs,
        //         color : obj.color,
        //         linkBlogs : obj.linkBlogs,
        //     })

        //     setBlogsNew(infoNewBlog)
        // }
        
        return {
            search,
            setSearch,
            searchArr,
            modalEntryBlog,
            setModalEntryBlog,
            dataBlogs
        };
  }

  export default useGetNewBlogs

