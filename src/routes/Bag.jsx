import { useSelector } from "react-redux";
import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";

const Bag = ({ item }) => {
  const bagItems = useSelector((store) => store.bags);
  const items = useSelector((store) => store.items);
  const finalItems = items.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });

  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {finalItems.map((item) => (
              <BagItem item={item} />
            ))}
          </div>
          <BagSummary />
        </div>
      </main>
    </>
  );
};

export default Bag;
