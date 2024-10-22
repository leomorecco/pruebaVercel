import React, { useEffect, useState } from 'react';
import { products } from "../data/products";
import { ProductCardView } from "./ProductCardView";
import { Navbar } from "../components/Navbar";
import Search from "./Search";
import '../Style/CatalogView.css';
import Pagination from './Pagination';

export const CatalogView = ({ handler }) => {
    const [originalProducts, setOriginalProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const productsPerPage = 6;
    const [currentGroup, setCurrentGroup] = useState(1);

    useEffect(() => {
        const allProducts = getProducts();
        setOriginalProducts(allProducts);
        setFilteredProducts(allProducts);
    }, []);

    useEffect(() => {
        const filtered = originalProducts.filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
    }, [searchTerm, originalProducts]);

    const getProducts = () => {
        return products;
    };

    const startProductIndex = (currentGroup - 1) * productsPerPage;
    const endProductIndex = startProductIndex + productsPerPage;
    const currentProducts = filteredProducts.slice(startProductIndex, endProductIndex);

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    const nextPage = () => {
        setCurrentGroup((prevGroup) => Math.min(prevGroup + 1, totalPages));
    };

    const prevPage = () => {
        setCurrentGroup((prevGroup) => Math.max(prevGroup - 1, 1));
    };

    const handleSearch = (term) => {
        setSearchTerm(term);
        setCurrentGroup(1); // Resetear la paginación al realizar una búsqueda
    };

    return (
        <>
            <Navbar />
            <Search onSearch={handleSearch} />
            <div className="row">
                {currentProducts.map(prod => (
                    <div className="cotenedor" key={prod.id}>
                        <ProductCardView
                            handler={handler}
                            id={prod.id}
                            name={prod.name}
                            image={prod.image}
                            description={prod.description}
                            price={prod.price}
                        />
                    </div>
                ))}
            </div>
            <Pagination
        currentGroup={currentGroup}
        totalPages={totalPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
        </>
    );
};
