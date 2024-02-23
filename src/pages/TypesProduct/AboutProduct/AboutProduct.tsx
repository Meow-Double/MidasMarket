import cl from './AboutProduct.module.scss';
import CardType from './CardType/CardType';
import { imageArray } from 'assets/Array';

interface AboutProductProps {
  image: string;
  desc: string | null;
  types: Array<ITypes>;
  id: number | null;
  grams: number;
}

interface ITypes {
  title: string;
  price: number;
}

const AboutProduct: React.FC<AboutProductProps> = ({ image, desc, types, id, grams }) => {
  const renderCardType = (): JSX.Element[] => {
    return types.map((type, index) => (
      <CardType
        key={type.title}
        index={index}
        type={type}
        image={image}
        id={id ? id : -1}
        grams={grams}
      />
    ));
  };
  return (
    <section className={cl.section}>
      <img className={cl.image} src={imageArray[id - 1]} alt="images" />
      <div className={cl.info}>
        <h5 className={cl.title}>Разновидность:</h5>
        <ul>{renderCardType()}</ul>
        <h4 className={cl.title}>Описание:</h4>
        <p className={cl.desc}>{desc ? desc : 'Ошибка загрузки...'}</p>
      </div>
    </section>
  );
};

export default AboutProduct;
