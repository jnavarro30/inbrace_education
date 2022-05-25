import { Text } from '@mantine/core';

interface ItemProps {
    itemLabel: string
}

function ItemLabel ({ itemLabel }: ItemProps) {
    return (
        <Text color="white">{itemLabel}</Text>
    )
}

export default ItemLabel;