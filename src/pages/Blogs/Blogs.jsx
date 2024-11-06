import { useLoaderData, Link } from "react-router-dom";
import Titlebar from "../../components/Section/TitleBar/Titlebar";
import { useContext, useEffect, useState } from "react";
import { AppContext } from '../../context/AppContext/AppContextProvider';

const Blogs = () => {

    const allBlogs = useLoaderData()
  const { setheaderIsHome } = useContext(AppContext)

    useEffect(() => {
        document.title = 'Blogs | Gadget Heaven'
        setheaderIsHome(false)
      }, []);    

    const [categoryFilter, setCategoryFilter] = useState('0');

    return (
        <>
            <Titlebar
                title={'Blogs'}
            >
                    <p className='text-center  text-xs sm:text-sm text-white'>
                        Explore insightful articles on Ecommerce , Technology Etc covering the latest trends, tips, and expert advice. <br className='hidden md:block' />Stay informed, inspired, and up-to-date with our in-depth guides and resources.
                    </p>
            </Titlebar>
            <section className="flex justify-center px-5">
                <div className="w-fit p-5 bg-white rounded-b-xl border border-stone-200 gap-3 flex flex-wrap">
                    {
                        categoryBlogs && categoryBlogs.map((item, index) => (
                            <button
                                key={index} 
                                onClick={() => {
                                    setCategoryFilter(item.id)
                                }}
                                className={`${categoryFilter === item.id ? 'bg-primary border-primary text-white' : ''} py-2 px-5 rounded-xl border`}
                                >
                                {item.name}
                            </button>
                        ))
                    }

                </div>
            </section>
            <section className="flex justify-center">
                <div className="w-primary px-5 py-10 grid-cols-12 grid gap-5">
                  {
                        allBlogs && allBlogs
                            .filter((item) => categoryFilter === "0" || categoryFilter === item.category_id)
                            .map((item, index) => (
                                <div 
                                    key={index}
                                    className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 bg-white p-5 cursor-pointer rounded-2xl border space-y-5"
                                >
                                    <img 
                                        loading="lazy" 
                                        src={item.thumbnail_url} 
                                        className="rounded-xl border-2 hover:border-primary transition-all w-full object-cover object-center h-[200px]" 
                                        alt="" 
                                    />
                                    <h2 className="text-text-color text-[18px]">{item.title.slice(0, 30)} ...</h2>
                                    <hr />
                                    <p className="text-sm text-off-white">
                                        {new Date(item.author.published_date).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric"
                                        })}
                                    </p>
                                    <div className="w-full">
                                        <Link to={`/blog/${item._id}`} className="border-t hover:border-y border-primary w-full">
                                            Learn More
                                        </Link>
                                    </div>
                                </div>
                            ))
                    }

                </div>
            </section>
        </>
    );
}

export default Blogs

const categoryBlogs = [
    {
        id: "0",
        name: "All News"
    },
    {
        id: "1",
        name: "Breaking News"
    },
    {
        id: "2",
        name: "Regular News"
    },
    {
        id : '3',
        name: "International News"
    },
    {
        id: '4',
        name: "Sports"
    },
    {
        id: '5',
        name: "Entertainment"
    },
    {
        id: '7',
        name: "Arts"
    }
]