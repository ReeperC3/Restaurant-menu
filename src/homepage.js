import MainImg from './mias.png';
import './style.css';

const loadHomePage = () => {
  const content = document.getElementById('content')

  const title = document.createElement('h1')
  const image = new Image()
  const text = document.createElement('div')

  title.textContent = 'Welcome to Mammy Mia\'s'
  image.src = MainImg;
  text.textContent = 'Welcome to Mammy Mia\'s restaurant. We hope you will enjoy your meal!'
  
  title.classList.add('head')
  image.classList.add('main-img')
  text.classList.add('main-text')

  content.appendChild(title)
  content.appendChild(image)
  content.appendChild(text)
}

export { loadHomePage };
