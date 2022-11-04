import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useBasketStore } from "../../providers/RootStoreProvider";

const Header = () => {
  const store = useBasketStore();
  return (

    <header className="header pt-64 mb-24">
      <div className="container">
        <div className="row-header">
            <div className="col-left">
                <button className="btn-category"><span className="humburger-menu"></span></button>
                <div className="header-menu">
                    <a href="#" className="btn active">Комнаты</a>
                    <a href="#" className="btn">Товары</a>
                </div>
            </div>
            <div className="col-center">
                <a href="/" className="logotype">
                    <svg viewBox="0 0 40 35">
                        <use href='/images/logo/logo.svg#logo'></use>
                    </svg>
                    <span className="logo-text">Jihaz</span>
                </a>
            </div>
            <div className="col-right">
                <a href="#" className="btn btn-auto-link b-none">
                    <svg height="32" width="32">
                        <use href='/images/icons/heart.svg#root'></use>
                    </svg>
                </a>
                <a href="#" onClick={() => store.setBasket()} className="btn btn-auto-link b-none cart-basket">
                    <svg height="32" width="32">
                        <use href='/images/icons/cart.svg#root'></use>
                    </svg>
                    <span className="qty-basket">
                        {store.quantity}
                    </span>
                </a>
            </div>
        </div>
      </div>
    </header>
  );
};

export default observer(Header);
