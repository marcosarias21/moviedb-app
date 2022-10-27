/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

import useCast from '../../hooks/useCast';
import ContainerAnimated from '../ContainerAnimated/ContainerAnimated';

const Cast = ({ cast }) => {
  const data = useCast([cast]);
  console.log(data);
  return (
    <div className='my-5'>
    <h2 className='text-center'>Cast</h2>
    <Swiper
    breakpoints={{
      320: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
    }}
      slidesPerView={3}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {data?.map(person => (
          <SwiperSlide key={person.id}>
            <ContainerAnimated className='row'>
              <div className='col-3'>
                <img src={`https://image.tmdb.org/t/p/w300/${person.profile_path}`}/>
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
