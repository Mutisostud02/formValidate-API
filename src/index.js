import './styles.css';
import './styles.css';
import { docContent } from './home';

    const body = document.querySelector('body');
    const intro = document.querySelector('.welcome');
    intro.innerHTML = "Welcome To Our Form Validation Project";
    intro.style.fontSize = "2rem";
    intro.style.color = "green";
    body.appendChild(intro);
    const form = document.querySelector('form');
    body.appendChild(form)
    const button = document.querySelector('button');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password')
    const demo2 = document.querySelector('.demo2')

    const emailError = document.querySelector('.emailError')
    
    
    function formValid(element, message) {
        if(!element.checkValidity()) {
            message.innerHTML = element.validationMessage;
            message.setAttribute('style', 'color:red; display:block; font-size:0.8rem; margin:0 0 0 23%;');
            button.setAttribute('style', 'margin:2rem auto;');
        } else {
            message.innerHTML = "great!";
            message.setAttribute('style', 'color:green; display:block; font-size:0.8rem; margin:0 0 0 23%;');
            button.setAttribute('style', 'margin:2rem auto;');
        }
    }
    

 let svg, img, searchInp;
    button.addEventListener('click', function(event) {
        event.preventDefault();
        email.addEventListener('input', () => {
            formValid(email,emailError)
        })
        password.addEventListener('input', () => {
        formValid(password,demo2);
        })

    if (password.checkValidity()  && email.checkValidity()) {
           const alertNow = alert('Login Success!')
           alertNow;
            const {img: generatedImg ,searchInput: generatedInput,svg : generatedSvg} = docContent();
            svg = generatedSvg;
            img = generatedImg;
            searchInp = generatedInput;
            intro.innerHTML = "Search for your Favorite Gifs";

            form.remove()

            click();
        } else {
            alert('Incorrect password or email');
        }
        
    })                      
    
    
    //form Validate Functions
    function click() {

      const svgClick = svg.addEventListener('click', () => {
        img.innerHTML = ' ';
      
        async function getGifs() {
          try {
            const response = await fetch(
              `https://api.giphy.com/v1/gifs/search?api_key=MVyTaUBIpcZn7pon7F7ZDUgZDNS6XHxW&q=${searchInp.value}&limit=20&offset=0&rating=g&lang=en`,
              {
                mode: 'cors',
              }
            );
            const getData = await response.json();
            getData.data.forEach(data => {
              const gifImg = document.createElement('img');
              gifImg.setAttribute('style', 'width:19vw;height:auto;object-fit:cover;')
              gifImg.src = data.images.original.url;
              img.appendChild(gifImg);
              return gifImg;
            });
          }
          catch {
            err => {
              console.error(err + " " + ":here's the error")
            }
          }
        }
        getGifs()
      
      
      
        if (!svgClick) {
          svg.setAttribute('style', 'position:relative;top:0.3rem;');
        } else {
          svg.setAttribute(
            'style',
            'position:relative;top:0.3rem;transform:scale(1.2);'
          );
        }
      })
      return svgClick;
    }