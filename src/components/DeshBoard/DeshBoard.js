import React, { useState, useEffect } from 'react';
import './DeshBoard.css';
import { Container } from 'react-bootstrap';
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Line, AreaChart, Area, Legend, BarChart, Bar, PieChart, Pie } from 'recharts';
import { Tooltip } from 'recharts';
import Footer from '../Footer/Footer';


const DeshBoard = () => {

    const [datas, setDatas] = useState([]);

    useEffect(() => {
        fetch('chartsData.json')
            .then(res => res.json())
            .then(data => setDatas(data))

    }, [])


    return (
        <div>
            <h3 className='db-title'>Welcome to <span>DeshBoard</span> 🚘</h3>
            <Container>
                <div className="row">
                    <div className="col-lg-6 col-md-10 col-11 d-block m-auto ">
                        <div className='line-Chart'>
                            <h3 className='chart-title'>Month wise sell</h3>
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart data={datas}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey={"month"} />
                                    <YAxis />
                                    <Legend />
                                    <Tooltip />
                                    <Line type="monotone" dataKey={'sell'} stroke="#8884d8" fill='#ff4c30' />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-10 col-11 d-block m-auto">
                        <div className='area-chart'>
                            <h3 className='area-chart-title'>Monthly Revenue</h3>
                            <ResponsiveContainer width="100%" height={290}>
                                <AreaChart data={datas}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey={'month'} />
                                    <YAxis dataKey={'revenue'} />
                                    <Tooltip />
                                    <Area connectNulls type="monotone" dataKey={'revenue'} stroke="#ff4c30" fill="#8884d8" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-10 col-11 d-block m-auto ">
                        <div className='bar-Chart'>
                            <h3 className='bar-title'>Investment Vs Revenue</h3>
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={datas}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey={'month'} />
                                    <YAxis dataKey={'investment'} />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey={'investment'} stackId="a" fill="#8884d8" />
                                    <Bar dataKey={'revenue'} stackId="a" fill="#82ca9d" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-10 col-11 d-block m-auto">
                        <div className='pie-chart'>
                            <h3 className='pie-chart-title'>Invesment Vs Sell</h3>
                            <ResponsiveContainer width="100%" height={300}>
                                <PieChart >
                                    <Pie data={datas} dataKey={'sell'} cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                                    <Tooltip/>
                                    <Pie data={datas} dataKey={'investment'} cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#ff4c30" label />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default DeshBoard;