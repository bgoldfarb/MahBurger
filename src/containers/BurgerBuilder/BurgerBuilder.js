import React, {Component} from 'react'
import Aux from '../../hoc/Aux'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component {
    constructor(props){
        super(props)
        this.state = {
            ingredients: {
                salad: 1,
                bacon: 1,
                cheese: 1,
                meat: 1
            }
        }
    }

    render() {
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls />
            </Aux>
        )
    }
}

export default BurgerBuilder