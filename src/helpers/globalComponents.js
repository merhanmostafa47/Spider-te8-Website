import { Icon } from '@iconify/vue'
import { Swiper, SwiperSlide } from '../plugins/swiper'

import TheNavbar from '../components/navigation/TheNavbar.vue'
import smallNavigationBar from '../components/navigation/smallNavigationBar/NavigationBar.vue'
import SectionHeader from '../components/base/SectionHeader.vue'
import BaseButton from '../components/base/BaseButton.vue'

export function globalComponents(app) {
  app.component('Swiper', Swiper)
  app.component('SwiperSlide', SwiperSlide)
  app.component('Icon', Icon)

  app.component('TheNavbar', TheNavbar)
  app.component('smallNavigationBar', smallNavigationBar)
  app.component('SectionHeader', SectionHeader)
  app.component('BaseButton', BaseButton)
}
