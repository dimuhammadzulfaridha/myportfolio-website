export const createCrudControllers = (Model) => {
  // @desc    Get all items
  // @route   GET /api/:resource
  // @access  Public
  const getItems = async (req, res) => {
    try {
      const items = await Model.find({}).sort({ createdAt: -1 });
      // To match the previous frontend structure, map _id to id
      const formattedItems = items.map(item => {
        const obj = item.toObject();
        obj.id = obj._id;
        return obj;
      });
      res.json(formattedItems);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  // @desc    Create an item
  // @route   POST /api/:resource
  // @access  Private
  const createItem = async (req, res) => {
    try {
      const newItem = await Model.create(req.body);
      const obj = newItem.toObject();
      obj.id = obj._id;
      res.status(201).json(obj);
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: error.message });
    }
  };

  // @desc    Update an item
  // @route   PUT /api/:resource/:id
  // @access  Private
  const updateItem = async (req, res) => {
    try {
      const updatedItem = await Model.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });

      if (updatedItem) {
        res.json({ message: 'Updated successfully', id: updatedItem._id });
      } else {
        res.status(404).json({ message: 'Item not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: error.message });
    }
  };

  // @desc    Delete an item
  // @route   DELETE /api/:resource/:id
  // @access  Private
  const deleteItem = async (req, res) => {
    try {
      const deletedItem = await Model.findByIdAndDelete(req.params.id);

      if (deletedItem) {
        res.json({ message: 'Deleted successfully' });
      } else {
        res.status(404).json({ message: 'Item not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  return { getItems, createItem, updateItem, deleteItem };
};
