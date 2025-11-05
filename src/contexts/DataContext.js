import React, { createContext, useContext, useState, useEffect } from 'react';

const DataContext = createContext();

// Mock data - replace with your actual API endpoint
const mockData = [
  {
    id: 1,
    name: "Project Alpha",
    category: "Development",
    budget: 50000,
    spent: 42000,
    progress: 84,
    startDate: "2024-01-15",
    endDate: "2024-06-15",
    teamSize: 8,
    status: "In Progress",
    description: "A comprehensive web development project focusing on modern technologies."
  },
  {
    id: 2,
    name: "Marketing Campaign",
    category: "Marketing",
    budget: 25000,
    spent: 18000,
    progress: 72,
    startDate: "2024-02-01",
    endDate: "2024-05-01",
    teamSize: 5,
    status: "On Track",
    description: "Digital marketing campaign targeting new customer acquisition."
  },
  {
    id: 3,
    name: "Research Initiative",
    category: "R&D",
    budget: 75000,
    spent: 45000,
    progress: 60,
    startDate: "2024-01-01",
    endDate: "2024-12-31",
    teamSize: 12,
    status: "Behind Schedule",
    description: "Long-term research project exploring new market opportunities."
  },
  {
    id: 4,
    name: "Product Launch",
    category: "Product",
    budget: 100000,
    spent: 95000,
    progress: 95,
    startDate: "2023-11-01",
    endDate: "2024-04-01",
    teamSize: 15,
    status: "Nearly Complete",
    description: "Major product launch with extensive market preparation."
  },
  {
    id: 5,
    name: "Training Program",
    category: "HR",
    budget: 15000,
    spent: 12000,
    progress: 80,
    startDate: "2024-03-01",
    endDate: "2024-05-31",
    teamSize: 3,
    status: "On Track",
    description: "Employee training and development program."
  }
];

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Simulate API call
    const fetchData = async () => {
      try {
        setLoading(true);
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setData(mockData);
      } catch (err) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const getItemById = (id) => {
    return data.find(item => item.id === parseInt(id));
  };

  const value = {
    data: filteredData,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    darkMode,
    toggleDarkMode,
    getItemById
  };

  return (
    <DataContext.Provider value={value}>
      <div className={darkMode ? 'dark-mode' : 'light-mode'}>
        {children}
      </div>
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};