import food1 from '@/assets/home/home-products/food1.png'
import food2 from '@/assets/home/home-products/food2.png'
import food3 from '@/assets/home/home-products/food3.png'

//Footer instagram images.
import image from '@/assets/footer/instagram/image.png'
import image2 from '@/assets/footer/instagram/image2.png'
import image3 from '@/assets/footer/instagram/image3.png'
import image4 from '@/assets/footer/instagram/image4.png'
import image5 from '@/assets/footer/instagram/image5.png'
import image6 from '@/assets/footer/instagram/image6.png'

export const productData = [
  {
    src: food1,
    pizzaName: 'Terminal Pizza',
    rating: '4.9',
    stock: '(200)',
    price: '130₺'
  },
  {
    src: food2,
    pizzaName: 'Position Absolute Acı Pizza',
    rating: '4.9',
    stock: '(1999)',
    price: '145₺'
  },
  {
    src: food3,
    pizzaName: 'Computed Tavuklu Burger',
    rating: '4.7',
    stock: '(455)',
    price: '155₺'
  }
]

export const footerImages: string[] = [image, image2, image3, image4, image5, image6]

export const toppingsArr: string[] = [
  'Pepperoni',
  'Sosis',
  'Kanada Jambonu',
  'Tavuk Izgara',
  'Soğan',
  'Domates',
  'Mısır',
  'Sucuk',
  'Jalepeno',
  'Sarımsak',
  'Biber',
  'Sucuk',
  'Ananas',
  'Kabak'
]

export const pizzaSize: string[] = ['S', 'M', 'L']

export const doughSize: string[] = ['İnce', 'Orta', 'Kalın']
