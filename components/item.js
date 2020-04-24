import React from 'react'
import  {View,
        StyleSheet,
        Text,
        TouchableOpacity
} from 'react-native';

class ItemTodo extends React.Component{
    render(){

      const task = this.props.task
      const id = this.props.id

        return(


              <View style={styles.itemTextContainer}> 
                <Text style={styles.textItem}>{task}</Text>
              </View>

        )
    }
}
const styles = StyleSheet.create({

    itemTextContainer: {
      flex: 5,
      marginLeft : 10
    },

    textItem: {
      color : "white",
      fontWeight : "bold"
    },


  });
export default ItemTodo;