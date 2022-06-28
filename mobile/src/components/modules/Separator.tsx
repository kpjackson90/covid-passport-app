import React from 'react';
import { View } from 'react-native';

interface SeparatorProps {
    height?:number | string;
    width?: number | string;
}

export const Separator: React.FC<SeparatorProps> = ({ height, width }) => {
    return <View style={{ width, height }} />;
};