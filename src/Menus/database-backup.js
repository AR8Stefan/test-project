this.database.ref('orders/').once('value').then((snapshot) => {
      // this.setState({ 
      //   orders: snapshot.val()
      // });
      console.log(snapshot.val())
        // item: item,
        // totalPrice: price,
        // quantity: quantity
    });