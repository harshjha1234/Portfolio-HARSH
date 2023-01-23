import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
// importing swiper to make this swiper type
import {Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
//import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonial</h2>
      <Swiper className="container testimonials_container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 className='client_name'>Harry Marnus</h5>
          <small className="client_review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est officia eveniet fugit modi quos cupiditate neque quas repellendus! Dicta porro recusandae error facere, ex cupiditate nisi modi vitae soluta fuga doloremque assumenda!
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={AVTR2} alt="Avatar One" />
          </div>
          <h5 className='client_name'>Alisha Khan</h5>
          <small className="client_review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est officia eveniet fugit modi quos cupiditate neque quas repellendus! Dicta porro recusandae error facere, ex cupiditate nisi modi vitae soluta fuga doloremque assumenda!
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={AVTR3} alt="Avatar One" />
          </div>
          <h5 className='client_name'>Kajal Verma</h5>
          <small className="client_review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est officia eveniet fugit modi quos cupiditate neque quas repellendus! Dicta porro recusandae error facere, ex cupiditate nisi modi vitae soluta fuga doloremque assumenda!
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={AVTR4} alt="Avatar One" />
          </div>
          <h5 className='client_name'>Ravi Kumar</h5>
          <small className="client_review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est officia eveniet fugit modi quos cupiditate neque quas repellendus! Dicta porro recusandae error facere, ex cupiditate nisi modi vitae soluta fuga doloremque assumenda!
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials