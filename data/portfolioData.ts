export const portfolioData = {
  en: {
    hero: {
      greeting: "Hi, I'm",
      name: 'Natan Kutnowski',
      role: 'Frontend Developer',
      description:
        'I create modern, fast and accessible web experiences with React, Next.js and TypeScript.',
      cta: 'View My Work',
      ctaSecondary: 'Contact Me',
    },
    about: {
      title: 'About Me',
      bio: [
        "I'm a passionate frontend developer with over 3 years of experience building modern web applications. I specialize in React, Next.js, and TypeScript, creating scalable and performant solutions.",
        "I love learning new technologies and sharing knowledge with the community. When I'm not coding, you can find me reading tech blogs, contributing to open source, or enjoying a good coffee.",
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
        id: 2,
        slug: 'task-management-app',
        title: 'Task Management App',
        description:
          'Collaborative task manager with real-time updates, drag-and-drop, and team features. State managed with Zustand.',
        fullDescription:
          'A powerful collaborative task management application designed for teams. Features real-time synchronization using Firebase, intuitive drag-and-drop functionality powered by React DnD, and efficient state management with Zustand. The app includes project boards, task assignments, due dates, comments, and file attachments. Perfect for agile teams looking to streamline their workflow.',
        tags: ['React', 'Zustand', 'Firebase', 'Framer Motion'],
        image: '/projects/tasks.svg',
        github: 'https://github.com/example/tasks',
        demo: 'https://tasks-demo.vercel.app',
      },
      {
        id: 3,
        slug: 'weather-dashboard',
        title: 'Weather Dashboard',
        description:
          'Real-time weather visualization with forecasts, geolocation, and multi-language support. Built with Next.js 14 and OpenWeather API.',
        fullDescription:
          'An interactive weather dashboard that provides real-time weather data, 5-day forecasts, and beautiful visualizations. Powered by the OpenWeather API, it features geolocation support, city search, hourly temperature trends with interactive charts, and multi-language support (EN/ES). The dashboard includes dark mode, responsive design, and displays detailed weather metrics like humidity, wind speed, pressure, and cloudiness.',
        tags: ['Next.js', 'TypeScript', 'Recharts', 'OpenWeather API'],
        image: '/projects/weather.svg',
        github: 'https://github.com/natan-kut-immergotv/weather-app',
        demo: 'https://weather-aq92605mk-natankuts-projects.vercel.app',
      },
    ],
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
        github: 'https://github.com/natankutnowski',
        linkedin: 'https://linkedin.com/in/natankutnowski',
      },
    },
  },
  es: {
    hero: {
      greeting: 'Hola, soy',
      name: 'Natan Kutnowski',
      role: 'Desarrollador Frontend',
      description:
        'Creo experiencias web modernas, rápidas y accesibles con React, Next.js y TypeScript.',
      cta: 'Ver Mi Trabajo',
      ctaSecondary: 'Contacto',
    },
    about: {
      title: 'Sobre Mí',
      bio: [
        'Soy un desarrollador frontend apasionado con más de 3 años de experiencia construyendo aplicaciones web modernas. Me especializo en React, Next.js y TypeScript, creando soluciones escalables y performantes.',
        'Me encanta aprender nuevas tecnologías y compartir conocimiento con la comunidad. Cuando no estoy programando, puedes encontrarme leyendo blogs de tecnología, contribuyendo a código abierto o disfrutando un buen café.',
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
        id: 2,
        slug: 'task-management-app',
        title: 'App de Gestión de Tareas',
        description:
          'Gestor de tareas colaborativo con actualizaciones en tiempo real, drag-and-drop y funciones de equipo. Estado manejado con Zustand.',
        fullDescription:
          'Una poderosa aplicación colaborativa de gestión de tareas diseñada para equipos. Incluye sincronización en tiempo real usando Firebase, funcionalidad intuitiva de arrastrar y soltar con React DnD, y gestión eficiente del estado con Zustand. La app incluye tableros de proyectos, asignación de tareas, fechas límite, comentarios y adjuntos de archivos. Perfecta para equipos ágiles que buscan optimizar su flujo de trabajo.',
        tags: ['React', 'Zustand', 'Firebase', 'Framer Motion'],
        image: '/projects/tasks.svg',
        github: 'https://github.com/example/tasks',
        demo: 'https://tasks-demo.vercel.app',
      },
      {
        id: 3,
        slug: 'weather-dashboard',
        title: 'Dashboard de Clima',
        description:
          'Visualización de clima en tiempo real con pronósticos, geolocalización y soporte multi-idioma. Construido con Next.js 14 y OpenWeather API.',
        fullDescription:
          'Un dashboard interactivo de clima que proporciona datos meteorológicos en tiempo real, pronósticos de 5 días y hermosas visualizaciones. Potenciado por OpenWeather API, incluye soporte de geolocalización, búsqueda de ciudades, tendencias de temperatura horaria con gráficos interactivos y soporte multi-idioma (EN/ES). El dashboard incluye modo oscuro, diseño responsive y muestra métricas detalladas como humedad, velocidad del viento, presión y nubosidad.',
        tags: ['Next.js', 'TypeScript', 'Recharts', 'OpenWeather API'],
        image: '/projects/weather.svg',
        github: 'https://github.com/natan-kut-immergotv/weather-app',
        demo: 'https://weather-aq92605mk-natankuts-projects.vercel.app',
      },
    ],
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
        github: 'https://github.com/natankutnowski',
        linkedin: 'https://linkedin.com/in/natankutnowski',
      },
    },
  },
}
