import React from "react"
import { Text, View } from "native-base"
import { RowMap, SwipeListView } from 'react-native-swipe-list-view';

const Notifications = () => {
  const sectionA = [
    {
      id: 10,
      message: 'Message 1',
      section: 'Section A'
    },
    {
      id: 11,
      message: 'Message 2',
      section: 'Section A'
    },
    {
      id: 12,
      message: 'Message 3',
      section: 'Section A'
    }
  ]

  const sectionB = [
    {
      id: 20,
      message: 'Message 1',
      section: 'Section B'
    },
    {
      id: 21,
      message: 'Message 2',
      section: 'Section B'
    },
    {
      id: 22,
      message: 'Message 3',
      section: 'Section B'
    }
  ]

  const sectionC = [
    {
      id: 30,
      message: 'Message 1',
      section: 'Section C'
    },
    {
      id: 31,
      message: 'Message 2',
      section: 'Section C'
    },
    {
      id: 32,
      message: 'Message 3',
      section: 'Section C'
    }
  ]

  let sections =
    [
      {
        title: "SECTION A",
        data: sectionA
      },
      {
        title: "SECTION B",
        data: sectionB
      },
      {
        title: "SECTION C",
        data: sectionC
      }
    ]

  // Swiping
  const onRightAction = (rowKey: string, rowMap: RowMap<any>) => {

    // !!! This is broken. rowMap currently passes in the incorrect object when using SectionList
    // - regardless of item swiped, rowMap[rowKey] will use the the index on the last list of content
    const item = rowMap[rowKey].props.item

    console.log('onRightAction, rowKey:', rowKey);
    console.log('rowData', rowMap[rowKey])
    console.log('item', item)
  }

  const onLeftAction = (rowKey: string, rowMap: RowMap<any>) => {
    console.log('onLeftAction, rowKey:', rowKey);
  }

  const renderHiddenItem = () => {
    return (
      <></>
    )
  }

  return (
    <View>
      <SwipeListView
        style={{
          padding: 15
        }}
        useSectionList={true}
        sections={sections}
        renderItem={({ item }) =>
          <Text>{item.message}</Text>
        }
        renderHiddenItem={renderHiddenItem}
        leftActivationValue={150}
        leftActionValue={500}
        rightActivationValue={-150}
        rightActionValue={-500}
        onLeftAction={onLeftAction}
        onRightAction={onRightAction}
        renderSectionHeader={({ section }) => (
          <Text>{section.title}</Text>
        )}
        keyExtractor={(item, index) => `${index}`}
      />
    </View>
  );
}

export default Notifications
