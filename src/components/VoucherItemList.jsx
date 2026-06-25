import useVoucherStore from "./../stores/useVoucherStore";
import VoucherItem from "./VoucherItem";

const VoucherItemList = () => {
  const { items = [] } = useVoucherStore();

  return (
    <div>
      {items.length === 0 ? (
        <div className="p-3">
          <div className="flex flex-col items-center justify-center p-4 border product-card">
            <img
              src="/Images/Empty-amico.svg"
              alt="Empty"
              className="w-32 h-32"
            />
            <p className="mt-2 text-xs text-center text-gray-500">No items</p>
          </div>
        </div>
      ) : (
        items.map((item) => <VoucherItem item={item} key={item.id} />)
      )}
    </div>
  );
};

export default VoucherItemList;
