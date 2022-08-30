import { StyleSheet, View, Text, Alert, FlatList } from 'react-native';
import { axiosRecetas } from '../axios/axios';
import { useContextState } from '../../contextState.js';
import { ActionTypes } from '../../contextState';
import React, { useState, useEffect } from 'react';
import { SearchBar } from 'react-native-elements';
import { getPlatosByNombre } from '../axios/axios.js';
import { Plato } from './Plato.jsx'


/*export function Menu() {
    return (
        <View style={styles.container}>
            <Text>Listado de menu:</Text>
            <FlatList>
     
            </FlatList>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    }
});

*/ 