import "./Experience.css"
function Experience(){
    return(
        <div id="Experience">
              <h1 className="fancyExperienceText">THE EXPERIENCE</h1>
              <div className="imgContainer">
                     <div className="box1">
                         <img src="https://themuseumofcandy.com/_astro/DSC08253_lcxovd_1G3VuG.webp" alt="" width={"350px"} height={"300px"}/>
                         <h3>Explore a candy paradise</h3>
                         <p>Explore 15+ themed rooms where every corner is a colorful explosion of sweet surprises and Instagrammable moments.</p>
                     </div>

                     <div className="box1">
                         <img src="https://themuseumofcandy.com/_astro/DSC08428_1_uhkvlv_133OEe.webp" alt="" width={"350px"} height={"300px"}/>
                         <h3>Get creative</h3>
                         <p>Let your imagination flow with our interactive and engaging spaces. Check out our candy-themed games and have the sweetest time of your life while winning big!</p>
                     </div>

                     <div className="box1">
                         <img src="https://themuseumofcandy.com/_astro/DSC08403_f3bvt2_243eUU.webp" alt="" width={"350px"} height={"300px"}/>
                         <h3>Indulge in delights</h3>
                         <p>Treat your sweet tooth to an array of confectionery and beverages at our Instagrammable cafe. Choose from a range  of coffees and ice-creams, and grab a  bunch of candies to munch on later!</p>
                     </div>
              </div>
        </div>
    )
}

export default Experience;
