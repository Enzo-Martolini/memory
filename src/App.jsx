import React from 'react';
import './App.css'; // Assurez-vous d'importer votre fichier CSS pour définir les styles

const imagesArray = [
  { id: 0, src: "./public/trickstar_one.png", value: 8 },
  { id: 1, src: "./public/trickstar_two.png", value: 9 },
  { id: 2, src: "./public/trickstar_three.png", value: 10 },
  { id: 3, src: "./public/trickstar_four.png", value: 11 },
  { id: 4, src: "./public/trickstar_five.png", value: 12 },
  { id: 5, src: "./public/trickstar_six.png", value: 13 },
  { id: 6, src: "./public/trickstar_seven.png", value: 14 },
  { id: 7, src: "./public/trickstar_height.png", value: 15 },
  { id: 8, src: "./public/trickstar_one.png", value: 0 },
  { id: 9, src: "./public/trickstar_two.png", value: 1 },
  { id: 10, src: "./public/trickstar_three.png", value: 2 },
  { id: 11, src: "./public/trickstar_four.png", value: 3 },
  { id: 12, src: "./public/trickstar_five.png", value: 4 },
  { id: 13, src: "./public/trickstar_six.png", value: 5 },
  { id: 14, src: "./public/trickstar_seven.png", value: 6 },
  { id: 15, src: "./public/trickstar_height.png", value: 7 }
];


function shuffleImagesArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray; 
}



function Card () {

  const shuffledImages = shuffleImagesArray(imagesArray);
  // console.log(shuffledImages);
  let clickedImages = [];
  let activeImage = [];
  const title_win = document.getElementById("title_win")
  let cardFinded=0;


  function handleClick (id, value){
    const image = document.getElementById(id)
    image.src = imagesArray[id].src
    activeImage.push(image);
    image.classList.add("active")
    clickedImages.push({id, value})
    // console.log('id')
    // console.log(id)
    // console.log('handleClick')
    // console.log(clickedImages[0].id)
    // console.log(clickedImages[1].value)

    const imageOne = document.getElementById(clickedImages[0].id)
    const imageTwo = document.getElementById(clickedImages[1].id)


    if (clickedImages.length === 2) {
      // console.log("premiere condition ok")
      if (clickedImages[0].id === clickedImages[1].value)
      {
        console.log ('même pair')
        cardFinded ++;
        clickedImages = [];
        console.log(clickedImages);
        setTimeout(() => {
          activeImage.map((image) => image.classList.remove("active"));
        }, 1000);       
        setTimeout(() => {
          imageOne.classList.add("checked");
          imageTwo.classList.add("checked");
        }, 500);
        console.log ("carte trouvées =" + cardFinded)
      } else {
        console.log('pas la même')
        clickedImages = [];
        console.log(clickedImages);
        setTimeout(() => {
          activeImage.map((image) => image.classList.remove("active"));
        }, 1000);       
        setTimeout(() => {
          imageOne.src ="./public/back_trickstar.png"
          imageTwo.src ="./public/back_trickstar.png"
        }, 1000);       
      }
    }
    if (cardFinded >=8){
      console.log("9 cartes trouvée")
      title_win.style.display = "block"
    }

  }

      return(
        <>
        <div className='imageContainer'>
        {shuffledImages.map((image, index) => (
           <> 
            <div key={image.id}>
              <img src="./public/back_trickstar.png" value={index} width='200px' onClick={()=>handleClick(image.id, image.value)} id={image.id}/>
            </div>
          </>
          ))}
        </div>
        </>)
  };

function App() {
  return (
    <>
      <h1 id="title_trickstar">Retrouvez les paires de trickstar</h1>
      <h1 id="title_win">Vous avez gagné</h1>
      <Card />
      <button id="shuffle" onClick={() => window.location.reload(false)}>Mélanger</button>    </>
  );
}

export default App;
