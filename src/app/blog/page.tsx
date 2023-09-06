import BlogAverage from "@/components/blogAverage/blogAverage";
import BlogBig from "@/components/blogBig/blogBig";
import BlogSmall from "@/components/blogSmall/blogSmall";
import CardArticle from "@/components/cardArticle/CardArticle";
import { mokData, ImokData } from "@/utils/mokFile";

const Blog = () => {
    return (
        <div className=" max-w-[1338px] mx-auto mt-[62px]">
            <CardArticle mokData={mokData} />
            {/* <BlogBig />
            <BlogSmall />
            <BlogAverage />
            <BlogSmall /> */}
        </div>
    )
}

export default Blog;