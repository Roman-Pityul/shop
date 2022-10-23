import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux';

import { Container, Footer, Head } from './components'
import { fetchCategories } from './redux/category/asyncActions';

import './App.scss'

const Home = React.lazy(() => import(/*webpackChunkName: "Home"*/'./pages/home'))
const Items = React.lazy(() => import(/*webpackChunkName: "Items"*/'./pages/items'))
const ItemCard = React.lazy(() => import(/*webpackChunkName: "ItemCard"*/'./pages/itemCard'))
const Cart = React.lazy(() => import(/*webpackChunkName: "Cart"*/'./pages/cart'))
const Orders = React.lazy(() => import(/*webpackChunkName: "Orders"*/'./pages/orders'))
const About = React.lazy(() => import(/*webpackChunkName: "About"*/'./pages/about'))
const Contacts = React.lazy(() => import(/*webpackChunkName: "Contacts"*/'./pages/contacts'))
const Vacancy = React.lazy(() => import(/*webpackChunkName: "Vacancy"*/'./pages/vacancy'))
const Favourites = React.lazy(() => import(/*webpackChunkName: "Favourites"*/'./pages/favourites'))
const Articles = React.lazy(() => import(/*webpackChunkName: "Articles"*/'./pages/articles'))
const Policy = React.lazy(() => import(/*webpackChunkName: "Policy"*/'./pages/policy'))



function App() {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(fetchCategories())
  }, [])

  return (
    <div className="app">
      <Head />
      <div className='wraper'>
        <div>
          <React.Suspense fallback={<></>}>
            <Routes>
              <Route path='/' element={<Container />}>
                <Route index element={<Home />} />
                <Route path='items/:cat' element={<Items />} />
                <Route path='search' element={<Items />} />
                <Route path='item/:id' element={<ItemCard />} />
                <Route path='cart' element={<Cart />} />
                <Route path='orders' element={<Orders />} />
                <Route path='about' element={<About />} />
                <Route path='contacts' element={<Contacts />} />
                <Route path='vacancy' element={<Vacancy />} />
                <Route path='favourites' element={<Favourites />} />
                <Route path='articles' element={<Articles />} />
                <Route path='policy' element={<Policy />} />
              </Route>
            </Routes>
          </React.Suspense>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div >
  );
}

export default App;
