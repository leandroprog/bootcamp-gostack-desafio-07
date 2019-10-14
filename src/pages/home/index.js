import React, {Component} from 'react';
import {FlatList, View, Text} from 'react-native';
import {MdShoppingCart} from 'react-icons/md';
import api from '../../services/api';
// import formatPrice from '../../util/format';

import {Container} from './styles';

export default class Home extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');
    console.tron.log('leo', response);

    const data = response.data.map(product => ({
      ...product,
      // priceFormatted: formatPrice(product.price),
    }));

    // eslint-disable-next-line react/no-unused-state
    this.setState({products: data});
  }

  render() {
    const {products} = this.state;

    console.tron.log('ss', products);

    return (
      <Container>
        <FlatList
          horizontal
          data={products}
          renderItem={({item}) => (
            <View>
              <Text>{item.title}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </Container>
    );
  }
}
