import React from 'react';

const PlantCard = ({ plant }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img 
        src={plant.imageUrl || '/placeholder-plant.jpg'} 
        alt={plant.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{plant.name}</h3>
        <p className="text-green-600 font-bold text-xl mb-2">${plant.price.toFixed(2)}</p>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {plant.categories.map((category, index) => (
            <span 
              key={index}
              className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded"
            >
              {category}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${plant.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {plant.inStock ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;