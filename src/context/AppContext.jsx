import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import testData from '../data/test_data.json';
import { useLocalStorage } from '../hooks/useLocalStorage.js';

const AppContext = createContext({});

const API_BASE_URL = 'https://asylum-be.onrender.com';

/**
 * TODO: Ticket 2:
 * - Use axios to fetch the data
 * - Store the data
 * - Populate the graphs with the stored data
 */
const useAppContextProvider = () => {
  const [graphData, setGraphData] = useState(testData);
  const [isDataLoading, setIsDataLoading] = useState(false);

  useLocalStorage({ graphData, setGraphData });

  const getFiscalData = () => {
    const fiscalDataRes = graphData;
    return fiscalDataRes;
  };

  const getCitizenshipResults = async () => {
    const citizenshipRes = graphData.citizenshipResults;
    return citizenshipRes;
  };

  const updateQuery = async () => {
    setIsDataLoading(true);
  };

  const fetchData = async () => {
    try {
      // Fetch fiscal year data
      const fiscalResponse = await axios.get(`${API_BASE_URL}/fiscalSummary`);
      
      // Fetch citizenship data
      const citizenshipResponse = await axios.get(`${API_BASE_URL}/citizenshipSummary`);
      
      // Combine the data in the same format as test_data.json
      const combinedData = {
        ...fiscalResponse.data,
        citizenshipResults: citizenshipResponse.data
      };
      
      setGraphData(combinedData);
      setIsDataLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Fallback to test data if API fails
      setGraphData(testData);
      setIsDataLoading(false);
    }
  };

  const clearQuery = () => {
    setGraphData({});
  };

  const getYears = () => graphData?.yearResults?.map(({ fiscal_year }) => Number(fiscal_year)) ?? [];

  useEffect(() => {
    if (isDataLoading) {
      fetchData();
    }
  }, [isDataLoading]);

  // Fetch data on initial mount
  useEffect(() => {
    fetchData();
  }, []);

  return {
    graphData,
    setGraphData,
    isDataLoading,
    updateQuery,
    clearQuery,
    getYears,
  };
};

export function useAppContext() {
  return useContext(AppContext);
}

export function ProvideAppContext({ children }) {
  const contextValue = useAppContextProvider();

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};
