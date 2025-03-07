import React, { useState, useContext } from 'react';
import { GrLocation } from "react-icons/gr";
import { HiOutlinePhone } from "react-icons/hi";
import { BiShoppingBag } from "react-icons/bi";
import { IoHeartOutline } from "react-icons/io5";
import { RiUserLine } from "react-icons/ri";
import { BsChevronDown } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import { ResultsContext } from '../context/ResultsContext';  
// import axios from 'axios';
import SearchBox from '../components/SearchResults';
import '../styles/Navbar.css';

const Navbar = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  // const [results, setResults] = useState(null);
  const [showCategoriesDropdown, setShowCategoriesDropdown] = useState(false);
  const [showAboutUsDropdown, setShowAboutUsDropdown] = useState(false);
  const { setResults } = useContext(ResultsContext); // Use context to set results
  const navigate = useNavigate();

  const toggleCategoriesDropdown = () => {
    setShowCategoriesDropdown(prevState => !prevState);
    setShowAboutUsDropdown(false);
  };

  const toggleAboutUsDropdown = () => {
    setShowAboutUsDropdown(prevState => !prevState);
    setShowCategoriesDropdown(false);
  };

  // const handleAdvancedSearch = (isLoading, errorMessage) => {
  //   if (isLoading !== undefined) {
  //     setLoading(isLoading);
  //   }
  //   if (errorMessage) {
  //     setError(errorMessage);
  //   }
  // };


  const handleSearchComplete = (searchResults) => {
    setResults(searchResults); // Save the search results in context
    navigate('/results'); // Redirect to the results page
  };


  return (
    <>
      <div className='header'>
        <div className='top-header'>
          <div className='info'>
            <div className='email'>
              <div className='icon'>
                <GrLocation />
              </div>
              <p>superquick@gmail.com</p>
            </div>
            <div className='email'>
              <div className='icon'>
                <HiOutlinePhone />
              </div>
              <p>+234 8038 863362</p>
            </div>
          </div>

          <div className='prop'>
            <Link to={`/components/Cart`} className='link'>
              <div className='email'>
                <div className='icon'>
                  <BiShoppingBag />
                </div>
                <p>Cart</p>
              </div>
            </Link>
            <div className='email'>
              <div className='icon'>
                <IoHeartOutline />
              </div>
              <p>Favorite</p>
            </div>
            <div className='email'>
              <div className='icon'>
                <RiUserLine />
              </div>
              <p>Account</p>
            </div>
          </div>
        </div>

        <div className='mid-header'>
          <div className='logo'>
            <img src='../assets/logo3.svg' alt='logo' />
          </div>
          <div className='links'>
            <ul className='links'>
              <Link to={`/`} className='link3'>
                <li>Home</li>
              </Link>
              <li className='drop'>
                <a href='#' onClick={toggleCategoriesDropdown}>Categories <BsChevronDown /></a>
                {showCategoriesDropdown && (
                  <div className='dropdown'>
                    <div className='all'>
                      <div className='left'>
                        <div className='fruits'>
                          <div className='greenbg'><img src='../assets/Fruit.svg' alt='fruit'></img></div>
                          <a href='#'>Fresh Fruit</a>
                        </div>
                        <div className='fruits'>
                          <div className='redbg'><img src='../assets/veg.svg' alt='veggies'></img></div>
                          <a href='#'>Fresh Vegetables</a>
                        </div>
                        <div className='fruits'>
                          <div className='greenbg'><img src='../assets/Meat.svg' alt='meat & fish'></img></div>
                          <a href='#'>Meat & Fish</a>
                        </div>
                        <div className='fruits'>
                          <div className='redbg'><img src='../assets/pizza.svg' alt='pizza'></img></div>
                          <a href='#'>Snacks</a>
                        </div>
                        <div className='fruits'>
                          <div className='greenbg'><img src='../assets/Milk.svg'></img></div>
                          <a href='#'>Beverages</a>
                        </div>
                        <div className='fruits'>
                          <div className='redbg'><img src='../assets/beauty tools.svg'></img></div>
                          <a href='#'>Beauty & Health</a>
                        </div>

                      </div>
                      <div className='right'>
                        <div className='fruits'>
                          <div className='redbg2'><img src='../assets/Bread2.svg' alt='bread2'></img></div>
                          <a href='#'>Bread & Bakery</a>
                        </div>
                        <div className='fruits'>
                          <div className='greenbg2'><img src='../assets/cake.svg' alt='cake'></img></div>
                          <a href='#'>Baking Needs</a>
                        </div>
                        <div className='fruits'>
                          <div className='redbg2'><img src='../assets/Cooking2.svg' alt='cooking'></img></div>
                          <a href='#'>Cooking</a>
                        </div>
                        <div className='fruits'>
                          <div className='greenbg2'><img src='../assets/japanese food.svg' alt='japanese food'></img></div>
                          <a href='#'>Diabetic Food</a>
                        </div>
                        <div className='fruits'>
                          <div className='redbg2'><img src='../assets/Detergent.svg' alt='detergent'></img></div>
                          <a href='#'>Dish Detergents</a>
                        </div>
                        <div className='fruits'>
                          <div className='greenbg2'><img src='../assets/Oil2.svg'></img></div>
                          <a href='#'>Oil</a>
                        </div>

                      </div>
                    </div>
                  </div>
                )}
              </li>
              <li><a href='#'>Blog</a></li>
              <li className='drop'>
                <a href='#' onClick={toggleAboutUsDropdown}>About Us <BsChevronDown /></a>
                {showAboutUsDropdown && (
                  <div className='dropdown'>
                    <div className='all'>
                      <div className='left'>
                        <div className='fruit2'>
                          <div className='redbg'><img src='../assets/receipt-edit.svg'></img></div>
                          <div className='text'>
                            <a href='#'>Blog</a>
                            <p>Learn more about superquick to<br />
                              enjoy same day fast delivery</p>
                          </div>

                        </div>
                        <div className='fruit2'>
                          <div className='greenbg'><img src='../assets/call.svg'></img></div>
                          <div className='text'>
                            <a href='#'>Contact us</a>
                            <p>Contact superquick to lay <br />
                              complain if any</p>
                          </div>

                        </div>

                      </div>
                      <div className='right'>
                        <div className='fruit2'>
                          <div className='greenbg2'><img src='../assets/message-question.svg'></img></div>
                          <div className='text'>
                            <a href='#'>FAQs</a>
                            <p>Find answers to some of our <br />
                              frequently asked questions.</p>
                          </div>
                        </div>
                        <div className='fruit2'>
                          <div className='redbg2'><img src='../assets/book.svg'></img></div>
                          <div className='text'>
                            <a href='#'>About us </a>
                            <p>Get to know about superquick to <br />
                              enjoy convenient delivery</p>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            </ul>
          </div>
          <div className='user'>
            <div className='btn-1'>
              <button>Login</button>
            </div>
            <div className='btn-2'>
              <button>Sign up</button>
            </div>
          </div>
        </div>

        <SearchBox
          query={query}
          setQuery={setQuery}
          loading={loading}
          setLoading={setLoading}
          error={error}
          setError={setError}
          setResults={setResults}
          handleSearchComplete={handleSearchComplete}
        />
        {/* {results && (
          <div className="results">
            <h3>Recipe:</h3>
            {results.image && <img src={results.image} alt="Generated Dish" />}
            <div className="formatted-text">
              {formatText(results.text)}
            </div>
          </div>
        )} */}
      </div>
    </>
  );
};

export default Navbar;
