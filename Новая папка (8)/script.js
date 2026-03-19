const { createApp } = Vue

createApp({
  data() {
    return {
      current: null,
      showAuth: false,
      authError: '',
      form: { email: '', password: '' },
      user: null,
      cart: [],
      showCart: false,
      selCat: 'all',

      cats: [
        { id: 'all', name: 'Все товары', count: 26 },
        { id: 'gpu', name: 'Видеокарты (GPU)', count: 12 },
        { id: 'cpu', name: 'Процессоры (CPU)', count: 12 },
        { id: 'ram', name: 'Оперативная память', count: 2 },
      ],

      // КОМАНДА РАЗРАБОТЧИКОВ
      // photo: путь к фото, например: 'images/dev1.jpg'
      team: [
        { name: 'Artic876',   role: 'аватарки',           photo: 'images/Artic876.jpg' },
        { name: 'Rem',        role: 'дизайн',              photo: 'images/rem.jpg'   },
        { name: '_m_o_o_n_',  role: 'основатель компании', photo: 'images/_m_o_o_n_.jpg'  },
        { name: 'ojirmo',     role: 'попросил добавить',   photo: 'images/ojirmo.png'},
      ],

      // ТОВАРЫ
      // image: путь к фото, например: 'images/rtx4070.jpg'
      products: [
        {
          id: 1, name: 'AMD Radeon RX 7900 XTX',
          category: 'ВИДЕОКАРТЫ', catId: 'gpu',
          price: 89990, oldPrice: null, discount: null, image: 'images/AMD Radeon RX 7900 XTX.webp',
          description: 'AMD Radeon RX 7900 XTX — флагманская видеокарта на архитектуре RDNA 3 для максимальной производительности.',
          specs: [
            { label: 'Производитель', value: 'AMD'      },
            { label: 'Объём памяти',  value: '24 ГБ'    },
            { label: 'Тип памяти',    value: 'GDDR6'    },
            { label: 'Частота',       value: '2500 МГц' },
          ],
        },
        {
          id: 2, name: 'AMD Radeon RX 9070 Sapphire',
          category: 'ВИДЕОКАРТЫ', catId: 'gpu',
          price: 75510, oldPrice: null, discount: null, image: 'images/AMD Radeon RX 9070 Sapphire NITRO+ GAMING OC.webp',
          description: 'AMD Radeon RX 9070 — флагманская видеокарта на архитектуре RDNA 4 для максимальной производительности.',
          specs: [
            { label: 'Производитель', value: 'AMD'      },
            { label: 'Объём памяти',  value: '16 ГБ'    },
            { label: 'Тип памяти',    value: 'GDDR6'    },
            { label: 'Частота',       value: '2700 МГц' },
          ],
        },
        {
          id: 3, name: 'AMD Radeon RX 9060 XT ASUS',
          category: 'ВИДЕОКАРТЫ', catId: 'gpu',
          price: 51190, oldPrice: null, discount: null, image: 'images/AMD Radeon RX 9060 XT TUF ASUS GAMING OC.webp',
          description: 'AMD Radeon RX 9060 XT — флагманская видеокарта на архитектуре RDNA 4 для максимальной производительности.',
          specs: [
            { label: 'Производитель', value: 'AMD'      },
            { label: 'Объём памяти',  value: '16 ГБ'    },
            { label: 'Тип памяти',    value: 'GDDR6'    },
            { label: 'Частота',       value: '20000 МГц' },
          ],
        },
        {
          id: 4, name: 'AMD Radeon RX 7800 XT SAPPHIRE',
          category: 'ВИДЕОКАРТЫ', catId: 'gpu',
          price: 81990, oldPrice: null, discount: null, image: 'images/AMD Radeon RX 7800 XT SAPPHIRE NITRO+.webp',
          description: 'AMD Radeon RX 7800 XT — флагманская видеокарта на архитектуре RDNA 4 для максимальной производительности.',
          specs: [
            { label: 'Производитель', value: 'AMD'      },
            { label: 'Объём памяти',  value: '16 ГБ'    },
            { label: 'Тип памяти',    value: 'GDDR6'    },
            { label: 'Частота',       value: '20000 МГц' },
          ],
        },
        {
          id: 5, name: 'AMD Radeon RX 7700 XT  gigabaite GAMING OC',
          category: 'ВИДЕОКАРТЫ', catId: 'gpu',
          price: 49990, oldPrice: null, discount: null, image: 'images/AMD Radeon RX 7700 XT  gigabaite GAMING OC.webp',
          description: 'AMD Radeon RX 7700 XT — флагманская видеокарта на архитектуре RDNA 3 для максимальной производительности.',
          specs: [
            { label: 'Производитель', value: 'AMD'      },
            { label: 'Объём памяти',  value: '12 ГБ'    },
            { label: 'Тип памяти',    value: 'GDDR6'    },
            { label: 'Частота',       value: '2599 МГц' },
          ],
        },
        {
          id: 6, name: 'AMD Radeon RX 7600 XT SAPPHIRE',
          category: 'ВИДЕОКАРТЫ', catId: 'gpu',
          price: 31890, oldPrice: null, discount: null, image: 'images/AMD Radeon RX 7600 XT PULSE SAPPHIRE GAMING OC.webp',
          description: 'AMD Radeon RX 7600 XT — флагманская видеокарта на архитектуре RDNA 3 для максимальной производительности.',
          specs: [
            { label: 'Производитель', value: 'AMD'      },
            { label: 'Объём памяти',  value: '8 ГБ'    },
            { label: 'Тип памяти',    value: 'GDDR6'    },
            { label: 'Частота',       value: '17500 МГц' },
          ],
        },
        {
          id: 7, name: 'NVIDIA Palit GeForce RTX 4060 Dual OC V1',
          category: 'ВИДЕОКАРТЫ', catId: 'gpu',
          price: 32990, oldPrice: null, discount: null, image: 'images/NVIDIA Palit GeForce RTX 4060 Dual OC V1.webp',
          description: 'NVIDIA GeForce RTX 4060 на архитектуре Ada Lovelace. DLSS 3 и трассировка лучей для максимального погружения.',
          specs: [
            { label: 'Производитель', value: 'NVIDIA'      },
            { label: 'Объём памяти',  value: '8 ГБ'    },
            { label: 'Тип памяти',    value: 'GDDR6'    },
            { label: 'Частота',       value: '17000 МГц' },
          ],
        },

        {
          id: 8, name: 'NVIDIA GeForce RTX 4070',
          category: 'ВИДЕОКАРТЫ', catId: 'gpu',
          price: 52990, oldPrice: null, discount: null, image: 'images/NVIDIA GeForce RTX 4070.webp',
          description: 'NVIDIA GeForce RTX 4070 на архитектуре Ada Lovelace. DLSS 3 и трассировка лучей для максимального погружения.',
          specs: [
            { label: 'Производитель', value: 'NVIDIA'   },
            { label: 'Объём памяти',  value: '12 ГБ'    },
            { label: 'Тип памяти',    value: 'GDDR6X'   },
            { label: 'Частота boost', value: '2475 МГц' },
          ],
        },
        {
          id: 9, name: 'NVIDIA MSI GeForce RTX 3060 VENTUS',
          category: 'ВИДЕОКАРТЫ', catId: 'gpu',
          price: 23990, oldPrice: null, discount: null, image: 'images/NVIDIA MSI GeForce RTX 3060 VENTUS 2X OC (LHR).webp',
          description: 'NVIDIA GeForce RTX 3060 на архитектуре Ada Lovelace. DLSS 3 и трассировка лучей для максимального погружения.',
          specs: [
            { label: 'Производитель', value: 'NVIDIA'   },
            { label: 'Объём памяти',  value: '6 ГБ'    },
            { label: 'Тип памяти',    value: 'GDDR6'   },
            { label: 'Частота boost', value: '14000 МГц' },
          ],
        },
        {
          id: 10, name: 'NVIDIA GeForce RTX 5050 GAMING',
          category: 'ВИДЕОКАРТЫ', catId: 'gpu',
          price: 36370, oldPrice: null, discount: null, image: 'images/NVIDIA GeForce RTX 5050 GAMING Twin Edge OC White Edition.webp',
          description: 'NVIDIA GeForce RTX 5050 на архитектуре Ada Lovelace. DLSS 4 и трассировка лучей для максимального погружения.',
          specs: [
            { label: 'Производитель', value: 'NVIDIA'   },
            { label: 'Объём памяти',  value: '8 ГБ'    },
            { label: 'Тип памяти',    value: 'GDDR6'   },
            { label: 'Частота boost', value: '20000 МГц' },
          ],
        },
        {
          id: 11, name: 'NVIDIA GeForce RTX 5060 Ti AORUS',
          category: 'ВИДЕОКАРТЫ', catId: 'gpu',
          price: 44530, oldPrice: null, discount: null, image: 'images/NVIDIA GIGABYTE GeForce RTX 5060 Ti AORUS ELITE.webp',
          description: 'NVIDIA GeForce RTX 5060 TI на архитектуре Ada Lovelace. DLSS 4 и трассировка лучей для максимального погружения.',
          specs: [
            { label: 'Производитель', value: 'NVIDIA'   },
            { label: 'Объём памяти',  value: '8 ГБ'    },
            { label: 'Тип памяти',    value: 'GDDR7'   },
            { label: 'Частота boost', value: '28000 МГц' },
          ],
        },
        {
          id: 12, name: 'NVIDIAGeForce RTX 5070 Ti GamingPro',
          category: 'ВИДЕОКАРТЫ', catId: 'gpu',
          price: 72990, oldPrice: null, discount: null, image: 'images/NVIDIA Palit GeForce RTX 5070 Ti GamingPro OC V1.webp',
          description: 'NVIDIA GeForce RTX 5070 TI на архитектуре Ada Lovelace. DLSS 4 и трассировка лучей для максимального погружения.',
          specs: [
            { label: 'Производитель', value: 'NVIDIA'   },
            { label: 'Объём памяти',  value: '12 ГБ'    },
            { label: 'Тип памяти',    value: 'GDDR7'   },
            { label: 'Частота boost', value: '28000 МГц' },
          ],
        },
        {
          id: 13, name: 'Intel Core i9-14900K BOX',
          category: 'ПРОЦЕССОРЫ', catId: 'cpu',
          price: 44990, oldPrice: null, discount: null, image: 'images/Intel Core i9-14900K1.webp',
          description: 'Intel Core i9-14900K — флагманский процессор для геймеров и профессионалов с 24 ядрами.',
          specs: [
            { label: 'Производитель', value: 'Intel'   },
            { label: 'Ядер',          value: '24'      },
            { label: 'Потоков',       value: '32'      },
            { label: 'Частота boost', value: '6.0 ГГц' },
          ],
        },
        {
          id: 14, name: 'Intel Core i7-14790F BOX',
          category: 'ПРОЦЕССОРЫ', catId: 'cpu',
          price: 33990, oldPrice: null, discount: null, image: 'images/Intel Core i7-14790F BOX.webp',
          description: 'Intel Core i9-14900K — флагманский процессор для геймеров и профессионалов с 24 ядрами.',
          specs: [
            { label: 'Производитель', value: 'Intel'   },
            { label: 'Ядер',          value: '16'      },
            { label: 'Потоков',       value: '32'      },
            { label: 'Частота boost', value: '2.1 ГГц' },
          ],
        },
        {
          id: 15, name: 'Intel Core i7-14700F BOX',
          category: 'ПРОЦЕССОРЫ', catId: 'cpu',
          price: 44990, oldPrice: null, discount: null, image: 'images/Intel Core i7-14700F BOX.webp',
          description: 'Intel Core i9-14900K — флагманский процессор для геймеров и профессионалов с 24 ядрами.',
          specs: [
            { label: 'Производитель', value: 'Intel'   },
            { label: 'Ядер',          value: '24'      },
            { label: 'Потоков',       value: '32'      },
            { label: 'Частота boost', value: '6.0 ГГц' },
          ],
        },
        {
          id: 16, name: 'Intel Core i7-13700F BOX',
          category: 'ПРОЦЕССОРЫ', catId: 'cpu',
          price: 44990, oldPrice: null, discount: null, image: 'images/Intel Core i7-13700F BOX.webp',
          description: 'Intel Core i9-14900K — флагманский процессор для геймеров и профессионалов с 24 ядрами.',
          specs: [
            { label: 'Производитель', value: 'Intel'   },
            { label: 'Ядер',          value: '24'      },
            { label: 'Потоков',       value: '32'      },
            { label: 'Частота boost', value: '6.0 ГГц' },
          ],
        },
        {
          id: 17, name: 'Intel Core i5-14600K BOX',
          category: 'ПРОЦЕССОРЫ', catId: 'cpu',
          price: 44990, oldPrice: null, discount: null, image: 'images/Intel Core i5-14600K BOX.webp',
          description: 'Intel Core i9-14900K — флагманский процессор для геймеров и профессионалов с 24 ядрами.',
          specs: [
            { label: 'Производитель', value: 'Intel'   },
            { label: 'Ядер',          value: '24'      },
            { label: 'Потоков',       value: '32'      },
            { label: 'Частота boost', value: '6.0 ГГц' },
          ],
        },
        {
          id: 18, name: 'Intel Core i5-12600 BOX',
          category: 'ПРОЦЕССОРЫ', catId: 'cpu',
          price: 44990, oldPrice: null, discount: null, image: 'images/Intel Core i5-12600 BOX.webp',
          description: 'Intel Core i9-14900K — флагманский процессор для геймеров и профессионалов с 24 ядрами.',
          specs: [
            { label: 'Производитель', value: 'Intel'   },
            { label: 'Ядер',          value: '24'      },
            { label: 'Потоков',       value: '32'      },
            { label: 'Частота boost', value: '6.0 ГГц' },
          ],
        },
        {
          id: 19, name: 'AMD Ryzen 7 8700G BOX',
          category: 'ПРОЦЕССОРЫ', catId: 'cpu',
          price: 34990, oldPrice: null, discount: null, image: 'images/Процессор AMD Ryzen 7 8700G BOX.webp',
          description: 'AMD Ryzen 7 7800X3D — лучший игровой процессор с технологией 3D V-Cache.',
          specs: [
            { label: 'Производитель', value: 'AMD'     },
            { label: 'Ядер',          value: '8'       },
            { label: 'Потоков',       value: '16'      },
            { label: 'Частота boost', value: '5.0 ГГц' },
          ],
        },
        {
          id: 20, name: 'AMD Ryzen 5 8600G BOX',
          category: 'ПРОЦЕССОРЫ', catId: 'cpu',
          price: 44990, oldPrice: null, discount: null, image: 'images/Процессор AMD Ryzen 5 8600G BOX.webp',
          description: 'Intel Core i9-14900K — флагманский процессор для геймеров и профессионалов с 24 ядрами.',
          specs: [
            { label: 'Производитель', value: 'AMD'   },
            { label: 'Ядер',          value: '24'      },
            { label: 'Потоков',       value: '32'      },
            { label: 'Частота boost', value: '6.0 ГГц' },
          ],
        },
        {
          id: 21, name: 'AMD Ryzen 5 5600G BOX',
          category: 'ПРОЦЕССОРЫ', catId: 'cpu',
          price: 44990, oldPrice: null, discount: null, image: 'images/Процессор AMD Ryzen 5 5600G BOX.webp',
          description: 'Intel Core i9-14900K — флагманский процессор для геймеров и профессионалов с 24 ядрами.',
          specs: [
            { label: 'Производитель', value: 'AMD'   },
            { label: 'Ядер',          value: '24'      },
            { label: 'Потоков',       value: '32'      },
            { label: 'Частота boost', value: '6.0 ГГц' },
          ],
        },
        {
          id: 22, name: 'AMD Ryzen 7 7800X3D BOX',
          category: 'ПРОЦЕССОРЫ', catId: 'cpu',
          price: 44990, oldPrice: null, discount: null, image: 'images/Процессор AMD Ryzen 7 7800X3D box.jpg',
          description: 'Intel Core i9-14900K — флагманский процессор для геймеров и профессионалов с 24 ядрами.',
          specs: [
            { label: 'Производитель', value: 'AMD'   },
            { label: 'Ядер',          value: '24'      },
            { label: 'Потоков',       value: '32'      },
            { label: 'Частота boost', value: '6.0 ГГц' },
          ],
        },
        {
          id: 23, name: 'AMD Ryzen 5 5600GT BOX',
          category: 'ПРОЦЕССОРЫ', catId: 'cpu',
          price: 44990, oldPrice: null, discount: null, image: 'images/Процессор AMD Ryzen 5 5600GT BOX.webp',
          description: 'Intel Core i9-14900K — флагманский процессор для геймеров и профессионалов с 24 ядрами.',
          specs: [
            { label: 'Производитель', value: 'AMD'   },
            { label: 'Ядер',          value: '24'      },
            { label: 'Потоков',       value: '32'      },
            { label: 'Частота boost', value: '6.0 ГГц' },
          ],
        },
        {
          id: 24, name: 'AMD Ryzen 9 9950X3D BOX',
          category: 'ПРОЦЕССОРЫ', catId: 'cpu',
          price: 86490, oldPrice: null, discount: null, image: 'images/Процессор AMD Ryzen 9 9950X3D BOX.png.webp',
          description: 'Intel Core i9-14900K — флагманский процессор для геймеров и профессионалов с 24 ядрами.',
          specs: [
            { label: 'Производитель', value: 'AMD'   },
            { label: 'Ядер',          value: '16'      },
            { label: 'Потоков',       value: '32'      },
            { label: 'Частота boost', value: '5.7 ГГц' },
          ],
        },
        {
          id: 25, name: 'Corsair Vengeance DDR5 32GB',
          category: 'ОПЕРАТИВНАЯ ПАМЯТЬ', catId: 'ram',
          price: 12490, oldPrice: null, discount: null, image: '',
          description: 'Corsair Vengeance DDR5 32GB с поддержкой XMP 3.0 для новейших платформ.',
          specs: [
            { label: 'Производитель', value: 'Corsair'  },
            { label: 'Объём',         value: '32 ГБ'    },
            { label: 'Тип',           value: 'DDR5'     },
            { label: 'Частота',       value: '6000 МГц' },
          ],
        },
        {
          id: 26, name: 'Kingston Fury Beast DDR4 16GB',
          category: 'ОПЕРАТИВНАЯ ПАМЯТЬ', catId: 'ram',
          price: 4990, oldPrice: null, discount: null, image: '',
          description: 'Kingston Fury Beast DDR4 16GB — надёжная память для игровых систем.',
          specs: [
            { label: 'Производитель', value: 'Kingston' },
            { label: 'Объём',         value: '16 ГБ'    },
            { label: 'Тип',           value: 'DDR4'     },
            { label: 'Частота',       value: '3200 МГц' },
          ],
        },
      ],
    }
  },

  computed: {
    total() { return this.cart.reduce((s, i) => s + i.price, 0) },
    filtered() {
      if (this.selCat === 'all') return this.products
      return this.products.filter(p => p.catId === this.selCat)
    },
  },

  methods: {
    openProduct(p) {
      this.current = p
      this.showCart = false
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    addCart(p) {
      this.cart.push(p)
      this.showCart = true
    },
    submitAuth() {
      this.authError = ''
      if (!this.form.email || !this.form.password) {
        this.authError = 'Заполните все поля'; return
      }


      
      this.user = { name: this.form.email.split('@')[0], email: this.form.email }
      this.showAuth = false
      this.form = { email: '', password: '' }
    },
  },
}).mount('#app')
