import React, { Component } from 'react';
import {  
    Card, 
    Button
} from 'react-native-elements';
import { PORTFOLIOS } from './shared/portfolios';

class Directory extends Component {

    constructor(props) {
        super(props);

        this.state = {
            portfolios: PORTFOLIOS
        };
    }
   
   render() {
      const directory = this.props.portfolios.map(portfolio => {
          return (
              <View>
            <Card>
  <Card.Title>{portfolio.name}</Card.Title>
  <Text>{portfolio.subtitle}</Text>
  <Card.Image source={portfolio.image}>
    <Text>
      {portfolio.description}
    </Text>
   <Button color="primary" href={portfolio.url}>{portfolio.name}</Button>
  </Card.Image>
</Card>
</View>
          );
      });


       return (
    <Container>
            {directory}          
    </Container>
       );
   }
}

export default Directory;