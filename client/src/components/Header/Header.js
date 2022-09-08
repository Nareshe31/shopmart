import React, { useEffect,useState } from "react";
import { useNavigate,Link,useSearchParams } from "react-router-dom";
import "./Header.scss";

export default function Header({cart}) {

  const [searchParams] = useSearchParams();
  const queryParam = searchParams.get("query");
    
    const [query, setquery] = useState(queryParam)

    const [mounted, setmounted] = useState(false)
    const navigate=useNavigate()
    useEffect(() => {
        setmounted(true)
    }, [])

    useEffect(() => {
        if(mounted) navigate(`/search?query=${query}`)
    }, [query])
    
    const handleChange=(e)=>{
        // e.preventDefault()
        const {value}=e.target
        setquery(value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        navigate(`/search?query=${query}`)
    }
    
    return (
        <nav className="nav" id="nav__bar">
            <h2 className="nav__header">
                <Link to={"/"}>Shopmart</Link> 
            </h2>
            {/* <ul className="nav__list nav__list--1">
                <li className="nav__list__item nav__item--active">Home</li>
                <li className="nav__list__item">Recommended</li>
                <li className="nav__list__item">Featured</li>
            </ul> */}
            <ul className="nav__list nav__list--2">
                <li className="nav__list__item">
                    <div className="nav__search__container">
                        <span className="nav__search__icon">
                            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                <title />
                                <g id="search">
                                    <path d="M29.71,28.29l-6.5-6.5-.07,0a12,12,0,1,0-1.39,1.39s0,.05,0,.07l6.5,6.5a1,1,0,0,0,1.42,0A1,1,0,0,0,29.71,28.29ZM14,24A10,10,0,1,1,24,14,10,10,0,0,1,14,24Z" />
                                </g>
                            </svg>
                        </span>
                        <form onSubmit={handleSubmit}>
                            <input accessKey="/" className="nav__search__bar" type="text" value={query} onChange={handleChange} name="query" placeholder="Search product..." />
                        </form>
                    </div>
                </li>
                <li className="nav__list__item">
                    <Link to={'/cart'}>
                        <button className={cart.length?"add__cart__size":""} data-value={cart.length?cart.length:""}>
                            <svg
                                height="64px"
                                id="Layer_1"
                                version="1.1"
                                viewBox="0 0 64 64"
                                width="64px"
                                xmlSpace="preserve"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                                <g>
                                    <path d="M56.262,17.837H26.748c-0.961,0-1.508,0.743-1.223,1.661l4.669,13.677c0.23,0.738,1.044,1.336,1.817,1.336h19.35   c0.773,0,1.586-0.598,1.815-1.336l4.069-14C57.476,18.437,57.036,17.837,56.262,17.837z" />
                                    <circle cx="29.417" cy="50.267" r="4.415" />
                                    <circle cx="48.099" cy="50.323" r="4.415" />
                                    <path d="M53.4,39.004H27.579L17.242,9.261H9.193c-1.381,0-2.5,1.119-2.5,2.5s1.119,2.5,2.5,2.5h4.493l10.337,29.743H53.4   c1.381,0,2.5-1.119,2.5-2.5S54.781,39.004,53.4,39.004z" />
                                </g>
                                <g />
                                <g />
                                <g />
                                <g />
                                <g />
                                <g />
                            </svg>
                        </button>
                    </Link>
                </li>
            </ul>
            <ul className="nav__list nav__list--3">
                <li className="nav__list__item">
                    <button className="nav__btn nav__btn--primary">Sign Up</button>
                </li>
                <li className="nav__list__item">
                    <button className="nav__btn nav__btn--secondary">Sign In</button>
                </li>
            </ul>
        </nav>
    );
}
