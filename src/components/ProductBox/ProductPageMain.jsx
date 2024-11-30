import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductPage from './ProductPage';
import FilterComp from '../Filter/FilterComp';
import products from '../../data/product';
import SortFilterButton from './ResponsiveDD/SortFilterButton';

const ProductPageMain = () => {
  const [isSortDropdownVisible, setIsSortDropdownVisible] = useState(false);
  const [sortOrder, setSortOrder] = useState(null); // 'asc' for low to high, 'desc' for high to low
  const [sortState, setSortState] = useState(null);
  const { category, subCategory, childCategory } = useParams();
  const [filteredBrands, setFilteredBrands] = useState([]);
  const [filteredSizes, setFilteredSizes] = useState([]);
  const [filteredPrice, setFilteredPrice] = useState([0, 5000]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filteredBrandsLocal, setFilteredBrandsLocal] = useState([]);
  const [filteredSizesLocal, setFilteredSizesLocal] = useState([]);
  const [filteredPriceLocal, setFilteredPriceLocal] = useState([0, 5000]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);

  useEffect(() => {
    const filtered = products.filter((product) => {
      if (childCategory) {
        return (
          product.category === category &&
          product.subCategory === subCategory &&
          product.childCategory === childCategory
        );
      }
      if (subCategory) {
        return (
          product.category === category && product.subCategory === subCategory
        );
      }
      return product.category === category;
    });

    setFilteredProducts(filtered);

    const brands = [...new Set(filtered.map((product) => product.brand))];
    const sizes = [...new Set(filtered.map((product) => product.size))];

    setFilteredBrandsLocal(brands);
    setFilteredSizesLocal(sizes);
  }, [category, subCategory, childCategory]);

  useEffect(() => {
    setFilteredBrands(selectedBrands);
    setFilteredSizes(selectedSizes);
    setFilteredPrice(filteredPriceLocal);
  }, [
    selectedBrands,
    selectedSizes,
    filteredPriceLocal,
    setFilteredBrands,
    setFilteredSizes,
    setFilteredPrice,
  ]);

  // Now that filteredProducts is set in useEffect, we can safely log it
  useEffect(() => {
    console.log(filteredProducts);
  }, [filteredProducts]);

  const handleBrandChange = (brands) => setSelectedBrands(brands);
  const handleSizeChange = (sizes) => setSelectedSizes(sizes);
  const handlePriceChange = (price) => setFilteredPriceLocal(price);

  const handleReset = () => {
    setSelectedBrands([]);
    setSelectedSizes([]);
    setFilteredPriceLocal([0, 5000]);
    setFilteredBrands([]);
    setFilteredSizes([]);
    setFilteredPrice([0, 5000]);
  };

  const filteredFinalProducts = filteredProducts
    .filter((product) => {
      const isBrandMatch = !filteredBrands.length || filteredBrands.includes(product.brand);
      const isSizeMatch = !filteredSizes.length || filteredSizes.includes(product.size);
      const isPriceMatch = product.price >= filteredPrice[0] && product.price <= filteredPrice[1];
      return isBrandMatch && isSizeMatch && isPriceMatch;
    })
    .sort((a, b) => {
      if (sortOrder === 'asc') return a.price - b.price;
      if (sortOrder === 'desc') return b.price - a.price;
      return 0; // No sorting
    });

  const showCase = () => {
    if (sortState === 'asc') {
      return 'Price: Low to High';
    } else if (sortState === 'desc') {
      return 'Price: High to Low';
    }
  };

  return (
    <section className="bg-gray-100 mb-20 min-h-screen">
      <div className="flex flex-col">
        <div className="block lg:hidden">
          <SortFilterButton
          handleReset={handleReset}
            setSortOrder={setSortOrder}
            setSortState={setSortState}
            setFilteredBrands={handleBrandChange}
            brands={filteredBrandsLocal}
            selectedBrands={selectedBrands}
            setFilteredSizes={handleSizeChange}
            sizes={filteredSizesLocal}
            selectedSizes={selectedSizes}
            setFilteredPrice={handlePriceChange}
          />
        </div>
        <div className="hidden lg:block">
          <p className="mx-16 pt-10 mb-5 text-xs text-gray-500">
            <span className="text-blue-400">Home</span>
            {` > ${category.charAt(0).toUpperCase() + category.slice(1)}`}
            {subCategory && ` > ${subCategory.charAt(0).toUpperCase() + subCategory.slice(1)}`}
          </p>
        </div>
        <div className="flex lg:bg-white mx-1 pb-3 lg:pb-14 lg:mx-16 lg:pr-9">
          <div className="hidden lg:block">
            <FilterComp
            handleReset={handleReset}
              setSortOrder={setSortOrder}
              setSortState={setSortState}
              setFilteredBrands={handleBrandChange}
              brands={filteredBrandsLocal}
              selectedBrands={selectedBrands}
              setFilteredSizes={handleSizeChange}
              sizes={filteredSizesLocal}
              selectedSizes={selectedSizes}
              setFilteredPrice={handlePriceChange}
            />
          </div>

          <ProductPage
            setSortOrder={setSortOrder}
            setSortState={setSortState}
            showCase={showCase()}
            filteredBrands={filteredBrands}
            filteredSizes={filteredSizes}
            filteredPrice={filteredPrice}
            filteredFinalProducts={filteredFinalProducts}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductPageMain;
