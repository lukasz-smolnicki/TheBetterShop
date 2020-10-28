import logo from './logo.svg';
import './App.css';

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open")
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }
  return (
    <div className="App grid-container">
      <header className="header">
        <div className="brand">
          <button onClick={openMenu}>
            &#9776;
          </button>
          <a href="index.html">The Better Shop</a>
        </div>
        <div className="header-links">
          <a href="cart.html">Koszyk</a>
          <a href="signin.html">Zaloguj się</a>
        </div>
      </header>
      <aside className="sidebar">
        <h3>Shopping Categories</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>x</button>
        <ul>
          <li>Pants</li>
          <li>Shirt</li>
        </ul>
      </aside>
      <main className="main">
        <div className="content">
          <ul className="products">
            <li>
              <div class="product">
                <img class="product-image" src="/images/d1.jpg" alt="product" />
                <div class="product-name"><a href="product.html">Slim shirt</a></div>
                <div class="product-brand">Nike</div>
                <div class="product-price">$60</div>
                <div class="product-raitng">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div class="product">
                <img class="product-image" src="/images/d1.jpg" alt="product" />
                <div class="product-name"><a href="product.html">Slim shirt</a></div>
                <div class="product-brand">Nike</div>
                <div class="product-price">$60</div>
                <div class="product-raitng">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div class="product">
                <img class="product-image" src="/images/d1.jpg" alt="product" />
                <div class="product-name"><a href="product.html">Slim shirt</a></div>
                <div class="product-brand">Nike</div>
                <div class="product-price">$60</div>
                <div class="product-raitng">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div class="product">
                <img class="product-image" src="/images/d1.jpg" alt="product" />
                <div class="product-name"><a href="product.html">Slim shirt</a></div>
                <div class="product-brand">Nike</div>
                <div class="product-price">$60</div>
                <div class="product-raitng">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div class="product">
                <img class="product-image" src="/images/d1.jpg" alt="product" />
                <div class="product-name"><a href="product.html">Slim shirt</a></div>
                <div class="product-brand">Nike</div>
                <div class="product-price">$60</div>
                <div class="product-raitng">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div class="product">
                <img class="product-image" src="/images/d1.jpg" alt="product" />
                <div class="product-name"><a href="product.html">Slim shirt</a></div>
                <div class="product-brand">Nike</div>
                <div class="product-price">$60</div>
                <div class="product-raitng">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
          </ul>
        </div>
      </main>
      <footer className="footer">
        All right reservered.
        </footer>
    </div>
  );
}

export default App;
