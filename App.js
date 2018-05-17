import React, { Component } from 'react';
// import { Text } from 'react-native';
// import { image } from 'react-native';
// import { Text, View }from 'react-native';
import { AppRegistry, StyleSheet, Text, View ,TextInput} from 'react-native';



export default class HelloWorld extends Component{
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }
    render(){
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'

        };
        return (
            <View style={{padding: 10}}>
                <TextInput
                style={{height: 40}}
                placeholder="Type here to translate"
                onChangeText={(text) => this.setState({text})}
                >
                </TextInput>
                <Text style={{padding: 10, fontSize: 42}}>{this.state.text.split(' ').map((word) => word && '🍉').join(' ')}</Text>
            </View>
        );
        return(
            //flex-start:与父组件的顶部对齐。flex-end:与父组件的底部对齐。center:处于父容器的中间位置。stretch:竖直上填充整个容器
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',

            }}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}></View>
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}></View>
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}></View>
            </View>
        );
        return(
            //justifyConten:
            //flex-start:伸缩项目与父容器左/上端靠齐。 flex-end:与父容器右端/下放靠齐
            //center:水平居中。 space-around:所有子组件平均分配在父容器的水平方向上，左右都留空隙。
            //space-between:第一个子组件位于父容器左端，最后一个子组件位于父容器最右端。然后平均分配在父类容器水平方向上
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}></View>
                <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}}></View>
                <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}}></View>

            </View>
        );
        return(
            //flexDirection:在组件style中可以决定布局的主轴。默认值是竖直方向（column）
            <View style={{flex: 1,flexDirection: 'row'}}>
                <View style={{width: 80, height: 80, backgroundColor: 'powderblue'}}></View>
                <View style={{width: 120, height: 120, backgroundColor: 'skyblue'}}></View>
                <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}}></View>

            </View>
        );
        return(
            //组件能够撑满剩余空间的前提是其父容器的尺寸不为零。如果父容器既没有固定的width和height，也没有设定fex，则父容器的尺寸为零。其子组件如果使用了fex，也是无法显示的。
            <View style={{flex: 1}}>
            <View style={{flex: 1, backgroundColor: 'powderblue'}}></View>
            <View style={{flex: 2, backgroundColor: 'skeyblue'}}></View>
            <View style={{flex: 3, backgroundColor: 'steelblue'}}></View>
            </View>
        );
        return (
            <View>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}></View>
                <View style={{width: 100,height: 100, backgroundColor: 'skyblue'}}></View>
                <View style={{width: 150,height: 150, backgroundColor: 'steelblue'}}></View>

            </View>
        );
        return(
            <View>
                <Text style={styles.red}>just red</Text>
                <Text style={styles.bigblue}>just bigblue</Text>
                <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
                <Text style={[styles.red, styles.bigblue]}>red, the bigblue</Text>
            </View>
        );
      

        return(
            <View>
                <Blink text='I love to blink' />
                <Blink text='Yes blinking is so great' />
                <Blink text='Why did they ever take this out of HTML' />
                <Blink text='Look at me look at me look at me' />
            </View>
        );
        return(
            <View style={{alignItems:'center'}}>
            <Greeting name='Rexxar'></Greeting>
            <Greeting name='Jaina'></Greeting>
            <Greeting name='Valeera'></Greeting>
            </View>
        );
        return(
            <Text>HelloWorld!</Text>
        );
        return (
            <image source={pic} style={{width: 193, height: 110}} />
        );
    
    }
}
const styles = StyleSheet.create({
    bigblue:{
        color:'blue',
        fontWeight:'bold',
        fontSize:30,
    },
    red:{
        color:'red',

    },

});
//注册应用（registerComponent）后才能正确渲染
//注意：只吧应用作为一个整体注册一次，而不是每个组件/模块都注册
AppRegistry.registerComponent('LotsOfStyles', () => LotsOfStyles,);
class Blink extends Component{
    constructor(props){
        super(props);
        this.state = { showText:true  };
        //每1000毫秒对showText状态做一次去发操作
        setInterval(() =>{
            this.setState(previousState =>{
                return{ showText: !previousState.showText};
            });

        },1000);
    }
    render(){
        let display = this.state.showText ? this.props.test : '';
        return(
            <Text>{display}</Text>
        );
    }

}
class Greeting extends Component{
    render(){
        return(
            <Text>Hello {this.props.name}!</Text>
        );
    }
}



