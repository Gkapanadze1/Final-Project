import React, { useState, useEffect } from "react";
import DiscountBanner from "../components/Discountbanner";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { ProductApi } from "../interfaces/Api_interface";

const CategoriesPage = () => {
    const [products, setProducts] = useState<ProductApi[]>([]);
    const location = useLocation();
    const { pathname } = location;

    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const sizes = ["S", "M", "L", "XL", "XXL"];

    const [price, setPrice] = useState(890);

    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 9;

    const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(Number(event.target.value));
    };

    const startIndex = (currentPage - 1) * productsPerPage;
    const displayedProducts = products.slice(startIndex, startIndex + productsPerPage);

    const totalPages = Math.ceil(products.length / productsPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                const data: ProductApi[] = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <DiscountBanner />
            <Header />
            <div className="max-w-7xl m-auto flex mt-10 gap-12">
                <div className="min-h-screen">
                    <div className="w-64 p-6 bg-white rounded-lg shadow-lg border border-gray-200">
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-3">Categories</h3>
                            <div className="space-y-2">
                                {["Perfume", "Trousers", "Shoe", "Handbag", "Hat", "Thermos"].map((category) => (
                                    <label
                                        key={category}
                                        className="flex items-center border-b-2 py-2 transition duration-150 hover:bg-gray-100 cursor-pointer px-2 gap-2"
                                    >
                                        <input type="checkbox" className="form-checkbox text-blue-600 h-4 w-4 mr-2" />
                                        <span className="text-gray-500 text-base font-medium">{category}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-3">Color</h3>
                            <div className="flex space-x-3">
                                {["#BDD7EE", "#FFD966", "#C6E0B4", "#4F81BD"].map((color) => (
                                    <label key={color} className="relative">
                                        <input type="radio" name="color" className="sr-only" />
                                        <span
                                            className="block w-6 h-6 rounded-full border-2 border-gray-300"
                                            style={{ backgroundColor: color }}
                                        ></span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-3">Size</h3>
                            <div className="flex gap-2 mt-4">
                                {sizes.map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`w-10 h-10 rounded-md border transition duration-150 ${
                                            selectedSize === size ? "border-black" : "border-gray-200"
                                        }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-3">Price</h3>
                            <input
                                type="range"
                                min="0"
                                max="1000"
                                value={price}
                                onChange={handlePriceChange}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                            />
                            <div className="text-center mt-2 font-semibold text-gray-800">${price}.00</div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="flex flex-col gap-5 width2">
                        <h2 className="font-semibold text-gray-500">Products</h2>

                        <div className="grid grid-cols-3 justify-between mt-5 gap-10">
                            {displayedProducts.map((product) => (
                                <Link to={`/items/${product.id}`} key={product.id}>
                                    <div className="flex flex-col gap-2 items-start">
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="w-72 h-72 object-cover bg-gray-100"
                                        />
                                        <span className="font-medium text-secondary">{product.title}</span>
                                        <div className="flex gap-3 items-center">
                                            <span className="text-gray-400 font-normal">${product.price}</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>


                        <div className="flex gap-5 items-center justify-center border border-gray-300 max-w-96 m-auto rounded-md px-2 py-1 mt-14">
                            <button
                                disabled={currentPage === 1}
                                onClick={() => handlePageChange(currentPage - 1)}
                                className={`px-3 py-1 rounded-md ${
                                    currentPage === 1 ? "text-gray-400" : "text-secondary"
                                }`}
                            >
                                Prev
                            </button>
                            {Array.from({ length: totalPages }, (_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handlePageChange(index + 1)}
                                    className={`px-3 py-1 rounded-md ${
                                        currentPage === index + 1
                                            ? "bg-gray-200 text-secondary font-bold"
                                            : "text-secondary"
                                    }`}
                                >
                                    {index + 1}
                                </button>
                            ))}
                            <button
                                disabled={currentPage === totalPages}
                                onClick={() => handlePageChange(currentPage + 1)}
                                className={`px-3 py-1 rounded-md ${
                                    currentPage === totalPages ? "text-gray-400" : "text-secondary"
                                }`}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default CategoriesPage;
