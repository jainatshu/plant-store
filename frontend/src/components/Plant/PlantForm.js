import React, { useState, useEffect } from 'react';
import Button from '../UI/Button';

const PlantForm = ({ plant, onSubmit, onCancel, loading }) => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    categories: [],
    inStock: true,
    imageUrl: ''
  });
  const [newCategory, setNewCategory] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (plant) {
      setFormData({
        name: plant.name || '',
        price: plant.price || '',
        categories: plant.categories || [],
        inStock: plant.inStock !== undefined ? plant.inStock : true,
        imageUrl: plant.imageUrl || ''
      });
    }
  }, [plant]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleAddCategory = () => {
    if (newCategory.trim() && !formData.categories.includes(newCategory.trim())) {
      setFormData(prev => ({
        ...prev,
        categories: [...prev.categories, newCategory.trim()]
      }));
      setNewCategory('');
    }
  };

  const handleRemoveCategory = (categoryToRemove) => {
    setFormData(prev => ({
      ...prev,
      categories: prev.categories.filter(cat => cat !== categoryToRemove)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationErrors = {};
    if (!formData.name.trim()) validationErrors.name = 'Plant name is required';
    if (!formData.price || formData.price <= 0) validationErrors.price = 'Valid price is required';
    if (formData.categories.length === 0) validationErrors.categories = 'At least one category is required';
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setErrors({});
    onSubmit({
      ...formData,
      price: parseFloat(formData.price)
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Plant Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          disabled={loading}
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Price ($)</label>
        <input
          type="number"
          name="price"
          step="0.01"
          min="0"
          value={formData.price}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          disabled={loading}
        />
        {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Categories</label>
        <div className="flex gap-2 mb-2">
          <input
            type="text"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            placeholder="Add a category"
            className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            disabled={loading}
          />
          <Button 
            type="button" 
            onClick={handleAddCategory}
            disabled={loading || !newCategory.trim()}
          >
            Add
          </Button>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-2">
          {formData.categories.map((category, index) => (
            <span key={index} className="bg-green-100 text-green-800 px-2 py-1 rounded flex items-center">
              {category}
              <button
                type="button"
                onClick={() => handleRemoveCategory(category)}
                className="ml-1 text-green-600 hover:text-green-800"
                disabled={loading}
              >
                &times;
              </button>
            </span>
          ))}
        </div>
        {errors.categories && <p className="text-red-500 text-sm mt-1">{errors.categories}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
        <input
          type="url"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          disabled={loading}
          placeholder="https://example.com/image.jpg"
        />
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          name="inStock"
          id="inStock"
          checked={formData.inStock}
          onChange={handleInputChange}
          className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
          disabled={loading}
        />
        <label htmlFor="inStock" className="ml-2 block text-sm text-gray-900">
          In Stock
        </label>
      </div>

      <div className="flex justify-end space-x-3 pt-4">
        <Button type="button" variant="secondary" onClick={onCancel} disabled={loading}>
          Cancel
        </Button>
        <Button type="submit" disabled={loading}>
          {loading ? 'Saving...' : (plant ? 'Update Plant' : 'Add Plant')}
        </Button>
      </div>
    </form>
  );
};

export default PlantForm;