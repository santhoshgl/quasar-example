import request from "@api";

export async function getTodos({ commit }) {
    console.log("Working")
  try {
    const { data } = await request.get('/todos');
    commit("setTodos", data);
  } catch (e) {
    console.log(e);
  }
}
