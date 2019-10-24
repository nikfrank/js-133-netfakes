import React from 'react';

const Show = ({ cardImage, title, episodes, description, cast })=> console.log(cardImage)||(
  <div className='Show'>
    <div className='show-hero' style={{
      backgroundImage: `url('${cardImage}')`,
      backgroundPosition: 'center',
    }} />

    <div className='show-shade'/>
    <h2 className='show-title'>{title}</h2>
    <p className='show-description'>{description}</p>
    hero (episodes, description, top cast)
    episodes listing
    full cast (link to actor page, link to character page)
  </div>
);

export default Show;
