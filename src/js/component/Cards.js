import React from 'react'
import Card from './Card'

const Cards = () => {
  let cardsInfo = [
    { title: "title 1", text: "Description comes here.", image: "https://i.etsystatic.com/9780618/r/il/931cf2/5021321103/il_794xN.5021321103_cih3.jpg" },
    { title: "Title 2", text: "Description comes here", image: "https://img.freepik.com/fotos-premium/flor-colores-fondo-negro_800563-13726.jpg" },
    { title: "Title 3", text: "Description comes here", image: "https://www.imprentaonline.net/blog/wp-content/webpc-passthru.php?src=https://www.imprentaonline.net/blog/wp-content/uploads/DALL%C2%B7E-2023-10-16-10.41.49-Illustration-depicting-a-humanoid-robot-with-half-of-its-face-transparent-revealing-intricate-circuits-and-gears-inside.-The-robot-is-holding-a-light-1.png&nocache=1" },
    { title: "Title 4", text: "Description comes here.", image: "https://images.unsplash.com/photo-1546969430-d023da44cfec?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8fHw%3D" },
  ]

  return (
    <div className="row container px-0 mx-0">
      {cardsInfo.map((card, index) => (
        <Card key={index} title={card.title} text={card.text} image={card.image} />
      ))}
    </div>
  );
};

export default Cards