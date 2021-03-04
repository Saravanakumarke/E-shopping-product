import React from 'react'
import styles from './Bags.module.css'
import Bag1 from '../Image/bag1.jpg'
import Bag2 from '../Image/bag2.jpg'
import Bag3 from '../Image/bag3.jpg'
import Bag4 from '../Image/bag4.jpg'
import {AiOutlineRight} from 'react-icons/ai'


function Product() {
    return (
        <div className={styles.container}>
            <div className={styles.topshow}>
          <span className={styles.showitem}> <h1>Showing 1-8 of 9 results</h1></span> 
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
             <img src={Bag1} alt="bag" className={styles.firstimg}></img>
             <h1 className={styles.imgname}>Bag</h1>
           <span><p className={styles.rate}>$399.00</p></span><span><h4 className={styles.offer}>$99.00</h4></span>
                  </div>
                </span>
              <span className={styles.secondlist}>
                  <div className={styles.secondcard}>
                  <img src={Bag2} alt="bag" className={styles.firstimg}></img>
             <h1 className={styles.imgname}>Bags</h1>
          <span><h4 className={styles.offer1}>$99.00</h4></span>
                  </div>
                  </span>
              <span className={styles.thiredlist}>
              <div className={styles.thiredcard}>
              <div className={styles.sale}><p className={styles.saletext}>Sale!</p></div>
              <img src={Bag3} alt="bag" className={styles.firstimg}></img>
             <h1 className={styles.imgname}> Cotton Bag</h1>
           <span><p className={styles.rate}>$250.00</p></span><span><h4 className={styles.offer}>$150.00</h4></span>
                  </div>
                  </span>
          </div>
          <div className={styles.listtwo}>
              <span className={styles.firstcard}>
                  <div className={styles.firstcard}>
                      
             <img src={Bag4} alt="bag" className={styles.firstimg}></img>
             <h1 className={styles.imgname}>Style Bag</h1>
             <span><h4 className={styles.offer1}>$59.00</h4></span>
                  </div>
                </span>
              <span className={styles.secondlist}>
                  <div className={styles.secondcard}>
                  <img src={Bag1} alt="bag" className={styles.firstimg}></img>
             <h1 className={styles.imgname}>Bag</h1>
          <span><h4 className={styles.offer1}>$99.00</h4></span>
                  </div>
                  </span>
              <span className={styles.thiredlist}>
              <div className={styles.thiredcard}>
              <div className={styles.sale}><p className={styles.saletext}>Sale!</p></div>
              <img src={Bag2} alt="bag" className={styles.firstimg}></img>
             <h1 className={styles.imgname}>Color Bag</h1>
           <span><p className={styles.rate}>$550.00</p></span><span><h4 className={styles.offer}>$350.00</h4></span>
                  </div>
                  </span>
          </div>
          <div className={styles.listthree}>
              <span className={styles.firstcard}>
                  <div className={styles.firstcard}>
                      
             <img src={Bag3} alt="bag" className={styles.firstimg}></img>
             <h1 className={styles.imgname}>Cotton Bag</h1>
             <span><h4 className={styles.offer1}>$89.00</h4></span>
                  </div>
                </span>
              <span className={styles.secondlist}>
                  <div className={styles.secondcard}>
                  <img src={Bag4} alt="bag" className={styles.firstimg}></img>
             <h1 className={styles.imgname}>Style Bag</h1>
          <span><h4 className={styles.offer1}>$199.00</h4></span>
                  </div>
                  </span>
              <span className={styles.thiredlist}>
              <div className={styles.thiredcard}>
              
              <img src={Bag1} alt="bag" className={styles.firstimg}></img>
             <h1 className={styles.imgname}>Bags</h1>
             <span><h4 className={styles.offer1}>$299.00</h4></span>
                  </div>
                  </span>
          </div>
          <div className={styles.footer}>
              <ul className={styles.pageno}>
                <li className={`${styles.pagename} + " " + ${styles.active}`}><p className={styles.no}>1</p></li>
                <li className={styles.pagename}><p className={styles.no}>2</p></li>
                  <li className={styles.pagename}><p className={styles.no}>3</p></li>
                  <li className={styles.pagename}><p className={styles.no}><AiOutlineRight /></p></li>
              </ul>
          </div>
        </div>
    )
}

export default Product
