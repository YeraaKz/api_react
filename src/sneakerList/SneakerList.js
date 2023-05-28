import React, { Component } from 'react';
import SneakerItem from '../sneakerItem/SneakerItem';
import { getAllSneakers } from '../api/Api';
import SearchFilter from '../searchFilter/SearchFilter';
import './SneakerList.css';
import BrandFilter from '../brandFilter/BrandFilter';
import { Link } from 'react-router-dom';
import ErrorHandler from "../errorHandler/ErrorHandler";

class SneakerList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            sneakers: [],
            filteredSneakers: [],
            brands: ['Nike', 'Adidas', 'Asics', 'Saint Laurent'],
            selectedBrand: '',
        };
    }

    componentDidCatch(error, errorInfo) {
        console.error('Error:', error);
        console.error('Error Info:', errorInfo);
        this.setState({ error: 'An error occurred' });
    }

    componentDidMount() {
        this.fetchSneakers();
    }

    fetchSneakers = async () => {
        try {
            const response = await getAllSneakers();
            this.setState({ sneakers: response });
        } catch (error) {
            this.setState({ error: 'Fetching Error' });
        }
    };

    handleDeleteSneaker = (id) => {
        this.fetchSneakers();
    };

    handleSearch = (searchTerm) => {
        const { sneakers } = this.state;
        const filtered = sneakers.filter((sneaker) => {
            const sneakerName = sneaker.name.toLowerCase();
            const lowerCaseSearchTerm = searchTerm.toLowerCase();
            return sneakerName.includes(lowerCaseSearchTerm);
        });
        this.setState({ filteredSneakers: filtered });
    };

    handlePriceFilter = (minPrice, maxPrice) => {
        const { sneakers } = this.state;
        const filtered = sneakers.filter((sneaker) => {
            return sneaker.price >= minPrice && sneaker.price <= maxPrice;
        });
        this.setState({ filteredSneakers: filtered });
    };

    handleBrandSelect = (brand) => {
        const { sneakers } = this.state;
        if (brand) {
            const filtered = sneakers.filter((sneaker) => sneaker.brand === brand);
            this.setState({ selectedBrand: brand, filteredSneakers: filtered });
        } else {
            this.setState({ selectedBrand: '', filteredSneakers: [] });
        }
    };

    render() {
        const { filteredSneakers, sneakers, brands, selectedBrand, error } = this.state;

        return (
            <div>
                {error && <ErrorHandler message={error} />}
                <div className="container">
                    <SearchFilter onSearch={this.handleSearch} onPriceFilter={this.handlePriceFilter} />
                    <BrandFilter brands={brands} selectedBrand={selectedBrand} onBrandSelect={this.handleBrandSelect} />
                    <div className="sneaker-list">
                        {(filteredSneakers.length > 0 ? filteredSneakers : sneakers).map((sneaker) => (
                            <SneakerItem key={sneaker.id} sneaker={sneaker} onDelete={this.handleDeleteSneaker} />
                        ))}
                    </div>
                </div>
                <div className="centered-button">
                    <Link to="addSneaker" className="add-sneaker-button">
                        Add Sneaker
                    </Link>
                </div>
            </div>
        );
    }
}

export default SneakerList;
