/* eslint-disable strict */

const store = (function () {
  const foo = 'bar';
  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  const hideCheckedItems =  false;
  const searchTerm = '';
  
  const findById = function(id) {
      const foundId = store.items.find(item => item.id === id);
      console.log(foundId)
      return foundId
  }; 
  const addItem = function(name) {
      try {
        Item.validateName(name);
        this.items.push(Item.create(name));
      } catch(error) {
        console.log(`Cannot add item ${error.message}`);
      }
  }
  const findAndToggleChecked = function(id) {
      const foundItem = findById(id);
      foundItem.checked = !foundItem.checked;
  }

  const findAndUpdateName = function (id, newName) {
      try {
        console.log(this)
        Item.validateName(newName);
        const item = findById(id);
        item.name = newName;
      } catch (error) {
          console.log(`Cannot update name ${error.message}`)
      }
  }

  const findAndDelete = function (id) {
      const index = this.items.findIndex(item => item.id === id);
      this.items.splice(index, 1);
  }

  return {
    items,
    hideCheckedItems,
    searchTerm,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
  };
}() );