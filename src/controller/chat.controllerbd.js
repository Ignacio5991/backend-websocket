const chatModel = require('../dao/models/chat.model');

const addChat = async (req, res) => {
  const chat = req.body;
  try {
    let newChat = await chatModel.create(chat);
    return res.json({
      msg: 'ok',
      playload: newChat,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'error',
      playload: 'Error no se pudo guardar el chat',
    });
  }
};



module.exports = {
  addChat,
};