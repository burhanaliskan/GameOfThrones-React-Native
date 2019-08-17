import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View ,TouchableOpacity,Image} from "react-native";

class Images extends Component {
  render() {
    let pic1 = 1;
    if (this.props.burhan == 583) {
      pic1 = {
       uri:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/jon-snow-game-of-thrones-season-8-episode-1-sec-1555086224.jpg?crop=1.00xw:0.668xh;0,0.0369xh&resize=480:*',
      };
    } 
    else if (this.props.burhan==339){
      pic1={
        uri:'https://static.tumblr.com/d13c90dcad0e34aa793af64c54b71189/xbidq6d/ITIo91igb/tumblr_static_3l1o9c1i1hycg0wks88gwk8wk.jpg',
      };
    }
    else if (this.props.burhan==957){
      pic1={
        uri:'https://vignette.wikia.nocookie.net/gameofthrones/images/6/63/QueenSansa.PNG/revision/latest?cb=20190520085809&resize=480',
      };
    }
    else if (this.props.burhan==148){
      pic1={
        uri:'https://pixel.nymag.com/imgs/daily/vulture/2017/07/18/18-arya-stark.w700.h700.jpg',
      };
    }
    else if (this.props.burhan==1303){
      pic1={
        uri:'https://www.telegraph.co.uk/content/dam/fashion/2017/06/19/TELEMMGLPICT000131421802_trans_NvBQzQNjv4BqkUE_BTgBOQu3VWKvpDGX9fr7sARQy7EgBjwPUzvqL_M.jpeg?imwidth=450',
      };
    }
    else if (this.props.burhan==216){
      pic1={
        uri:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/brienne-game-of-thrones-season-8-1551813207.jpg?crop=1.00xw:0.891xh;0,0.0753xh&resize=480:*',
      };
    }
    else if (this.props.burhan==1052){
      pic1={
        uri:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/helen-sloan-hbo-1557943959.jpg?crop=0.668xw:1.00xh;0.0544xw,0&resize=480:*',
      };
    }
    else if (this.props.burhan==529){
      pic1={
        uri:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/jaime-game-of-thrones-1551987282.jpg?crop=0.501xw:1.00xh;0.0915xw,0&resize=480:*',
      };
    }
    else if (this.props.burhan==238){
      pic1={
        uri:'https://vignette.wikia.nocookie.net/gameofthrones/images/2/26/Cersei_Lannister_s6.jpg/revision/latest/scale-to-width-down/310?cb=20160906112851&path-prefix=tr',
      };
    }
    else if (this.props.burhan==1560){
      pic1={
        uri:'https://assets3.thrillist.com/v1/image/2693586/size/tmg-article_default_mobile.jpg',
      };
    }
    else if (this.props.burhan==743){
      pic1={
        uri:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/melisandre-game-of-thrones-season-8-1556549772.jpg?crop=1.00xw:0.667xh;0,0.0272xh&resize=480:*',
      };
    }
    else if (this.props.burhan==1022){
      pic1={
        uri:'https:// https://i1.wp.com/metro.co.uk/wp-content/uploads/2016/05/ad_208022275.jpg?quality=90&strip=all&zoom=1&resize=480%2C362&ssl=1',
      };
    }
    else if (this.props.burhan==150){
      pic1={
        uri:'https://vignette.wikia.nocookie.net/gameofthrones/images/a/a8/Game_of_thrones_6x5_yara_promo.jpg/revision/latest?cb=20160808022737',
      };
    }
    else if (this.props.burhan==2069){
      pic1={
        uri:'https://upload.wikimedia.org/wikipedia/en/0/01/Varys-Conleth_Hill.jpg',
      };
    }
    else if (this.props.burhan==1319){
      pic1={
        uri:'https://media.fromthegrapevine.com/assets/images/2018/8/davos-thonres.jpg.839x0_q71_crop-scale.jpg',
      };
    }
    else if (this.props.burhan==827){
      pic1={
        uri:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/screen-shot-2019-04-22-at-12-07-04-pm-1555949485.png?crop=0.777xw:1.00xh;0,0&resize=480:*',
      };
    }
    else if (this.props.burhan==823){
      pic1={
        uri:'https://vignette.wikia.nocookie.net/gameofthrones/images/9/90/Petyr_s6.png/revision/latest?cb=20160828101144&path-prefix=tr',
      };
    }
    else if (this.props.burhan==954){
      pic1={
        uri:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/john-bradley-1558391237.png?crop=0.502xw:1.00xh;0.0170xw,0&resize=480:*',
      };
    }
    else if (this.props.burhan==955){
      pic1={
        uri:'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-game-of-thrones-rory-mccann.jpg',
      };
    }
 
    return (
      <View style={{ alignItems: 'center' ,borderWidth:1}}>
        <Image source={pic1} style={{ width: 150, height: 150 }} />
      </View>
    );
  }
}

