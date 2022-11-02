/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import './cast.scss';

import useCast from '../../hooks/useCast';
import ContainerAnimated from '../ContainerAnimated/ContainerAnimated';

const Cast = ({ cast }) => {
  const data = useCast([cast]);
  return (
    <div className='container my-5'>
      <h2 className='text-center'>Cast</h2>
      <Swiper breakpoints={{
        320: {
          slidesPerView: 1,
          centeredSlides: true,
        },
        700: {
          slidesPerView: 2,
        },
        1000: {
          slidesPerView: 4,
        },
      }}
        slidesPerView={4}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        height='400px'
        modules={[Pagination]}
        className="mySwiper ms-5"
      >
        {data?.map(person => (
          <SwiperSlide key={person.id}>
            <ContainerAnimated transition={{ delay: 0.3, duration: 0.8 }} className='row gx-0'>
              <div className='col-3 gx-0'>
                <img className='img-size-swiper' src={`https://image.tmdb.org/t/p/w300/${person.profile_path}`}/>
                {!person.profile_path && <h2 className='text-danger'> Image not found </h2>}
              </div>
              <div>
                <h5>{person?.name}</h5>
              </div>
            </ContainerAnimated>
          </SwiperSlide>
        ))}
        </Swiper>
      <hr />
    </div>
  );
};

export default Cast;
