import * as React from 'react';
import plug from '../../../images/misc/plug.svg';

export default function MediaImage({ image, image_webp, image_480, image_480_webp, no480, alt }) {
  return (
    <picture>
      <source srcSet={image_webp} type='image/webp' />
      <source srcSet={no480 ? plug : image_480_webp} media='(max-width: 480px)' type='image/webp' />

      <source srcSet={no480 ? plug : image_480} media='(max-width: 480px)' />
      <img  src={image}  alt={alt} style={{width: '100%', height: '100%'}}/>
    </picture>
  )
};
