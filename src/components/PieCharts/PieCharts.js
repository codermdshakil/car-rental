import React, { useEffect, useState } from 'react';
import { Pie, PieChart, ResponsiveContainer } from 'recharts';

const PieCharts = () => {

  const [datas, setDatas] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/product-analysis-website/main/data.json')
            .then(res => res.json())
            .then(data => setDatas(data))

    }, [])


    return (
        <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie data={datas} dataKey={'revenue'} cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
          <Pie data={datas} dataKey={'investment'} cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
        </PieChart>
      </ResponsiveContainer>
    );
};

export default PieCharts;