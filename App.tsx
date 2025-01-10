import React, { useState } from 'react';
import { View, Button, Text, Alert } from 'react-native';
import FingerprintUareuModule from './src/FingerprintUareuModule';  // Importa el módulo

const FingerprintScan = () => {
  const [scanData, setScanData] = useState(null);

  const handleStartScan = () => {
    FingerprintUareuModule.startScan()
      .then((data) => {
        setScanData(data);
        Alert.alert("Huella capturada", "La huella se ha capturado con éxito.");
      })
      .catch((error) => {
        Alert.alert("Error", "Error al escanear la huella.");
      });
  };

  return (
    <View>
      <Button title="Iniciar Escaneo" onPress={handleStartScan} />
      {scanData && (
        <Text>Huella capturada en Base64: {scanData.encoded}</Text>
      )}
    </View>
  );
};

export default FingerprintScan;