export default class character extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    };
  }

  componentWillMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const {params} = this.props.navigation.state;
    const response = await fetch("https://www.anapioficeandfire.com/api/characters?page="+params.id+"&pageSize=1");
    const json = await response.json();
    this.setState({ data: json });
  };

  back=() => {
      this.props.navigation.navigate('MainPage')
  }

  render() {
    const {params} = this.props.navigation.state;

    return (
      <View style={styles.chac}>
         <View style={styles.toolbar}>
                    <TouchableOpacity  onPress={() => this.back()}>
                    <Image source={require('../img/back.png')}
                    style={{ width: 40, height: 40}}>
                   </Image>
                    </TouchableOpacity>
                    </View>
                    <View>
                    <View style={styles.header}>
                    <Text style={styles.header2}>
                            {`#${params.id}`}
                        </Text>
                      <View style={{}}><Images   burhan={params.id} /></View>
                    
                    </View>
                      </View>
  
        <FlatList
          data={this.state.data}
          keyExtractor={(x, i) => i.toString()}
          renderItem={({ item }) =>
          <View>
            <Text style={styles.title}>{'Name:'} </Text>
            <Text style={styles.text}> {item.name}</Text>
            <Text style={styles.title}>{'Gender:'} </Text>
            <Text style={styles.text}> {item.gender}</Text>
            <Text style={styles.title}>{'Culture:'} </Text>
            <Text style={styles.text}> {item.culture}</Text>
            <Text style={styles.title}>{'Born:'} </Text>
            <Text style={styles.text}> {item.born}</Text>
            <Text style={styles.title}>{'Titles:'} </Text>
            <Text style={styles.text}> {item.titles[0]}</Text>
            <Text style={styles.title}>{'Aliases:'} </Text>
            <Text style={styles.text}> {item.aliases[0]}</Text>
            <Text style={styles.text}> {item.aliases[1]}</Text>
            <Text style={styles.text}> {item.aliases[2]}</Text>
            <Text style={styles.text}> {item.aliases[3]}</Text>
            <Text style={styles.text}> {item.aliases[4]}</Text>
            <Text style={styles.text}> {item.aliases[5]}</Text>
            <Text style={styles.text}> {item.aliases[6]}</Text>
            <Text style={styles.text}> {item.aliases[7]}</Text>
            <Text style={styles.title}>{'TV Series:'} </Text>
            <Text style={styles.text}> {item.tvSeries[0]}</Text>
            <Text style={styles.text}> {item.tvSeries[1]}</Text>
            <Text style={styles.text}> {item.tvSeries[2]}</Text>
            <Text style={styles.text}> {item.tvSeries[3]}</Text>
            <Text style={styles.text}> {item.tvSeries[4]}</Text>
            <Text style={styles.text}> {item.tvSeries[5]}</Text>
            <Text style={styles.title}>{'Played By:'} </Text>
            <Text style={styles.text}> {item.playedBy[0]}</Text>
            </View>
            }
        />
        </View>
    );
  }
}

const styles = StyleSheet.create({
   chac: {
    flex: 1,
    opacity: 0.9,
    padding: 40,
},
toolbar: {
  marginLeft:-30,
  marginTop:-5,
  flexDirection: 'row',
},
header: {
  alignSelf: 'stretch',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: 20,
  marginTop: 20,
},
header2: {
  fontSize: 30,
  fontWeight: 'bold'
},
title: {
  fontSize: 18,
  fontWeight: 'bold',
  color:'#222222'
},
text: {
  fontSize: 16,
  paddingBottom: 20,
  paddingTop: 5,
  color:'#A9A9A9'
},
});



