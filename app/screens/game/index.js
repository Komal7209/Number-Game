import React, { useState } from 'react';
import { FlatList, SafeAreaView, TouchableHighlight, View, Alert, ScrollView,Text, } from 'react-native';
import styles from './style'
import strings from 'assets/string'

const staticDATA = [
  {
    title: strings.clickMe,
  },
  {
    title: strings.clickMe,
  },
  {
    title: strings.clickMe,
  },
  {
    title: strings.clickMe,
  },
  {
    title: strings.clickMe,
  },
  {
    title: strings.clickMe,
  },
  {
    title: strings.clickMe,
  },
  {
    title: strings.clickMe,
  },
  {
    title: strings.clickMe,
  }
];


const numbers = [
  { index: 1 },
  { index: 2 },
  { index: 3 },
  { index: 4 },
  { index: 5 },
  { index: 6 },
  { index: 7 },
  { index: 8 },
  { index: 9 },
];

function getRandomNumber() {
  const minn = 1;
  const maxx = 9;
  return Math.floor(Math.random() * (maxx - minn + 1)) + minn;
}

const DATA = staticDATA.map((element) => ({
  ...element,
  id: getRandomNumber(),
}));

const Item = ({ item, onPress }) => (
  <TouchableHighlight onPress={onPress} underlayColor={''}>
    <Text style={styles.GridViewTextLayout}>{item?.title || item?.index}</Text>
  </TouchableHighlight>
);

const Game = ({onExitClick}) => {
  const [selectedId, setSelectedId] = useState(null);
  const [counter, setCounter] = useState(0);

  const warnPopup = (id) => {
    Alert.alert(` You just clicked ${id} You have just ${2 - counter} chances!`);
  };

  const lossPopup = (id) => {
    Alert.alert(strings.lose);
    setSelectedId(null);
    setCounter(0);
    onExitClick();
  };

  const winPopup = (id) => {
    Alert.alert(`Hurray!  You Won... you was clicked ${id}`);
    setSelectedId(null);
    setCounter(0);
    onExitClick();
  };

  const onPress = (id) => {
    setCounter(counter + 1);
    if (counter + 1 !== 3 && id === selectedId) {
      winPopup(id);
    } else if (counter + 1 === 3) {
      lossPopup(id);
    } else {
      warnPopup(id);
    }
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.GridViewContainer}>
        <Item item={item} onPress={() => onPress(item.id)} />
      </View>
    );
  };

  const numberRenderItems = ({ item }) => {
    return (
      <View style={styles.GridViewContainer}>
        <Item item={item} onPress={() => setSelectedId(item?.index)} />
      </View>
    );
  };

  return (
    <SafeAreaView
      style={selectedId === null ? styles.numberContainer : styles.container}>
      <ScrollView>
        {selectedId !== null && counter < 3 ? (
          <FlatList
            key={'_'}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={selectedId}
            numColumns={3}
          />
        ) : (
          <FlatList
            key={'#'}
            data={numbers}
            renderItem={numberRenderItems}
            keyExtractor={(item) => item.index}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Game;







// import React, { useState } from 'react';
// import { FlatList, SafeAreaView, TouchableHighlight, View, Alert, ScrollView,Text, } from 'react-native';
// import styles from './style'
// import strings from 'assets/string'

// const staticDATA = [
//   {
//     title: strings.clickMe,
//   },
//   {
//     title: strings.clickMe,
//   },
//   {
//     title: strings.clickMe,
//   },
//   {
//     title: strings.clickMe,
//   },
//   {
//     title: strings.clickMe,
//   },
//   {
//     title: strings.clickMe,
//   },
//   {
//     title: strings.clickMe,
//   },
//   {
//     title: strings.clickMe,
//   },
//   {
//     title: strings.clickMe,
//   }
// ];
// const numbers = [
//   { index: 1 },
//   { index: 2 },
//   { index: 3 },
//   { index: 4 },
//   { index: 5 },
//   { index: 6 },
//   { index: 7 },
//   { index: 8 },
//   { index: 9 },
// ];

// function getRandomNumber() {
//   const minn = 1;
//   const maxx = 9;
//   return Math.floor(Math.random() * (maxx - minn + 1)) + minn;
// }

// const DATA = staticDATA.map((element) => ({
//   ...element,
//   id: getRandomNumber(),
// }));

// const Item = ({ item, onPress }) => (
//   <TouchableHighlight onPress={onPress} underlayColor={''}>
//     <Text style={styles.GridViewTextLayout}>{item?.title || item?.index}</Text>
//   </TouchableHighlight>
// );

// const Game = ({ onExitClick }) => {
//   const [selectedId, setSelectedId] = useState(null);
//   const [counter, setCounter] = useState(0);

//   const warnPopup = () => {
//     Alert.alert(` You just clicked ${id} You have just ${2 - counter} chances!`);
//   };

//   const lossPopup = () => {
//     Alert.alert(strings.lose);
//     setSelectedId(null);
//     setCounter(0);
//     onExitClick();
//   };

//   const winPopup = () => {
//     Alert.alert(strings.won);
//     setSelectedId(null);
//     setCounter(0);
//     onExitClick();
//   };

//   const onPress = (id) => {
//     setCounter(counter + 1);
//     if (counter + 1 !== 3 && id === selectedId) {
//       winPopup();
//     } else if (counter + 1 === 3) {
//       lossPopup();
//     } else {
//       warnPopup();
//     }
//   };

//   const renderItem = ({ item }) => {
//     return (
//       <View style={styles.GridViewContainer}>
//         <Item item={item} onPress={() => onPress(item.id)} />
//       </View>
//     );
//   };

//   const numberRenderItems = ({ item }) => {
//     return (
//       <View style={styles.GridViewContainer}>
//         <Item item={item} onPress={() => setSelectedId(item?.index)} />
//       </View>
//     );
//   };

//   return (
//     <SafeAreaView
//       style={selectedId === null ? styles.numberContainer : styles.container}>
//       <ScrollView>
//         {selectedId !== null && counter < 3 ? (
//           <FlatList
//             key={'_'}
//             data={DATA}
//             renderItem={renderItem}
//             keyExtractor={(item) => item.id}
//             extraData={selectedId}
//             numColumns={3}
//           />
//         ) : (
//           <FlatList
//             key={'#'}
//             data={numbers}
//             renderItem={numberRenderItems}
//             keyExtractor={(item) => item.index}
//           // extraData={selectedId}
//           />
//         )}
//       </ScrollView>
//     </SafeAreaView>
//   );
// };



// export default Game;
