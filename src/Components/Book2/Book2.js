import React from 'react'
import styles from './Book2.module.css'
import Book from '../Image/book.jpg'
import Book1 from '../Image/book1.jpg'
import Book2 from '../Image/book2.jpg'
import Book3 from '../Image/book3.jpg'
import {AiOutlineRight} from 'react-icons/ai'
import { Link} from 'react-router-dom';



function Product() {
    return (
        <div className={styles.container}>
            <div className={styles.topshow}>
          <span className={styles.showitem}> <h1>Showing 2-8 of 9 results</h1></span> 
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
          <div className={styles.listone}>
              <span className={styles.firstcard}>
                  <div className={styles.firstcard}>
                      <div className={styles.sale}><p className={styles.saletext}>Sale!</p></div>
             <img src={Book} alt="book" className={styles.firstimg}></img>
             <h1 className={styles.imgname}>Book</h1>
           <span><p className={styles.rate}>$399.00</p></span><span><h4 className={styles.offer}>$99.00</h4></span>
                  </div>
                </span>
              <span className={styles.secondlist}>
                  <div className={styles.secondcard}>
                  <img src={Book1} alt="book" className={styles.firstimg}></img>
             <h1 className={styles.imgname}>Book</h1>
          <span><h4 className={styles.offer1}>$99.00</h4></span>
                  </div>
                  </span>
              <span className={styles.thiredlist}>
              <div className={styles.thiredcard}>
              <div className={styles.sale}><p className={styles.saletext}>Sale!</p></div>
              <img src={Book2} alt="book" className={styles.firstimg}></img>
             <h1 className={styles.imgname}>Book</h1>
           <span><p className={styles.rate}>$250.00</p></span><span><h4 className={styles.offer}>$150.00</h4></span>
                  </div>
                  </span>
          </div>
          <div className={styles.listtwo}>
              <span className={styles.firstcard}>
                  <div className={styles.firstcard}>
                      
             <img src={Book3} alt="book" className={styles.firstimg}></img>
             <h1 className={styles.imgname}>Book</h1>
             <span><h4 className={styles.offer1}>$59.00</h4></span>
                  </div>
                </span>
              <span className={styles.secondlist}>
                  <div className={styles.secondcard}>
                  <img src={Book2} alt="book" className={styles.firstimg}></img>
             <h1 className={styles.imgname}>Book</h1>
          <span><h4 className={styles.offer1}>$99.00</h4></span>
                  </div>
                  </span>
              <span className={styles.thiredlist}>
              <div className={styles.thiredcard}>
              <div className={styles.sale}><p className={styles.saletext}>Sale!</p></div>
              <img src={Book} alt="book" className={styles.firstimg}></img>
             <h1 className={styles.imgname}>Book</h1>
           <span><p className={styles.rate}>$550.00</p></span><span><h4 className={styles.offer}>$350.00</h4></span>
                  </div>
                  </span>
          </div>
          <div className={styles.listthree}>
              <span className={styles.firstcard}>
                  <div className={styles.firstcard}>
                      
             <img src={Book1} alt="book" className={styles.firstimg}></img>
             <h1 className={styles.imgname}>Book</h1>
             <span><h4 className={styles.offer1}>$89.00</h4></span>
                  </div>
                </span>
              <span className={styles.secondlist}>
                  <div className={styles.secondcard}>
                  <img src={Book3} alt="book" className={styles.firstimg}></img>
             <h1 className={styles.imgname}>Book</h1>
          <span><h4 className={styles.offer1}>$199.00</h4></span>
                  </div>
                  </span>
              <span className={styles.thiredlist}>
              <div className={styles.thiredcard}>
              
              <img src={Book2} alt="book" className={styles.firstimg}></img>
             <h1 className={styles.imgname}>Book</h1>
             <span><h4 className={styles.offer1}>$299.00</h4></span>
                  </div>
                  </span>
          </div>
          <div className={styles.footer}>
              <ul className={styles.pageno}>
              <Link to='/books' className={styles.link}><li className={styles.pagename}><p className={styles.no}>1</p></li></Link> 
              <Link to='/bookpageno2' className={styles.link}>  <li className={`${styles.pagename} + " " + ${styles.active}`}><p className={styles.no}>2</p></li></Link>
                  <li className={styles.pagename}><p className={styles.no}>3</p></li>
                  <li className={styles.pagename}><p className={styles.no}><AiOutlineRight /></p></li>
              </ul>
          </div>
        </div>
    )
}

export default Product
