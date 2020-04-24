import React from 'react'
import  {View,
        StyleSheet,
        TextInput,
        Button,
        Text,
        FlatList,
        TouchableOpacity
} from 'react-native';
import ItemTodo from './item'

class Todo extends React.Component{
    
    constructor(props){
        super(props)

        this.state = {
            taskList: [],
            valueTask: ''
        }

        this.keyword = '' 
        this.updatedTask = []
        this.index = ''

    }

    _listenTask(text){
        this.keyword = text;
    }

    _addTask(){
        this.setState({
            taskList: [...this.state.taskList, this.keyword],
        })

        this.keyword = ''
        this.textInput.clear()
    }  
    
    _deleteTask(index){S
        
        this.setState({
            taskList: [this.state.taskList.splice(index)]
            })
        

    }

    render(){

        return(

            <View style={styles.container}>
                
                <View style={styles.logoContainer}>
                    <Text style={styles.logoText1}>Todo</Text>
                    <Text style={styles.logoText2}>List</Text>
                </View>

                <View style={styles.head}>

                    <View style={styles.inputField}>

                        <TextInput
                            style={styles.inputTodo}
                            onChangeText={(text) => this._listenTask(text)}
                            onSubmitEditing={()=>this._addTask()}
                            ref={input => { this.textInput = input }}
                            clearButtonMode='always'
                        />

                    </View>

                    <View style={styles.buttonAddField}>

                        <Button
                            onPress={() => this._addTask()}
                            title="Add "
                            color='#841584'
                            style={styles.buttonAdd}
                            accessibilityLabel="Add the task to your todo list"
                        />

                    </View>

                </View>
                
                <View style={styles.List}>

                <FlatList
                    data={this.state.taskList}
                    renderItem={({item, index}) => 

                        <View style={styles.itemContainer}>
                            <ItemTodo task={item} ></ItemTodo>
                        
                            <View style={styles.itemDeleteContainer}>

                                <TouchableOpacity 
                                    style={styles.buttonDelete}
                                    onPress={() => this._deleteTask(index)}

                                > 
                                <Text style={styles.textX}>X</Text>

                                </TouchableOpacity>

                             </View>

                        </View>
                    }

                    keyExtractor={(index) => index.toString()}
                />
                
                </View>
   
            </View>
        )

    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: "column",
        marginTop: 20,
        marginRight: 10
    },
    head: {
        marginTop: 10,
        flexDirection : "row",
        height: 80,
    },
    logoContainer:{
        flex:1,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center"
    },
    logoText1:{
        fontWeight: "bold",
        fontSize: 30,
        color: '#841584'
    },
    logoText2:{
        fontWeight: "bold",
        fontSize: 30,
        color: 'black'
    },
    List:{
        flex: 7,
        marginTop: 1
    },
    inputField:{
        flex: 3,
        height : 35,
    },
    buttonAddField:{
        flex:1,   
    },
    inputTodo:{
        backgroundColor: 'white',
        borderColor: '#841584',
        borderWidth: 3,
        height: 35,
        marginRight: 10,
        marginLeft: 10,
        borderRadius: 15,
        fontWeight: 'bold',
        
    },
    buttonAdd:{
       
    },
    itemContainer: {

        backgroundColor: '#841584',
        height : 30,
        borderRadius: 5,
        marginLeft : 10,
        marginBottom: 10,
        flexDirection : 'row'
      },
      itemDeleteContainer: {
        flex: 1,
        height: 20,
        width : 20
  
      },
      buttonDelete: {
        height : 20,
        width : 20,
        backgroundColor: 'white',
        marginTop:5,
        width : 50,
        alignItems : 'center',
        borderRadius : 5
      },
      textX:{
        fontWeight: 'bold',
  
        color : '#841584',
  
      }

  });

export default Todo;