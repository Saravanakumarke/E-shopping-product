import React from 'react'
import styles from './Product.module.css'
import Art from '../Image/art.jpg'
import Mug from '../Image/mug.jpg'
import Laptop from '../Image/laptop.jpg'
import Head from '../Image/head.jpg'
import Watch from '../Image/watchone.jpg'
import Phone from '../Image/phone.jpg'
import Post from '../Image/poster.jpg'
import Shoe from '../Image/shoes.jpg'
import tshirt from '../Image/tshirt.jpg'
import {AiOutlineRight} from 'react-icons/ai'
import { Link} from 'react-router-dom';


function Product() {
    return (
        <div className={styles.container}>
            <div className={styles.topshow}>
          <span className={styles.showitem}> Showing 1-8 of 9 results</span> 
          <div className={styles.dropdownbox}>
              <span className={styles.drop}>
                  <select className={styles.items}>
                      <option className={styles.option}>Default Sorting</option>
                      <option className={styles.option}>Price High to Low</option>
                      <option className={styles.option}>Price Low to Hight</option>
                      
                  </select>
              </span>
          </div>
          </div>
           
      {    /* productlist */}

          <div className={styles.listone}>
              <span className={styles.firstcard}>
                  <div className={styles.firstcard}>
                      <div className={styles.sale}><p className={styles.saletext}>Sale!</p></div>
             <img src={Art} alt="art" className={styles.firstimg}></img>
             <h1 className={styles.imgname}>Art</h1>
           <span><p className={styles.rate}>$399.00</p></span><span><h4 className={styles.offer}>$99.00</h4></span>
                  </div>
                </span>
              <span className={styles.secondlist}>
                  <div className={styles.secondcard}>
                  <img src={Mug} alt="mug" className={styles.firstimg}></img>
             <h1 className={styles.imgname}>Mug Mockup</h1>
          <span><h4 className={styles.offer1}>$99.00</h4></span>
                  </div>
                  </span>
              <span className={styles.thiredlist}>
              <div className={styles.thiredcard}>
              <div className={styles.sale}><p className={styles.saletext}>Sale!</p></div>
              <img src={Laptop} alt="laptop" className={styles.firstimg}></img>
             <h1 className={styles.imgname}>Laptops</h1>
           <span><p className={styles.rate}>$250.00</p></span><span><h4 className={styles.offer}>$150.00</h4></span>
                  </div>
                  </span>
          </div>
          <div className={styles.listtwo}>
              <span className={styles.firstcard}>
                  <div className={styles.firstcard}>
                      
             <img src={Head} alt="headset" className={styles.firstimg}></img>
             <h1 className={styles.imgname}>Headphone</h1>
             <span><h4 className={styles.offer1}>$59.00</h4></span>
                  </div>
                </span>
              <span className={styles.secondlist}>
                  <div className={styles.secondcard}>
                  <img src={Watch} alt="watch" className={styles.firstimg}></img>
             <h1 className={styles.imgname}>Watches</h1>
          <span><h4 className={styles.offer1}>$99.00</h4></span>
                  </div>
                  </span>
              <span className={styles.thiredlist}>
              <div className={styles.thiredcard}>
              <div className={styles.sale}><p className={styles.saletext}>Sale!</p></div>
              <img src={Phone} alt="phone" className={styles.firstimg}></img>
             <h1 className={styles.imgname}>Phone</h1>
           <span><p className={styles.rate}>$550.00</p></span><span><h4 className={styles.offer}>$350.00</h4></span>
                  </div>
                  </span>
          </div>
          <div className={styles.listthree}>
              <span className={styles.firstcard}>
                  <div className={styles.firstcard}>
                      
             <img src={Post} alt="poster" className={styles.firstimg}></img>
             <h1 className={styles.imgname}>Poster</h1>
             <span><h4 className={styles.offer1}>$89.00</h4></span>
                  </div>
                </span>
              <span className={styles.secondlist}>
                  <div className={styles.secondcard}>
                  <img src={Shoe} alt="shoe" className={styles.firstimg}></img>
             <h1 className={styles.imgname}>Shoes</h1>
          <span><h4 className={styles.offer1}>$199.00</h4></span>
                  </div>
                  </span>
              <span className={styles.thiredlist}>
              <div className={styles.thiredcard}>
              
              <img src={tshirt} alt="tshirt" className={styles.firstimg}></img>
             <h1 className={styles.imgname}>T-shirt</h1>
             <span><h4 className={styles.offer1}>$299.00</h4></span>
                  </div>
                  </span>
          </div>
          
          {    /* Pagination */}

          <div className={styles.footer}>
              <ul className={styles.pageno}>
              <Link to='' className={styles.link}>   <li className={`${styles.pagename} + " " + ${styles.active}`}><p className={styles.no}>1</p></li></Link> 
              <Link to='/pageno2' className={styles.link}>  <li className={styles.pagename}><p className={styles.no}>2</p></li></Link>
                  <li className={styles.pagename}><p className={styles.no}>3</p></li>
                  <li className={styles.pagename}><p className={styles.no}><AiOutlineRight /></p></li>
              </ul>
          </div>
        </div>
    )
}

export default Product
