import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Titlebar from '../../components/Section/TitleBar/Titlebar';
import { useContext, useEffect } from 'react';
import { AppContext } from '../../context/AppContext/AppContextProvider';

const Statistics = () => {

  const data = useLoaderData()
  const { setheaderIsHome } = useContext(AppContext)

  useEffect(() => {
    document.title = 'Statistics | Gadget Heaven'
    setheaderIsHome(false)
  }, []);    
  return (
    <>
      <Titlebar title={'Statistics'}>
        <p className="text-center text-xs sm:text-sm text-white">
          Explore the latest gadgets that will take your experience to the next level. From smart devices to
          <br className="hidden md:block" /> the coolest accessories, we have it all!
        </p>
      </Titlebar>
      <section className="flex justify-center">
        <div className="w-primary px-5 py-10">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="product_title"  stroke='#f6f6f600' />
              <YAxis />
              <Tooltip/>
              <Legend wrapperStyle={{borderRadius: 3}}/>
              <Bar dataKey="rating"  fill="#8884d8" />
              <Bar dataKey="price" fill="#9538e2" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>
    </>
  );
}

export default Statistics;

