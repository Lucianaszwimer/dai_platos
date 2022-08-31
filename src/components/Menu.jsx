import { StyleSheet, View, Text, Alert, FlatList, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';


export function Menu(id) {
    return (
        <View style={styles.container}>
        <FlatList
        data={platosBuscadosState.results}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <>
            <Text>{item.title}</Text>
            <Button
              title="Detalle"
              onPress={() => navigation.navigate('Plato', {itemId:item.id})}
            />
          </>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22
    }
});
