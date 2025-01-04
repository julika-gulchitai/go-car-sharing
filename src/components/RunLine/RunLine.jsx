import audi from '../../Images/brands/audi.webp';
import bmw from '../../Images/brands/bmw.webp';
import daewoo from '../../Images/brands/daewoo.webp';
import mazda from '../../Images/brands/mazda.webp';
import honda from '../../Images/brands/honda.webp';
import mg from '../../Images/brands/mg.webp';
import mitsubishi from '../../Images/brands/mitsubishi.webp';
import buick from '../../Images/brands/buick.webp';
import lincoln from '../../Images/brands/lincoln.webp';
//import hummer from '../../Images/brands/hummer.webp';
import volvo from '../../Images/brands/volvo.webp';
import nissan from '../../Images/brands/nissan.webp';
import { LineWrap, StyledUl } from './RunLineStyled';

const RunLine = () => {
  const images = [
    volvo,
    lincoln,
    nissan,

    buick,
    daewoo,
    mg,
    honda,
    mitsubishi,
    audi,
    bmw,
    mazda,
  ];

  return (
    <LineWrap>
      <StyledUl>
        {images.map((img, index) => (
          <li key={index}>
            <img
              src={img}
              alt={img}
              width={(img = '100px')}
              // width={img === mazda || img === audi ? '150' : '110'}
            />
          </li>
        ))}
      </StyledUl>
    </LineWrap>
  );
};
export default RunLine;
