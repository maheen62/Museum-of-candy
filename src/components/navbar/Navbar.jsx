import "./Navbar.css"

function Navbar(){
    return(
        <div className="Navbar">
            <div>
            <h1 class="fancy-text"> Museum of Candy</h1>
            </div>
            <div className="anchortags">
              <button>TICKETS</button>
              <a href="">EXPERIENCE</a>
              <a href="">PRACTICAL INFO</a>
              <a href="">LOCATION</a>
              <a href="">FAQS</a>
            </div>
        </div>
    )
}

export default Navbar;