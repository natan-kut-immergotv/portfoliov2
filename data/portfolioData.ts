export const portfolioData = {
  en: {
    hero: {
      greeting: "Hi, I'm",
      name: 'Natan Kutnowski',
      role: 'Frontend Developer',
      description:
        'I create modern, fast and accessible web experiences with React, Next.js and TypeScript, and cross-platform native mobile apps with React Native, Expo and Zustand.',
      cta: 'View My Work',
      ctaSecondary: 'Contact Me',
    },
    about: {
      title: 'About Me',
      bio: [
        "I've been building stuff on the web for over 3 years—dashboards, e‑commerce, task managers, and lately mobile apps with React Native. React, Next.js and TypeScript are my go-to; I care about things loading fast and not breaking on different screens.",
        "I like picking up new tools and actually shipping with them. Off the keyboard I read a lot of tech stuff and tinker with side projects; the rest of the time I'm probably recharging with a coffee or a walk.",
      ],
    },
    skills: {
      title: 'Skills & Technologies',
      categories: [
        {
          name: 'Frontend',
          items: [
            'React',
            'Next.js',
            'TypeScript',
            'Tailwind CSS',
            'Framer Motion',
          ],
        },
        {
          name: 'State Management',
          items: ['Zustand', 'Redux', 'React Query', 'Context API'],
        },
        {
          name: 'Mobile',
          items: [
            'React Native',
            'Expo',
            'TypeScript',
            'React Navigation',
            'AsyncStorage',
          ],
        },
        {
          name: 'Testing',
          items: ['Jest', 'React Testing Library', 'Vitest'],
        },
        {
          name: 'APIs & Integration',
          items: ['REST', 'Fetch', 'OpenWeather API', 'Stripe'],
        },
        {
          name: 'Tools & Others',
          items: ['Git', 'Figma', 'Vercel', 'ESLint', 'Prettier'],
        },
      ],
    },
    projects: [
      {
        id: 1,
        slug: 'ecommerce-platform',
        title: 'E-Commerce Platform',
        description:
          'Full-featured online store with cart, checkout, and payment integration using Stripe. Built with Next.js 14 and server actions.',
        fullDescription:
          'This e-commerce platform is a comprehensive solution for online retail, featuring a modern shopping cart, secure checkout process, and seamless Stripe payment integration. Built with Next.js 14 App Router and server actions for optimal performance and SEO. The platform includes inventory management, user authentication, order tracking, and a responsive design that works perfectly on all devices.',
        tags: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind'],
        image: '/projects/ecommerce.svg',
        github: 'https://github.com/example/ecommerce',
        demo: 'https://ecommerce-demo.vercel.app',
      },
      {
        id: 3,
        slug: 'weather-dashboard',
        title: 'Weather Dashboard',
        description:
          'Real-time weather visualization with forecasts, geolocation, and multi-language support. Built with Next.js 14 and OpenWeather API.',
        fullDescription:
          'An interactive weather dashboard that provides real-time weather data, 5-day forecasts, and beautiful visualizations. Powered by the OpenWeather API, it features geolocation support, city search, hourly temperature trends with interactive charts, and multi-language support (EN/ES). The dashboard includes dark mode, responsive design, and displays detailed weather metrics like humidity, wind speed, pressure, and cloudiness. Built with Next.js 14, TypeScript, Tailwind CSS, and Recharts for data visualization.',
        tags: ['Next.js', 'TypeScript', 'Recharts', 'OpenWeather API'],
        image: '/projects/weather-dashboard-light-mode.svg',
        github: 'https://github.com/natan-kut-immergotv/weather-app',
        demo: 'https://weather-lymwdsfkj-natankuts-projects.vercel.app',
      },
      {
        id: 4,
        slug: 'task-manager',
        title: 'TaskFlow - Task Manager',
        description:
          'Collaborative task management application with drag & drop, real-time updates, and team collaboration features. Built with Next.js 14 and Zustand.',
        fullDescription:
          'A modern collaborative task management application featuring an intuitive Kanban board with drag & drop functionality. Built with Next.js 14, TypeScript, and Zustand for state management. Includes real-time collaboration features, user assignments, task comments, priority levels, due dates, and tags. The app features a beautiful responsive design with dark mode support, smooth animations using Framer Motion, and drag & drop interactions powered by @dnd-kit. Perfect for teams looking to streamline their workflow and boost productivity.',
        tags: ['Next.js', 'TypeScript', 'Zustand', '@dnd-kit'],
        image: '/projects/task-manager-dashboard.svg',
        github: 'https://github.com/natan-kut-immergotv/task-management-app',
        demo: 'https://task-management-app-natankuts-projects.vercel.app',
      },
    ],
    reactNativeApps: {
      title: 'React Native Apps',
      subtitle: 'Mobile applications built with React Native and Expo.',
      items: [
        {
          id: 1,
          title: 'Pokedex',
          description:
            'Pokémon catalog app with list view, search, and detail screens. Consumes the PokeAPI to display Pokemon data. Built with React Native and Expo.',
          videoId: 'LYkh-Adx5iM',
          tags: ['React Native', 'Expo', 'TypeScript', 'PokeAPI', 'Mobile'],
        },
        {
          id: 2,
          title: 'Billetera MP - Wallet App',
          description:
            'Digital wallet app with transfers between contacts, search by name or alias, amount input, and confirmation flow. Built with React Native, Expo and Zustand.',
          videoId: 'V3EIUzx257c',
          tags: ['React Native', 'Expo', 'TypeScript', 'Zustand', 'Mobile'],
        },
        {
          id: 3,
          title: 'Food Delivery App',
          description:
            'Food delivery app (Rappi/Uber Eats style) with restaurant catalog, cart, checkout, order confirmation, and order history. Built with React Native, Expo, Zustand and AsyncStorage.',
          videoId: 'q4-PsdZhr4w',
          tags: ['React Native', 'Expo', 'TypeScript', 'Zustand', 'Mobile'],
        },
      ],
    },
    contact: {
      title: 'Get In Touch',
      subtitle: "Have a project in mind? Let's work together!",
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        submit: 'Send Message',
        success: 'Message sent successfully!',
        error: 'Please fill all fields correctly.',
      },
      social: {
        github: 'https://github.com/natan-kut-immergotv',
        linkedin: 'https://www.linkedin.com/in/natan-kutnowski/',
        email: 'nkutnowski87@gmail.com',
      },
    },
  },
  es: {
    hero: {
      greeting: 'Hola, soy',
      name: 'Natan Kutnowski',
      role: 'Desarrollador Frontend',
      description:
        'Creo experiencias web modernas, rápidas y accesibles con React, Next.js y TypeScript, y aplicaciones móviles nativas multiplataforma con React Native, Expo y Zustand.',
      cta: 'Ver Mi Trabajo',
      ctaSecondary: 'Contacto',
    },
    about: {
      title: 'Sobre Mí',
      bio: [
        'Hace más de 3 años que armo cosas en la web: dashboards, e‑commerce, gestores de tareas y últimamente apps móviles con React Native. Me muevo sobre todo con React, Next.js y TypeScript; me importa que cargue rápido y que no se rompa en ningún dispositivo.',
        'Me gusta sumar herramientas nuevas y llevarlas hasta algo que se use. Fuera del teclado leo bastante de tech y meto mano en proyectos propios; el resto del tiempo seguramente estoy tomando un café o dando una vuelta.',
      ],
    },
    skills: {
      title: 'Habilidades & Tecnologías',
      categories: [
        {
          name: 'Frontend',
          items: [
            'React',
            'Next.js',
            'TypeScript',
            'Tailwind CSS',
            'Framer Motion',
          ],
        },
        {
          name: 'Gestión de Estado',
          items: ['Zustand', 'Redux', 'React Query', 'Context API'],
        },
        {
          name: 'Mobile',
          items: [
            'React Native',
            'Expo',
            'TypeScript',
            'React Navigation',
            'AsyncStorage',
          ],
        },
        {
          name: 'Testing',
          items: ['Jest', 'React Testing Library', 'Vitest'],
        },
        {
          name: 'APIs e Integración',
          items: ['REST', 'Fetch', 'OpenWeather API', 'Stripe'],
        },
        {
          name: 'Herramientas & Otros',
          items: ['Git', 'Figma', 'Vercel', 'ESLint', 'Prettier'],
        },
      ],
    },
    projects: [
      {
        id: 1,
        slug: 'ecommerce-platform',
        title: 'Plataforma E-Commerce',
        description:
          'Tienda online completa con carrito, checkout e integración de pagos usando Stripe. Construida con Next.js 14 y server actions.',
        fullDescription:
          'Esta plataforma de e-commerce es una solución integral para el comercio online, con un carrito de compras moderno, proceso de checkout seguro e integración perfecta con Stripe. Construida con Next.js 14 App Router y server actions para rendimiento y SEO óptimos. La plataforma incluye gestión de inventario, autenticación de usuarios, seguimiento de pedidos y un diseño responsive que funciona perfectamente en todos los dispositivos.',
        tags: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind'],
        image: '/projects/ecommerce.svg',
        github: 'https://github.com/example/ecommerce',
        demo: 'https://ecommerce-demo.vercel.app',
      },
      {
        id: 3,
        slug: 'weather-dashboard',
        title: 'Dashboard de Clima',
        description:
          'Visualización de clima en tiempo real con pronósticos, geolocalización y soporte multi-idioma. Construido con Next.js 14 y OpenWeather API.',
        fullDescription:
          'Un dashboard interactivo de clima que proporciona datos meteorológicos en tiempo real, pronósticos de 5 días y hermosas visualizaciones. Potenciado por OpenWeather API, incluye soporte de geolocalización, búsqueda de ciudades, tendencias de temperatura horaria con gráficos interactivos y soporte multi-idioma (EN/ES). El dashboard incluye modo oscuro, diseño responsive y muestra métricas detalladas como humedad, velocidad del viento, presión y nubosidad. Construido con Next.js 14, TypeScript, Tailwind CSS y Recharts para visualización de datos.',
        tags: ['Next.js', 'TypeScript', 'Recharts', 'OpenWeather API'],
        image: '/projects/weather-dashboard-light-mode.svg',
        github: 'https://github.com/natan-kut-immergotv/weather-app',
        demo: 'https://weather-lymwdsfkj-natankuts-projects.vercel.app',
      },
      {
        id: 4,
        slug: 'task-manager',
        title: 'TaskFlow - Gestor de Tareas',
        description:
          'Aplicación colaborativa de gestión de tareas con drag & drop, actualizaciones en tiempo real y características de colaboración en equipo. Construido con Next.js 14 y Zustand.',
        fullDescription:
          'Una aplicación moderna colaborativa de gestión de tareas con un tablero Kanban intuitivo y funcionalidad de arrastrar y soltar. Construido con Next.js 14, TypeScript y Zustand para gestión de estado. Incluye características de colaboración en tiempo real, asignación de usuarios, comentarios en tareas, niveles de prioridad, fechas de vencimiento y etiquetas. La app cuenta con un hermoso diseño responsive con soporte para modo oscuro, animaciones suaves usando Framer Motion e interacciones de drag & drop potenciadas por @dnd-kit. Perfecto para equipos que buscan optimizar su flujo de trabajo y aumentar la productividad.',
        tags: ['Next.js', 'TypeScript', 'Zustand', '@dnd-kit'],
        image: '/projects/task-manager-dashboard.svg',
        github: 'https://github.com/natan-kut-immergotv/task-management-app',
        demo: 'https://task-management-app-natankuts-projects.vercel.app',
      },
    ],
    reactNativeApps: {
      title: 'Apps React Native',
      subtitle: 'Aplicaciones móviles construidas con React Native y Expo.',
      items: [
        {
          id: 1,
          title: 'Pokedex',
          description:
            'App catálogo de Pokémon con lista, búsqueda y pantallas de detalle. Consume la PokeAPI para mostrar datos de Pokemon. Construida con React Native y Expo.',
          videoId: 'LYkh-Adx5iM',
          tags: ['React Native', 'Expo', 'TypeScript', 'PokeAPI', 'Mobile'],
        },
        {
          id: 2,
          title: 'Billetera MP - App de Billetera',
          description:
            'App de billetera digital con transferencias entre contactos, búsqueda por nombre o alias, ingreso de monto y flujo de confirmación. Construida con React Native, Expo y Zustand.',
          videoId: 'V3EIUzx257c',
          tags: ['React Native', 'Expo', 'TypeScript', 'Zustand', 'Mobile'],
        },
        {
          id: 3,
          title: 'App de Delivery de Comida',
          description:
            'App de delivery (estilo Rappi/Uber Eats) con catálogo de restaurantes, carrito, checkout, confirmación y historial de pedidos. Construida con React Native, Expo, Zustand y AsyncStorage.',
          videoId: 'q4-PsdZhr4w',
          tags: ['React Native', 'Expo', 'TypeScript', 'Zustand', 'Mobile'],
        },
      ],
    },
    contact: {
      title: 'Contacto',
      subtitle: '¿Tienes un proyecto en mente? ¡Trabajemos juntos!',
      form: {
        name: 'Nombre',
        email: 'Email',
        message: 'Mensaje',
        submit: 'Enviar Mensaje',
        success: '¡Mensaje enviado con éxito!',
        error: 'Por favor completa todos los campos correctamente.',
      },
      social: {
        github: 'https://github.com/natan-kut-immergotv',
        linkedin: 'https://www.linkedin.com/in/natan-kutnowski/',
        email: 'nkutnowski87@gmail.com',
      },
    },
  },
}
