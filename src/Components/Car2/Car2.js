import React from 'react'
import styles from './Car2.module.css'
import Car from '../Image/car.jpg'
import Car1 from '../Image/car1.jpg'
import Car2 from '../Image/car3.jpg'
import Car3 from '../Image/car2.jpg'
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
             <img src={Car} alt="car" className={styles.firstimg}></img>
             <h1 className={styles.imgname}>Car</h1>
           <span><p className={styles.rate}>$399.00</p></span><span><h4 className={styles.offer}>$99.00</h4></span>
                  </div>
                </span>
              <span className={styles.secondlist}>
                  <div className={styles.secondcard}>
                  <img src={Car1} alt="car" className={styles.firstimg}></img>
             <h1 className={styles.imgname}>Ford Raptor</h1>
          <span><h4 className={styles.offer1}>$99.00</h4></span>
                  </div>
                  </span>
              <span className={styles.thiredlist}>
              <div className={styles.thiredcard}>
              <div className={styles.sale}><p className={styles.saletext}>Sale!</p></div>
              <img src={Car2} alt="car" className={styles.firstimg}></img>
             <h1 className={styles.imgname}>Jeep</h1>
           <span><p className={styles.rate}>$250.00</p></span><span><h4 className={styles.offer}>$150.00</h4></span>
                  </div>
                  </span>
          </div>
          <div className={styles.listtwo}>
              <span className={styles.firstcard}>
                  <div className={styles.firstcard}>
                      
             <img src={Car3} alt="car" className={styles.firstimg}></img>
             <h1 className={styles.imgname}>Lamborghini</h1>
             <span><h4 className={styles.offer1}>$59.00</h4></span>
                  </div>
                </span>
              <span className={styles.secondlist}>
                  <div className={styles.secondcard}>
                  <img src={Car} alt="car" className={styles.firstimg}></img>
             <h1 className={styles.imgname}>Tata car</h1>
          <span><h4 className={styles.offer1}>$99.00</h4></span>
                  </div>
                  </span>
              <span className={styles.thiredlist}>
              <div className={styles.thiredcard}>
              <div className={styles.sale}><p className={styles.saletext}>Sale!</p></div>
              <img src={Car1} alt="car" className={styles.firstimg}></img>
             <h1 className={styles.imgname}>Ferrari</h1>
           <span><p className={styles.rate}>$550.00</p></span><span><h4 className={styles.offer}>$350.00</h4></span>
                  </div>
                  </span>
          </div>
          <div className={styles.listthree}>
              <span className={styles.firstcard}>
                  <div className={styles.firstcard}>
                      
             <img src={Car2} alt="car" className={styles.firstimg}></img>
             <h1 className={styles.imgname}>Jensen Inter</h1>
             <span><h4 className={styles.offer1}>$89.00</h4></span>
                  </div>
                </span>
              <span className={styles.secondlist}>
                  <div className={styles.secondcard}>
                  <img src={Car3} alt="car" className={styles.firstimg}></img>
             <h1 className={styles.imgname}>Car</h1>
          <span><h4 className={styles.offer1}>$199.00</h4></span>
                  </div>
                  </span>
              <span className={styles.thiredlist}>
              <div className={styles.thiredcard}>
              
              <img src={Car} alt="car" className={styles.firstimg}></img>
             <h1 className={styles.imgname}>Cars</h1>
             <span><h4 className={styles.offer1}>$299.00</h4></span>
                  </div>
                  </span>
          </div>
          <div className={styles.footer}>
              <ul className={styles.pageno}>
              <Link to='/cars' className={styles.link}><li className={styles.pagename}><p className={styles.no}>1</p></li></Link> 
              <Link to='/carpageno2' className={styles.link}>  <li className={`${styles.pagename} + " " + ${styles.active}`}><p className={styles.no}>2</p></li></Link>
                  <li className={styles.pagename}><p className={styles.no}>3</p></li>
                  <li className={styles.pagename}><p className={styles.no}><AiOutlineRight /></p></li>
              </ul>
          </div>
        </div>
    )
}

export default Product
