import React from 'react';
import PlantCard from './PlantCard';
import LoadingSpinner from '../UI/LoadingSpinner';

const PlantGrid = ({ plants, loading }) => {
  if (loading) {
    return <LoadingSpinner />;
  }

  if (!plants || plants.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No plants found. Try adjusting your search filters.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {plants.map(plant => (
        <PlantCard key={plant._id} plant={plant} />
      ))}
    </div>
  );
};

export default PlantGrid;