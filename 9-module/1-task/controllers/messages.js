const Message = require('../models/Message');
const mapMessage = require('../mappers/message');

module.exports.messageList = async function messages(ctx, next) {
  const messages = await Message.find();
  ctx.body = {messages:mapMessage(messages.slice(-20))};
};
