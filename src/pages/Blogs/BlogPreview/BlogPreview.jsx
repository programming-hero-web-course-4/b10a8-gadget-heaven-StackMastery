import { useContext, useEffect, useState } from "react";
import { useLoaderData, useLocation , useParams } from "react-router-dom";
import Rating from "../../../components/Ui/Rating";
import { LuShare2 } from "react-icons/lu";
import toast from "react-hot-toast";
import { AppContext } from '../../../context/AppContext/AppContextProvider';

const BlogPreview = () => {

    const {blogId} = useParams()
    
    const allBlog = useLoaderData()

    const [singleBlogState, setsingleBlogState] = useState();
    const { setheaderIsHome } = useContext(AppContext)


    useEffect(() => {
        const singleBlog = allBlog.find((blog) => blog._id === blogId)
        setsingleBlogState(singleBlog)

        document.title = `${singleBlog.title.slice(0, 20)} | Gadget Heaven Blogs`
        setheaderIsHome(false)
    } ,[setsingleBlogState])

    const location = window.location
    console.log(location);
    
    return (
        <>
            {
                singleBlogState
                    ? (
                        <section className="w-full flex justify-center pt-20">
                            <div className="w-primary p-5 rounded-2xl p-5">
                                <div className="bg-white p-5 border rounded-xl">
                                    <div className="overflow-hidden rounded-xl">
                                        <div style={{ backgroundImage: `url(${singleBlogState?.image_url})` }} className="bg-no-repeat bg-cover">
                                            <div className="w-full h-full rounded-xl bg-[#0000003f] p-10 space-y-5">
                                                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white md:w-9/12">{singleBlogState?.title}</h2>
                                                <p className="text-[#c8c8c8]">{singleBlogState?.details.slice(0, 180)}</p>
                                                <hr className="bg-off-white"/>
                                                <div className="flex items-center justify-between flex-wrap">
                                                    <div className="flex gap-5">
                                                        <img src={singleBlogState?.author.img} className="w-16 rounded-xl h-16 object-cover" alt="Author Image" />
                                                        <div>
                                                            <Rating>{singleBlogState?.rating.number}</Rating>
                                                            <p className="text-white">Name: {singleBlogState?.author.name}</p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <LuShare2 onClick={() => {
                                                            navigator.clipboard.writeText(location)
                                                            toast.success('Url Copied To Clipboard')
                                                        }} color="white" size={20} className="hover:scale-90 cursor-pointer"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white p-10 border rounded-xl mt-5">
                                    <h3 className="text-xl font-semibold pb-2">Details</h3>
                                    <p className="text-off-white leading-loose font-light">{singleBlogState.details}</p>
                                </div>
                            </div>
                        </section>
                    )
                    : (
                        'hi'
                    )
            }
        </>
    );
}

export default BlogPreview