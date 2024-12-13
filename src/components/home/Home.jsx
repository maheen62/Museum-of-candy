import "./Home.css"
function Home(){
    return(
        <>
        <div className="Home">
         <div className="content">
            <h1 className="fancytext">MUSEUM OF <br />CANDY</h1>
             <h3>STEP INTO AN IMMERSIVE CANDY DREAMLAND</h3>
             <p>Get your tickets now</p>
             <button>GET TICKETS</button>
             <h4>powered by <span>fever</span></h4>

             <div className="internet">
                <div className="internet-content">
                <img src="https://themuseumofcandy.com/_astro/hero_icon-exhibits_ldidno_Z1w1toI.svg" alt="" width={"30px"} height={"30px"}/>
                <p>+15 exhibits</p>
                </div>
                <div className="internet-content">
                <img src="https://themuseumofcandy.com/_astro/hero_icon-moments_zyiju2_2nFAuw.svg" alt="" width={"30px"} height={"30px"}/>
                <p>Instagrammable moments</p>
                </div>

                <div className="internet-content">
                <img src="https://themuseumofcandy.com/_astro/hero_icon-games_m6mjpg_ZeGToK.svg" alt="" width={"30px"} height={"30px"}/>
                  <p>Interactive games</p>
                </div>

             </div>
         </div>
         
        </div>
      

        </>
    )
}

export default Home;