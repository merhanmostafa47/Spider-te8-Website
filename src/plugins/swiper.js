import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css/bundle';
import SwiperCore from 'swiper/core';

// Register Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay]);

export { Swiper, SwiperSlide };
