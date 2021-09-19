  const initState = [{ id: 1, name: "tom", age: 19 }]
  export default function personReducer(preState = initState, action) {
      let { type, data } = action
      switch (type) {
          case "jiaren":
              return [data, ...preState]
          default:
              return preState
      }
  }