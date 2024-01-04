import Card from 'components/Card/Card';
import { BreadCrumbs, MySelector, Tooltip } from 'ui';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import cl from './Definite.module.scss';
import { useAction, useAlert, useTypedSelector } from 'hooks';
import { LoaderCard } from 'ui/LoaderCard/LoaderCard';

interface ISpecies {
  [key: string]: string;
}

const objectSpecies: ISpecies = {
  'горячие блюда': 'горячие',
  'холодные блюда': 'холодные',
  хинкали: 'хинкали',
  супы: 'супы',
  'свежая выпечка': 'свежая выпечка',
  десерты: 'десерты',
  напитки: 'напитки',
  акции: 'акция',
  салаты: 'салаты',
};

const objectSort: ISpecies = {
  названию: 'title',
  'возрастанию цены': 'price',
  'убыванию цены': '-price',
};

const DefiniteProducts = () => {
  const [speciesType, setSpeciesType] = useState('возрастанию цены');
  const { type } = useParams<string>();

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const newType = type ? type : 'названию';
  const species = objectSpecies[newType];
  const sort = objectSort[speciesType];

  const { fetchItems } = useAction();

  const { items, loading } = useTypedSelector(({ Items }) => Items);

  const getTypeSelector = (type: string) => {
    setSpeciesType(type);
  };

  useEffect(() => {
    // fetchItems(`species.${species}=true`, `&_sort=${sort}`);
    fetchItems(`species.${species}=1`, `sortBy=${sort}`);
  }, [species, speciesType]);

  const renderItems = (): JSX.Element[] => {
    if (loading) {
      return [...Array(6)].map((index) => <LoaderCard key={index} />);
    } else {
      return items.map((item) => (
        <Card key={item.id} {...item} checkItemOfCard={(item: boolean) => checkItemOfCard(item)} />
      ));
    }
  };

  const checkItemOfCard = (item: boolean) => {
    if (item) {
      setError(true);
    } else {
      setSuccess(true);
    }

    useAlert([setSuccess, setError], 1.2);
  };

  return (
    <section>
      {<Tooltip text="Товар уже добавлен!" type="error" active={error} />}
      {
        <Tooltip
          text="Товар успешно добавлен!"
          type="success"
          active={success}
        />
      }
      <div className="container">
        <div>
          <h1 className="title">{type}</h1>
          <BreadCrumbs path={`${type}`} />
          <div className={cl.sort}>
            <span>сортировать по:</span>
            <MySelector
              items={['возрастанию цены', 'убыванию цены', 'названию']}
              getType={(type: string) => getTypeSelector(type)}
            />
          </div>
          <ul className={cl.cards}>{renderItems()}</ul>
        </div>
      </div>
    </section>
  );
};

export default DefiniteProducts;
