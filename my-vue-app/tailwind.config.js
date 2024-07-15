/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
   
    extend: {
      screens: {
        'tablet': '640px',  
        'laptop': '800px',
        'desktop': '1280px',
      },
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui'],
        'serif': ['ui-serif', 'Georgia'],
        'playwrite': ['Playwrite PE']
      },
      backgroundImage: {
        'custom-bg': "url('/src/assets/bg2.jpg')",
      },
      backgroundColor:{
        'blue':'#0d94c4',
        'white':'#ffffff',
        'black':'#000000',
        'rose':'#ff7882',
        'beige':'	#f7c57a',
        'somon':'#ffbbaf',
        'ciel':'	#96dbdb',
        'orange':'#ff9900',
        'red':'#c2050b',
        'sugar':'#fff5ec',
        'yellow':'#ffe79c',
        'purple':'#a178a1',
        'light-purple':'#eed6ee',
        'pink':'#f7b4d6',
        'light-brown' : '#DBA95F',
        'brown':'#b08645',
      },
      borderColor:{
          'blue':'#0d94c4',
          'white':'#ffffff',
          'black':'#000000',
          'rose':'#ff7882',
          'beige':'	#f7c57a',
          'somon':'#ffbbaf',
          'ciel':'	#96dbdb',
          'orange':'#ff9900',
          'red':'#c2050b',
          'sugar':'#fff5ec',
          'yellow':'#ffe79c',
          'purple':'#a178a1',
          'light-purple':'#eed6ee',
          'pink':'#f7b4d6',
          'light-brown' : '#DBA95F',
          'brown':'#b08645',
        },
        textColor:{
            'blue':'#0d94c4',
            'white':'#ffffff',
            'black':'#000000',
            'rose':'#ff7882',
            'beige':'	#f7c57a',
            'somon':'#ffbbaf',
            'ciel':'	#96dbdb',
            'orange':'#ff9900',
            'red':'#c2050b',
            'sugar':'#fff5ec',
            'yellow':'#ffe79c',
            'purple':'#a178a1',
            'light-purple':'#eed6ee',
            'pink':'#f7b4d6',
            'light-brown' : '#DBA95F',
            'brown':'#b08645',
          
        }
      
    },
  },
  plugins: [],
}
