export default {
  deleteTransaction(context, value) {
    context.commit("deleteTransaction", value);
  },
  addTransaction(context, packet) {
    const parts = packet.date.split("-");
    const [year, month, day] = parts.map(Number);
    packet.date = `${day.toString().padStart(2, "0")}.${month
      .toString()
      .padStart(2, "0")}.${year}`;
    context.commit("addTransaction", packet);
  },
};
