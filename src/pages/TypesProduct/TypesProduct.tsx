import { useEffect, useState } from "react";
import BreadCrumbs from "../../ui/Breadcrumbs/BreadCrumbs";
import AboutProduct from "./AboutProduct/AboutProduct";
import FrequentOrders from "./FrequentOrders/FrequentOrders";
import cl from "./TypesProduct.module.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ItemsTypes } from "types/Items";

const TypesProduct: React.FC = () => {
  const { id } = useParams();
  useEffect(() => window.scrollTo(0, 0), [id]);

  const [state, setState] = useState<ItemsTypes>();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/items/${id}`)
      .then((res) => setState(res.data));
  }, [id]);

  const title = state?.path ? state.path.split("/") : ["Загрузка..."];

  const newState = state ? state : {desc:"", image:"", types:[], id:null, grams:0};

  return (
    <main>
      <div className="container">
        <div>
          <h1 className="title">{title[title.length - 1]}</h1>
          <BreadCrumbs path={state?.path} />
          <AboutProduct
            desc={newState.desc}
            image={newState.image}
            types={newState.types}
            id={newState.id}
            grams={newState.grams}
          />
          <FrequentOrders orderWith={state?.orderWith ? state.orderWith : [1, 5, 7]} />
        </div>
      </div>
    </main>
  );
};

export default TypesProduct;
