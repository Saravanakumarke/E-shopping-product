import React,{useState}  from 'react'
import styles from './Leftitembook2.module.css'
import { AiFillStar } from "react-icons/ai";
import Laptop from '../Image/lap.jpg'
import Cup from '../Image/cup.jpg'
import Watch from '../Image/watch.jpg'
import Book2 from '../Book2/Book2';
import Modal from 'react-modal';
import {MdCancel} from 'react-icons/md'
import { Link} from 'react-router-dom';




Modal.setAppElement('#root');
function Leftitem() {

    const [modalIsOpen,setModalIsOpen] = useState(false);

    function handlemodelclose()
{
    setModalIsOpen(false);
}

function handlemodel()
{
  
    setModalIsOpen(true);
  }

    return (
        <>
            <div className={styles.container}>
                <ul className={styles.left}>
                <Link to="/" className={styles.link}><li className={styles.title}><h1 className={styles.lefttitle}>Products</h1></li></Link>
                </ul>
                <ul className={styles.right}>
                    <li className={styles.title}><button onClick={()=>handlemodel()}  className={styles.rightbtn1}>Add Products</button></li>
                </ul>
              <aside className={styles.asidenav}>
                  <div className={styles.catagory}>
                      <h1 className={styles.subtitle}>CATAGORIES</h1>
                      <span className={styles.details}>
                           <ul className={styles.subcatagory}>
                               <Link to="/books" className={styles.link}><li className={styles.cataitem}>Books</li></Link>
                               <hr />
                               <Link to="/cars" className={styles.link}><li className={styles.cataitem}>Cars</li></Link>
                               <hr/>
                               <Link to="/laptops" className={styles.link}><li className={styles.cataitem}>Laptops</li></Link>
                               <hr/>
                               <Link to="/bags" className={styles.link}><li className={styles.cataitem}>Bags</li></Link>
                           </ul>
                        </span>
                  </div>
                  <div className={styles.filterarea}>
                     <h1 className={styles.subtitle}>FILTER BY PRICE</h1>
                     <span className={styles.range}>
                         <input type="range" className={styles.rangeslider} />
                         <button className={styles.btn2}>Filter</button>
                         <p className={styles.price}>Price:<span className={styles.amount}>$50-$100</span></p>
                     </span>
                  </div>
                  <div className={styles.topproduct}>
                      <h1 className={styles.subtitle}>TOP PRODUCTS</h1>
                      <div className={styles.productone}>
                        <img  src={Cup} className={styles.firstproduct} alt="cup">

                        </img>
                        <span className={styles.firstrating}>
                            <div className={styles.ratingname}>Mug Mockups</div>
                      <div className={styles.starsarea}>    <span className={styles.ratingstars}>
                            <span className={styles.stars}><AiFillStar /></span>
                            <span className={styles.stars}><AiFillStar /></span>
                            <span className={styles.stars}><AiFillStar /></span>
                            <span className={styles.stars}><AiFillStar /></span>
                            <span className={styles.stars}><AiFillStar /></span>
                            </span>
                            </div>  
                            <div className={styles.val}>$99.00</div>
                        </span>
                      </div>
                      <hr></hr>
                      <div className={styles.producttwo}>
                      <img  src={Laptop} className={styles.secondtproduct} alt="cup"></img>
                        <span className={styles.firstrating}>
                            <div className={styles.ratingname}>Laptops</div>
                      <div className={styles.starsarea}>    <span className={styles.ratingstars}>
                            <span className={styles.stars}><AiFillStar /></span>
                            <span className={styles.stars}><AiFillStar /></span>
                            <span className={styles.stars}><AiFillStar /></span>
                            <span className={styles.stars}><AiFillStar /></span>
                            <span className={styles.stars}><AiFillStar /></span>
                            </span>
                            </div>  
                            <div className={styles.val}>$129.00</div>
                        </span>
                      </div>
                      <hr></hr>
                      <div className={styles.productthree}>
                      <img  src={Watch} className={styles.thiredproduct} alt="cup"></img>
                        <span className={styles.firstrating}>
                            <div className={styles.ratingname}>Style Watches</div>
                      <div className={styles.starsarea}>    <span className={styles.ratingstars}>
                            <span className={styles.stars}><AiFillStar /></span>
                            <span className={styles.stars}><AiFillStar /></span>
                            <span className={styles.stars}><AiFillStar /></span>
                            <span className={styles.stars}><AiFillStar /></span>
                            <span className={styles.stars}><AiFillStar /></span>
                            </span>
                            </div>  
                            <div className={styles.val}>$59.00</div>
                        </span>
                      </div>
                      <hr></hr>
                  </div>
              </aside>
              <section className={styles.productinfo}>
            <Book2 />
              </section>
          
        <Modal isOpen={modalIsOpen} className={styles.model}>
           
       <MdCancel
        className={styles.cancel}
        size={40}
        onClick={()=>handlemodelclose()}
        />
        <h1 className={styles.heading}>Add Product</h1>
        <form className={styles.formdata}>
            <lable className={styles.procata}>Product Catagory</lable>
            <div className={styles.dropdownbox}>
              <span className={styles.drop} >
                  <select className={styles.items}>
                      <option className={styles.option}>Books</option>
                      <option className={styles.option}>Cars</option>
                      <option className={styles.option}>Laptops</option>
                      <option className={styles.option}>Bags</option>
                  </select>
              </span>
          </div>
          <div className={styles.producttitleare}>
          <lable className={styles.protitle}>Product Title</lable>
          <input type="text" className={styles.producttitle} placeholder="Enter product title" required></input>
          </div>
          <div className={styles.producttitleare}>
          <lable className={styles.protitle}>Price</lable><br></br>
          <input type="text" className={styles.producttitle} placeholder="Enter price" required></input>
          </div>
          <div className={styles.producttitleare}>
          <lable className={styles.protitle}>Upload Product Image</lable><br/>
          <input type="file" className={styles.file}  required></input>
          </div>
          <hr className={styles.hr1}></hr>
          <div className={styles.btns}>
              <input type="button" className={styles.cancelbtn} value="Cancel" onClick={()=>handlemodelclose()} />
              <input type="submit" className={styles.savebtn} value="Save" />
          </div>
        </form>
        </Modal>
            </div>
                             
        </>
    )
}

export default Leftitem
