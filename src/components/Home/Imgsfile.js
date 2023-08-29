import React from 'react'
import imga from '../../Images/image-2.png'
import imgb from '../../Images/image-3.png'
import imgc from '../../Images/chocolate 1.png'
import './Imgsfile.css'
import { FaArrowRight } from 'react-icons/fa';
const Imgsfile = () => {
  return (
<div className='imgsgrid mt-4 pt-lg-4'>
<div className="container">
  <div className="row">
    <div className="col-sm-12 col-lg-6 col-md-6">
     <div>
       <img className='card-img-top' src={imga} width="300px"/>
     </div>
    </div>
    <div className="col-sm-12 col-lg-6 col-lg-6 col-md-6">
    <div >
       <img  className='card-img-top' src={imgb} width="300px"/>
     </div>
    </div>
  </div>

  <div className="row mt-lg-5 ">
  <div className="col-sm-12 col-lg-6 col-lg-6 col-md-6 ">
     <div>
       <img className='card-img-top' src={imgc} width="300px"/>
     </div>
    </div>
    <div className="col-sm-12 col-lg-6 col-lg-6 col-md-6">
    <div className='mt-lg-5 pt-lg-5'>
    <p className='p1'>About As</p>
    <h3 >We Believe in Working Accredited Farmers</h3>
    <p className='p2'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
     <h6 className='mt-lg-4'>Organic Foods Only</h6>
     <p className='p2'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
     <button className='px-4 p-3 text-center'>Shop Now &nbsp;
     <FaArrowRight className="ms-2 rounded-circle  text-black p-1" style={{backgroundColor: '#FFDAA9'}} />
     </button>
     </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Imgsfile
