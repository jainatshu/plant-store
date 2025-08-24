import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import PlantGrid from '../components/Plant/PlantGrid';
import SearchFilter from '../components/Plant/SearchFilter';
import { plantsAPI } from '../services/api';

const PlantCatalog = () => {
  const [filteredPlants, setFilteredPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const navigate = useNavigate();

  // Wrap fetchPlants in useCallback to memoize it and prevent infinite re-renders
  const fetchPlants = useCallback(async () => {
    try {
      setLoading(true);
      const response = await plantsAPI.getAll();
      setFilteredPlants(response.data);
      setError(null);
    } catch (err) {
      if (err.response?.status === 401 || err.response?.status === 403) {
        setError('Authentication required. Redirecting to login...');
        setTimeout(() => navigate('/login'), 2000);
      } else {
        setError('Failed to fetch plants. Please try again later.');
      }
      console.error('Error fetching plants:', err);
    } finally {
      setLoading(false);
    }
  }, [navigate]); // Add navigate as a dependency since it's used in the callback

  useEffect(() => {
    fetchPlants();
  }, [fetchPlants]); // Now fetchPlants is stable and can be safely added to dependencies

  const handleSearch = async (term) => {
    try {
      setLoading(true);
      const response = await plantsAPI.getAll({ search: term, category: selectedCategory });
      setFilteredPlants(response.data);
      setError(null);
    } catch (err) {
      if (err.response?.status === 401 || err.response?.status === 403) {
        setError('Authentication required. Redirecting to login...');
        setTimeout(() => navigate('/login'), 2000);
      } else {
        setError('Search failed. Please try again.');
      }
      console.error('Error searching plants:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleFilter = async (category) => {
    setSelectedCategory(category);
    try {
      setLoading(true);
      const response = await plantsAPI.getAll({ 
        search: searchTerm, 
        category: category === 'all' ? '' : category 
      });
      setFilteredPlants(response.data);
      setError(null);
    } catch (err) {
      if (err.response?.status === 401 || err.response?.status === 403) {
        setError('Authentication required. Redirecting to login...');
        setTimeout(() => navigate('/login'), 2000);
      } else {
        setError('Filter failed. Please try again.');
      }
      console.error('Error filtering plants:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Plant Catalog</h1>
      
      <SearchFilter 
        onSearch={handleSearch}
        onFilter={handleFilter}
        loading={loading}
      />
      
      {error && (
        <div className={`px-4 py-3 rounded mb-6 ${
          error.includes('Authentication') 
            ? 'bg-yellow-100 border border-yellow-400 text-yellow-700' 
            : 'bg-red-100 border border-red-400 text-red-700'
        }`}>
          {error}
        </div>
      )}
      
      <PlantGrid plants={filteredPlants} loading={loading} />
    </div>
  );
};

export default PlantCatalog;