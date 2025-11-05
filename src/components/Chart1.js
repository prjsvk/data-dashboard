import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart1 = ({ data }) => {
  const chartData = data.map(item => ({
    name: item.name,
    budget: item.budget,
    spent: item.spent,
    remaining: item.budget - item.spent
  }));

  return (
    <div className="chart">
      <h3>Budget vs Spent by Project</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
          <YAxis />
          <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
          <Legend />
          <Bar dataKey="budget" fill="#8884d8" name="Total Budget" />
          <Bar dataKey="spent" fill="#82ca9d" name="Amount Spent" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart1;