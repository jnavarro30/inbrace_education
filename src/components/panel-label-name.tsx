import { Text } from "@mantine/core";

interface ItemProps {
  itemLabel: string;
}

function ItemLabel({ itemLabel }: ItemProps) {
  return (
    <Text className="hover:text-black font-bold" size="xl" color="white">
      {itemLabel}
    </Text>
  );
}

export default ItemLabel;
