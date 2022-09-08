import { useEffect } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { updateState } from './redux/actions';

//Components import
import Search from './components/Search/Search';
import Header from './components/Header/Header';
import Home from './components/Home/Home'

//Router imports
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';

function App({updateState,reduxState}) {
  
  useEffect(() => {
    window.addEventListener("scroll",(e)=>{
      const scrolly=window.scrollY
      if (scrolly>79.58) {
        document.getElementById("nav__bar").classList.add("position__fixed")
      }
      else{
        document.getElementById("nav__bar").classList.remove("position__fixed")
      }
    }) 

    const localData=localStorage.getItem('store')?JSON.parse(localStorage.getItem('store')):null
    if(localData) updateState(localData)

    return () => {
      window.removeEventListener("scroll",()=>{
        console.log({message:"Scroll event listener removed"});
      })
    }
  }, [])
  
  useEffect(() => {
    if(reduxState.storeLoaded) localStorage.setItem("store",JSON.stringify(reduxState))
  }, [reduxState])
  

  return (
    <>
      <BrowserRouter>
        <Header cart={reduxState.cart} />
        <Routes>
          <Route path='/' element={<Home  />}  />
          <Route path='search' element={<Search  />}  />
          <Route path='cart' element={<Cart  />}  />
        </Routes>
      </BrowserRouter>
    </>
  );
}

const mapStateToProps = (state) => ({reduxState:state})

const mapDispatchToProps = (dispatch)=>({
  updateState:(payload)=>dispatch(updateState(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)



