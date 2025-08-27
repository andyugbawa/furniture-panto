import React from "react";
import "./myStyles.css";

function Greet() {
  return (
     <div>
      <div>
    <div className="hero">
      <header>

        <div className="navbar">
        <div className="logo-head">
          <h2 className="logo">Panto</h2>
        </div>

        <nav>
          <ul>
        <li><a href="#">Furniture <i className="fa-solid fa-chevron-down"></i></a></li>
        <li><a href="#">Shop</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact</a></li>
          </ul>
        </nav>

        <div className="icon-shopping">
          <p className="zero">0</p>
         <i className="fa-solid fa-bag-shopping"></i>
        
        </div>

        </div>
          
      </header>

        <div class="main-text">
        <div class="interior-head">
          <h2 class="interior">Make your interior more
            minimalistic & modern</h2>

        </div>
              <div class="modern">
                <div class="room-paragraph">
                  <p class="para_room">Turn your room with panto into a lot more minimalist<br/> and modern with ease and speed</p>
                </div>
                
              </div>
        
            <div class="search-container">
              <div></div>
            <input type="text" placeholder="Search furniture"/>
            <div className="search_parent">
              <button className="search-btn">
                <i class="fa fa-search"></i>
              </button>

            </div>

          </div> 
      </div>


       <div class="transperant_circle">
       <div class="parent-circle">
        <div class="child-circle"></div>
       </div>
    </div> 

    
       <div class="container-bubble">
       <div class="bubble-content">
        <div class="bubble">
          <div class="circle orange"><i class="fa-solid fa-check"></i></div>
          <div class="circle teal"></div>
          <div class="circle gray"></div>
        </div>
      </div> 
  
       <div class="bubble_circle">
        <div class="child_circle">
          <div class="child_circle-small"></div>
          
        </div>
      </div> 

    </div>


      
     <div class="transperant_circle1">
       <div class="parent-circle1">
        <div class="child-circle1"></div>
       </div>
    </div> 

        
    <div class="transperant_circle2">
       <div class="parent-circle2">
        <div class="child-circle2"></div>
       </div>
    </div>  
      


    </div>

        <div class="choosing-container">


    <div class="choosing-content">
     <h2 class="choosing">Why Choosing Us</h2>
  </div> 
  <div class="choosing-content1">
     <div class="luxury_content">
       <h2 class="luxury">Luxury facilities</h2>
     </div>
     <div class="luxury_para">
          <p class="luxury_text">The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
     </div>
      <div class="info-content">
         <div class="info_lay">
            <p class="info-para">More Info</p>
            <div class="icon-arrow">
                 <i class="fa-solid fa-arrow-right-long"></i>
            </div>
         </div>
      </div>
  </div> 
   <div class="choosing-content2">
     <div class="affordable_content">
       <h2 class="affordable">Affordable Price</h2>
      </div>
      <div class="affordable_para">
        <p class="affordable_text">You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here.</p>
      </div>
       <div class="info-content">
         <div class="info_lay">
            <p class="info-para">More Info</p>
            <div class="icon-arrow">
                 <i class="fa-solid fa-arrow-right-long"></i>
            </div>
         </div>
      </div>
  </div> 
   <div class="choosing-content3">
      <div class="choices_content">
       <h2 class="choices">Many Choices</h2>
      </div> 
    <div class="choices_para">
        <p class="choices_text">We provide many unique work space choices so that you can choose the workspace to your liking.</p>
      </div>
       <div class="info-content">
         <div class="info_lay">
            <p class="info-para">More Info</p>
            <div class="icon-arrow">
                 <i class="fa-solid fa-arrow-right-long"></i>
            </div>
         </div>
      </div>

  </div>  

     </div>  

      </div>



        <div className="product-container">

           <div class="selling-content">
             <div class="selling-head">
               <h2 class="selling-product">Best Selling Product</h2>
             </div>
           </div>
            <div class="product-content">
             <div class="product-name">
                 <div class="chairs">
                    <p class="chairs-para">Chair</p>
                 </div>
                 <div class="chairs1">
                     <p class="chairs-para1">Beds</p>
                 </div>
                 <div class="chairs2">
                    <p class="chairs-para2">Sofa</p>
                 </div>
                 <div class="chairs3">
                   <p class="chairs-para2">Lamp</p>
                 </div>
             </div>
           </div> 



           <div class="display-container">
                   <div className="arrow-container">
                     <div className="circle-arrow_left">
                         <span className="left">&larr;</span>
                       </div>

                     <div className="circle-arrow_right">
                       <span className="right">&rarr;</span>
                     </div>

                   </div>

            </div> 




         

                <div className="card-container">
                   <div className="card-flow">
                     <div className="card">
                        <img src="./images/chair1.png" alt="" className="image1"/>
                         <div className="card-back1">
                           <div className="card-content">
                             <p>Chair</p>
                             <div className="head-detail">
                               <p className="card-detail">Sakarias Armchair</p>
                             </div>
                             <i className="fa-solid fa-star" id="star" ></i>
                             <i className="fa-solid fa-star" id="star"></i>
                             <i className="fa-solid fa-star" id="star"></i>
                             <i className="fa-solid fa-star" id="star"></i>
                             <i className="fa-solid fa-star" id="star"></i>

                             <div className="price-content">
                               <div className="amount">
                                 <span>$</span>
                                 <p className="price">392</p>
                               </div>
                               <div className="plus-icon">
                                 <i className="fa-solid fa-circle-plus"></i>
                               </div>
                             </div>

                         </div>
  
                         </div>
  
                  </div> 
  
                    <div className="card">
                        <img src="./images/chair2.png" alt="" className="image2"/>
                        <div className="card-back">
                          <div className="card-content2">
                             <p>Chair</p>
                             <div className="head-detail">
                               <p className="card-detail">Baltsar Chair</p>
                             </div>
                            <i className="fa-solid fa-star"id="star"></i>
                            <i className="fa-solid fa-star" id="star"></i>
                            <i className="fa-solid fa-star" id="star"></i>
                            <i className="fa-solid fa-star" id="star"></i>
                            <i className="fa-solid fa-star" id="star"></i>

                            <div className="price-content2">
                             <div className="amount">
                               <span>$</span>
                               <p className="price">299</p>
                             </div>
                             <div className="plus-icon">
                               <i className="fa-solid fa-circle-plus"></i>
                             </div>
                           </div>

                        </div>
  
                        </div>
  
                  </div>
                    <div className="card">
                        <img src="./images/chair3.png" alt="" className="image3"/>
                        <div className="card-back">
                          <div className="card-content3">
                           <p>Chair</p>
                           <div className="head-detail">
                             <p className="card-detail" >Anjay Chair</p>
                           </div>
                            <i className="fa-solid fa-star" id="star"></i>
                            <i className="fa-solid fa-star"id="star"></i>
                            <i className="fa-solid fa-star"id="star"></i>
                            <i className="fa-solid fa-star" id="star"></i>
                            <i className="fa-solid fa-star" id="star"></i>
                            <div className="price-content2">
                             <div className="amount">
                               <span>$</span>
                               <p className="price">519 </p>
                             </div>
                             <div className="plus-icon">
                               <i className="fa-solid fa-circle-plus"></i>
                             </div>
                           </div>
                        </div>
  
                        </div>
                  </div>
                    <div className="card">
                        <img src="./images/chair4.png" alt="" className="image4"/>
                        <div className="card-back">
                          <div className="card-content4">
                           <p>Chair</p>
                           <div className="head-detail">
                             <p classsName="card-detail" >Nyantuy Chair</p>
                           </div>
                            <i className="fa-solid fa-star" id="star"></i>
                            <i className="fa-solid fa-star" id="star"></i>
                            <i className="fa-solid fa-star" id="star"></i>
                            <i className="fa-solid fa-star" id="star"></i>
                            <i className="fa-solid fa-star" id="star"></i>
                            <div className="price-content2">
                             <div className="amount">
                               <span>$</span>
                               <p className="price">921 </p>
                             </div>
                             <div className="plus-icon">
                               <i className="fa-solid fa-circle-plus"></i>
                             </div>
                           </div>
                        </div>
  
                        </div>
                  </div>

                   </div>

                


             </div>  

    
         <div className="view_container">
              <p className="view-para">View All</p>
            <div className="icon-arrow">
                 <i className="fa-solid fa-arrow-right-long"></i>
             </div>
          </div> 
     </div>  
        

          <div className="experience-container">
              <div className="image-container">
                  <div className="image-content1">
                   <div className="image-content2">
                     <div className="image-content">
                        <div className="sofa-container">
                          <img src="./images/long sofa.png" alt="Furniture" className="furniture-image"/>
                      </div>
                   </div>

                   </div>

                  </div>
              



                  <div className="experience-overhead">
                    <div className="experiences-content">
                         <p className="experiences">experiences</p>
                    </div>
                    <div className="provide-container">
                       <h2 className="provision">we provide you the best experience</h2>
                    </div>
                    <div className="experience-subhead">
                       <p className="result">You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials</p>
                    </div>



                     <div className="info-content3">
                      <div className="info_lay">
                        <p className="info-para">More Info</p>
                        <div className="icon-arrow">
                              <i className="fa-solid fa-arrow-right-long"></i>
                        </div>
                      </div>
                  </div>

                  </div>
              </div>

          </div>


            <div className="material-display">

                <div className="material-overhead">
                  <div className="material-content">
                       <p className="material">Materials</p>
                  </div>
                  <div className="material-container">
                     <h2 className="mate-furniture">Very serious materials for making furniture</h2>
                  </div>
                  <div className="material-subhead">
                     <p className="design">Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price</p>
                  </div>
  
  
  
                   <div className="info-content3">
                    <div className="info_lay">
                      <p className="info-para">More Info</p>
                      <div className="icon-arrow">
                            <i className="fa-solid fa-arrow-right-long"></i>
                      </div>
                    </div>
                </div>
  
                </div>

                 <div className="image__display">
                   <div className="box-image_content">
                        <div className="box-image1">
                          <img src="./images/single chair.png" alt="" className="single-image"/>
                        </div>
                        <div className="box-image2">
                          <img src="./images/double sitter.png" alt="" className="double-image"/>
                        </div>
                   </div>
                     <div className="box-image_content1">
                       <div className="box-image3">
                        <img src="./images/double chair.png" alt="" class="group-chair"/>
                       </div>
                     </div>

                 </div>
            </div>

             <div className="general-testimonial">

             <div className="testimonial-container">
               <div className="testimonial-content">
                  <div className="testimonial-head">
                    <h2 clasName="testimonial">Testimonials</h2>
                  </div>
                </div>
             </div>
     
             <div className="review-container">
               <div className="review-content">
                  <div className="review-head">
                    <h2 className="review">Our Client Reviews</h2>
                  </div>
                </div>
             </div>
     
     
     
            <div className="container__testimonial">
                   <div className="arrow-container1">
                          <div className="circle-arrow_left1">
                              <span className="left1">&larr;</span>
                            </div>
     
                          <div className="circle-arrow_right1">
                            <span className="right1">&rarr;</span>
                          </div>
     
                        </div> 
     
              <div className="card_testimonial1">
                <img src="./images/test1.png" alt="background" class="bg"/>
                  <div className="testimonial-box">
                  <div className="profile-pic">
                    <img src="./images/face1.png" alt="Profile"/>
                  </div>
                  <h3>Bang Upin</h3>
                  <p className="role">Pedagang Asongan</p>
                  <div className="read-test">
                    <p className="text">“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal!”</p>
                  </div>
                  <div className="stars">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-alt"></i>
                  </div>
                </div>  
              </div>
     
              
              <div className="card_testimonial1">
                <img src="./images/test2.png" alt="background" className="bg"/>
                 <div className="testimonial-box">
                  <div className="profile-pic">
                    <img src="./images/face2.png" alt="Profile"/>
                  </div>
                  <h3>Ibuk Sukijan</h3>
                  <p className="role">Ibu Rumah Tangga</p>
                  <div className="read-test">
                    <p className="text">“Makasih Panto, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat mewah“</p>
                  </div>
                  <div className="stars">
                    <i classname="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-alt"></i>
                  </div>
                </div> 
              </div>
     
              <div className="card_testimonial1">
                <img src="./images/test3.png" alt="background" className="bg"/>
                 <div className="testimonial-box">
                  
                  <div className="profile-pic">
                    <img src="./images/face3.png" alt="Profile"/>
                  </div>
                  <h3>Mpok Ina</h3>
                  <p className="role">Karyawan Swasta</p>
                   <div className="read-test1">
                     <p class="text">“Sangat terjangkau untuk kantong saya yang tidak terlalu banyak“</p>
                   </div>
                  <div className="stars">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-alt"></i>
                  </div>
     
                </div> 
              </div>
            </div> 
           </div> 


             <div class="footer-container">
           <div class="footer-content">
              <div class="footer-box1">
                <h2 class="footer-head">Panto</h2>
                <div class="footer-sub">
                  <p class="workspace">The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
                </div>
              </div>
              <div class="footer-box2">

                <h3 class="footer-head1">Services</h3>
                <div class="footer-list">
                  <ul>
                    <li>Email Marketing</li>
                    <li>Campaigns</li>
                    <li>Branding</li>
                  </ul>
                </div>

              </div>
              <div class="footer-box3">

              <h3 class="footer-head1">Furniture</h3>
                <div class="footer-list">
                  <ul>
                    <li>Beds</li>
                    <li>Chair</li>
                    <li>All</li>
                  </ul>
                </div>

              </div>
              <div class="footer-box4">
                   <h3 class="footer-head1">Follow Us</h3>
                <div class="footer-list">
                  <ul>
                    <div class="social-item">
                      <li><i class="fa-brands fa-facebook-f"></i><span>Facebook</span></li>
                    </div>
                    <div class="social-item">
                      <li><i class="fa-brands fa-twitter"></i><span>Twitter</span></li>
                    </div>
                    <div class="social-item">
                      <li><i class="fa-brands fa-instagram"></i><span>Instagram</span></li>
                    </div>
                  </ul>
                </div>
              </div>
             </div> 


              <div class="copyright-content">
              <div class="copy">
                <p class="year">Copyright © 2021</p>
              </div>
              <div class="terms-poicy">
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>

              </div>
             </div> 






       </div>     





        

     </div>

      
  );
}

export default Greet;
