import BlogAverage from "@/components/blogAverage/blogAverage";
import BlogBig from "@/components/blogBig/blogBig";
import BlogSmall from "@/components/blogSmall/blogSmall";

const Blog = () => {
    return (
        <div className=" max-w-[1338px] mx-auto mt-[62px]">
            <BlogBig />
            <BlogSmall />
            <BlogAverage />
            <BlogSmall />
        </div>
    )
}

export default Blog;