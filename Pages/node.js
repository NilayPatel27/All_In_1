const addNewOrder = async (req, res) => {
    // // First Creating Bill for order
    let billObject = {
      Customer_Id: req.body.Customer_Id,
    };
    // // parsing string of given Item_Id & qunatity to list of integer and then check if each item even exists
    let arrayOfIntegerId = [];
    let arrayOfIntegerQuantity = [];
    let arrayOfEachItemsPrice = [];
    var arrayOfSubTotal = [];
    var billTotalWithSubTotal = 0;
  
    // // creating array for Item_Id
    let arrayOfStringId = req.body.Item_Id.split(",");
    arrayOfStringId.map((val) => arrayOfIntegerId.push(parseInt(val)));
  
    // // creating array for Item_Quantity
    let arrayOfStringQuantity = req.body.Item_Quantity.split(",");
    arrayOfStringQuantity.map((val) =>
      arrayOfIntegerQuantity.push(parseInt(val))
    );
  
    // // comparing length of both arrays to make sure that all item have quantity
    arrayOfIntegerQuantity.length == arrayOfIntegerId.length
      ? null
      : res.status(400).send({
          message: `Error!!! Given number of items and given number of quantities doesn't match...`,
        });
  
    var isBreak = false;
  
    // // Now check if each item even exists
    const variable = await arrayOfIntegerId.forEach(async (val, i) => {
      await db.item
        .findOne({ where: { Item_Id: val } })
        .then((itemData) => {
          if (itemData == null) {
            console.log("wrong");
            arrayOfEachItemsPrice.push(`${i}-wrong`);
          } else {
            console.log(i, itemData.Item_Name);
            arrayOfEachItemsPrice.push(itemData.Item_Price);
          }
          console.log("After If-Else", arrayOfEachItemsPrice);
        })
        .catch((err) => {
          console.log(err);
        });
      console.log("After in map", arrayOfEachItemsPrice);
    });
    console.log("Line after :-------------------------", arrayOfEachItemsPrice);
  };